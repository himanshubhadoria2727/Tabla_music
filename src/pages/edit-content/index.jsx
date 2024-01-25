import LayoutHoc from '@/HOC/LayoutHoc'
import { Col } from 'antd'
import styles from "./content.module.css"
import React from 'react'
import LabelInputComponent from '@/components/TextFields/labelInput'
import MyQuillEditor from '@/components/TextFields/textArea'
import FilledButtonComponent from '@/components/Button'
import { SVG } from '@/assest/svg'
import Link from 'next/link'
import BannerUpload from './component/BannerUpload'

export default function EditContent() {
    return (
        <>
            <LayoutHoc>
                <Col className={`${styles.title}`}>
                    <h3>Edit Content</h3>
                  <Link href="/manage-content">  <FilledButtonComponent> <SVG.Arrow/> Back</FilledButtonComponent></Link>
                </Col>
                <Col className="tableBox">
                    <Col>
                        <LabelInputComponent title="Heading" />
                        <BannerUpload title="Manage Banner" />
                        <MyQuillEditor label="Description" />
                        <Col style={{ textAlign: "end", marginTop:"20px", marginBottom:"15px" }}>
                            <FilledButtonComponent className="btn submit">Save</FilledButtonComponent>
                        </Col>
                    </Col>
                </Col>
            </LayoutHoc>
        </>
    )
}
