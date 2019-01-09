import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../models/product_interface';

@Injectable()
export class ProductService {
  private currentProduct: Product;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('../../assets/data/index.json');
  }

  setCurrentProduct(product: Product) {
    this.currentProduct = product;
  }

  getCurrentProduct(): Product {
    return this.currentProduct;
  }
}

