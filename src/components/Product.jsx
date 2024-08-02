import {useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Product = () =>{
  const[products, getProducts]=useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
  .then(data => data.json())
    .then(result => getProducts(result))
  })

  return(
    
    <>
      <div className='container'>
      <div className='row' style={{ marginBottom: '10px' }}>
        {products.map((product, index) => (
          <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4' key={index}>
            <Card className='h-100 d-flex flex-column'>
              <Card.Img style={{ width: '100%', height: '200px', objectFit: 'cover' }} variant="top" src={product.image} />
              <Card.Body className='d-flex flex-column'>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className='mb-4'>INR: {product.price}</Card.Text>
                <Button className='mt-auto' variant="primary">Add To Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </>

      

       
  )
}
export default Product;
