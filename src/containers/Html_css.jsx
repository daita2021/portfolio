import { Article } from "../components/Article";
import "./WorksPages.css";

// images
import TestImg3 from "../images/test.jpg";

export const HtmlCss = () => {
  return (
    <>
      <h3 className="worksTitle" style={{ background: "#c42" }}>
        HTML&CSS
      </h3>
      <div className="commonBox worksFlex">
        <Article title="test" imgUrl={TestImg3} siteUrl="https://github.com/daita2021"></Article>
        <Article title="test" imgUrl={TestImg3}></Article>
        <Article title="test2" imgUrl={TestImg3}></Article>
        <Article title="test3" imgUrl={TestImg3}></Article>
      </div>
    </>
  );
};
