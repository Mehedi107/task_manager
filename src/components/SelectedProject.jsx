const SelectedProject = ({
  project,
  projects,
  setProjects,
  setProjectState,
  setSelectedProject,
}) => {
  const deleteTask = () => {
    const updatedTasks = projects.filter(task => task.id !== project.id);
    setProjects(updatedTasks);
    setProjectState(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-[35rem] mt-16">
      <header>
        <div className="flex justify-between items-center">
          <p className="font-bold text-3xl text-stone-950">{project.title}</p>
          <button
            onClick={deleteTask}
            className="bg-stone-950 text-stone-300 py-2 px-4 rounded hover:text-stone-50 hover:bg-stone-700"
          >
            Delete
          </button>
        </div>

        <p className="text-stone-500 my-3">Due Date: {project.dueDate}</p>

        <p className="whitespace-pre-wrap">{project.description}</p>

        <hr className="my-3 h-1 bg-stone-400" />

        <div>task</div>
      </header>
    </div>
  );
};

export default SelectedProject;
