import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';

const tasks = [
  {
    id: uuidv4(),
    taskName: 'Complete the frond-end',
  },
  {
    id: uuidv4(),
    taskName: 'Complete the back-end',
  },
];

function App() {
  const [taskList, setTaskList] = useState(tasks);

  const handleAddTask = function (newTask) {
    setTaskList(t => [...t, newTask]);
  };
  return (
    <div className='min-h-screen bg-slate-200 flex justify-center items-center'>
      <div className='p-8 basis-full'>
        <AddTask addTask={handleAddTask} />
        <TaskList tasks={taskList} />
      </div>
    </div>
  );
}

export default App;
