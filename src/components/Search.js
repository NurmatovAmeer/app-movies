import React, {Component} from 'react';

class Search extends Component {

    state = {
        search: 'jobs',
        type: 'all',
    };

    handleChange = (e) => {
        this.props.searchMovie(this.state.search)
    };

    handleCheck = (e) =>{
        this.setState({type: e.target.dataset.type}, () => {
            this.props.searchMovie(this.state.search, this.state.type)
        })
    };

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="input-group mt-3 input-group-append">
                            <input type="text" className="form-control" name="search" onChange={(e) => this.setState({search: e.target.value})} value={this.state.search}/>
                            <button type="button" className="btn btn-primary ml-5" onClick={this.handleChange}>Search</button>
                        </div>
                        <label> <input type="checkbox" data-type="all" name="type" checked={this.state.type === 'all'} onChange={this.handleCheck}/> All</label>
                        <label className="mx-3"> <input type="checkbox" data-type="movie" name="type" checked={this.state.type === 'movie'} onChange={this.handleCheck}/> Movies</label>
                        <label> <input type="checkbox" name="type" data-type="series" checked={this.state.type === 'series'} onChange={this.handleCheck}/> Series</label>
                    </div>
                </div>
            </>
        );
    }
}

export default Search;