import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';
import { ProductService } from './shared/product.service';

const routes: Routes = [
	{
		path: 'products',
		component: ProductComponent,
		children: [
			{ path: '', component: ProductListComponent },
			{ path: ':productId', component: ProductDetailComponent }
		]
	}
];

@NgModule({
	declarations: [ProductComponent, ProductDetailComponent, ProductListComponent],
	imports: [RouterModule.forChild(routes), CommonModule],
	providers: [ProductService],
	bootstrap: []
})
export class ProductModule {}
