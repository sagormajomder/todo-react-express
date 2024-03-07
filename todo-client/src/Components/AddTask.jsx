function AddTask() {
  return (
    <div className='border-b border-b-slate-300 pb-4'>
      <form className='flex flex-col gap-3'>
        <div>
          <input
            className='w-full px-3 py-2 outline-none rounded-lg text-black'
            type='text'
            placeholder='Task Name'
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
