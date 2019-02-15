import React, {Component}  from 'react';

class InputTask extends Component {

    state = {task:'',date1:''}

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });

    }

    render() {
        return (
            <div>
            <input type="hidden" name="id" value={this.props.id} /><br/>
        <input type="text" name="task" onChange={this.handleChange} /> <br/>
        <input type="text" name="date1" onChange={this.handleChange} /> <br/>
        <button onClick={() => this.props.addTask(this.state.task,this.state.date1)}>Add</button>
        </div>
    )
    }
}

export default InputTask