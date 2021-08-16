import React, { Fragment } from "react";

export const Home = () => {
  return (
    <Fragment>
      <h2>HOME</h2>
      <p className="keyVisual txt1">
        Thank you for
        <br />
        visiting my portfolio!
      </p>
      <div className="keyVisual"></div>
      <p className="keyVisual txt2">
        ルファベットを使う国々には Lorem ipsum という伝統的なダミーテキストがある。
        <br />
        古いラテン語の文章を元に、意味消失したそれっぽい文章に仕上げ
      </p>
    </Fragment>
  );
};
