const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const FakeDB = require('./fake-db');
const productsRoutes = require('./routes/products');
const path = require('path');

mongoose
	.connect(config.DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	})
	.then(() => {
		if (process.env.NODE_ENV !== 'production') {
			const fakeDB = new FakeDB();
			// 必要な時に初期化する
			// fakeDB.initDB();
		}
	});

const app = express();

app.use('/api/v1/products', productsRoutes);

if (process.env.NODE_ENV === 'production') {
	const appPath = path.join(__dirname, '..', 'dist', 'anguler-reservation-app');
	app.use(express.static(appPath));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(appPath, 'index.html'));
	});
}

const PORT = process.env.PORT || '3001';

app.listen(PORT, () => {
	console.log('i am running...');
});
