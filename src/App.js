import { useSelector } from 'react-redux';
import Task from './components/Task';
import AddTask from './components/AddTask.js';

function App() {

  const taskList = useSelector((state) => state.taskList.list);

  return (
    <div className="App">
      <h1>To Do</h1>

      {/* Task components */}
      <ul className="task-list">
        {taskList.map((task) => (<li><Task task={task} key={task.id} /></li>))}
      </ul>

      <AddTask />

    </div>
  );
}

export default App;