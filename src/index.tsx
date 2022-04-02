import React from 'react';
import ReactDOM from "react-dom";
import Home from './Home/Home';
import Blogs from './Blogs/Blog';
import './index.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
} from "react-router-dom";


export default function App() {
    return(
        <div>
            <div className="toprect2"></div>
            <div className="toprect1"></div>
            <div className="bottomrect"></div>
            <Outlet/>
        </div>
    );
}

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
            </Route>
        </Routes>
    </Router>,
    document.getElementById('root')
)

