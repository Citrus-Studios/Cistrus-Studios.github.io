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
            <div id="topbar" className="relative">
                <ul><Link to="/">Home</Link></ul>
                <ul><Link to="/blogs">Blogs</Link></ul>
            </div>
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

