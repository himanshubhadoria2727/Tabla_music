import LayoutHoc from '@/HOC/LayoutHoc'
import { Col, Row } from 'antd'
import React from 'react'
import styles from "./dashboard.module.css"
import DateRangePickerComponent from "@/components/TextFields/datepicker";

export default function Dashboard() {
    const Data = [
        { id: 1, total: 30, title:"Total Paid Users" },
        { id: 2, total: "$300", title:"Total Amount" },
        { id: 3, total: 17, title:"Total Hours" },
        { id: 4, total: 10, title:"Total Free Users" },
       
       
      ];
    return (
        <>
            <LayoutHoc>
                <Col className={`${styles.title}`}>
                    <h3>Dashboard</h3>
                    <DateRangePickerComponent />
                </Col>
                <Row>
                    {Data.map((data) => (
                        <Col key={data.id} md={6}>
                            <Col className={`${styles.card}`}>
                                <h4>{data.title}</h4>
                                <span>{data.total}</span>
                            </Col>
                        </Col>
                    ))}

                </Row>
            </LayoutHoc>
        </>
    )
}
