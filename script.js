let todoList = [];
let todoValue = document.querySelector('.js-todo-value');
let todoDate = document.querySelector('.todo-date');
renderTodo();
    function renderTodo(){
        let html = '';
        for(i = 0; i < todoList.length; i++){
            html += `<div class="todo-element"><input type="checkbox" class="todo-checkbox"><label>${todoList[i].name}</label></div><div class="todo-element"> ${todoList[i].dueDate}</div><button onclick="todoList.splice(${i},1);
            renderTodo()" class="css-button del-button">X</button>`;
        }
            document.querySelector('.display-todo').innerHTML=html;
        }
        
    function addToDo(){
        todoList.push({name : todoValue.value, dueDate: todoDate.value});
        todoValue.value = '';
        renderTodo();
    }
    function myFunction(event){
        if(event.key === 'Enter'){
            addToDo();
        }
    }