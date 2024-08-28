import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutHoc from '@/HOC/LayoutHoc';
import styles from "../category.module.css";
import { Col } from 'antd';
import LabelInputComponent from '@/components/TextFields/labelInput';
import FilledButtonComponent from '@/components/Button';
import Link from 'next/link';
import { SVG } from '@/assest/svg';
import { addCategory } from '@/features/category/categorySlice';
import { useRouter } from 'next/router';
export default function AddCategory() {
    const [categoryName, setCategoryName] = useState('');
    const [categoryImage, setCategoryImage] = useState(null);
    const dispatch = useDispatch();
    const router = useRouter();
    const { status, error } = useSelector((state) => state.category);

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('CategoryName', categoryName);
        console.log('form data',formData)
        formData.append('image', categoryImage);
        dispatch(addCategory(formData));
        router.back();
    };

    return (
        <LayoutHoc>
            <Col className={`${styles.title}`}>
                <h3 style={{ position: "relative", top: "6px" }}>Add Category</h3>
                <Link href="/manage-raag-sub-raag">
                    <FilledButtonComponent>
                        <SVG.Arrow /> Back
                    </FilledButtonComponent>
                </Link>
            </Col>
            <Col className="tableBoxed tableBox">
                <Col>
                    <LabelInputComponent 
                        type="text" 
                        title="Category Name" 
                        value={categoryName} 
                        onChange={(e) => setCategoryName(e.target.value)} 
                    />
                </Col>
                <Col>
                    <LabelInputComponent 
                        type="file" 
                        enctype="multipart/form-data"
                        title="Category Image" 
                        onChange={(e) => setCategoryImage(e.target.files[0])} 
                    />
                </Col>
                <Col style={{ textAlign: "end", marginTop: "15px" }}>
                    <FilledButtonComponent className="btn submit" onClick={handleSubmit}>
                        Save
                    </FilledButtonComponent>
                </Col>
            </Col>
            {status === 'loading' && <p>Saving category...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
        </LayoutHoc>
    );
}
