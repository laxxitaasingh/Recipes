import React, { useState, useEffect } from "react";
import axios from "axios";

function Data() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
 

  useEffect(() => {
    // API endpoint
    const apiUrl = "http://localhost:3000/collections";

    // Fetch data from the API using axios
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data); // Assuming response.data contains the array of items
        setLoading(false);
        // console.log(response.data.ingredients)
        // console.log(JSON.parse(response.data.ingredients))
        console.log('dddd', response.data)
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="main">Error: {error.message}</div>;
  


  return (
    <div className="main">
      <h1>Fetched Data</h1>
      <div key={data._id}>
        <h2>{data.name}</h2>
        <p><strong>Yield:</strong> {data.yield}</p>
        <h3>Ingredients:</h3>
        <ul>
          {JSON.parse(data.ingredients)
          .map((ingredient, index) => (
            <li key={index}>{ingredient.item}: {ingredient.quantity}</li>
          ))
          }
          
        </ul>
        <h3>Method:</h3>
        <p>{data.method}</p>
      </div>
    </div>
  );
}

export default Data;
