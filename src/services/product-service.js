import axios from 'axios';

class ProductService {
  constructor(){
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/products`,
    });
    this.service = service;
  }

  getAllProducts = () => {
    return this.service.get('/')
    .then(response => response.data)
    .catch(err => console.log(err));
  }

  getSingleProduct = (id) => {
    return this.service.get(`/${id}`)
    .then(response => response.data)
    .catch(err => console.log(err));
  }
}

export default ProductService;