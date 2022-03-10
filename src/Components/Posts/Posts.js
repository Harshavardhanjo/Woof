import React from 'react'
import './Posts.css'
import { PostBox,PostImg, PostsBottomBox, PostsCommentButton, PostsLikeButton, PostsShareButton,} from './PostsElements'

const Posts = () => {
  return (
    <div className='PostsContainer'>
        <PostBox>
            <PostImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            <PostsBottomBox>
                <PostsLikeButton src = 'https://img.icons8.com/color/48/000000/like.png'/>
                <PostsCommentButton src = 'https://img.icons8.com/color/48/000000/speech-bubble.png'/>
                <PostsShareButton src = 'https://img.icons8.com/color/48/000000/share.png'/>
            </PostsBottomBox>
        </PostBox>

        <PostBox>
            <PostImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            <PostsBottomBox>
                <PostsLikeButton src = 'https://img.icons8.com/color/48/000000/like.png'/>
                <PostsCommentButton src = 'https://img.icons8.com/color/48/000000/speech-bubble.png'/>
                <PostsShareButton src = 'https://img.icons8.com/color/48/000000/share.png'/>
            </PostsBottomBox>
        </PostBox>

        <PostBox>
            <PostImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            <PostsBottomBox>
                <PostsLikeButton src = 'https://img.icons8.com/color/48/000000/like.png'/>
                <PostsCommentButton src = 'https://img.icons8.com/color/48/000000/speech-bubble.png'/>
                <PostsShareButton src = 'https://img.icons8.com/color/48/000000/share.png'/>
            </PostsBottomBox>
        </PostBox>

        <PostBox>
            <PostImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            <PostsBottomBox>
                <PostsLikeButton src = 'https://img.icons8.com/color/48/000000/like.png'/>
                <PostsCommentButton src = 'https://img.icons8.com/color/48/000000/speech-bubble.png'/>
                <PostsShareButton src = 'https://img.icons8.com/color/48/000000/share.png'/>
            </PostsBottomBox>
        </PostBox>

        <PostBox>
            <PostImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            <PostsBottomBox>
                <PostsLikeButton src = 'https://img.icons8.com/color/48/000000/like.png'/>
                <PostsCommentButton src = 'https://img.icons8.com/color/48/000000/speech-bubble.png'/>
                <PostsShareButton src = 'https://img.icons8.com/color/48/000000/share.png'/>
            </PostsBottomBox>
        </PostBox>


    </div>
  )
}

export default Posts