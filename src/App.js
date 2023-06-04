import { BrowserRouter  as Router, Routes, Route} from "react-router-dom";
import React from "react";
import Header from "./header";
import Home from "./home";
import MovieList from "./movielist";
import MovieDetail from "./moviedetail";

function App() {
  return (
    <div className="bg-black h-full-screen" >
    <Router>
    <Header/>
      <Routes>
      

        <Route  index element={ <Home/> }></Route>
        
        <Route path = "movie/:id" element={<MovieDetail/>}></Route>
        <Route path="movies/:type" element={<MovieList/>}></Route>
        <Route path = {"/*"} element={<h1>error page</h1>}></Route>
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
