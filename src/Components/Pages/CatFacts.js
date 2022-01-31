import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CatFacts() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    axios.get("https://cat-fact.herokuapp.com/facts").then((res) => {
      setFacts(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <h1>CatFacts</h1>
        {facts.map((fact) => {
          return (
            <h2 key={fact._id}>
              <Link to={`${fact._id}`}>created by User: {fact.user}</Link>
            </h2>
          );
        })}
      </div>
    </>
  );
}

export default CatFacts;
