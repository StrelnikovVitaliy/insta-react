import React, { Component } from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User
                src="https://www.evanmarckatz.com/wp-content/uploads/2009/06/Blog-pic-40-yr-old-man-2197365.jpg"
                alt="some man"
                name="Some Man"
                min
                />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    
                </div>
            </div>
        )
    }
}