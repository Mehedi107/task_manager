import { useState } from 'react';

import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import SelectedProject from './components/SelectedProject.jsx';

function App() {
  // const [projectsState, setProjectsState] = useState({
  //   selectedProjectId: undefined,
  //   projects: [],
  // });

  // function handleStartAddProject() {
  //   setProjectsState((prevState) => {
  //     return {
  //       ...prevState,
  //       selectedProjectId: null,
  //     };
  //   });
  // }

  // function handleCancelAddProject() {
  //   setProjectsState((prevState) => {
  //     return {
  //       ...prevState,
  //       selectedProjectId: undefined,
  //     };
  //   });
  // }

  // function handleAddProject(projectData) {
  //   setProjectsState((prevState) => {
  //     const projectId = Math.random();
  //     const newProject = {
  //       ...projectData,
  //       id: projectId,
  //     };

  //     return {
  //       ...prevState,
  //       selectedProjectId: undefined,
  //       projects: [...prevState.projects, newProject],
  //     };
  //   });
  // }

  // let content;

  // if (projectsState.selectedProjectId === null) {
  //   content = (
  //     <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  //   );
  // } else if (projectsState.selectedProjectId === undefined) {
  //   content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  // }

  const [projectState, setProjectState] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const addNewProject = () => setProjectState(true);
  const cancelProject = () => setProjectState(false);
  const selectProject = id => {
    const selectedProject = projects.find(project => id === project.id);
    // console.log(selectedProject);
    setSelectedProject(selectedProject);
  };

  let content = <NoProjectSelected addProject={addNewProject} />;

  if (projectState && !selectedProject) {
    content = <NewProject setProjects={setProjects} cancel={cancelProject} />;
  }

  if (selectedProject) {
    content = <SelectedProject project={selectedProject} />;
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
