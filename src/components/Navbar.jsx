import React, {useState, useEffect} from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, MenuOutlined, FundOutlined} from '@ant-design/icons';
import icon from '../img/pj-icon.png';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        if(screenSize < 768){
            setActiveMenu(false);
        }else{
            setActiveMenu(true);
        }
    }, [screenSize])

    return (
        <div className="nav-container">
            {activeMenu && (
                <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item >
                        <Link to="/">Electricity</Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to="/services">Graphic & Design</Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to="/member">Business</Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to="/help">Law</Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to="/">Electricity</Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to="/services">Graphic & Design</Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to="/member">Business</Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to="/help">Law</Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to="/">Electricity</Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to="/services">Graphic & Design</Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to="/member">Business</Link>
                    </Menu.Item>
                    <Menu.Item >
                        <Link to="/help">Law</Link>
                    </Menu.Item>
                </Menu>
            )}
        </div>
    )
}

export default Navbar
