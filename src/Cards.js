import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
// import mapDispatchToProps from '../'
import { Radio } from 'antd';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Button } from 'antd';
import { Store } from '@material-ui/icons';
import { Sdata } from './Sdata'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../src/Services/Actions/actions";
import CartItems from "./CartItems";
import "./Css/Button.css"





const { Meta } = Card;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

export default function Cards(props) {

    const dispatch = useDispatch()
    debugger
    const data = useSelector((state) =>
        state.cardItems


    )
    // console.warn("App", data)
    console.log(".....card", data)
    return (
        <Card className="mt-5"
            hoverable
            style={{ width: 350, marginRight: "2%", marginLeft: "7%" }}
            cover={<img alt="example" src={props.cards.imgscr} />}
        >
            <Meta title={props.cards.title} description={props.cards.description} />
            <div className="site-button-ghost-wrapper mt-3">
                <Button onClick={() => dispatch({ type: "ADD_TO_CART", payload: props.cards })} ghost >ADD TO CART</Button>
                <Button onClick={() => dispatch({ type: "Remove_To_Cart" })} ghost className="ms-1">REMOVE TO CART</Button>
            </div>

        </Card>

    );
}
