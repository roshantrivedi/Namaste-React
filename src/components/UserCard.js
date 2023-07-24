import React from "react";

import { USERDATA_API } from "../utils/constants";

class Usercard extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            userInfo : {
                name: "User1",
                bio: "Software Engineer",
                location: "India",
                avatar_url: "photo"
            } 
        }
    }

    async componentDidMount(){
        const data = await fetch(USERDATA_API);
        const json = await data.json();

        this.setState({
            userInfo: json
        });
        console.log(json);
    }

    render() {

        const { name, bio, location, avatar_url } = this.state.userInfo;

        return(
            <div className="user-card">
                <h2>Contact Us</h2>
                <span>
                    <img className="profile-pic" src={avatar_url} alt="profile-pic"/>
                    <p>{name}</p>
                    <p>{bio}</p>
                    <p>{location}</p>
                </span>
            </div>
        )
    }
}

export default Usercard;