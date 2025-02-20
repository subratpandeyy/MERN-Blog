import ProfileImage from '../assets/a1.jpg'
import { Link } from 'react-router-dom'
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react';
import { FaCircleCheck } from "react-icons/fa6";

export default function UserProfile() {

  const [profileImage, setProfileImage] = useState('');

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [currentPassword, setcurrentPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  const [confirmNewPassword, setconfirmNewPassword] = useState()

  const changeInputHandle = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className='profile'>
      <div className="container form-container profile-container">
        <Link to={'/myposts/id'}> My Posts </Link>
        <div className="profile-details">
          <div className="profile-wrapper">
            <div className="profile-image">
              <img src={ProfileImage} alt=""></img>
            </div>

            {/* Profile Form */}
            <form className="profile-image-form">
              <input type="file" name="profile-image" id="profile-image" accept='png,jpg,jpeg' onChange={e => setProfileImage(e.target.files)}/>
              {/* <label htmlFor='profile-image'>
              <FaRegEdit />
              </label> */}
            </form>
            <button className="profile-image-button">
            <FaCircleCheck />
            </button>
          </div>

          <h2>Subrat Pandey</h2>
        
        {/* profile data */}
        <form className="form profile-data-form">
          <p className="form-message">This is the invalid message</p>

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={changeInputHandle}
          />

          <input
            type="password"
            placeholder="Current Password"
            name="currentPassword"
            value={currentPassword}
            onChange={e => setcurrentPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="New Password"
            name="newPassword"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm New Password"
            name="confirmNewPassword"
            value={confirmNewPassword}
            onChange={e => setconfirmNewPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-primary">
            Update Profile
          </button>
        </form>
        </div>
      </div>
    </section>
  )
}