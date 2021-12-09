import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import Bookshelf from "./components/Bookshelf";
import ResponsiveDrawer from "./components/Sidebar";

const BookRender = () => {
    const {book} = useParams();

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
