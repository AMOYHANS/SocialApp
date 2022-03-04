import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {
const HomeRightbar = () => (
  <>
    <div className="birthdayContainer">
              <img src="/assets/gift.png" alt="" className="birthdayImg" />
              <span className="birthdayText">
                <b>Bob </b> and <b>3 other friends</b> have a birthday today
              </span>
            </div>
            <img src="/assets/ad.png" alt="" className="rightbarAd" />
            <h1 className="rightbarTitle">Online Friends</h1>
            <ul className="rightbarFriendList">
              {Users.map((u) => (<Online key={u.id} user={u} />))}
            </ul>
  </>
)

const ProfileRightbar = () => (
  <>
    <h4 className="rightbarTitle">UserInfo</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">SuZhou</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">Sichuan</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue"></span>
      </div>
    </div>
    <h4 className="rightbarTitle">Friend</h4> 
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Perter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Perter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Perter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Perter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Perter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Perter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Perter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Perter</span>
      </div>
    </div>
  </>
)

  return (
      <div className="rightbar">
          <div className="rightbarWrapper">
            {profile ? <ProfileRightbar/> : <HomeRightbar/>}
          </div>
      </div>
  )
}
