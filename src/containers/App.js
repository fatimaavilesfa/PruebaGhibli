import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }

    }

    async componentDidMount() {
        const url = 'https://ghibliapi.herokuapp.com/films/';
        const result = await fetch(url);
        const data = await result.json();
        this.setState({ movies: data });
    }






    render() {

        return (
            <>
            </>
        )
    }
}



export default App;