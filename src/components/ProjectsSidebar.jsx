import Button from './Button.jsx';

export default function ProjectsSidebar({ addProject, projects, setProjects }) {
  const clickedProject = id => {
    const selectedProject = projects.projects.find(
      project => id === project.id
    );

    setProjects(prevProjects => {
      return {
        ...prevProjects,
        selectedProject: selectedProject,
      };
    });
  };

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={addProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.projects.length > 0 &&
          projects.projects.map(project => {
            let cssClass =
              'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800';

            // add class to clicked project
            if (projects?.selectedProject?.id === project.id) {
              cssClass += ' bg-stone-800 text-stone-200';
            }

            return (
              <li key={project.id}>
                <button
                  onClick={() => clickedProject(project.id)}
                  className={cssClass}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
      </ul>
    </aside>
  );
}
