import Illust from "../images/illust01.jpg";

export const Home = () => {
  return (
    <>
      <h2 className="pageTitle">HOME</h2>
      <div className="snapBox">
        <div className="commonBox txt1Box snapItem">
          <p className="txt1 fadeIn">
            Thank you for
            <br />
            visiting my portfolio!
          </p>
        </div>
        {/* アニメ用要素 */}
        <div className="animeArea">
          <span className="scrollDown"></span>
          <div className="squares">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/*  */}
        <div className="commonBox snapItem grid">
          <div className="gItem1">
            <img src={Illust} alt="ホーム画面イラスト"></img>
          </div>
          <div className="txt2 gItem2">
            <p>このサイトは転職活動用のポートフォリオとして制作したものです。</p>
            <p>開発環境</p>
            <ul>
              <li>言語: HTML, CSS, JavaScript</li>
              <li>ライブラリ: React(create-react-app), Material-UI等</li>
              <li>インフラ: Netlify</li>
              <li>その他: Git, VScode, Prettier, Photoshop</li>
            </ul>
            <p>使用素材サイト</p>
            <ul>
              <li>O-DAN(オーダン), Hatchful, unDraw</li>
            </ul>
          </div>
        </div>
        <div className="commonBox snapItem txt3">
          <h3>サイト案内</h3>
          <p>
            下部メニューバーから作品ページ、アバウトページ(プロフィール、コンタクトフォーム)、GitHub(外部リンク)に進むことができます。
            <br />
            作品ページではサイドバーから作品カテゴリの変更が可能で、
            <br />
            サイドバー最下部のボタンは現在通っている職業訓練校で制作したサイトへのリンクとなっています。
          </p>
        </div>
      </div>
    </>
  );
};
