import React from 'React';
import { runInThisContext } from 'vm';

class AddMovie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            term: ''
        }
    }

    render() {
        return (
            <div id="add-movie-container">
                <input></input>
            </div>
        )   
    }
}

export default AddMovie;