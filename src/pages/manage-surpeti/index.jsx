import LayoutHoc from '@/HOC/LayoutHoc'
import React from 'react'
import styles from "./log.module.css"
import { Col } from 'antd'
import LabelInputComponent from '@/components/TextFields/labelInput'
import FilledButtonComponent from '@/components/Button'
import Fileuploader from '@/components/FIleUpload'

export default function SearchLog() {

    return (
        <>
            <LayoutHoc>
                <Col className={`${styles.title}`}>
                    <h3>Manage Surpeti</h3>
                </Col>
                <Col className="tableBox fileAttach">
                    <Col className={`${styles.titleBox}`}>
                      <Fileuploader title="Attached File" />
                    </Col>
                    <Col style={{ textAlign: "end", marginTop: "15px" }}>
                        <FilledButtonComponent className="btn submit">Save</FilledButtonComponent>
                    </Col>
                </Col>
            </LayoutHoc>
        </>
    )
}
