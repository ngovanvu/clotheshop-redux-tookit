import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlide";
import StatusCode from "../utils/StatusCode";
const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  // const [products, getProducts1] = useState([]);
  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getProducts(result));
    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING) {
    return <p>loading...</p>;
  }
  if (status === StatusCode.ERROR) {
    return <p>something went wrong! try again later...</p>;
  }
  const addToCart = (product) => {
    dispatch(add(product));
  };
  const cards = products.map((products) => (
    <div className="col-md-3">
      <Card style={{ width: "18rem", height: "100%" }} key={products.id}>
        <div className="text-center">
          <Card.Img variant="top" src={products.image} style={{ width: "100px", height: "130px", textAlign: "center" }} />
        </div>

        <Card.Body>
          <Card.Title>{products.title}</Card.Title>
          <Card.Text>Price:{products.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={() => addToCart(products)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product</h1>
      {/* {JSON.stringify(products)} */}
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
