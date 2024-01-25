import LayoutHoc from '@/HOC/LayoutHoc'
import React from 'react'
import styles from "../category.module.css"
import { Col } from 'antd'
import LabelInputComponent from '@/components/TextFields/labelInput'
import FilledButtonComponent from '@/components/Button'
import Link from 'next/link'
import { SVG } from '@/assest/svg'


export default function AddCategory() {
    return (
        <>
            <LayoutHoc>
                <Col className={`${styles.title}`}>
                    <h3 style={{    position: "relative",top: "6px"}}>Add Category</h3>
                    <Link href="/manage-raag-sub-raag">  <FilledButtonComponent> <SVG.Arrow /> Back</FilledButtonComponent></Link>
                </Col>
                <Col className="tableBoxed tableBox">
                    <Col >
                        <LabelInputComponent type="text" title="Category Name" />
                    </Col>

                    <Col>
                        <LabelInputComponent type="file" title="Category Image" />
                    </Col>
                    <Col style={{ textAlign: "end", marginTop: "15px" }}>
                        <FilledButtonComponent className="btn submit">Save</FilledButtonComponent>
                    </Col>
                </Col>
            </LayoutHoc>
        </>
    )
}
