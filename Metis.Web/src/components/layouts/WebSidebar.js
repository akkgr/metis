import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Layout as AntdLayout,
  Menu as AntdMenu,
  Icon as AntdIcon,
  Avatar as AntdAvatar
} from 'antd'
import { useAuth } from '../../contexts/AuthProvider'
import logo from '../../assets/logo.png'
import './sidebar.less'

const VERSION = process.env.REACT_APP_VERSION

const items = [
  {
    path: '/map',
    icon: 'global',
    caption: 'Χάρτης',
    roles: ['Viewer', 'Manager', 'Administrator']
  },
  {
    path: '/logbooks',
    icon: 'notification',
    caption: 'Συμβάντα',
    roles: ['Viewer', 'Manager', 'Administrator']
  },
  {
    path: '/admin/users',
    icon: 'team',
    caption: 'Διαχείριση Χρηστών',
    roles: ['Administrator']
  },
  {
    path: '/admin/sites',
    icon: 'file-protect',
    caption: 'Διαχείριση Ιστοσελίδων',
    roles: ['Manager', 'Administrator']
  }
]

const Sidebar = () => {
  const auth = useAuth()
  const session = auth.getSession()
  const role = session && session.role
  return (
    <AntdLayout.Sider collapsed={true}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '20px 0px 60px 0px'
          }}>
          <AntdAvatar size={48} src={logo} alt="metis" />
          <span className="sidebar-version">{VERSION}</span>
        </div>

        <AntdMenu selectable={false} mode="vertical" className="sidebar-menu">
          {items
            .filter(x => x.roles.some(r => r === role))
            .map(item => (
              <AntdMenu.Item key={item.path} className="sidebar-menu-item">
                <NavLink to={item.path}>
                  <AntdIcon type={item.icon} />
                  <span>{item.caption}</span>
                </NavLink>
              </AntdMenu.Item>
            ))}
        </AntdMenu>
        <div style={{ flexGrow: '1' }} />
        <AntdMenu
          selectable={false}
          mode="vertical"
          style={{ backgroundColor: 'unset' }}
          className="sidebar-menu">
          <AntdMenu.Item
            key="/logout"
            onClick={auth.signOut}
            style={{ justifySelf: 'flex-end' }}
            className="sidebar-logout">
            <span>
              <AntdIcon type="logout" />
              <span>Αποσύνδεση</span>
            </span>
          </AntdMenu.Item>
        </AntdMenu>
      </div>
    </AntdLayout.Sider>
  )
}

export default Sidebar
