export default function controlModal() {
    const addProjectButton = document.querySelector('.add-project');
    const addTodoButton = document.querySelector('.add-todo');
    const closeButton = document.querySelector('.close-modal');
    const projectModal = document.querySelector('.new-project');
    const todoModal = document.querySelector('.new-todo');

    addProjectButton.addEventListener('click', () => {
        projectModal.classList.add('show');
    });

    addTodoButton.addEventListener('click', () => {
        todoModal.classList.add('show');
    });

    closeButton.addEventListener('click', () => {
        todoModal.classList.remove('show');
        projectModal.classList.remove('show');
    });
}