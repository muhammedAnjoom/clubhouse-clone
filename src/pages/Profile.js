import React from "react";
import style from '../style/profile.module.css';
import exploreStyle from '../style/explore.module.css';
import { Link } from "react-router-dom";
import { BsAt, BsUpload,BsPlus } from "react-icons/bs";
import { AiOutlineSetting,AiOutlineTwitter,AiOutlineInstagram } from "react-icons/ai";

function Profile() {
  return (
    <>
      <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
          <div className={`${exploreStyle.head}  mb-0 text-right`}>
            <Link to="/home">
              <img
                src="/images/arrow.png"
                alt=""
                className={exploreStyle.arrow_icon}
              />
            </Link>
            <div className={style.actionBtn}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <img src="/images/myimage.png" alt="" className={style.profile_image} />
        <h4>Muhammed Anjoom</h4>
        <p>@_anjoom_anju_</p>
        <div className={style.follow}>
          <p>
          <span>0</span> followers
          </p>
          <p>
            <span>51</span> following
          </p>
        </div>
        <button>Add a bio</button>
        <div className="mb-4">
          <button className="mb-0">
          <AiOutlineTwitter/> Add Twitter
          </button>
          <button className="mb-0">
          <AiOutlineInstagram/> Add Instagram
          </button>
        </div>
        <div className={style.nominated}>
          <img src="/images/user-img.jpg" alt="" />
          <div>
            <p>Joined 14-july-2020</p>
            <p>Nominated by <span>Ajmal</span></p>
          </div>
        </div>
        <p>Member of</p>
        <button className={style.addMemberBtn}>
          <BsPlus/>
        </button>
      </div>
    </>
  );
}

export default Profile;
