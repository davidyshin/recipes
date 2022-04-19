export const saveFavorite = (id) => {
  const favoritesCopy = [...JSON.parse(localStorage.getItem("favorites"))];
  if (!localStorage.getItem("favorites")) {
    const newFavorite = [id];
    localStorage.setItem("favorites", JSON.stringify(newFavorite));
    return newFavorite;
  } else {
    favoritesCopy.push(id);
    localStorage.setItem("favorites", JSON.stringify(favoritesCopy));
    return favoritesCopy;
  }
};

export const removeFavorite = (id) => {
  const favoritesCopy = [...JSON.parse(localStorage.getItem("favorites"))];
  const indexToRemove = favoritesCopy.indexOf(id);
  favoritesCopy.splice(indexToRemove, 1);
  localStorage.setItem("favorites", JSON.stringify(favoritesCopy));
  return favoritesCopy;
};
