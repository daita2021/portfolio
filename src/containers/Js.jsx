import { Article } from "../components/Article";
import "./WorksPages.css";

// images
import TestImg from "../images/icon_html.svg";
import TestImg2 from "../images/icon_css.svg";

export const Js = () => {
  return (
    <>
      <h3 className="worksTitle" style={{ background: "#ee3", color: "#333" }}>
        JavaScript
      </h3>
      <div className="commonBox worksFlex">
        <Article title="test" imgUrl={TestImg} siteUrl="https://github.com/daita2021"></Article>
        <Article title="test" imgUrl={TestImg}></Article>
        <Article title="test2" imgUrl={TestImg2}></Article>
        <Article title="test3" imgUrl={TestImg2}></Article>
      </div>
    </>
  );
};
