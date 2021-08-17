import { Article } from "../components/Article";
import "./Works.css";

// images
import TestImg from "../images/logo_js.png";
import TestImg2 from "../images/logo_htmlcss.png";

export const HtmlCss = () => {
  return (
    <>
      <h3>HTML/CSS</h3>
      <div className="commonBox flex">
        <Article title="test" imgUrl={TestImg} siteUrl="#"></Article>
        <Article title="test2" imgUrl={TestImg2}></Article>
        <Article title="test2" imgUrl={TestImg2}></Article>
      </div>
    </>
  );
};
