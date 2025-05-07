const NewTask = () => {
  return (
    <div>
      <h1 className="font-bold text-xl text-stone-950 mb-5">Task</h1>
      <div className="flex items-center gap-4 mb-5">
        <input className="w-96 p-2 rounded bg-stone-200" type="text" />
        <button className="py-2 px-4 bg-stone-950 text-stone-400 rounded hover:bg-stone-900 hover:text-stone-50">
          Add Task
        </button>
      </div>
      <p>This project does not any task yet.</p>
    </div>
  );
};

export default NewTask;
