import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css'

function Main() {
    //cria um array vazio de products
    const [products, setproducts] = useState([]);
    //cria um objeto vazio para as informações da pagina de produtos
    const [productInfo, setproductInfo] = useState({});
    const [page, setPage] = useState(1)

    //insere no array os dados que foram carregados acima
      
    
    useEffect(async(page = 1) => { 
        const response = await api.get(`/products?page${page}`) ;

        const {docs, ...productInfo} = response.data;
        
    //carrega do backend os dados para inserir no array

        setproducts(response.data.docs);
        setproductInfo(response.data.productInfo);
               
    }, []);

    function nextPage () {
        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

    };

    //mosta na tela (componente) o array carregado (map)
    return (
        <div className="product-list">
            {products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>

                    <a href="">Acessar</a>
                </article>
            ))}
            <div className="actions">
                <button >Anterior</button>
                <button onClick={nextPage}>Próxima</button>
            </div>
        </div>
    );
}

export default Main;