import "./About.css";

export const About = () => {
  return (
    <>
      <h2>ABOUT</h2>
      <div className="commonBox">a</div>
      <div className="commonBox formWrapper">
        <h3 className="contact">Contact</h3>
        <div className="formBox">
          <form name="contact" action="/" method="post" netlify="true">
            <input type="text" name="name" required autoComplete="name" placeholder="Name" />

            <input type="email" name="email" required autoComplete="email" placeholder="E-mail" />

            <textarea name="message" placeholder="Comment" required></textarea>

            <p className="formBtn">
              <input type="submit" value="SUBMIT" />
              <input type="reset" value="RESET" />
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
