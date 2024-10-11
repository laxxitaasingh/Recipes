import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import img from '/home/laxita/Recipes/frontend/src/assets/pudhina.jpg'


function MediaCard({ item }) {
  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate(`/info/${item.name}`);
  };

  return (
    <Card className="max-w-sm">
      <CardMedia
        className="h-36"
        image = {`/assets/${item.path}`}
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
    const apiUrl = "http://localhost:3000/collections";

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-red-100">
      {data.map((item, index) => (
        <MediaCard key={index} item={item} />
      ))}
    </div>
  );
}

export default MediaCardList;
