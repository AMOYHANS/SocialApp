import "./post.css"
import {MoreVert} from "@mui/icons-material"
import { Users } from "../../dummyData"
import { useState } from "react"

export default function Post({post}) {
    // const {date} = {...post}
    const {date, comment, like, desc, photo} = {...post}
    const postUser = Users.find((user) => user.id === post.userId)
    const [currentLike, setCurrentLike] = useState(like)
    const [isLiked, setIsLiked] = useState(false)
    const likeHandler = () => {
        setCurrentLike(!isLiked ? currentLike + 1 : currentLike - 1)
        setIsLiked(!isLiked)
    }
  return (
      <div className="post">
          <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={postUser.profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername"> 
                        {
                            postUser.username
                        }
                    </span>
                    <span className="postDate">{ date }</span>
                </div>
                <div className="postTopRight"></div>
                  <MoreVert />
            </div>  
            <div className="posCenter">
                <span className="postText">{desc ? desc : ""}</span>
                <img src={photo} alt="/assets/post/1.jpeg" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like.png" alt="" className="likeIcon" onClick={likeHandler} />
                    <img src="/assets/heart.png" alt="" className="likeIcon" onClick={likeHandler} />
                    <span className="postLikeCounter">{currentLike} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{comment} comments</span>
                </div>
            </div>
          </div>
      </div>
  )
}
