const AppLightBox = ({ id, imgtitle, imglink, sortedImages, setIndex, setOpen }) => {
  return (
    <>
      <article className="portfolio__item" key={id}>
        <div className="portfolio__item-content">
          <p>{imgtitle}</p>
        </div>
        <div className="portfolio__item-image">
        <a href={imglink} onClick={(e) => {
            e.preventDefault();
            const realIndex = sortedImages.findIndex(image => image.id === id);
            setIndex(realIndex);
            setOpen(true);
          }}>
            <img src={imglink} alt={`img-${id}`} />
          </a>
        </div>
      </article>
    </>
  );
};

export default AppLightBox;