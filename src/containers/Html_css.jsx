import { Article } from "../components/Article";
import "./WorksPages.css";
import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

// images
import TestImg3 from "../images/test.jpg";

export const HtmlCss = () => {
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
        <Article title="test" imgUrl={TestImg3} siteUrl="https://github.com/daita2021"></Article>
        <Article title="test" imgUrl={TestImg3}></Article>
        <Article title="test2" imgUrl={TestImg3}></Article>
        <Article title="test3" imgUrl={TestImg3}></Article>
      </div>
    </>
  );
};
