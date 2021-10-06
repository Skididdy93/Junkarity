import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, FormGroup, FormControl as Control } from 'react-bootstrap';
import axios from 'axios';
import { bgWhite } from 'colors';

export default class PostItem extends Component {
	constructor(props) {
		super(props);

		// Setting up functions
		this.onChangeItemName = this.onChangeItemName.bind(this);
		this.onChangeItemDescription = this.onChangeItemDescription.bind(this);
		this.onChangeItemPrice = this.onChangeItemPrice.bind(this);
		this.onChangeItemImage = this.onChangeItemImage.bind(this);
		this.onChangeItemCategory = this.onChangeItemCategory.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		// Setting up state
		this.state = {
			name: '',
			description: '',
			price: '',
			image: '',
			category: '',
		};
	}

	onChangeItemName(e) {
		this.setState({ name: e.target.value });
	}

	onChangeItemDescription(e) {
		this.setState({ description: e.target.value });
	}

	onChangeItemPrice(e) {
		this.setState({ price: e.target.value });
	}

	onChangeItemImage(e) {
		this.setState({ image: e.target.value });
	}

	onChangeItemCategory(e) {
		this.setState({ category: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		console.log(`Item successfully posted!`);
		console.log(`Name: ${this.state.name}`);
		console.log(`Description: ${this.state.description}`);
		console.log(`Price: ${this.state.price}`);
		console.log(`Image: ${this.state.image}`);
		console.log(`Category: ${this.state.category}`);

		const itemObject = {
			name: this.state.name,
			description: this.state.description,
			price: this.state.price,
			image: this.state.image,
			category: this.state.category,
		};
		axios
			.post('http://localhost:3000/item/post-item', itemObject)
			.then((res) => console.log(res.data));

		this.setState({
			name: '',
			description: '',
			price: '',
			image: '',
			category: '',
		});
	}

	render() {
		return (
			<div class='form-wrapper'>
				<Form onSubmit={this.onSubmit}>
					<FormGroup controlId='Name'>
						<Form.Label> Title </Form.Label>
						<Control type='text' />
					</FormGroup>

					<div class='form-group'>
						<label for='itemDescription' class='form-label mt-4'>
							Description
						</label>
						<textarea
							class='form-control'
							id='itemDescription'
							rows='3'
							spellcheck='false'
						></textarea>
					</div>

					<div class='input-group mb-3'>
						<span class='input-group-text'>$</span>
						<input type='text' class='form-control' aria-label='Price' />
						<span class='input-group-text'>.00</span>
					</div>

					<div class='form-group'>
						<label for='itemImage' class='form-label mt-4'>
							Attach Photo
						</label>
						<input
							class='form-control'
							type='file'
							id='itemImage'
							background-color={bgWhite}
						/>
					</div>

					<div class='form-group'>
						<label for='CategorySelect' class='form-label mt-4'>
							Item Category
						</label>
						<select
							class='form-select'
							id='CategorySelect'
							default='Pick a Category'
							background-color={bgWhite}
						>
							<option>Electronics</option>
							<option>Sports/Outdoors</option>
							<option>Home Goods</option>
							<option>Accessories</option>
							<option>Other</option>
						</select>
					</div>

					<Button
						variant='danger'
						size='lg'
						block='block'
						type='submit'
						value='Post Item'
					>
						Post Item
					</Button>
				</Form>
			</div>
		);
	}
}
