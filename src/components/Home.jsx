import { Card, Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
// import CardProducts from "./CardProducts";
// import Meta from "antd/es/card/Meta";
const { Meta } = Card;


const Home = () => {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/products');
            if (res.data) {
                setProducts(res.data.products);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
        
            <Row gutter={[16,16]}>
                {products.map((item) => (
                    <Col key={item.id} xs={24} sm={12} md={8} lg={6} xl={6}>
                      <Card hoverable style={{width: 240,}} cover={<img alt="example" src={item.thumbnail} style={{width:"240px"}}/>}>
                        <Meta title={item.title} description={`Price: $${item.price}   Rating: ${item.rating}`} />
                      </Card>
                    </Col>
                ))}
            </Row>
           
        </div>
    );
}

export default Home;
