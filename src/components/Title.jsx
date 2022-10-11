import "../assets/sass/components/_title.scss";

function Title({ classList, spanItem, main, mainClass }) {
  return (
    <div className={`title ${mainClass}`}>
      <h3 className={classList}>
        <span className="title__span"> {spanItem}</span> {` `}
        {main}
      </h3>
    </div>
  );
}

export default Title;
