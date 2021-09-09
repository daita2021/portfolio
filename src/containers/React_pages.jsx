import { Article } from "../components/Article";
import "./WorksPages.css";
import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

// images
import TestImg from "../images/test.jpg";
import Ox from "../images/ox.jpg";
import Dog from "../images/dog.jpg";
import Portfolio from "../images/portfolio.jpg";

export const ReactPage = () => {
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
  return (
    <>
      <h3 className="worksTitle" style={{ background: "#1df", color: "#000" }}>
        React
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
        <Article title="OXゲーム" imgUrl={Ox} siteUrl="http://portfoliotam.starfree.jp/react-tutorial/" description="公式のReact Tutorialに沿って作ったOXゲームです"></Article>
        <Article title="犬画像ギャラリー" imgUrl={Dog} siteUrl="http://portfoliotam.starfree.jp/react-practice/" description="Zenn React Tutorialに沿って作った犬画像ギャラリーです"></Article>
        <Article title="Portfolio" imgUrl={Portfolio} description="現在表示しているサイトです"></Article>
        <Article title="test3" imgUrl={TestImg}></Article>
      </div>
    </>
  );
};
