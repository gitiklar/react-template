import React from 'react';
import { Form , Button, Input, Modal, Upload } from 'antd';
import { CheckOutlined, UploadOutlined } from '@ant-design/icons';

const AddNewCandy = ({ isVisible , setIsVisible }) => {
    
    const visibleFalse = () => setIsVisible(false);

    return (
        <div className="newCandyContainer">
            <Modal visible={isVisible} title="Add new candy" onCancel={visibleFalse} footer={[
                <Button form="newCandyForm" key="submit" type="primary" htmlType="submit"> Add </Button>,
                <Button key="back" onClick={visibleFalse}> Return </Button>,]}
            >

                <Form id="newCandyForm" onFinish={()=>{}} name="basic">
                    <Form.Item name="candyName" rules={[{ required: true, message: 'Please enter candy name!',},]}>
                        <Input prefix={<CheckOutlined className="site-form-item-icon" />} placeholder="candy name" />
                    </Form.Item>
                    <Form.Item name="price" rules={[{ required: true, message: 'Please enter candy price!',},]}>
                        <Input prefix={<CheckOutlined />} data-address={true} type="number" placeholder="candy price"/>
                    </Form.Item>
                    <Form.Item name="upload" rules={[{ required: true, message: 'Please upload an image!',}]}  valuePropName="fileList" getValueFromEvent={()=>{}}>
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default AddNewCandy;