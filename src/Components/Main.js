import React, {Component} from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'



    
class Main extends Component {
    constructor(){
        super()
        this.state = {
            posts:[]
        }
        //empty array bc it's being called below
        this.removePhoto = this.removePhoto.bind(this)
        console.log('constructor')
    }

    removePhoto(postRemoved){
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))

        //above the idea is to have the state update after onClick to equal to post NOT postRemoved
    }



    componentDidMount(){
        const data = SimulatedFetchFromDB()
        this.setState ({
            posts: data
        })
        console.log('componentDidMount')
    }


    render(){
        console.log('render')
        return   <div>
            <Title title={"PHOTOWALL"}/>
            <PhotoWall posts= {this.state.posts} onRemovePhoto={this.removePhoto}/>
        </div>
       
    }
    
}

function SimulatedFetchFromDB () {
return [{
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
    }]
}

export default Main