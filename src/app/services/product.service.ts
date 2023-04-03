import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:5244/api/products/getall';

  constructor(private hhtpClient: HttpClient) {}

  getProducts():Observable<ProductResponseModel> {
    return this.hhtpClient.get<ProductResponseModel>(this.apiUrl);
  }
}
