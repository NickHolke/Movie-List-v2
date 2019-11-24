import React from 'React';

class AddMovie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
        this.setState({
            title: e.target.value
        })
    }

    render() {
        return (
            <div id="add-movie-container">
                <input placeholder="Add a movie" value={this.state.title}
                onChange={this.changeHandler}>
                </input>
                <button className="submit-button" onClick={() => {
                    this.props.inputHandler(this.state.title);
                    this.setState({title: ''})
                    }}>Add Movie</button>
            </div>
        )   
    }
}

export default AddMovie;