import React from 'react';
import Book from './Book';
import { Grid } from "@mui/material";
import bookdata from '../sample data/bookdata.json';
import book1 from '../assets/images/book1.jpg';
import book2 from '../assets/images/book2.jpg';
import book3 from '../assets/images/book3.jpg';
import book4 from '../assets/images/book4.jpg';
import ButtonAppBar from './Navbar';

function Bookshelf() {

    const images = [book1,book2,book3,book4]

    return (
        <>
        <ButtonAppBar />
        <Grid container>
            {
            bookdata.map((book,index) => (
                <Grid item justifyContent="center" xs={12} sm={4}> 
                    <Book book={book} img={images[index]} />
                </Grid>
             ))
            }
        </Grid>
        </>
    )
}

export default Bookshelf
