import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddTask({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const handleFormSubmit = function (e) {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      taskName: taskText,
    };
    addTask(newTask);
  };
  return (
    <div className='border-b border-b-slate-300 pb-4'>
      <form className='flex flex-col gap-3' onSubmit={handleFormSubmit}>
        <div>
          <input
            className='w-full px-3 py-2 outline-none rounded-lg text-black'
            type='text'
            placeholder='Task Name'
            value={taskText}
            onChange={e => setTaskText(e.target.value)}
          />
        </div>
        <button
          className='self-end px-4 py-2 bg-orange-400 rounded-lg text-white'
          type='submit'>
          Create Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;
