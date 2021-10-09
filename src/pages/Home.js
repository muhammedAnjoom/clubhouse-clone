import React,{useState} from "react";
import DaliyInfoCard from "../Components/DaliyInfoCard";
import Header from "../Components/Header";
import RoominfoCard from "../Components/RoominfoCard";
import style from "../style/home.module.css";
import {AiOutlinePlus} from 'react-icons/ai'
import {BsGrid3X2Gap} from 'react-icons/bs'
import data from '../data/roomCard.json'
import BottomSheet from "../Components/BottomSheet";


function Home() {
  const [itemsVisible, setItemsVisible] = useState(true)
  const [sheetVisible, setSheetVisible] = useState(false)
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false)
  const [loaderVisibility, setLoaderVisibility] = useState(false)
  const [cardId, setCardId] = useState(1)

  return (
    <>
      <Header />
      <div className={style.home_container}>
        <DaliyInfoCard />
        <RoominfoCard />
      </div>
      <div className={style.action_btn}>
        <button onClick={() => setSheetVisible(true)}>
          <AiOutlinePlus className="mr-2"/>
          Start a room
        </button>
        <button >
          <BsGrid3X2Gap/>
        </button>
      </div>
      
    <BottomSheet  sheetTitle='start room'
    setSheetVisible={(items) => setSheetVisible(items)} 
    sheetVisible={sheetVisible}
    cardDetail={data.find((items) => items.id == cardId)}
    setItemsVisible = {(items) => setItemsVisible(items)}
    setSheetCreateRoom = {(items) =>{
      setLoaderVisibility(true);
      setTimeout(() =>{
        setSheetCreateRoom(items)
        setLoaderVisibility(false)
      }, 1000)
    }} />
    
    </>
  );
}

export default Home;
