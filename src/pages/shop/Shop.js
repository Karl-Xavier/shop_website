import React from "react";
import PRODUCTS from "../../product";
import Products from "./Products";
/* import 'bootstrap/dist/css/bootstrap.min.css'
 */
import { Container, Row } from "react-bootstrap";
function Shop(){
    return (
        <Container>
            <div className="shopTitle">
                <h1 className="my-4 py-3" style={{textAlign: "center",}}>Casual and Office Wear</h1>
            </div>
            <Container>
            <Row>
                {PRODUCTS.map((product) => {
                    return <Products
                        data={product}
                    />
                })}
            </Row>
            </Container>
        </Container>
    );
}
export default Shop