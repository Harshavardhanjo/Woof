import React from 'react'
import { FeedBox1, FeedBox2, FeedBox3, FeedBox4, FeedContainer, FeedPost, Message, MessageBox, MessageContainer, MessageName, MessagePic, MessageTime, ProfileBio, ProfileBox, ProfileData, ProfileName, ProfilePic, SearchBar } from './FeedElements'
import { useNavigate } from 'react-router-dom'

const Feed = () => {

    const navigate = useNavigate()

    const routeChange = (path) => {
        navigate(path)
    }
  return (
    <div>
        <FeedContainer>
            <FeedBox1 onClick={e => routeChange('/Profile')}>
                <ProfilePic src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <ProfileName>Harshavardhan Jothikumar</ProfileName>
                <ProfileBio>"ajsh iaosjd asj da aks dkaj ka k ajsk"</ProfileBio>
            </FeedBox1>
            <FeedBox2>
                <SearchBar/>
                <FeedPost>

                </FeedPost>
            </FeedBox2>

            <FeedBox3>
                <SearchBar/>
                <MessageContainer>
                    <MessagePic src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    <MessageBox>
                        <MessageName>Harsha</MessageName>
                        <Message>awjdk aosdk laskda sdlka sldla; kdl;as kl;</Message>
                    </MessageBox>
                    <MessageTime>11:45PM</MessageTime>
                </MessageContainer>
            </FeedBox3>
        </FeedContainer>
    </div>
  )
}

export default Feed