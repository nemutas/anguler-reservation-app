import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, ProductType } from '../products';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
	product: ProductType | null;

	constructor(private route: ActivatedRoute) {
		this.product = null;
	}

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			this.product = products[+params.get('productId')!];
		});
	}
}
