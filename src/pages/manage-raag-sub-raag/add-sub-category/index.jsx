import LayoutHoc from '@/HOC/LayoutHoc'
import React, { useState } from 'react'
import styles from "../category.module.css"
import { Col } from 'antd'
import LabelInputComponent from '@/components/TextFields/labelInput'
import FilledButtonComponent from '@/components/Button'
import Link from 'next/link'
import { SVG } from '@/assest/svg'
import SearchCategory from '../add-category/component/search-category'

export default function AddSubCategory() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
    };
    const categoryOptions = [
        {
            label: 'Select Category',
            options: [
                {
                    label: 'Jack',
                    value: 'jack',
                },
                {
                    label: 'Lucy',
                    value: 'lucy',
                },
            ],
        },
    ];
    return (
        <>
            <LayoutHoc>
                <Col className={`${styles.title}`}>
                    <h3 style={{    position: "relative",top: "11px"}}>Add Sub Category</h3>
                    <Link href="/manage-raag-sub-raag">  <FilledButtonComponent> <SVG.Arrow /> Back</FilledButtonComponent></Link>
                </Col>
                <Col className="tableBox ">
                    <Col className='subCategory'>
                        <SearchCategory
                            title="Category"
                            options={categoryOptions}
                            onCategoryChange={handleCategoryChange}
                        />
                        {selectedCategory && (
                            <>
                                <Col style={{ marginTop: '21px' }}>
                                    <LabelInputComponent title="Sub Category" type="search" />
                                </Col>

                            </>
                        )}
                        <Col style={{ textAlign: 'end', marginTop: '16px' }}>
                            <FilledButtonComponent className="btn submit">Save</FilledButtonComponent>
                        </Col>
                    </Col>
                </Col>
            </LayoutHoc>
        </>
    )
}
