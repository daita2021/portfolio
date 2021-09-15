import { Article } from "../components/Article";
import "./WorksPages.css";
import React, { useState, useEffect } from "react";
// import CircularProgress from "@material-ui/core/CircularProgress";

// images
import Weather from "../images/weather.jpg";
import NumberGuees from "../images/number.jpg";
import Clock from "../images/clock.jpg";
import TaskList from "../images/tasklist.jpg";
import Calc from "../images/calc.jpg";

export const Js = () => {
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
  return (
    <>
      <h3 className="worksTitle" style={{ background: "#ee3", color: "#111" }}>
        JavaScript
      </h3>
      {isloading ? (
        <div className="commonBox loadingBox">
          <div class="loading">
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
          </div>
          {/* <CircularProgress /> */}
          <p>loading...</p>
        </div>
      ) : (
        <></>
      )}
      <div className="commonBox worksFlex">
        <Article title="ToDoリスト" imgUrl={TaskList} siteUrl="https://focused-wozniak-b77c3d.netlify.app/" description="シンプルなtodoリストです。データ保持はローカルストレージを使用しています。"></Article>
        <Article title="電卓" imgUrl={Calc} siteUrl="https://competent-davinci-487e57.netlify.app/" description="四則演算のみ可能な電卓アプリです"></Article>
        <Article title="天気 API" imgUrl={Weather} siteUrl="http://portfoliotam.starfree.jp/weather-api/" description="Weather APIを利用した天気情報表示ツールです"></Article>
        <Article title="デジタル時計" imgUrl={Clock} siteUrl="https://jolly-carson-b80976.netlify.app/" description="デジタル表示の時計です"></Article>
        <Article title="数字当てゲーム" imgUrl={NumberGuees} siteUrl="http://portfoliotam.starfree.jp/number-guessing/number-guessing-game.html" description="1~100までの数字を10ターン以内に当てるゲームです"></Article>
      </div>
    </>
  );
};
