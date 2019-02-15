import React,{Component} from 'react'

class TaskList extends Component {
    render() {
        if ( this.props.tasks )
            return (<ul > {
                this.props.tasks.map((item) => (
                <li key={item.id}> {item.task} {item.date1}</li>



    ))
    }
    </ul>)
    }
}

export default TaskList