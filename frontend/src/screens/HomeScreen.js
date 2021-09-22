import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listItems } from '../actions/itemActions';

const HomeScreen = () => {
	const dispatch = useDispatch();

	const itemList = useSelector((state) => state.itemList);
	const { loading, error, items } = itemList;

	useEffect(() => {
		dispatch(listItems());
	}, [dispatch]);

	return (
		<>
			<h1>Latest Products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					{items.map((item) => (
						<Col key={item._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={item} />
						</Col>
					))}
				</Row>
			)}
		</>
	);
};

export default HomeScreen;
