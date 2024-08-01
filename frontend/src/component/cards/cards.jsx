

import axios from "axios";
import './cards.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function MediaCard({ item }) {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/info/${item.name}`);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.data}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={handleLearnMore}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

function MediaCardList() {
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
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="card-container">
      {data.map((item, index) => (
        <MediaCard key={index} item={item} />
      ))}
    </div>
  );
}

export default MediaCardList;
