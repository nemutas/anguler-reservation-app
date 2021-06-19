const Product = require('./model/product');

class FakeDB {
	constructor() {
		this.products = [
			{
				name: 'Phone XL',
				price: 799,
				description: 'A large phone with one of the best screens',
				coverImage: './assets/img/phone-cover.jpg',
				heading1: {
					title: 'サンプルテキスト1',
					description: 'sample text sample text sample text sample text sample text sample text'
				},
				heading2: {
					title: 'サンプルテキスト2',
					description:
						'sample sample sample sample sample sample sample sample sample sample sample'
				},
				heading3: {
					title: 'サンプルテキスト3',
					description:
						'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
				}
			},
			{
				name: 'Phone Mini',
				price: 699,
				description: 'A great phone with one of the best cameras',
				coverImage: './assets/img/phone-cover.jpg',
				heading1: {
					title: 'サンプルテキスト1',
					description: 'sample text sample text sample text sample text sample text sample text'
				},
				heading2: {
					title: 'サンプルテキスト2',
					description:
						'sample sample sample sample sample sample sample sample sample sample sample'
				},
				heading3: {
					title: 'サンプルテキスト3',
					description:
						'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
				}
			},
			{
				name: 'Phone Standerd',
				price: 299,
				description: '',
				coverImage: './assets/img/phone-cover.jpg',
				heading1: {
					title: 'サンプルテキスト1',
					description: 'sample text sample text sample text sample text sample text sample text'
				},
				heading2: {
					title: 'サンプルテキスト2',
					description:
						'sample sample sample sample sample sample sample sample sample sample sample'
				},
				heading3: {
					title: 'サンプルテキスト3',
					description:
						'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
				}
			},
			{
				name: 'Phone Special',
				price: 999,
				description: '',
				coverImage: './assets/img/phone-cover.jpg',
				heading1: {
					title: 'サンプルテキスト1',
					description: 'sample text sample text sample text sample text sample text sample text'
				},
				heading2: {
					title: 'サンプルテキスト2',
					description:
						'sample sample sample sample sample sample sample sample sample sample sample'
				},
				heading3: {
					title: 'サンプルテキスト3',
					description:
						'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
				}
			}
		];
	}

	async initDB() {
		await this.cleanDB();
		this.pushProductsToDB();
	}

	async cleanDB() {
		await Product.deleteMany({});
	}

	pushProductsToDB() {
		this.products.forEach(product => {
			const newProduct = new Product(product);
			newProduct.save();
		});
	}

	seeDB() {
		this.pushProductsToDB();
	}
}

module.exports = FakeDB;
