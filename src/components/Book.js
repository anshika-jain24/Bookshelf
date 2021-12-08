import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

export default function Book({book}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={book.thumbnail}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         by {book.author}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Originally published by {book.publication} in {book.year}
      </Typography>
        <Typography variant="body2" color="text.secondary">
         {book.summary}
        </Typography>
      </CardContent>
      <CardActions>
      
        <RouterLink to={`/${book.title}`} btn btn-primary>Read More</RouterLink>

      </CardActions>
    </Card>
  );
}