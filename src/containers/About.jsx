import "./About.css";

export const About = () => {
  return (
    <>
      <h2>ABOUT</h2>
      <div className="commonBox">a</div>
      <div className="commonBox formWrapper">
        <h3 className="contact">Contact</h3>
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
