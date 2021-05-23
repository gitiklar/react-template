import React, { useState } from 'react';
import { Form , Button, Input, Modal, Tooltip } from 'antd';
import { UserAddOutlined , IdcardOutlined , CreditCardOutlined , ContactsOutlined  , ShoppingCartOutlined } from '@ant-design/icons';

import useIndicationMessage from '../customHooks/useIndicationMessage';

const Payment = () => {
    const [ isVisible , setIsVisible ] = useState(false);
   
    useIndicationMessage();

    const handleOk = () =>  {
        visibleFalse();
    }
    
    const visibleFalse = () => setIsVisible(false);

    const forPaymentHandler = () => {
        setIsVisible(true);
    }

    return (
        <div className="paymentContainer">
            <Tooltip placement="top" title="For payment">
                <button onClick={forPaymentHandler}><ShoppingCartOutlined/></button>
            </Tooltip>
            <Modal visible={isVisible} title="Payment" onCancel={visibleFalse} footer={[
                <Button form="paymentForm" key="submit" type="primary" htmlType="submit"> Order completion </Button>,
                <Button key="back" onClick={visibleFalse}> Return </Button>,]}
            >

                <Form id="paymentForm" onFinish={handleOk} name="basic">
                    <Form.Item>
                        <Input prefix={<UserAddOutlined />} placeholder="name" />
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<IdcardOutlined />} placeholder="card number" />
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<ContactsOutlined />} placeholder="expiration date" />
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<CreditCardOutlined/>} placeholder="cvv"/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default Payment;