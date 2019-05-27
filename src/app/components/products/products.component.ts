import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/domain/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: string[] = ['Café', 'Thé', 'Jus d\'orange', 'Coca-Cola'];
  products2: IProduct[] = [
    { id: 'P100', name: 'Café', unitPrice: 2.5 },
    { id: 'P200', name: 'Thé', unitPrice: 3.5 },
    { id: 'P300', name: 'Jus d\'orange', unitPrice: 1.5 },
    { id: 'P400', name: 'Coca-Cola', unitPrice: 4.5 }
  ];

  constructor() { }
}
