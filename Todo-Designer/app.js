window.addEventListener('load', () => {
    const form = document.getElementById('new-task-form')
    const input = document.getElementById('new-task-input')
    const list_el = document.getElementById('tasks')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const task = input.value
        if (!task) {
            alert('Please fill the form')
            return;
        }
        const task_el = document.createElement('div')
        task_el.classList.add('task')
        const task_conten_el = document.createElement('div')
        task_conten_el.classList.add('content')
        // task_conten_el.innerText = task

        task_el.appendChild(task_conten_el)

        const task_input_el = document.createElement('input')
        task_input_el.type = 'text'
        task_input_el.classList.add('text')
        task_input_el.value = task
        task_input_el.setAttribute('readonly', 'readonly')
        task_conten_el.appendChild(task_input_el)


        const task_action_el = document.createElement('div')
        task_action_el.classList.add('actions')
        const action_edit = document.createElement('button')
        action_edit.classList.add('edit')
        action_edit.innerHTML = 'Edit   '

        const action_delete = document.createElement('button')
        action_delete.classList.add('delete')
        action_delete.innerHTML = 'Delete'
        task_action_el.appendChild(action_edit)

        task_action_el.appendChild(action_delete)
        task_el.appendChild(task_action_el)

        list_el.append(task_el)
        input.value = ''


        action_edit.addEventListener('click', () => {
            if (action_edit.innerText.toLowerCase() == 'edit') {
                task_input_el.removeAttribute('readonly')
                task_input_el.focus();
                action_edit.innerText = 'Save';
            }
            else {
                task_input_el.setAttribute('readonly', 'readonly')
                action_edit.innerText = 'Edit';
            }

        })
        action_delete.addEventListener('click', () => {
            list_el.removeChild(task_el)
        })







    })
    // console.log(list_el);
}
)