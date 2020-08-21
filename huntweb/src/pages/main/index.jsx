import React, { Component } from 'react';
import api from '../../services/api'

export class Main extends Component {
    //variavel (state) armazena a informação do backend
    state = {
        products: [],

    }

    componentDidMount() {
        this.loadProducts();
    }
    //função para carregar as informações do backend
    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState({ products: response.data.docs})
}

render() {
    return (
        <div className="product-list">
            {this.state.products.map(product => (
                <h2 key={product._id}>{product.title}</h2>
            ))}
        </div>
    )
}
}

export default Main
