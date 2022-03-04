import "./online.css"

export default function Online({user}) {
    const {profilePicture, username} = {...user}
  return (
      <div>
          <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img src={profilePicture} alt="" className="rightbarProfileImg" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">{username}</span>
          </li>
      </div>
  )
}
