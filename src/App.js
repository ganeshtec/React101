import React, { Component } from 'react';
import './App.css';
import jsonMovies from './jsonMovies'

// Import Components that are needed
import MovieList from './components/MovieList'
import MovieForm from './components/MovieForm'


// Stateful Component, inherit LifeCycle Methods from Component
class App extends Component {
  // Components State (Cannot mutate)
  state = {
    //Default State for this component
    movies: [],
    showNewMovieForm: false
  }

  //LifeCycle hook to execute when we instantiate this component
  componentWillMount(){

      // This is the place to make ajax calls.
      // Set your state using the return of your call.
      // We use a static JSON file for this demo

      this.setState({movies: jsonMovies})
  }

  // Custom Method to add a movie to our state
  addMovie = (movie) => {
    // Create a replica of our states movie array using spread operator
    var newMovies = [...this.state.movies]
    // Add Movie to the cloned array (Push puts it to the end, unshift to the front)
    newMovies.unshift(movie)
    // Replace old state with new state
    this.setState({movies: newMovies, showNewMovieForm: false})
  }

  toggleShowMovieForm = () => {
    //toggle state value to be inverse of current value
    this.setState({showNewMovieForm: !this.state.showNewMovieForm})
  }

  // Lifecycle hook to display data
  render() {
    var showNewMovieForm = this.state.showNewMovieForm;

    // Must have a return of 1 JSX element
    return (
      <div className="App">
        <h1>Welcome to Movie Land!</h1>
        
        {/* Conditional rendering for button and MovieForm */}
        <button onClick={this.toggleShowMovieForm}>{showNewMovieForm ? "Close Form" : "Add New Movie"}</button>
        {showNewMovieForm ? <MovieForm addMovie={this.addMovie}/> : null}

        {/* Our custom components, passing data/functions as props */}
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
