import React, { useEffect, useState } from "react";
import { removeFavorite, saveFavorite } from "../../util/favorite";
import { useParams } from "react-router-dom";

// Name.
// Creation date and time.
// Creator’s name.
// Cooking time (in minutes).
// List of ingredients.
// List of instructions.
// A favorite button.

const DetailsPage = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites"))
  );
  const [fetchedDetails, setFetchedDetails] = useState();
  const { id } = useParams();

  const favoriteHandler = (id) => {
    if (favorites.includes(id)) {
      setFavorites(removeFavorite(id));
    } else {
      setFavorites(saveFavorite(id));
    }
  };

  useEffect(() => {
    if (!fetchedDetails) {
      fetch(`http://localhost:3000/recipes/${id}`)
        .then((response) => response.json())
        .then((data) => setFetchedDetails(data));
    }
  }, [id, fetchedDetails]);

  return (
    fetchedDetails && (
      <>
        <h1>{fetchedDetails.name}</h1>
        <p>
          Created at:{" "}
          {`${new Date(
            fetchedDetails.creationDate
          ).toLocaleDateString()} ${new Date(
            fetchedDetails.creationDate
          ).toLocaleTimeString()}`}
        </p>
        <p>Created by: {fetchedDetails.creator}</p>
        <div>
          <p>Ingredients:</p>
          <ul>
            {fetchedDetails.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>Steps:</p>
          <ol>
            {fetchedDetails.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <button onClick={() => favoriteHandler(fetchedDetails.id)}>
          {favorites.includes(fetchedDetails.id) ? "Unfavorite" : "Favorite"}
        </button>
      </>
    )
  );
};

export default DetailsPage;
