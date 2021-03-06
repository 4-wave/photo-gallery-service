import React from "react";
import styles from "./styles/previewCarousel.css";

function PreviewCarouselItem(props) {
  const { photo, onClick, id, selectedIndex } = props;
  console.log(photo);
  const background = {
    backgroundImage: `url(${photo})`
  };
  const selected = selectedIndex === id ? styles.buttonSelected : styles.button;

  return (
    <div>
      <button
        type="submit"
        className={`${id} ${selected}`}
        style={background}
        onClick={onClick}
        aria-label="Choose Photo"
      />
    </div>
  );
}

export default PreviewCarouselItem;
