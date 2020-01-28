class List{
  constructor(){
    this.data = [];
  }

  add(data){
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  
  constructor(){
    super();
  }

}

const MinhaLista = TodoList();

document.getElementById('novotodo').onclick = function(){ MinhaLista.add('teste')};

/*

document.getElementById('novotodo').onclick = function(){
  alert('adf');
};
*/