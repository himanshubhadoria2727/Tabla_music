import LayoutHoc from '@/HOC/LayoutHoc'
import { Col } from 'antd'
import React, { useState } from 'react'
import styles from "./category.module.css"
import LabelInputComponent from '@/components/TextFields/labelInput'
import SelectDropdownComponent from '@/components/TextFields/selectDropdown'
import FilledButtonComponent from '@/components/Button'
import DataTable from '@/components/Datatable'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/assest/images'

import { SVG } from '@/assest/svg'

export default function ManageCategory() {
   

    const data = [
        {
            key: "1",
            serial_no: "1",
            creation_date: "26.7.2023",
            raag_name: "Raag Bahar",
            taal_name: "Bhimpalasi",
            category_image: (
                <Image src={IMAGES.Logo} alt="" style={{ width: "100px", height: "60px", objectFit: "contain" }} />
            ),
            option: (
                <>
                    <Col className={`${styles.optionBtn}`}>
                        {/* <Link href="/manage-raag-sub-raag/edit-category">
                            <span className={`${styles.editBtn}`}> <SVG.Edit /> </span>
                        </Link> */}
                        <Link href="#">
                            <Image src={IMAGES.Delete} alt="" style={{ width: "20px", height: "20px", objectFit: "contain" }} />
                        </Link>
                    </Col>
                </>
            ),
        },

    ];

    const columns = [
        {
            title: "S.NO",
            dataIndex: "serial_no",
            key: "serial_no",
            width: "25%",
        },
        {
            title: "Creation Date",
            dataIndex: "creation_date",
            key: "creation_date",
            width: "25%",
        },

        {
            title: "Raag Name",
            dataIndex: "raag_name",
            key: "raag_name",
            width: "25%",
            searchable: true
            // ...getColumnSearchProps("name"),
        },

        {
            title: "Taal Name",
            dataIndex: "taal_name",
            key: "taal_name",
            width: "25%",
            searchable: true
            // ...getColumnSearchProps("name"),
        },

        {
            title: "Category Image",
            dataIndex: "category_image",
            key: "category_image",
            width: "20%",
            searchable: true
            // ...getColumnSearchProps("slug"),
        },


        {
            title: "Action",
            dataIndex: "option",
            key: "option",
        },
    ];


    return (
        <div>
            <LayoutHoc>
                <Col className={`${styles.title}`}>
                    <h3 style={{    position: "relative",top: "11px"}}>Manage Raag & Taal</h3>
                    <Col>
                        <Link href="/manage-raag-sub-raag/add-sub-category">  <FilledButtonComponent>Add Sub Category</FilledButtonComponent></Link>
                        <Link href="/manage-raag-sub-raag/add-category">  <FilledButtonComponent>Add Category</FilledButtonComponent></Link>
                    </Col>
                </Col>
                
                <Col className="tableBox">
                    <DataTable rowData={data} colData={columns} />
                </Col>
            </LayoutHoc>
        </div>
    )
}
