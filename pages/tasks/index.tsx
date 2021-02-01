import React from 'react'

interface Task {
  title: string;
}

interface TasksListProps {
  initialTasks: Task[];
}
 
// const TasksList2:React.FunctionComponent<TasksListProps> = ({tasks}) => {
//   return (  
//     <ul>
//       {tasks.map((task, index ) => {
//         return <li key={index}> {task.title}</li>
//       })}
//     </ul>
//   );
// }
interface TasksListState {
  tasks: Task[];
}

class TasksList extends React.Component<TasksListProps, TasksListState> {
  constructor(props: TasksListProps) {
    super(props);
    this.state = {
      tasks: props.initialTasks
    }
    this.onAddNewTaskClick = this.onAddNewTaskClick.bind(this)
  }

  onAddNewTaskClick () {
    this.setState({
      tasks: [...this.state.tasks, {title: 'New Task'}]
    })
  }

  render() {
    const { tasks } =  this.state;
    return (  
      <ul>
        {tasks.map((task, index ) => {
          return <li key={index}> {task.title}</li>
        })}
        <button onClick={this.onAddNewTaskClick}>Add new task</button>
      </ul>
    );
  }
}
const tasks = [
  {title: 'Task one'},
  {title: 'Task two'},
  {title: 'Task Three'}
]
 
export default () => <div><TasksList initialTasks={tasks}/></div> 