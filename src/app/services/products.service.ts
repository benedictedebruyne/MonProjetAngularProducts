import { Injectable } from '@angular/core';
import { IProduct } from '../domain/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public getAllProducts(): IProduct[] {
    return [
      { id: 'P100', name: 'Café', unitPrice: 2.5 },
      { id: 'P200', name: 'Thé', unitPrice: 3.5 },
      { id: 'P300', name: 'Jus d\'orange', unitPrice: 10.5 },
      { id: 'P400', name: 'Coca-Cola', unitPrice: 4.5 }
    ];
  }
}
