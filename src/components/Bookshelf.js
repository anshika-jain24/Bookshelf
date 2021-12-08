import React from 'react';
import Book from './Book';
import { Grid } from "@mui/material";
import { books } from '../sample data/Data';

function Bookshelf() {
    return (
        <Grid container spacing={3}>
            {
            books.map((book) => (
                <Grid item xs={12} sm={4}> 
                    <Book book={book} />
                </Grid>
             ))
            }
        </Grid>
    )
}

export default Bookshelf
