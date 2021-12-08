import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book({book}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
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
        <Button size="small">Read</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}