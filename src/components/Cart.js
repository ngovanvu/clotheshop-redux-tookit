import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { deletePro } from "../store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const productCart = useSelector((state) => state.cart);
  const deleteProduct = (id) => {
    dispatch(deletePro(id));
  };
  const cards = productCart.map((products) => (
    <div className="col-md-12">
      <Card style={{ width: "18rem", height: "100%" }} key={products.id}>
        <div className="text-center">
          <Card.Img variant="top" src={products.image} style={{ width: "100px", height: "130px", textAlign: "center" }} />
        </div>

        <Card.Body>
          <Card.Title>{products.title}</Card.Title>
          <Card.Text>Price:{products.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={() => deleteProduct(products.id)}>
            Delete
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
};

export default Cart;
