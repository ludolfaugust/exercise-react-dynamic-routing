import React from "react";
import { useParams } from "react-router-dom";

function NewFacts({ catFacts }) {
  const { id } = useParams();
  console.log(catFacts);

  return (
    <div>
      <h1>Newest CatFacts</h1>
      {catFacts
        .filter((catFact) => catFact._id === id)
        .map((catFact) => {
          return (
            <div>
              <h2>{catFact.text.toUpperCase()}</h2>
            </div>
          );
        })}
    </div>
  );
}

export default NewFacts;
