import { subtracao } from './funcoes';

console.log('subtração');
console.log(subtracao(5, 1));

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

//const MinhaLista = TodoList();

//document.getElementById('novotodo').onclick = function () { MinhaLista.add('teste') };


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
/*
console.log(usuario);
const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostaNome({ nome }) {
  console.log(nome);
}

console.log(mostaNome(usuario));*/

// operador rest/spread - adicionar o plugin @babel/plugi-proposal-object-rest-spread

// rest - pega o restos das proprieadades

const { idade, nome, ...resto } = usuario;
console.log('rest operador');
console.log('idade: ' + idade);
console.log('nome: ' + nome);
console.log('resto: ');
console.log(resto);

function multiplicacao(...params) {

  return params.reduce((total, next) => total * next);
}
console.log(multiplicacao(1, 2));


// spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

var usuario2 = { ...usuario, nome: 'Rose' };
console.log(usuario2);

// template literals
console.log(`meu nome é ${nome}`);

// object short syntax

// async / await
const minhaPromisse = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK'), 200 });
  });

minhaPromisse().then(response => {
  console.log(response);
});

/*async function executaPromise(){
  const response = await minhaPromisse();
  console.log(response);
}

executaPromise();*/
const executaPromise = async () => {
  console.log(await minhaPromisse());
}

executaPromise();

import axios from 'axios';

class Api {
  static async getUserInfor(userName) {

    try {
      const response = await
        axios.get(`https://api.github.com/users/${userName}`);
    } catch (error) {
      console.error(error);
    }
    console.log(response);
  }
}

Api.getUserInfor('fsales');

