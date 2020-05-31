let ul = document.querySelector('ul');
let input = document.querySelector('input');
const addButton = document.querySelector('button');



document.querySelector('button').addEventListener('click', function () {
    let el = input.value;
    input.value = '';
    console.log(el);
    let li = document.createElement('li');
    let span = document.createElement('span');
    const deleteButton = document.createElement('button');
    li.appendChild(span);
    li.appendChild(deleteButton);
    span.textContent = el;
    deleteButton.textContent = 'Delete';
    ul.append(li);
    deleteButton.addEventListener('click', () => {
            ul.removeChild(li);
        })
    input.focus();
});

