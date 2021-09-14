import React from 'react'
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Card } from 'antd';
import { Dropdown } from 'antd';
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";


const { Meta } = Card;

const contentStyle = {
    height: '300px',

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: "black",
    background: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'contain',
    backgroundSize: '100vh',
    backgroundImage: `url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwc2hvcHBpbmclMjBob3Jpem9udGFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`
};
const contentStyle1 = {
    height: '300px',

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: "black",
    background: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'contain',
    backgroundSize: '100vh',
    backgroundImage: `url("https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`
};
const contentStyle2 = {
    height: '300px',

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: "black",
    background: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'contain',
    backgroundSize: '100vh',
    backgroundImage: `url("https://images.unsplash.com/photo-1607083205626-956228d6185d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`
};
const contentStyle3 = {
    height: '300px',

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: "black",
    background: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'contain',
    backgroundSize: '100vh',
    backgroundImage: `url("https://images.unsplash.com/photo-1607082349566-187342175e2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`
};

const contentStyle4 = {
    height: '300px',

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: "black",
    background: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'contain',
    backgroundSize: '100vh',
    backgroundImage: `url("https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`
};
const contentStyle5 = {
    height: '300px',

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: "black",
    background: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'contain',
    backgroundSize: '100vh',
    backgroundImage: `url("https://images.unsplash.com/photo-1591375275624-c2f9fdcc1dc2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`
};
const contentStyle6 = {
    height: '300px',

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: "black",
    background: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'contain',
    backgroundSize: '100vh',
    backgroundImage: `url("https://images.unsplash.com/photo-1590065672897-8cd8dc54a530?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`
};
const contentStyle7 = {
    height: '300px',

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor: "black",
    background: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'contain',
    backgroundSize: '100vh',
    backgroundImage: `url("https://images.unsplash.com/photo-1594968973184-9040a5a79963?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`
};

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Mens Collection
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Women Collection
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Kids Collection
            </a>
        </Menu.Item>
    </Menu>
);
const menu1 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                iPhone
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                OnePlus
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Realme
            </a>
        </Menu.Item>
    </Menu>
);
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};
export default function Home() {
    return (
        <div>


            <Card>
                <Card.Grid style={gridStyle} className="fs-5" style={{ height: "1%", width: "14%" }} >
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" ></img>
                    <br></br>
                    <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <Button>Fashion</Button>
                    </Dropdown>
                </Card.Grid>
                <Card.Grid style={gridStyle} className="fs-5" style={{ height: "1%", width: "14%" }}>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"></img>
                    <br></br>
                    <Dropdown overlay={menu1} placement="bottomCenter" arrow>
                        <Button>Mobile</Button>
                    </Dropdown>
                </Card.Grid>
                <Card.Grid style={gridStyle} className="fs-5" style={{ height: "1%", width: "14%" }}>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=10"></img>
                    <br></br>
                    <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <Button>Appliances</Button>
                    </Dropdown>
                </Card.Grid>
                <Card.Grid style={gridStyle} className="fs-5" style={{ height: "1%", width: "14%" }}>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"></img>
                    <br></br>
                    <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <Button>Grocery</Button>
                    </Dropdown>
                </Card.Grid>
                <Card.Grid style={gridStyle} className="fs-5" style={{ height: "1%", width: "14%" }}>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"></img>
                    <br></br>
                    <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <Button>Top Offers</Button>
                    </Dropdown>
                </Card.Grid>
                <Card.Grid style={gridStyle} className="fs-5" style={{ height: "1%", width: "14%" }}>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"></img>
                    <br></br>
                    <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <Button>Electronics</Button>
                    </Dropdown>
                </Card.Grid>
                <Card.Grid style={gridStyle} className="fs-5" style={{ height: "1%", width: "15%" }}>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"></img>
                    <br></br>
                    <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <Button>Beauty/Toys & More</Button>
                    </Dropdown>
                </Card.Grid>
                {/* <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid> */}
            </Card>,

            <Row>
                <Col span={12}>
                    <Carousel autoplay >
                        <div>
                            <h3 style={contentStyle}></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle1}></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle2}></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle3}></h3>
                        </div>

                    </Carousel>,
                </Col>

                <Col span={12}>
                    <Carousel autoplay >
                        <div>
                            <h3 style={contentStyle4}></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle5}></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle6}></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle7}></h3>
                        </div>

                    </Carousel>,
                </Col>
            </Row>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
                <Col className="gutter-row" span={6}>
                    <Card className="ms-5"
                        hoverable
                        style={{ width: 350 }}
                        cover={<img alt="example" src="https://images.unsplash.com/photo-1586038693164-cb7ee3fb8e2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGhvb2RpZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />}
                    >
                        <Meta title="up to 80% off" description="Top Selling" />
                    </Card>,
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card className="ms-5"
                        hoverable
                        style={{ width: 350 }}
                        cover={<img alt="example" src="https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />}
                    >
                        <Meta title="up to 80% off" description="Top Selling" />
                    </Card>,
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card className="ms-5"
                        hoverable
                        style={{ width: 350 }}
                        cover={<img alt="example" src="https://images.unsplash.com/photo-1546938576-6e6a64f317cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Nob29sJTIwYmFnfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />}
                    >
                        <Meta title="up to 80% off" description="Top Selling" />
                    </Card>,
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card
                        className="ms-5"
                        hoverable
                        style={{ width: 350 }}
                        cover={<img alt="example" src="https://images.unsplash.com/photo-1573145757298-85c8a093545d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvY2VyeXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />}
                    >
                        <Meta title="up to 80% off" description="Top Selling" />
                    </Card>,
                </Col>

            </Row>

        </div >
    )
}
