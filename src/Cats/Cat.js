import React from "react";

const styles = {
  img: {
    height: "10em"
  }
};

const Cat = ({ cat, isFavCat, addToFavs, removeFromFavs }) => {
  const { id, url } = cat;
  return (
    <div>
      id: {id}
      <div>
        <img style={styles.img} alt="" src={url} />
      </div>
      {isFavCat ? (
        <button onClick={removeFromFavs}> remove from favorites </button>
      ) : (
        <button onClick={addToFavs}> add to favorites </button>
      )}
    </div>
  );
};

export default Cat;
