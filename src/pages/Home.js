import React from "react";
import DaliyInfoCard from "../Components/DaliyInfoCard";
import Header from "../Components/Header";
import RoominfoCard from "../Components/RoominfoCard";
import style from "../style/home.module.css";

function Home() {
  return (
    <>
      <Header />
      <div className={style.home_container}>
        <DaliyInfoCard />
        <RoominfoCard />
      </div>
    </>
  );
}

export default Home;
