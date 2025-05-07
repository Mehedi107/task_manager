import { useState } from 'react';

import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import SelectedProject from './components/SelectedProject.jsx';

function App() {
  const [projectState, setProjectState] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const addNewProject = () => setProjectState(true);
  const cancelProject = () => setProjectState(false);
  const selectProject = id => {
    const selectedProject = projects.find(project => id === project.id);
    setSelectedProject(selectedProject);
  };

  let content = <NoProjectSelected addProject={addNewProject} />;

  if (projectState && !selectedProject) {
    content = (
      <NewProject
        setProjects={setProjects}
        setProjectState={setProjectState}
        cancel={cancelProject}
      />
    );
  }

  if (selectedProject) {
    content = (
      <SelectedProject
        project={selectedProject}
        setProjects={setProjects}
        projects={projects}
        setProjectState={setProjectState}
        setSelectedProject={setSelectedProject}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        addProject={addNewProject}
        projects={projects}
        selectProject={selectProject}
        selectedProject={selectedProject}
      />

      {content}
    </main>
  );
}

export default App;
