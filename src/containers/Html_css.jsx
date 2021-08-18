import { Article } from "../components/Article";
import "./Works.css";

// images
import TestImg from "../images/icon_html.svg";
import TestImg2 from "../images/icon_css.svg";

export const HtmlCss = () => {
  return (
    <>
      <h3 className="worksTitle">HTML/CSS</h3>
      <div className="commonBox flex">
        <Article title="test" imgUrl={TestImg} siteUrl="https://github.com/daita2021"></Article>
        <Article title="test" imgUrl={TestImg}></Article>
        <Article title="test2" imgUrl={TestImg2}></Article>
        <Article title="test3" imgUrl={TestImg2}></Article>
      </div>
    </>
  );
};
