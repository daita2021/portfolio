import "./About.css";

export const About = () => {
  return (
    <>
      <h2>ABOUT</h2>
      <div className="commonBox">
        <h3 className="aboutH3">Profile</h3>
        <dl>
          <dt>NICKNAME</dt>
          <dd>DAITA</dd>
          <dt>HOMETOWN</dt>
          <dd>青森県</dd>
          <dt>HOBBY</dt>
          <dd>料理、映画鑑賞、テニス</dd>
          <dt>INTEREST</dt>
          <dd>React.js, JavaScript, Ruby, Rails, Docker, AWS</dd>
        </dl>
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
