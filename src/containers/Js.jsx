import { Article } from "../components/Article";
import "./WorksPages.css";
import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import CircularProgress from "@material-ui/core/CircularProgress";

// images
import TestImg3 from "../images/test.jpg";

export const Js = () => {
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <h3 className="worksTitle" style={{ background: "#ee3", color: "#111" }}>
        JavaScript
      </h3>
      {isloading ? (
        <div className="commonBox loadingBox">
          <CircularProgress />
          {/* <Loader type="ThreeDots" color="#007" height={60} width={60} loading={isloading} timeout={3000} /> */}
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
