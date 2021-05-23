import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const Register = () => {

    return (
        <div className="registerContainer">
            <div className="form-container">
                <Form dir="ltr" className="form" onFinish={()=>{}}>
                    <Form.Item name="username" rules={[{ required: true, message: 'Please enter username!',},]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="username" />
                    </Form.Item>
                    <Form.Item name="email" rules={[{ required: true, message: 'Please enter email!',}, 
                                                    {type: 'email', message: 'The input is not valid E-mail!',},]}>
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="email" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: 'Please enter password!', 
                                min: 6, message: 'The password must be at least 6 characters long!', },]}>
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="password"/>
                    </Form.Item>
                    
                    <Form.Item name="confirm-password" rules={[{ required: true, message: 'Please confirm your password!', },
                        ({ getFieldValue }) => ({ validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),]}>
                        <Input  prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="confirm password"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="colorWhite">Register</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
  );
};

export default Register;