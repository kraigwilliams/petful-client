import React, { Component } from "react";

import peopleService from "../services/people-service";
import petService from "../services/pet-service";
// import { withRouter} from 'react-router';
class Adoption extends Component {
  state = {
    users: [],
    dogs: [],
    cats:[]
  };

  handleNewUser =(event)=>{
    event.preventDefault();
    console.log(event.target.person.value, "what was clicked")
    const user= event.target.person.value;
    console.log(this,"this")
    peopleService.postUser(user)
    .then(this.props.history.push('/adoption'))
    
    }

  async componentDidMount() {
    const users = await peopleService.getPeople();
     const dogs = await petService.getDogs();
     const cats = await petService.getCats();
     console.log(users, "users", dogs, "dogs",cats,"cats");
    this.setState({ users,dogs,cats});
  }

  render() {
    return (
      <div>
<form onSubmit={event=>this.handleNewUser(event)} name="user" className="submit-name">
                <input type ="text" name="person" placeholder="Enter Your Name Here"/>
                <input type= "submit" value="Start Adoption"/>
                {/* <Link id='start' type='submit' to='/adoption'>Start</Link> */}
            </form>
        
        <h2>Adoption Queue</h2>
        <div className="people">
          <ol>
            {this.state.users.map((person, idx) => {
              return <li key={idx}>{person}</li>;
            })}
          </ol>
        </div>

        <div className="pets">


          <div className='dogs'>
            <h3>Dogs</h3>
        <ol>
        {this.state.dogs.map((dog,idx) => {
              return <li className='pet-content' key={idx}><span>{dog.name}</span> <img className='pet-image' alt={dog.name} src={dog.imageURL}/> <p>{dog.description}</p> 
              <p>{`How we got ${dog.name}`} : <br/>  {`${dog.story}`}</p>
              <input type='button' value='Adopt this Pet!' /> 
              </li>;
            })}
          </ol>
        </div>


        <div className='cats'>
        <h3>Cats</h3>
        <ol>
        {this.state.cats.map((cat,idx) => {
              return <li className='pet-content' key={idx}><span>{cat.name}</span> <img  className='pet-image' alt={cat.name} src={cat.imageURL}/> <p>{cat.description}</p>
              <p>{`How we got ${cat.name}`} : <br/>  {`${cat.story}`}</p>
              <input type='button' value='Adopt this Pet!' /> 
              </li>;
            })}
          </ol>
        </div>
</div>
      </div>
    );
  }
}

export default Adoption;
