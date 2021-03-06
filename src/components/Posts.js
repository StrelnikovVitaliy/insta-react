import React, { Component } from 'react';
// import Post from './Post';
import InstaService from '../services/instaservice';
import User from './User';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';


export default class Posts extends Component {
    // classFields es10
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false,
        loading: false

    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        this.updatePosts()
    }
    updatePosts() {
        //получил промис
        this.InstaService.getAllPosts()
            .then(this.onPostsLoaded)
            .catch(this.onError)

    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false,
            loading: false

        })
    }
    onError = (err) => {
        this.setState({
            error: true
        })
    }
    renderItems(arr){
        return arr.map((item) => {
            const {name, altname, photo, src, alt, descr, id} = item;
            return(
                <div key={id} className="post">
                    <User
                        src={photo}
                        alt={altname}
                        name={name}
                        min
                    />
                    <img src={src} alt={alt}></img>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
            )
        })

    }

    render() {
        const{error, posts, loading} = this.state;
        if(error){
            return <ErrorMessage/>
        }else if (loading) {
            return <Loading />
        }
        const items = this.renderItems(posts);
        return (
            <div className="left">
                {items}
            </div>
        )
    }
}