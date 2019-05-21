import React, { useState, useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../services/api'
import hubConnectionBuilder from '../../services/hubConnectionBuilder'

const HUB_URL = `${process.env.REACT_APP_API_URL}/chat`

const LogBookContainer = props => {
  const { id } = props.match.params
  const { children, history } = props
  const hub = useRef(null)
  const [logBook, setLogBook] = useState(null)
  const [messages, setMessages] = useState([])
  const [members, setMembers] = useState([])

  function onBack() {
    history.push('/logbooks')
  }

  useEffect(() => {
    async function fetchLogBook() {
      const response = await api.get(`/api/logbooks/${id}`)
      setLogBook(response)
    }

    async function fetchMessages() {
      const response = await api.get(`/api/logbooks/${id}/messages`)
      const sorted = response.sort((a, b) => (a.sent > b.sent ? 1 : -1))
      setMessages(sorted)
    }

    fetchLogBook()
    fetchMessages()

    hubConnectionBuilder(HUB_URL)
      .then(con => {
        hub.current = con

        hub.current.on('userConnected', (username, title, email) => {
          console.log('userConnected', username, title, email)
          setMembers(prevMembers => {
            const nextMembers = [...prevMembers]
            const user = nextMembers.find(m => m.email === email)
            user.online = true
            return nextMembers
          })
        })

        hub.current.on('userDisconnected', (username, title, email) => {
          console.log('userDisconnected', username, title, email)
          setMembers(prevMembers => {
            const nextMembers = [...prevMembers]
            const user = nextMembers.find(m => m.email === email)
            user.online = false
            return nextMembers
          })
        })

        hub.current.on('received', (username, title, message) => {
          setMessages(prevMessages => [
            ...prevMessages,
            {
              sender: { username: username, title: title },
              sent: new Date().toISOString(),
              message: message
            }
          ])
        })
      })
      .catch(err => {
        console.error(err)
        hub.current = null
      })

    return () => {
      if (hub.current) {
        hub.current.stop()
        hub.current = null
      }
    }
  }, [id])

  useEffect(() => {
    if (!logBook || !hub.current) {
      return
    }

    async function fetchMembers() {
      const connected = await hub.current.invoke('GetConnectedUsers')
      const _members = logBook.members.map(m => ({
        ...m,
        online: connected.some(c => c.id === m.userId)
      }))
      setMembers(_members)
    }

    fetchMembers()
  }, [logBook])

  async function sendMessage(message) {
    if (!hub.current) {
      return
    }
    hub.current.invoke('Send', id, message)
  }

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      logBook,
      members,
      messages,
      sendMessage,
      onBack
    })
  )
}

export default withRouter(LogBookContainer)
