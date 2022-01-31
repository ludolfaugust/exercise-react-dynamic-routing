import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailFacts() {
  const { id } = useParams();
  const [detailFacts, setDetailFacts] = useState([]);

  useEffect(() => {
    axios.get(`https://cat-fact.herokuapp.com/facts/${id}`).then((res) => {
      setDetailFacts(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <h1>hello</h1>
      {detailFacts
        .filter((detailFact) => detailFact._id === id)
        .map((detailFact) => {
          return <h3>{detailFact.text}</h3>;
        })}
    </div>
  );
}

export default DetailFacts;
