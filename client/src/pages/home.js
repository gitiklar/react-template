import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';

import logoImg from '../../styles/images/logo.jpg';
import StoreManagement from '../components/storeManagement';
import Statistics from '../components/statistics';
import BuyOnline from '../components/buyOnline';
import { useSelector } from 'react-redux';

const Home = () => {
    const { username , role } = useSelector(state => state.userReducer.loggedInUserFormData);

    return (
        <div className="homeContainer">
            <header id="header">
                <Link to="/"><img src={logoImg} alt="logo"/></Link>
                 <div className="divHello">
                    <span> &nbsp; &nbsp; Hello { username } &nbsp;</span>
                    { role === 'guest' &&  <Link to="/login"><u>Login</u>&nbsp;&nbsp;</Link> }
                    { role !== 'guest' &&  <Button onClick = { ()=>{} }><u>Logout</u></Button> }
                 </div>
            </header>
            <div id="heading" >
                <div className="menuLine">
                    <Link to="/">Home</Link>
                    <Link to="/home/buy-online">Buy online</Link>
                    <Link to="/home/store-management">Store management</Link>
                    <Link to="/home/statistics">Statistics</Link>
                </div>
            </div>
            <section id="main" className="wrapper">
                <div className="inner">
                    <Route path = "/home/store-management" component = { StoreManagement }/>
                    <Route path = "/home/statistics" component = { Statistics }/>
                    <Route path = "/home/buy-online" component = { BuyOnline }/>
                </div>
            </section>
        </div>
    );
};

export default Home;