import React, { useState } from "react";
import style from "../../style/roomDetail.module.css";
import { AiOutlineFile, AiOutlinePlus } from "react-icons/ai";
import { BsMicMuteFill, BsMicFill } from "react-icons/bs";

function NewRoom(props) {
  const [micMuteVisible, setmicMuteVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(true);
  const card = props.cardDetail;
  return (
    <>
      <div className={style.roomDetailContainer}>
        <div className={style.head}>
          <div className="d-flex align-items-center">
            <a
              href="#"
              onClick={() => {
                props.setSheetVisible(false);
              }}
            >
              <img src="/images/arrow.png" className={style.arrow_icon} />
            </a>
            <span>Hallway</span>
          </div>
          <div>
            <AiOutlineFile />
            <img
              className={style.profile_img}
              src="/images/myimage.png"
              alt=""
            />
          </div>
        </div>
        <div className={style.roomDetailcard}>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ padding: "0.5em 1em" }}
          >
            {card.members.map((item) => (
              <div className={style.membersContanier}>
                {micMuteVisible ? (
                  <div className={style.audio_icon}>
                    <BsMicMuteFill />
                  </div>
                ) : (
                  ""
                )}
                <img src="/images/myimage.png" alt="" />
                <p>
                  <span>*</span>
                  {item.first_name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.foote}>
          <button
            onClick={() => {
              props.setSheetVisible(false);
            }}
          >
            <img src="/images/hand-peace.png" alt="" />
            Leave Quietl
          </button>
          <div>
            <button>
              <AiOutlinePlus/>
            </button>
            <button>
              <img src="/images/stopHandIcon.png" alt="" />
            </button>
            <button 
            onClick={()=>{
              setmicMuteVisible(!micMuteVisible)
            }}>
              {micMuteVisible ? <BsMicMuteFill/> : <BsMicFill/>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewRoom;
