import React, { useState } from "react";
import DaliyInfoCard from "../Components/DaliyInfoCard";
import Header from "../Components/Header";
import RoominfoCard from "../Components/RoominfoCard";
import style from "../style/home.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X2Gap } from "react-icons/bs";
import data from "../data/roomCard.json";
import BottomSheet from "../Components/BottomSheet";
import newRoomData from "../data/newRoom.json";

function Home() {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [cardId, setCardId] = useState(1);

  return (
    <>
      {loaderVisibility ? (
        <div
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="/images/loader.gif" />
        </div>
      ) : (
        ""
      )}
      <Header />
      <div className={style.home_container}>
        <DaliyInfoCard />
        <RoominfoCard />
      </div>
      <div className={style.action_btn}>
        <button onClick={() => setSheetVisible(true)}>
          <AiOutlinePlus className="mr-2" />
          Start a room
        </button>
        <button>
          <BsGrid3X2Gap />
        </button>
      </div>

      <BottomSheet
        sheetTitle="start room"
        setSheetVisible={(items) => setSheetVisible(items)}
        sheetVisible={sheetVisible}
        cardDetail={data.find((items) => items.id == cardId)}
        setItemsVisible={(items) => setItemsVisible(items)}
        setSheetCreateRoom={(items) => {
          setLoaderVisibility(true);
          setTimeout(() => {
            setSheetCreateRoom(items);
            setLoaderVisibility(false);
          }, 1000);
        }}
      />
      <BottomSheet
        sheetTitle="new room"
        setSheetVisible={(item) => setSheetCreateRoom(item)}
        sheetVisible={sheetCreateRoom}
        cardDetail={newRoomData}
        setItemsVisible={(item) => setItemsVisible(item)}
      />
    </>
  );
}

export default Home;
