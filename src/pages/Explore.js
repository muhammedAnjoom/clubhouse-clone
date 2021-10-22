import React from "react";
import style from "../style/explore.module.css";
import { DownOutlined, FireOutlined } from "@ant-design/icons";
import data from "../data/Explore.json";
import { Input} from 'antd'
import SubHeader from "../Components/SubHeader";

function Explore() {
  const { people, conversation } = data;
  return (
    <div className={style.exploreContainer}>
      <div className={style.header}>
        <SubHeader pageTitle="EXPLORE "/>
        <Input style={{
          backgroundColor:"#f4f4f4",
          borderRadius:"0.8em",
          padding:"0.3em 1em",
          border:"none",
          boxShadow:"none"
        }}
        size="large"
        placeholder="Find People and clubs"
        style={{borderRadius:"10px",boxShadow:"0px 2px 3px #cccccc"}}
        prefix={<img src='/images/search.png' width="15px"/>} ></Input>
      </div>
      <h6>PEOPLE TO FOLLOW</h6>
      <div className={style.peopleContainer}>
        {people.map((item) => (
          <div>
            <div className="d-flex align-items-center">
              <img src="/images/myimage.png" alt="" />
              <div style={{ marginLeft: "19px" }}>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
        ))}
        <button className={style.showMore}>
          show more people <DownOutlined />
        </button>
      </div>
      <h6>FIND CONVERSATIONS ABOUT..</h6>
      <div className="row mx-0">
        {conversation.map((item) => (
          <div className="col-6 px-2 mb-3">
            <div className={style.conversationCard}>
              <h6>
                <FireOutlined />
                {item.title}
              </h6>
              <p>
                {item.discription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
