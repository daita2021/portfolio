import { Article } from "../components/Article";
import "./WorksPages.css";
import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

// images
// import TestImg from "../images/test.jpg";
import Art from "../images/art.jpg";
import Cafe from "../images/cafe.jpg";
import Fsl from "../images/fsl.jpg";
import Mall from "../images/mall.jpg";

export const HtmlCss = () => {
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      <h3 className="worksTitle" style={{ background: "#c42" }}>
        HTML&CSS
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
        <Article title="Ceramic Art" imgUrl={Art} siteUrl="http://portfoliotam.starfree.jp/0604-ceramic_art/" description="cssのみでハンバーガーメニューを実装したシンプルなレイアウトのサイトです。"></Article>
        <Article title="Cafe site" imgUrl={Cafe} siteUrl="http://portfoliotam.starfree.jp/0618-singlepage/" description="個人経営のカフェがコンセプト。Jqueryを使用しスライダーやスムーススクロール等を実装しました。"></Article>
        <Article title="Fullscreen&Grid site" imgUrl={Fsl} siteUrl="https://focused-shaw-4e2174.netlify.app/" description="フルスクリーンレイアウトとCSS Gridを練習した際のサイトです"></Article>
        <Article title="Mall Development" imgUrl={Mall} siteUrl="http://portfoliotam.starfree.jp/0628-pionner-mall/" description="アコーディオンメニューなどを使用した架空のモール開発事業サイトです"></Article>
      </div>
    </>
  );
};
