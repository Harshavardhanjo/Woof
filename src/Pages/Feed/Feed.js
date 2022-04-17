import React from 'react'
import { FeedBox1, FeedBox2, FeedBox3,FeedBox4,FeedContainer, FeedPost, Message, MessageBox, MessageContainer, MessageName, MessagePic, MessageTime, ProfileBio, ProfileBox, ProfileData, ProfileName, ProfilePic,SearchFilter, SearchBar, SearchBox, SearchFilterOption, Post, PostTopContainer, PostPicPet, PostDetails, PostUser, PostLocation, PostTime, PostPicUser, PostDetailsSub, PostPhoto, PostPhotoContainer, PostPhotoSelect, PostphotoScroll, PostBottomContainer, PostButton, PostAboutContainer } from './FeedElements'
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
                <SearchBox>
                    <SearchFilter>
                        <SearchFilterOption>Account</SearchFilterOption>
                        <SearchFilterOption>Post</SearchFilterOption>
                        <SearchFilterOption>Message</SearchFilterOption>
                    </SearchFilter>
                    <SearchBar type="text" placeholder="Search" />
                </SearchBox>
                <FeedPost>
                    <Post>
                        <PostTopContainer>
                            <PostPicPet src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <PostDetails>
                                <PostUser>Harshavardhan Jothikumar</PostUser>
                                <PostDetailsSub>
                                    <PostLocation>Bangalore</PostLocation>
                                    <PostTime>2 hours ago</PostTime>
                                </PostDetailsSub>
                            </PostDetails>
                            <PostPicUser src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        </PostTopContainer>

                        <PostPhotoContainer>
                            <PostPhoto src="https://images.unsplash.com/photo-1650097882240-91b0418d580b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
                            <PostPhotoSelect>
                                <PostphotoScroll>Prev</PostphotoScroll>
                                <PostphotoScroll>Next</PostphotoScroll>
                            </PostPhotoSelect>
                        </PostPhotoContainer>

                        <PostAboutContainer>
                            askdja kskdjas kldjklasjdklasj kldj aklsdj laksjdklas jlkdas jlkajskldjaskl djaksl djakldasdj kalsdklasd klaj kasjd laskdjlkasjdklas ls lkasj klasjd lkasd klasd klasjdklasj
                        </PostAboutContainer>
                        <PostBottomContainer>
                            <PostButton>Like</PostButton>
                            <PostButton>Comment</PostButton>
                            <PostButton>Share</PostButton>
                        </PostBottomContainer>
                    </Post>
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

            <FeedBox4>

            </FeedBox4>
        </FeedContainer>
    </div>
  )
}

export default Feed