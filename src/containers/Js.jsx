import { Article } from "../components/Article";
import "./WorksPages.css";
import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

// images
import TestImg from "../images/test.jpg";
import Weather from "../images/weather.jpg";
import NumberGuees from "../images/number.jpg";

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
          <CircularProgress />
          <p>loading...</p>
        </div>
      ) : (
        <></>
      )}
      <div className="commonBox worksFlex">
        <Article title="天気 API" imgUrl={Weather} siteUrl="http://portfoliotam.starfree.jp/weather-api/" description="Weather APIを利用した天気情報表示ツールです"></Article>
        <Article title="数字当てゲーム" imgUrl={NumberGuees} siteUrl="http://portfoliotam.starfree.jp/number-guessing/number-guessing-game.html" description="1~100までの数字を10ターン以内に当てるゲームです"></Article>
        <Article title="test2" imgUrl={TestImg}></Article>
        <Article title="test3" imgUrl={TestImg}></Article>
      </div>
    </>
  );
};
