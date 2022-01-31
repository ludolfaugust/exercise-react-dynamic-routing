import React from "react";
import { Link } from "react-router-dom";

function FactsCat({ catFacts }) {
  console.log(catFacts);
  return (
    <div>
      <h1>Newest Facts about Cats from Agent Number:</h1>
      {catFacts.map((catFact) => {
        return (
          <h1 key={catFact._id}>
            <Link to={`/factscat/${catFact._id}`}>{catFact._id} </Link>
          </h1>
        );
      })}
    </div>
  );
}

export default FactsCat;
