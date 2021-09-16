import { Article } from "../components/Article";
import "./WorksPages.css";
import React, { useState, useEffect } from "react";
// import CircularProgress from "@material-ui/core/CircularProgress";
// images
import TestImg from "../images/test.jpg";
import Rails01 from "../images/rails.jpg";

export const Rails = () => {
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
  return (
    <>
      <h3 className="worksTitle" style={{ background: "#c00" }}>
        Ruby on Rails
      </h3>
      {isloading ? (
        <div className="commonBox loadingBox">
          <div className="loading">
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
          </div>
          {/* <CircularProgress /> */}
          <p>loading...</p>
        </div>
      ) : (
        <></>
      )}
      <div className="commonBox worksFlex">
        <Article title="Rails App" imgUrl={Rails01} siteUrl="https://benefique-mandarine-19660.herokuapp.com/" description="Rails Tutorialに沿って作っている簡易版twitterアプリです。ログイン機能の実装が終わり現在11章まで進んでいます"></Article>
        <Article title="test" imgUrl={TestImg}></Article>
        <Article title="test2" imgUrl={TestImg}></Article>
        <Article title="test3" imgUrl={TestImg}></Article>
      </div>
    </>
  );
};
