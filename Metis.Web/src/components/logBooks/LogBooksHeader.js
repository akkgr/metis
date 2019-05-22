import React from 'react'
import { PageHeader as AntdPageHeader, Button as AntdButton } from 'antd'
import './logBooks.less'

const STRINGS = {
  TITLE: 'Συμβάντα',
  SUBTITLE: 'Σύντομη ανασκόπηση συμβάντων ταξινομημένα κατα ημερομηνία',
  REFRESH: 'Ανανέωση',
  NEW: 'Νέο Συμβάν'
}

const LogBooksHeader = ({ onCreate }) => {
  return (
    <AntdPageHeader
      title={STRINGS.TITLE}
      subTitle={STRINGS.SUBTITLE}
      extra={
        <AntdButton key="1" type="ghost" size="small" onClick={onCreate}>
          {STRINGS.NEW}
        </AntdButton>
      }
      className="logbooks-header"
    />
  )
}

export default LogBooksHeader
