import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {

  componentDidMount() {
    /*executa ação após a criação do componente*/
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');
    console.log(response);
  };

  render() {
    return <h1>hello</h1>
  }
}