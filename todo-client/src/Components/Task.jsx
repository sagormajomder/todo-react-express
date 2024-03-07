function Task({ task }) {
  return (
    <ul>
      <li>
        <div>
          <input type='checkbox' className='scale-125' />
          <span className='ml-2'>{task.taskName}</span>
        </div>
      </li>
    </ul>
  );
}

export default Task;
