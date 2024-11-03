const addToDoInput = document.getElementById('addToDoInput')
const addToDoBtn = document.getElementById('addToDoBtn')
const doneToDoList = document.getElementById('doneToDoList')
const inProgressToDoList = document.getElementById('inProgressToDoList')
const openModal =document.getElementById('openModal')
const modal = document.getElementById('modal')


let list = []

const toggleToDo = (title) => {
    console.log('pass2')
    const updatedList = list.map((toDo) =>{
        return {...toDo, done: title === toDo.title ? !toDo.done : toDo.done}
    })

    list = updatedList
    renderPage()
}

const testFunc = () => {
    console.log('pass')
}

function renderPage() {
    doneToDoList.innerHTML = ''
    inProgressToDoList.innerHTML = ''

    list.forEach((toDo)=>{
        const listItem = document.createElement('div')
        listItem.classList.add('listItem')
        const actions = document.createElement('div')
        actions.classList.add('listItemActions')
        const editIcon = document.createElement('img')
        editIcon.classList.add('listItemIcon')
        editIcon.alt = 'edit=icon'
        editIcon.src='assets/edit.png'


        const deleteIcon = document.createElement('img')
        deleteIcon.classList.add('listIcon')
        deleteIcon.alt = 'delete-icon'
        deleteIcon.src ='assets/trash.png'


        actions.appendChild(editIcon)
        actions.appendChild(deleteIcon)

        const title = document.createElement('p')
        title.innerHTML = toDo.title

        if(toDo.done) title.classList.add('doneToDoTitle')

        listItem.appendChild(title)
        listItem.appendChild(actions)

        const parent = toDo.done ? doneToDoList : inProgressToDoList

        parent.appendChild(listItem)

        listItem.addEventListener('click', (e) =>{
            e.stopPropagation()
            testFunc()
        })
    })

}

const addToDo = () =>{
    const title = addToDoInput.value
    if(title === undefined || title === '') return alert ('To Do should have a title')
    if(list.some(item => item.title === title)) return alert('To do title should be uniq')
    list.push({title, done: false})
    addToDoInput.value = ''
    modal.classList.remove = ''
    renderPage()
}

openModal.addEventListener('click', () =>{
    modal.classList.add('showModal')
})

renderPage()
