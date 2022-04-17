import React from 'react'
import { FeedBox1, FeedBox2, FeedBox3,FeedBox4,FeedContainer, FeedPost, ProfileBio, ProfileBox, ProfileData, ProfileName, ProfilePic,SearchFilter, SearchBar, SearchBox, SearchFilterOption, Post, PostTopContainer, PostPicPet, PostDetails, PostUser, PostLocation, PostTime, PostPicUser, PostDetailsSub, PostPhoto, PostPhotoContainer, PostPhotoSelect, PostphotoScroll, PostBottomContainer, PostButton, PostAboutContainer, MessageHeader, SideBarHeader, SideBarHeaderContainer, SideBarBackButton, SideBarItemsContainer, SideBarItems } from './FeedElements'
import { useNavigate } from 'react-router-dom'
import Messages from '../../Components/SideBar/Messages/Messages'

const Feed = () => {

    const navigate = useNavigate()
    const [sidebar, setSidebar] = React.useState('messages')

    const routeChange = (path) => {
        navigate(path)
    }

    const setSideBar = (e,sideBar) => {
        e.preventDefault()
        setSidebar(sideBar)
    }
  return (
    <div>
        <FeedContainer>
            <FeedBox1>
                <SearchBox>
                    <SearchBar placeholder="Search" />
                </SearchBox>
            </FeedBox1>
            <FeedBox2>
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
                                <PostButton>Prev</PostButton>
                                <PostButton>Next</PostButton>
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
                {sidebar === 'none' ? <SideBarItemsContainer>
                    <SideBarItems onClick={(e) => setSideBar(e,'messages')}>Messages</SideBarItems>
                    <SideBarItems>Notifications</SideBarItems>
                    <SideBarItems>Bookmarks</SideBarItems>
                    <SideBarItems>Lists</SideBarItems>
                    <SideBarItems>Profile</SideBarItems>
                    <SideBarItems>More</SideBarItems>
                </SideBarItemsContainer> : null}
                {sidebar === 'messages' ? <div><SideBarHeaderContainer>
                    <SideBarBackButton>
                        <img src="https://img.icons8.com/ios/50/000000/left-squared.png" onClick={(e) => setSideBar(e,'none')} />
                    </SideBarBackButton>
                    <SideBarHeader>{sidebar}</SideBarHeader>
                </SideBarHeaderContainer>
                <Messages/></div> : null}
            </FeedBox3>

            <FeedBox4 onClick={e => routeChange('/Profile')}>
                <ProfilePic src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <ProfileName>Harshavardhan Jothikumar</ProfileName>
                <ProfileBio>"ajsh iaosjd asj da aks dkaj ka k ajsk"</ProfileBio>
            </FeedBox4>
        </FeedContainer>
    </div>
  )
}

export default Feed