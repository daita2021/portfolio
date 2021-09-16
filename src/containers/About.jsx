import "./About.css";

export const About = () => {
  return (
    <>
      <h2 className="pageTitle">ABOUT</h2>
      <div className="commonBox">
        <h3 className="aboutH3">Profile</h3>
        <dl>
          <dt>NICKNAME</dt>
          <dd>DAITA</dd>
          <dt>HOMETOWN</dt>
          <dd>青森県弘前市</dd>
          <dt>HOBBY</dt>
          <dd>料理、映画鑑賞、テニス</dd>
          <dt>INTEREST</dt>
          <dd>React.js, JavaScript, Ruby, Rails, Docker, AWS</dd>
        </dl>
        <p className="aboutMe">
          現在ITエンジニアへの転職を目指して4月から池袋の職業訓練校でWebデザインとプログラミングの基礎を学んでいます。
          <br />
          訓練校では主にHTML,CSS,Jquery,Photoshopなどを中心にフロントに必要な基礎を学び、自宅ではReact,Railsなどのフレームワークを中心に学習しています。
          <br />
          難しい内容も多く思うように学習が進まない時もありますが、コツコツと楽しみながら必要な技術をキャッチアップし、様々な機能を実装できるエンジニアになりたいと思っています。
        </p>
      </div>
      <div className="commonBox formWrapper">
        <h3 className="aboutH3">Contact</h3>
        <div className="formBox">
          <form name="contact" method="POST">
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" required placeholder="Name" />

            <input type="email" name="email" required placeholder="E-mail" />

            <textarea name="message" placeholder="Comment" required></textarea>

            <p className="formBtn">
              <input type="reset" value="RESET" />
              <input type="submit" value="SUBMIT" />
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
