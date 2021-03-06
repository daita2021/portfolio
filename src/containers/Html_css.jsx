import { Article } from "../components/Article";
import "./WorksPages.css";
import React, { useState, useEffect } from "react";

// images
// import TestImg from "../images/test.jpg";
import Art from "../images/art.jpg";
import Cafe from "../images/cafe.jpg";
import Fsl from "../images/fsl.jpg";
import Mall from "../images/mall.jpg";
import Waimoku from "../images/waimoku.jpg";

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
          <div className="loading">
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
          </div>
          <p>loading...</p>
        </div>
      ) : (
        <></>
      )}
      <div className="commonBox worksFlex">
        <Article title="programming club" imgUrl={Waimoku} siteUrl="https://pro-waimokukai.netlify.app" description="架空のプログラミングサークル部員募集ページです。jQuery使用。"></Article>
        <Article title="Ceramic Art" imgUrl={Art} siteUrl="http://portfoliotam.starfree.jp/0604-ceramic_art/" description="cssのみでハンバーガーメニューを実装したシンプルなレイアウトのサイトです。"></Article>
        <Article title="Cafe site" imgUrl={Cafe} siteUrl="http://portfoliotam.starfree.jp/0618-singlepage/" description="個人経営のカフェがコンセプト。jQueryを使用しスライダーやスムーススクロール等を実装しました。"></Article>
        <Article title="Fullscreen&Grid site" imgUrl={Fsl} siteUrl="https://focused-shaw-4e2174.netlify.app/" description="フルスクリーンレイアウトとCSS Gridを練習した際のサイトです。"></Article>
        <Article title="Mall Development" imgUrl={Mall} siteUrl="http://portfoliotam.starfree.jp/0628-pionner-mall/" description="アコーディオンメニューなどを使用した架空のモール開発事業サイトです。"></Article>
      </div>
    </>
  );
};
