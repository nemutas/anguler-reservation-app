import { Component, OnInit } from '@angular/core';
import { products, ProductType } from '../products';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
	products: ProductType[] = [];

	constructor() {}

	ngOnInit(): void {
		this.products = products;
	}
}
