const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDB = require('./fake-db');
const productsRoutes = require('./routes/products');

mongoose
	.connect(config.DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	})
	.then(() => {
		const fakeDB = new FakeDB();
		fakeDB.initDB();
	});

const app = express();

app.use('/api/v1/products', productsRoutes);

const PORT = process.env.PORT || '3001';

app.listen(PORT, () => {
	console.log('i am running...');
});
