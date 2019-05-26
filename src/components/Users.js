import React, { Component } from 'react';
import InstaService from '../services/instaservice';

import User from './User';
import ErrorMessage from './ErrorMessage';
import EmptyList from './EmptyList';

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }
    componentDidMount() {
        this.updateUsers()
    }
    updateUsers() {
        this.InstaService.getAllPosts()
            .then(this.onPostLoaded)
            .catch(this.onError)
    }
    onPostLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        })
    }
    onError = (err) => {
        this.setState({
            error: true
        })
    }
    renderUsers(arr) {
        return arr.map((item) => {
            const { name, alt, photo, id } = item;
            return (
                <User
                    src={photo}
                    alt={alt}
                    name={name}
                    key={id}
                    min
                />
            )
        })
    }

    render() {
        const { error, posts } = this.state;
        if (error) {
            return <ErrorMessage />
        } else if (posts.length === 0) {
            return <EmptyList />
        }
        const items = this.renderUsers(posts);
        return (
            <div className="right">

                <User
                    src="https://www.evanmarckatz.com/wp-content/uploads/2009/06/Blog-pic-40-yr-old-man-2197365.jpg"
                    alt="Current user"
                    name="Name Surname"
                />
                <div className="users__block">
                    {items}
                </div>
            </div>
        )

    }
}