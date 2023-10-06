import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { Link, useLocation } from "react-router-dom";
import styles from "./Card.module.css";

const Card = (props) => {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const { pathname } = useLocation();

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav);
  };

  return (
    <div className={`${styles.card} ${isFav ? styles.favorite : ""}`}>
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
      {pathname !== "/favorites" && (
        <button onClick={() => onClose(id)} className={styles["card-close-button"]}>
          X
        </button>
      )}
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img src={image} alt="" className={styles["card-image"]} /> 
    </div>
  );
};

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

const mapDispatchToProps = {
  addFav,
  removeFav,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
