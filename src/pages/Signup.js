import React, {useState} from 'react';
import { connect } from 'react-redux';
import {signup} from '../actions/authActions';
import {Link, Redirect} from 'react-router-dom';


function Signup(props) {
    const [credentials, setCredentials] = useState({email:'', password:''})
    
    
    function handleonChange (event){
        setCredentials({...credentials, [event.target.name]:event.target.value })}

    function handleonSubmit(){
        props.signup(credentials.email, credentials.password)
    }
    //if firebase isLoaded is false
    //show loading
    if (props.auth.isLoaded === false){
        return <h1>Loading...</h1>
    }
    //if a user is logged in
    //redirect them to display
    if (props.auth.isEmpty === false){
        return <Redirect to = '/'/>
    }
    
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <form>
            <div>
                
                <label>Email</label><br></br>
                <input type="email" name="email" onChange={handleonChange}></input>
            </div>
            <div>
                <label>Password</label><br></br>
                <input type="password" name="password" onChange={handleonChange}></input>
            </div>

            <button onClick={handleonSubmit}>Sign Up</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {signup}
const mapStateToProps = (state) => {
    return {auth: state.firebaseState.auth}
}


export default connect(mapStateToProps, mapDispatchToProps) (Signup);