import React from 'react';
import Book from './Book';
import { Grid } from "@mui/material";
import bookdata from '../sample data/bookdata.json';

function Bookshelf() {
    return (
        <Grid container spacing={3}>
            {
            bookdata.map((book) => (
                <Grid item xs={12} sm={4}> 
                    <Book book={book} />
                </Grid>
             ))
            }
        </Grid>
    )
}

export default Bookshelf
