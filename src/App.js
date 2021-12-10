import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import Bookshelf from "./components/Bookshelf";
import ResponsiveDrawer from "./components/Sidebar";
import bookdata from './sample data/bookdata.json'

const BookRender = () => {
    const {book} = useParams();

    const found = bookdata.filter(item => item.title===book);

    if(found.length === 0)
    {
      console.log('No such Book');
      return(<Bookshelf/>)
    }

    return (
      <ResponsiveDrawer book={book} />
    )
}

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Bookshelf />}/>
          <Route path="/:book" element={<BookRender />}/>
        </Routes>
     </Router>
  );
}

export default App;
