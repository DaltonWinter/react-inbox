import React from 'react'

import Message from '../components/Message'

const Messages = ({messages, selectedMessage, starredMessage}) => {
  return (
    <div>
      { messages.slice(0).reverse().map( (message, i) => <Message key={ i } starredMessage= { starredMessage } message={ message } selectedMessage={ selectedMessage } />) }
    </div>
  )
}

export default Messages
