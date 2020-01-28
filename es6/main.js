class TodoList{
  
  constructor(){

    this.todos = [];
  }

  addTodo(){
    this.todos.push('novo todo');
    console.log(this.todos);
  }


}

const MinhaLista = TodoList();

document.getElementById('novotodo').onclick = function(){alert('casa')};

/*

document.getElementById('novotodo').onclick = function(){
  alert('adf');
};
*/