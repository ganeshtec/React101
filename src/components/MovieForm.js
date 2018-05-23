import React, {Component} from 'react'


class MovieForm extends Component {
    state = {
        // Form data default state
        formData: {
            name: "",
            description: "",
            rating: 0,
            id: 0
        }
    }
    // Custom method to handle ALL input changes
    handleChange = (event) => {

        //Use spread operator to copy FormData
        var newForm = {...this.state.formData};
        //update copied form data using dictionary lookup using 'event'
        newForm[event.target.name] = event.target.value
        this.setState({formData: newForm})
    }

    render(){

        return(
            <div>
                {/* Inputs, name MUST match form data name, value drawn from state, call handleChange on change */}
                <div>
                    <h4>Name</h4>
                    <input type="text" name="name" value={this.state.formData.name} onChange={this.handleChange}/>
                </div>
                <div>
                    <h4>Description</h4>
                    <input type="text" name="description" value={this.state.formData.description} onChange={this.handleChange}/>
                </div>
                <div>
                    <h4>Rating</h4>
                    <input type="number" name="rating" value={this.state.formData.rating} onChange={this.handleChange}/>
                </div>
                <div>
                    <h4>ID</h4>
                    <input type="number" name="id" value={this.state.formData.id} onChange={this.handleChange}/>
                </div>
    
                {/* Submit form data upon button click */}
                <button onClick={() => this.props.addMovie(this.state.formData)}>Submit!</button>
            </div>
        )
    }
}

export default MovieForm