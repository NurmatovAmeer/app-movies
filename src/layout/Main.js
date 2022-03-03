import React, {Component} from 'react';
import axios from "axios";
import Movies from "../components/Movies";
import Search from "../components/Search";
import Loader from "../components/Loader";

class Main extends Component {

    state = {
        movies: [],
        loader: true
    };

    componentDidMount() {
        axios.get("http://www.omdbapi.com/?apikey=6a1c02b2&s=jobs")
            .then((response) => {
                this.setState({movies: response.data.Search, loader: false})
            })
    }

    handleSearch = (str, type = 'all') => {
        this.setState({loader: true});
        axios.get(`http://www.omdbapi.com/?apikey=6a1c02b2&s=${str}${type !== 'all' ? `&type=${type}` : '' }`)
            .then((res) => {
                this.setState({movies: res.data.Search, loader: false})
            })
    };

    render() {
        return (
            <>
                <Search searchMovie={this.handleSearch}/>

                {this.state.loader ? (
                    <Loader/>
                ) : (
                    <Movies  movies={this.state.movies}/>
                )}

            </>
        );
    }
}

export default Main;