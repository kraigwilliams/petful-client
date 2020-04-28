import React ,{Component } from 'react';
import SearchPets from '../images/searchpets.png';
import peopleService from '../services/people-service';
// import {Link} from 'react-router-dom';
// import { withRouter } from 'react-router-dom';


class Home extends Component{

handleNewUser =(event)=>{
event.preventDefault();
console.log(event.target.person.value, "what was clicked")
const user= event.target.person.value;
console.log(this,"this")
peopleService.postUser(user)
.then(this.props.history.push('/adoption'))

}
    render(){

        return(
            <div>
                <p>Welcome to Petful where we pride ourselves as being the friendliest pet center in the world</p>
                <p>We have lovable pets for adoption. Search through our database and see which furry friend will touch your heart.</p>
                <span>
                    <img src={SearchPets} alt="search for your new pet"/>
                </span>
                <form onSubmit={event=>this.handleNewUser(event)} name="user" className="submit-name">
                <input type ="text" name="person" placeholder="Enter Your Name Here"/>
                <input type= "submit" value="Start Adoption"/>
                {/* <Link id='start' type='submit' to='/adoption'>Start</Link> */}
            </form>
            
            </div>
        )
    }
}


export default Home