import React, { Component } from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
// import { useHistory } from "react-router-dom";
import {
    Routes,
    Route
} from "react-router-dom";

class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{
                id: "0",
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                    "3919321_1443393332_n.jpg"
            }, {
                id: "1",
                description: "Aliens???",
                imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
            }, {
                id: "2",
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
            }],
            screen: 'photos'
        }
        //empty array bc it's being called below
        this.removePhoto = this.removePhoto.bind(this)
        this.navigate = this.navigate.bind(this)
        // console.log('constructor')
    }



    removePhoto(postRemoved) {
        // console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))

        //above the idea is to have the state update after onClick to equal to post NOT postRemoved
    }

//the function of AddPhoto is going to be passed down as a prop a component such as Addphoto
    addPhoto(postSubmitted){
        this.setState(state =>({
            posts: state.posts.concat([postSubmitted])
        }))
    }

    navigate() {
        this.setState({
            screen: 'addPhoto'
        })
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.posts)
        console.log(this.state)
    }




/*since react 6 changed a lot i had to update it to match the elements, so far this part has been the most difficult and took me about a day to figure out.. the fragment wrap helped add multiple components to a single path */
    render() {
        return (
            <div>
                <Routes>

                    <Route
                        exact path="/"
                        element={<>
                            <Title title={"PHOTOWALL"} />
                            <PhotoWall
                                posts={this.state.posts}
                                onRemovePhoto={this.removePhoto}
                                onNavigate={this.navigate} />
                        </>} />

                    {/* <Route exact path="/AddPhoto" element={<AddPhoto />} /> */}

                    {/* <Route exact path="/AddPhoto" render = {({history})=> {
                        return <AddPhoto onAddPhoto={(addedPost) => {
                            this.addPhoto(addedPost);
                            console.log(addedPost)
                            this.props.history.push("/")
                        }}/>
                    }}/> */}
                    <Route path ="/AddPhoto" element= {<AddPhoto onAddPhoto={(addedPost) => {
                        this.addPhoto(addedPost);
                        // this.props.history.push('/')
                        
                    }}/>}/>


                </Routes>
            </div>
        )

    }

}

export * from "react-router";
export default Main