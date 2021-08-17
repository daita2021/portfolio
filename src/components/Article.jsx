export const Article = (props) => {
  const title = props.title;
  const imgUrl = props.imgUrl;
  const siteUrl = props.siteUrl;

  return (
    <>
      <a href={siteUrl} target="_blank" rel="noopener noreferrer">
        <div className="articleBox">
          <h3 className="articleTitle">{title}</h3>
          <p>
            <img src={imgUrl} alt="" width={280} height={240} />
          </p>
        </div>
      </a>
    </>
  );
};
