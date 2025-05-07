import { useState } from 'react';

import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import SelectedProject from './components/SelectedProject.jsx';

function App() {
  const [projectState, setProjectState] = useState(false);
  const [projects, setProjects] = useState({
    projects: [],
    selectedProject: undefined,
    tasks: [],
  });

  const addNewProject = () => setProjectState(true);
  const cancelProject = () => setProjectState(false);

  let content = <NoProjectSelected addProject={addNewProject} />;

  if (projectState && !projects.selectedProject) {
    content = (
      <NewProject
        setProjects={setProjects}
        setProjectState={setProjectState}
        cancel={cancelProject}
      />
    );
  }

  if (projects.selectedProject) {
    content = (
      <SelectedProject
        setProjects={setProjects}
        projects={projects}
        setProjectState={setProjectState}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        addProject={addNewProject}
        projects={projects}
        setProjects={setProjects}
      />

      {content}
    </main>
  );
}

export default App;
