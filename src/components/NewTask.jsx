import { useState } from 'react';

const NewTask = ({ setProjects, projects }) => {
  const [task, setTask] = useState(null);

  const handleChange = e => {
    setTask(e.target.value.trim());
  };

  const addTask = () => {
    setProjects(prevProjects => {
      return {
        ...prevProjects,
        tasks: [task, ...prevProjects.tasks],
      };
    });
  };

  return (
    <div>
      <h1 className="font-bold text-xl text-stone-950 mb-5">Task</h1>
      <div className="flex items-center gap-4 mb-5">
        <input
          onChange={handleChange}
          className="w-96 p-2 rounded bg-stone-200"
          type="text"
        />
        <button
          onClick={addTask}
          className="py-2 px-4 bg-stone-950 text-stone-400 rounded hover:bg-stone-900 hover:text-stone-50"
        >
          Add Task
        </button>
      </div>

      {/* if there is no tasks */}
      {projects.tasks.length === 0 && (
        <p>This project does not any task yet.</p>
      )}

      <ul className="w-[30rem] bg-stone-200 p-4 rounded mt-10 space-y-5">
        {projects?.tasks.length > 0 &&
          projects?.tasks.map((task, i) => (
            <li key={i} className="flex justify-between items-center">
              <span>{task}</span>
              <button className="text-red-500">Cancel</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NewTask;
