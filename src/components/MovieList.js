import React, {Component} from 'react'

import Movie from './Movie'
import jsonMovies from '../jsonMovies'


// This component should be converted to stateless after lifting state upward
class MovieList extends Component {

    render(){
        // Iterate through movies from props, instantiating a Movie component for each one
        var moviesToRender = this.props.movies.map((movie, index)=> {
            //Pass a different movie down to each Movie component
            return (<Movie movie={movie} key={index}/>)
        })
        return(
            <div>
                <h4>Movie List</h4>
                <div>
                {/* Show our list of movies we iterated through */}
                  {moviesToRender}
                </div>
            </div>
        )
    }
}

export default MovieList