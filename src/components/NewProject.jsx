import { useRef } from 'react';

import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function NewProject({ setProjects, setProjectState, cancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const saveInputs = () => {
    const inputData = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
      id: Date.now(),
    };

    if (
      inputData.title.trim() === '' ||
      inputData.description.trim() === '' ||
      inputData.dueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    setProjects(prevProjects => {
      return {
        ...prevProjects,
        projects: [inputData, ...prevProjects.projects],
      };
    });
    setProjectState(false);
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={cancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={saveInputs}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" type="text" ref={title} />
          <Input label="Description" ref={description} textarea />
          <Input label="Due Date" type="date" ref={dueDate} />
        </div>
      </div>
    </>
  );
}
