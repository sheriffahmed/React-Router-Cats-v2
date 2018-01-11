import React from "react";
import { Link } from "react-router-dom";

const styles = {
  img: {
    width: "10em"
  },
  ul: {
    listStyleType: "none"
  }
};

const CatList = ({ cats }) => {
  return (
    <ul style={styles.ul}>
      {cats.map(cat => (
        <li key={cat.id}>
          <Link to={`/cats/one/${cat.id}`}>
            <img style={styles.img} alt="" src={cat.url} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CatList;
