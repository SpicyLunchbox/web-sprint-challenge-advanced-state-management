import { fetchData } from './actions';
import React, { useEffect } from "react";
import { connect } from 'react-redux';
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = (props) => {
  const { fetchData } = props
  useEffect(() => { //upon page load, fetchData is fired and data is... well... fetched from the "API"
    fetchData()
  }, [])

  
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }


const mapStateToProps = state => { //allows for selective grabbing of state from store
  return {
   isLoading: state.isLoading,
   smurfs: state.smurfs,
   error: state.error,
  }
}



export default connect(mapStateToProps, {fetchData})(App); //attaches state from store to to props

//Task List:
//1. Connect the fetchSmurfs actions to the App component. done
//2. Call the fetchSmurfs action when the component first loads. done