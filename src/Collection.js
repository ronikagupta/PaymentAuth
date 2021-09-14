
import { Card } from 'antd';
import { Row, Col } from 'antd';
import React, { Component, useState } from 'react';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
// import mapDispatchToProps from '../'
import { Radio } from 'antd';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Button } from 'antd';
import { Store } from '@material-ui/icons';
import { Sdata } from './Sdata'
import { data } from 'browserslist';
import Cards from './Cards'





const { Meta } = Card;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};





function Collection(props) {
    console.warn("Home", props)




    return (
        <div >
            <div className="" style={{ display: 'flex', flexWrap: 'wrap', }}>
                {Sdata.map((data) => (
                    <Cards cards={data} />

                ))}
            </div ></div>
    )
}
export default Collection
