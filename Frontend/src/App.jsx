// import React from 'react'
// import "./App.css"
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import {Toaster} from "react-hot-toast"
// import Home from "./Pages/Home.jsx"
// import Success from "./Pages/Success.jsx"
// import NotFound from './Pages/NotFound.jsx';

// const App = () => {
//   return (
//     <Router>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/success' element={<Success/>}/>
//       <Route path='/*' element={<NotFound/>}/>
//     </Router>
//   )
// }

// export default App

import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home.jsx";
import Success from "./Pages/Success.jsx";
import NotFound from './Pages/NotFound.jsx';

const App = () => {
    return (
        <Router>
            <Toaster />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/success' element={<Success />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
