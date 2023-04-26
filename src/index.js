import controlModal from "./modal";

controlModal();

function populateTodo() {
    const main = document.querySelector('main');
    const chooseContainer = document.querySelector('.choose-container');
    for (let i = 0; i < 20; i++) {
        const todo = document.querySelector('.list');
        const cloneTodo = todo.cloneNode(true);
        main.append(cloneTodo);

        const listChoose = document.querySelector('.list-choose');
        const cloneListChoose = listChoose.cloneNode(true);
        chooseContainer.append(cloneListChoose);
    } 
}

populateTodo();


