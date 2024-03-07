import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import { v4 as uuidv4 } from 'uuid';

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
  return (
    <div className='min-h-screen bg-slate-200 flex justify-center items-center'>
      <div className='p-8 basis-full'>
        <AddTask />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
