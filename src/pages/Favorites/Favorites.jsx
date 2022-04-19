import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState();
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));

    // I initially wanted to fetch data and then filter it by the id's I have saved in my localStorage.
    // However, after some thought I realized in a production/realworld environment, I would want my backend to handle this.
    // I mocked it best as I could by sending in all of the saved "favorite recipe" id's through the query provided by JSON-Server.

    const queryString = favorites.reduce((queryString, id) => {
      if (!queryString) {
        return (queryString += `id=${id}`);
      } else return (queryString += `&id=${id}`);
    }, "");

    fetch(`http://localhost:3000/recipes/?${queryString}`)
      .then((response) => response.json())
      .then((data) => setFavorites(data));
  }, []);

  if (!favorites) {
    return <h1>Sorry, it looks like you haven't favorited any recipes</h1>;
  } else {
    return (
      <>
        {favorites.map((favorite) => (
          <ul>
            <li>
              <Link to={`/details/${favorite.id}`}>{favorite.name}</Link>
            </li>
          </ul>
        ))}
      </>
    );
  }
};

export default Favorites;
