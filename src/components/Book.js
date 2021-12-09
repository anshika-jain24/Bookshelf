import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Book({book,img}) {
  return (
    <Card sx={{ m:2, minHeight:450, position:'relative'}}>
      <CardMedia
        component="img"
        height="300"
        image={img}
        alt={book.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         by {book.auhtor}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Originally published by {book.publication} in {book.year}
      </Typography>
        <Typography variant="body2" color="text.secondary">
         {book.summary}
        </Typography>
      </CardContent>
      <CardActions>
      
      <RouterLink to={`/${book.title}`}><Button variant="contained">Read More</Button></RouterLink>

      </CardActions>
    </Card>
  );
}