import React, { Component } from 'react'
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';

import InstaService from '../services/instaservice';

export default class Comments extends Component {
    InstaService = new InstaService();
    state = {
        comments: [],
        error: false,
        loading: false
    }
    componentDidMount() {
        this.setState({
            loading: true
        });
        this.updateComments();
    }

    updateComments() {
        //получил промис
        this.InstaService.getAllComments()
            .then(this.onCommentsLoaded)
            .catch(this.onError);
    }

    onCommentsLoaded = (comments) => {
        this.setState({
            comments,
            error: false,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const { photo, name, descr, id } = item;
            return (
                <div className="container" key={id}>
                    <img src={photo} alt={name} ></img>
                    <h3>{name}</h3>
                    <p>{descr}</p>
                </div>
            )
        })
    }

    render() {
        const { error, comments, loading } = this.state;
        if (error) {
            return <ErrorMessage />
        } else if (loading) {
            return <Loading />
        }
        const items = this.renderItems(comments);
        return (
            <div className="comments">
                {items}
            </div>
        )

    }
}