import React from 'react';
import 'antd/dist/antd.css';

import Payment from './payment';

const BuyOnline = () => {

    return (
      <div className="buyOnlineContainer">
            <div className="topBuyOnlineContainer">
                <Payment/>
            </div>
            <div className="buyOnlineGalery">
                buyOnlineGalery 
            </div>
      </div>
    );
};

export default BuyOnline;