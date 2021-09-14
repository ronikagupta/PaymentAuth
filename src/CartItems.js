import { React, useState } from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import { Sdata } from './Sdata'
import { Row, Col } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import Authnet from "../src/Authnet"
const { Meta } = Card;


export default function CartItems(props) {

    debugger

    const data = useSelector((state) =>

        state.cardItems.cardData


    )
    const price = useSelector((state) =>

        state.cardItems.totalPrice


    )
    const dispatch = useDispatch()
    console.log("length", data)

    return (
        <div>
            <Row>
                <Col span={12}>
                    <Card title="My Cart" style={{ fontSize: '15px' }}>

                        {data.map((data, index) => (
                            <Card type="inner" title='' extra={<a href="#"></a>}>
                                <img alt="example" height="20%" width="20%" src={data?.imgscr} />
                                <Meta color="red" title={data?.title} description={data?.description} />

                                <div style={{ marginTop: "2%" }}>
                                    <Button>Save for later</Button>
                                    <Button onClick={() => dispatch({ type: "REMOVE_To_Cart", payload: { index: index, data: data.title } })}>Remove</Button>
                                </div>
                            </Card>
                        ))}
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Price details" extra={<a href="#">More</a>} style={{ width: 500, height: 330, marginLeft: "5%", marginTop: "2%" }}>
                        <Row>
                            <Col span={12}>
                                <h6>Price of {data.length} Items</h6>
                                <h6>Discount</h6>
                                <h6>Buy more $ save more</h6>
                                <h6>Delivery Charges</h6>
                            </Col>
                            <Col span={12}>
                                <h6> ${price}</h6>

                                <h6 style={{ color: "red" }}>20% off</h6>
                                <h6 style={{ color: "red" }}>-$12,00</h6>
                                <h6 style={{ color: "red" }}>FREE</h6>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

            <div className="site-button-ghost-wrapper">
                <NavLink to='/Authnet'> <Button type="primary" danger ghost>
                    PLACE ORDER

                </Button></NavLink>
            </div>

        </div >
    )
}
