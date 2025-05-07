import Button from './Button.jsx';

export default function ProjectsSidebar({
  addProject,
  projects,
  selectProject,
  selectedProject,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={addProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects &&
          projects.map(project => {
            let cssClass =
              'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800';

            if (selectedProject?.id === project.id) {
              cssClass += ' bg-stone-800 text-stone-200';
            }

            return (
              <li key={project.id}>
                <button
                  onClick={() => selectProject(project.id)}
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
