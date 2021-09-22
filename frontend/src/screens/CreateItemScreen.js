import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, FormGroup, FormControl as Control } from 'react-bootstrap';
import axios from 'axios';

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

					<FormGroup controlId='formControlsTextarea'>
						<Form.Label>Item Description </Form.Label>
						<Control componentClass='textarea' placeholder='textarea' />
					</FormGroup>

					<FormGroup controlId='Price'>
						<Form.Label> Price </Form.Label>
						<Control type='text' />
					</FormGroup>

					<Form.Group controlId='formFile' className='mb-3'>
						<Form.Label>Insert an Image</Form.Label>
						<Form.Control type='file' />
					</Form.Group>

					<FormGroup controlId='formControlsSelect'>
						<Form.Label> Select Category </Form.Label>
						<Form.Control as='select'>
							<option value='select'>select</option>
							<option value='other'>...</option>
						</Form.Control>
					</FormGroup>

					<Button
						variant='danger'
						size='lg'
						block='block'
						type='submit'
						value='Post Item'
					/>
				</Form>
			</div>
		);
	}
}
