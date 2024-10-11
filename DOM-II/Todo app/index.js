document.querySelector('form').addEventListener('submit', createTodo)

var todoArr = JSON.parse(localStorage.getItem('todoArr')) || []

displayTodo(todoArr)

window.addEventListener('load', () => displayTodo(todoArr))

function createTodo(e) {
    e.preventDefault()
    var todoObj = {
        taskName: document.querySelector('#task-name').value,
        priority: document.querySelector('#priority').value
    }
    todoArr.push(todoObj)
    localStorage.setItem('todoArr', JSON.stringify(todoArr))

    displayTodo(todoArr)
}

function displayTodo(arr) {
    document.querySelector('tbody').innerHTML = ""
    arr.map((ele, index) => {
        let tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.textContent = ele.taskName

        let td2 = document.createElement('td')
        td2.textContent = ele.priority

        if (ele.priority === 'high') {
            td2.style.backgroundColor = 'red'
        } else if (ele.priority === 'medium') {
            td2.style.backgroundColor = 'yellow'
        } else {
            td2.style.backgroundColor = 'green'
        }

        let td3 = document.createElement('td')
        td3.textContent = 'Delete'
        td3.addEventListener('click', () => deleteTodo(index))
        td3.style.backgroundColor = 'red'

        tr.append(td1, td2, td3)

        document.querySelector('tbody').append(tr)
    })
}

function deleteTodo(index) {
    // Remove the selected task from the array
    todoArr.splice(index, 1)
    localStorage.setItem('todoArr', JSON.stringify(todoArr))

    // Update the display with the updated array
    displayTodo(todoArr)
}
