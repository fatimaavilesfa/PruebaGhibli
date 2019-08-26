import React, { Component } from 'react';
import './App.css';
import MovieList from '../components/movieList';
import IntegrationDownshift from '../components/autoComplete';



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            searchField: ""
        }
        this.baseState = this.state.searchField;
    }

    async componentDidMount() {
        const url = 'https://ghibliapi.herokuapp.com/films/';
        const result = await fetch(url);
        const data = await result.json();
        this.setState({ movies: data });
    }




    searchChange = (event) => {
        this.setState({ searchField: event });
    }

    resetForm = () => {
        this.setState({ searchField: this.baseState });
    }



    render() {
        let filteredMovies = this.state.movies.filter(movies => {
            return movies.title.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (

            <div className="App">
                <div className="App-header">
                    <div className="title">
                        <button type="button"
                            className="btn btn-outline-light btn-lg"
                            onClick={this.resetForm}>
                                Ghibli Films
                         </button>
                    </div>
                </div>
                <IntegrationDownshift
                    searchChange={this.searchChange}
                    movies={this.state.movies.map(m => { return { label: m.title.toLowerCase() } })}
                />
                <MovieList movies={filteredMovies} />
            </div>
        );
    }
}



export default App;