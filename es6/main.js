// metodo estatico
class Matematica {

  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(12, 2));

// herança
class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {

  constructor() {
    super();
  }

}

const MinhaLista = TodoList();

document.getElementById('novotodo').onclick = function () { MinhaLista.add('teste') };


// constante
const aa = 1;

// arrow function
const arr = [1, 2, 3, 4, 5, 6];
const newArr = arr.map((item) => item * 2);
console.log(newArr);

//valor padrão para functions
function soma(a = 0, b = 0) {

  return a + b;
}

console.log(soma());


// desestruturação de objetos
const usuario = {
  nome: 'Fábio',
  idade: 35,
  endereco: {
    cidade: 'Valp',
    estado: 'GO'
  }
};

console.log(usuario);
const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostaNome({ nome }) {
  console.log(nome);
}

console.log(mostaNome(usuario));

// operador rest/spread - adicionar o plugin @babel/plugi-proposal-object-rest-spread

// rest - pega o restos das proprieadades
const {nome, ...resto} = usuario;