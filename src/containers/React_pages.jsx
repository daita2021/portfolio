import { Article } from "../components/Article";
import "./WorksPages.css";
import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

// images
import TestImg3 from "../images/test.jpg";
import Ox from "../images/ox.jpg";
import Dog from "../images/dog.jpg";

export const ReactPage = () => {
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
        <Article title="犬画像ギャラリー" imgUrl={Dog} description="Zenn React Tutorialに沿って作った犬画像ギャラリーです"></Article>
        <Article title="test2" imgUrl={TestImg3}></Article>
        <Article title="test3" imgUrl={TestImg3}></Article>
      </div>
    </>
  );
};
