import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import querystring from 'querystring';
import ReactSwipe from 'react-swipe';

const query = querystring.parse(window.location.search.slice(1));

// generate slides
const numberOfSlides = parseInt(query.slideNum, 10) || 20;
const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
    return (
        <div key={i}>
            <div className="item">{i}</div>
        </div>
    );
});
class Presenter extends Component {

    next() {
        this.reactSwipe.next();
    }

    prev() {
        this.reactSwipe.prev();
    }
    render() {
        return (<div className="red">

        </div>)
    }
}
export default Presenter;
