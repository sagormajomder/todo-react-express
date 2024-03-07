import Task from './Task';

function TaskList({ tasks }) {
  return (
    <div className='pt-4'>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
