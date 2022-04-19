import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { saveFavorite, removeFavorite } from "../../util/favorite";

const Home = () => {
  const [fetchedData, setFetchedData] = useState(undefined);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites"))
  );

  const favoriteHandler = (id) => {
    if (favorites.includes(id)) {
      setFavorites(removeFavorite(id));
    } else {
      setFavorites(saveFavorite(id));
    }
  };

  useEffect(() => {
    if (!fetchedData) {
      fetch("http://localhost:3000/recipes")
        .then((response) => response.json())
        .then((data) => setFetchedData(data));
    }
  }, [favorites, fetchedData]);

  return fetchedData ? (
    <>
      <h1>Recipes</h1>

      <table>
        <thead>
          <tr>
            <th>Recipe Name</th>
            <th>Creation Year</th>
            <th>Creator</th>
            <th>Cooking Time</th>
          </tr>
        </thead>
        <tbody>
          {fetchedData.map((recipe) => (
            <tr key={recipe.id}>
              <td>
                <Link to={`/details/${recipe.id}`}>{recipe.name}</Link>
              </td>
              <td>{new Date(recipe.creationDate).getFullYear() || "N/A"}</td>
              <td>{recipe.creator}</td>
              <td>{(recipe.cookingTime / 60).toFixed(1)} hrs</td>
              <td>
                <button
                  onClick={() => {
                    favoriteHandler(recipe.id);
                  }}
                >
                  {favorites.includes(recipe.id) ? "Unfavorite" : "Favorite"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  ) : (
    <>Loading</>
  );
};

export default Home;
