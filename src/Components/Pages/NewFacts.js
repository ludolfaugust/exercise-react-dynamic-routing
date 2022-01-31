import React from "react";
import { useParams } from "react-router-dom";
import "./NewFacts.css";
function NewFacts({ catFacts }) {
  const { id } = useParams();
  console.log(catFacts);

  return (
    <div>
      <h1 className="cat-fact-container__header">Newest CatFacts</h1>
      {catFacts
        .filter((catFact) => catFact._id === id)
        .map((catFact) => {
          return (
            <div>
              <h2 className="cat-fact-container__text">
                {catFact.text.toUpperCase()}
              </h2>
              <p>
                copyright by {catFact._id.toLowerCase()} created at{" "}
                {catFact.createdAt}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default NewFacts;
