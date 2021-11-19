import React, {Component} from 'react';

class Photo extends Component {
    render() { 
        const post = this.props.post
        return <figure className="figure">
            <img src={post.imageLink} alt={post.description} />
        </figure>
    }
}

export default Photo