import { useState } from 'react';

const NewTask = ({ setProjects, projects }) => {
  const [task, setTask] = useState('');

  const handleChange = e => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.length === 0) return;

    setProjects(prevProjects => {
      return {
        ...prevProjects,
        tasks: [{ content: task, id: Date.now() }, ...prevProjects.tasks],
      };
    });

    setTask('');
  };

  const cancelTask = id => {
    setProjects(prevProjects => {
      return {
        ...prevProjects,
        tasks: prevProjects.tasks.filter(task => task.id !== id),
      };
    });
  };

  console.log(projects);

  return (
    <div>
      <h1 className="font-bold text-xl text-stone-950 mb-5">Task</h1>
      <div className="flex items-center gap-4 mb-5">
        <input
          onChange={handleChange}
          value={task}
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

      <ul className="w-[30rem] bg-stone-200 rounded mt-10">
        {projects?.tasks.length > 0 &&
          projects?.tasks.map((task, i) => (
            <li key={i} className="flex justify-between items-center p-3">
              <span>{task.content}</span>
              <button
                onClick={() => cancelTask(task.id)}
                className="text-red-500"
              >
                Cancel
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NewTask;
