import React from 'react';
import PropTypes from 'prop-types'


function Photo(props){
    const post = props.post
    return <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description} />
        <figcaption> <p> {post.description} </p></figcaption>
        <div className="button-container">
        <button onClick = {() => {
             props.onRemovePhoto(post)
        }}>REMOVE </button>
        </div>
    </figure>

}

Photo.propTypes ={
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

//since this one isn't an array like Photowall, it's gonna be be categorized as an object


export default Photo