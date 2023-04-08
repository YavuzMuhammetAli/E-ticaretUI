import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:5244/api/';

  constructor(private hhtpClient: HttpClient) {}

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+"products/getall"
    return this.hhtpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+"products/getbycategory?id="+categoryId;
    return this.hhtpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<ResponseModel>{
    return this.hhtpClient.post<ResponseModel>(this.apiUrl+"products/add",product)
  }
}
