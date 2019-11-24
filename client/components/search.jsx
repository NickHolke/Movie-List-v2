import React from 'react';
import { runInThisContext } from 'vm';

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
                <button onClick={() => {
                    this.props.searchHandler(this.state.term);
                    this.setState({term: ''})
                    }}> Search
                </button>
            </div>
        )
    }
}

export default Search;