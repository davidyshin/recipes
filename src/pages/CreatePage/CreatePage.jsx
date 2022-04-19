import React, { useState } from "react";

const CreatePage = () => {
  const initialFormData = Object.freeze({
    name: "",
    creator: "",
    cookingTime: "",
    ingredients: "",
    steps: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const parsedIngredients = formData.ingredients
      .split(",")
      .map((ingredient) => ingredient.trim());
    const parsedSteps = formData.steps.split(",").map((step) => step.trim());

    const body = {
      ...formData,
      ingredients: parsedIngredients,
      steps: parsedSteps,
      creationDate: new Date().toString(),
    };

    await fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Recipe name</label>
      <input
        onChange={handleChange}
        type="text"
        id="name"
        name="name"
        required
      />

      <label htmlFor="creator">Creator</label>
      <input
        onChange={handleChange}
        type="text"
        id="creator"
        name="creator"
        required
      />

      <label htmlFor="cookingTime">Cooking Time (In Minutes)</label>
      <input
        onChange={handleChange}
        type="text"
        id="cookingTime"
        name="cookingTime"
        required
      />

      <label htmlFor="ingredients">Ingredients</label>
      <textarea
        id="ingredients"
        name="ingredients"
        rows="5"
        cols="60"
        onChange={handleChange}
        placeholder="Enter, recipe, separated, by, commas"
      />
      <textarea
        id="steps"
        name="steps"
        rows="5"
        cols="60"
        onChange={handleChange}
        placeholder="Enter, steps, separated, by, commas"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatePage;
