import React from 'react'
import {MessageHeader,Message, MessageBox, MessageContainer, MessageName, MessagePic, MessageTime, SearchBar} from './MessagesElements'

const Messages = () => {
  return (
    <div>
                <SearchBar/>
                <MessageContainer>
                    <MessagePic src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    <MessageBox>
                        <MessageName>Harsha</MessageName>
                        <Message>awjdk aosdk laskda sdlka sldla; kdl;as kl;</Message>
                    </MessageBox>
                    <MessageTime>11:45PM</MessageTime>
        </MessageContainer>
    </div>
  )
}

export default Messages