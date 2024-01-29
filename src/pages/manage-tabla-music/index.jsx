import LayoutHoc from "@/HOC/LayoutHoc";
import { Col, Row } from "antd";
import React, { useState } from "react";
import styles from "./styles.module.css"
import Datatable from "@/components/Datatable";
import Image from "next/image";
import Link from "next/link";

import { IMAGES } from "@/assest/images";

import FilledButtonComponent from "@/components/Button";

function ManageTabla() {

    const data = [
        {
            key: "1",
            raag_name: "Bageshree",
            sub_raag: "Bageshree",
            pitch: "C#",
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
            title: "Taal Name",
            dataIndex: "raag_name",
            key: "name",
            width: "20%",
            searchable: true
            // ...getColumnSearchProps("name"),
        },

        {
            title: "Sub Taal Name",
            dataIndex: "sub_raag",
            key: "sub_raag",
            width: "20%",
            searchable: true
            // ...getColumnSearchProps("slug"),
        },
        {
            title: "Pitch",
            dataIndex: "pitch",
            key: "pitch",
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
                <Row className={`${styles.rowTag}`} >
                    <Col md={14}>
                        <h3 style={{    position: "relative",top: "11px"}}>Manage Tabla Music</h3>
                    </Col>
                    <Col md={10}>
                        <Col style={{textAlign:"end"}}>
                        <Link href="/manage-tabla-music/add-tabla-music">  <FilledButtonComponent>Add</FilledButtonComponent></Link>
                        </Col>
                    </Col>
                </Row>

            </Col>
            <Col className="tableBox">

                <Datatable rowData={data} colData={columns} />
            </Col>
        </LayoutHoc>
    );
}

export default ManageTabla;
