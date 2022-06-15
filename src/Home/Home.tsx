import React, { Component } from 'react';
import './Home.css';

export default class App extends Component {
    render() {
        return (
            <main>
                <div className="bottomrect"></div>
                <img src="lemon_slice.svg" className="lemonslice"></img>
                <p className="citrusstudiostext">Citrus Studios</p>
            </main>
        )
    }
}