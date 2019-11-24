import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
        this.setState({
            term: e.target.value
        })
    }

    render() {
        return (
            <div id="search-container">
                <input name='search-bar' value={this.state.term} 
                placeholder="Search here" onChange={this.changeHandler}></input>
                <button onClick={() => this.props.searchHandler(this.state.term)}>Search</button>
            </div>
        )
    }
}

export default Search;