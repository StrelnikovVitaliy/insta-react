import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';
import Loading from './Loading';


export default class Pallete extends Component {
    // classFields es10
    InstaService = new InstaService();
    state = {
        photos: [],
        error: false,
        loading: false
    }
    componentDidMount() {
        this.setState({
            loading: true
        });
        this.updatePhotos()
    }
    updatePhotos() {
        //получил промис
        this.InstaService.getAllPhotos()
            .then(this.onPhotosLoaded)
            .catch(this.onError)

    }

    onPhotosLoaded = (photos) => {
        this.setState({
            photos,
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
            const { src, alt, id } = item;
            return (
                <img src={src} alt={alt} key={id}></img>
            )
        })

    }
    render() {
        const { error, photos, loading } = this.state;
        if (error) {
            return <ErrorMessage />
        } else if (loading) {
            return <Loading />
        }
        const items = this.renderItems(photos);
        return (
            <div className="palette">
                {items}
            </div>
        )

    }
}