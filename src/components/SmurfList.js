import React from 'react';
import Smurf from './Smurf';
import {connect} from 'react-redux';


 const SmurfList = (props) => {
    
    if (props.isLoading) {
        return <h1>Loading...</h1>;
    } 

    return(
        <div>
            {props.smurfs.map(smurf => {
                return (
                    <div className="listContainer">
                        <Smurf smurf={smurf}/>
                    </div>)
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
     isLoading: state.isLoading,
     smurfs: state.smurfs,
     error: state.error,
    }
  }
  
  

export default connect(mapStateToProps, {})(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.