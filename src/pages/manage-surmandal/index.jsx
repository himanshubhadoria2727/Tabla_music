import React, { useState } from 'react';
import { Col, Row, Button } from 'antd';
import LayoutHoc from '@/HOC/LayoutHoc';
import FilledButtonComponent from '@/components/Button';
import styles from "./styles.module.css";

import Link from 'next/link';
import DataTable from '@/components/Datatable';
import Image from 'next/image';
import { IMAGES } from '@/assest/images';

export default function ManageTanpura() {
   
    const data = [
        {
            key: "1",
            pitch: "C#",
            type: "SA-PA",
            files: "24 ",

            option: (
                <Link href="#">
                    <Image src={IMAGES.Delete} alt="" style={{ width: "20px", height: "20px", objectFit: "contain" }} />
                </Link>
            ),
        },

    ];

    const columns = [

        {
            title: "Pitch",
            dataIndex: "pitch",
            key: "pitch",
            width: "20%",
            searchable: true
            // ...getColumnSearchProps("date"),
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
            width: "20%",
            searchable: true
            // ...getColumnSearchProps("date"),
        },
        {
            title: "Files",
            dataIndex: "files",
            key: "files",
            width: "40%",
            searchable: true
            // ...getColumnSearchProps("code"),
        },

        {
            title: "Action",
            dataIndex: "option",
            key: "option",
        },
    ];

    return (
        <LayoutHoc>
            <Col className={`${styles.title}`}>
                <Row className={`${styles.rowTag}`}>
                    <Col md={14}>
                        <h3 style={{    position: "relative",top: "11px"}}>Manage Surmandal</h3>
                    </Col>
                    <Col md={10}>
                        <Col style={{textAlign:"end"}}>
                        <Link href="/manage-surmandal/add-surmandal">  <FilledButtonComponent>Add</FilledButtonComponent></Link>
                        </Col>
                    </Col>
                </Row>

            </Col>
            <Col className="tableBox">

                <DataTable rowData={data} colData={columns} />
            </Col>
        </LayoutHoc>
    );
}
