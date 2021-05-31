import React,{useState} from 'react'
import {PostCard,PostAbout,PostBot,PostImg,PostProfile,PostProfileDetails,PostProfileImg,PostTop, PostProfileReport, PostLike,PostComment,PostShare} from './PostsElements'
import {MdReport} from 'react-icons/md'
import {FaRegCommentDots} from 'react-icons/fa'
import {RiVipDiamondFill} from 'react-icons/ri'
import {RiVipDiamondLine} from 'react-icons/ri'
import {IoMdShareAlt} from 'react-icons/io'

import './Posts.css'




const Posts = () => {

    const [like,setLike] = useState(false)

    const Like = (e) =>
    {
        setLike(!like);
    }
    return (
        <div>
            <PostCard>
                <PostTop>
                    <PostProfile>
                        <PostProfileImg src = 'https://cdn.pixabay.com/photo/2015/09/02/12/39/woman-918583__340.jpg'/>
                        <PostProfileDetails>
                            Padikuranda
                        </PostProfileDetails>

                        
                    </PostProfile>
                    <PostProfileReport>
                        <MdReport/>
                    </PostProfileReport>
                </PostTop>

                <PostImg src = 'https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737__340.png'/>
                <PostBot>
                    <PostLike onClick = {(e) => Like(e)}>
                        {like ? <RiVipDiamondFill className = 'icons icons-color'/> : <RiVipDiamondLine className = 'icons'/>}
                    </PostLike>

                    <PostComment onClick = {(e) => Like(e)}>
                        <FaRegCommentDots className = 'icons'/>
                    </PostComment>

                    <PostShare onClick = {(e) => Like(e)}>
                        <IoMdShareAlt className = 'icons'/>
                    </PostShare>
                </PostBot>
            </PostCard>
        </div>
    )
}

export default Posts
