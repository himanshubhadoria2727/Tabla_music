import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, Upload } from 'antd';

const Fileuploader = ({ title, setFieldValue, index, name }) => {
    const [fileList, setFileList] = useState([

    ]);
    const handleChange = ({ fileList: newFileList, }) => {

        console.log(newFileList, "cheking");
        console.log(name, "efhehfuefuu");
        if (name) {
            setFieldValue(name, newFileList[0])
        }
        setFileList(newFileList)
    };


    return (
        <>
            <Col>
                {title && <label>{title}</label>}
                <Upload
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    listType="picture"
                    fileList={fileList}

                    onChange={handleChange}
                >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </Col>
        </>
    );
}
export default Fileuploader;