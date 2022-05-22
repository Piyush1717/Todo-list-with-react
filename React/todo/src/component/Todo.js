import React, { Component } from 'react'

export class Todo extends Component {

    constructor() {
        super()

        this.state = {
            tasks: [{ task: 'get Milk', id: 1 }, { task: 'attend meeting', id: 2 }],
            currtask: ''
        }
    }

handleChange= (e)=>{
console.log(e.target.value)

this.setState({
currtask: e.target.value
})
}

handleAddTask =()=>{

    this.setState({
tasks:[...this.state.tasks , {task : this.state.currtask, id: this.state.tasks.length+1} ],
currtask:''

    })
}

handleDelete=(id)=>{
let narr=this.state.tasks.filter((taskObj)=>{
return taskObj.id!=id;
});

this.setState({
    tasks:[...narr]
})

}


    render() {
        return (
            <div>
                <input type="text" value={this.state.currtask}   onChange={this.handleChange}       />
                <button onClick={this.handleAddTask}>add text</button>

                <ul>
                    {this.state.tasks.map((taskObj) => (
                        <li>
                            <p>{taskObj.task}</p>
                            <button onClick={()=>this.handleDelete(taskObj.id)}>delete</button>

                        </li>
                    ))}

                </ul>


            </div>
        )
    }
}

export default Todo