import NewTask from './NewTask';

const SelectedProject = ({ projects, setProjects, setProjectState }) => {
  const deleteProject = () => {
    const updatedProjects = projects.projects.filter(
      project => project.id !== projects.selectedProject.id
    );
    setProjectState(false);

    setProjects(prevProjects => {
      return {
        ...prevProjects,
        projects: updatedProjects,
        selectedProject: undefined,
      };
    });
  };

  return (
    <div className="w-[35rem] mt-16">
      <header>
        <div className="flex justify-between items-center">
          <p className="font-bold text-3xl text-stone-950">
            {projects.selectedProject.title}
          </p>
          <button
            onClick={deleteProject}
            className="bg-stone-950 text-stone-300 py-2 px-4 rounded hover:text-stone-50 hover:bg-stone-700"
          >
            Delete
          </button>
        </div>

        <p className="text-stone-500 my-3">
          Due Date: {projects.selectedProject.dueDate}
        </p>

        <p className="whitespace-pre-wrap">
          {projects.selectedProject.description}
        </p>

        <hr className="my-3 h-1 bg-stone-400" />

        <NewTask setProjects={setProjects} projects={projects} />
      </header>
    </div>
  );
};

export default SelectedProject;
