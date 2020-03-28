import axios from 'axios';

class ProductService {
  constructor(){
    let service = axios.create({
      baseURL: 'http://localhost:5000/api/products',
    });
    this.service = service;
  }
}

export default ProductService;