export const fetchAll = () => {
  return fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then((data) => data.recipes);
};
