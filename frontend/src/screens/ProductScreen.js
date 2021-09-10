import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import axios from 'axios';
 
const ProductScreen = ({match}) => {
    const [product, setItem] = useState({})
    
    useEffect(() => {
        const fetchItem = async () => {
            const {data} = await axios.get(`/item/${match.params.id}`)

            setItem(data)
        }

        fetchItem()
    }, [match]);

    return <>
        <Link className='btn btn-dark my-3' to='/'>
            Go Back
        </Link>
        <Row>
            <Col md={4}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item><h2>{product.name}</h2></ListGroup.Item>
                    <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                    <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                </ListGroup>               
            </Col>
        </Row>
    
    </>
}

export default ProductScreen
