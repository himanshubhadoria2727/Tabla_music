import React, { useState } from 'react';
import { Col, Row, Button } from 'antd';
import styles from "../styles.module.css";
import LayoutHoc from '@/HOC/LayoutHoc';
import SearchCategory from '@/components/search-category';
import Fileuploader from '@/components/FIleUpload';
import LabelInputComponent from '@/components/TextFields/labelInput';
import FilledButtonComponent from '@/components/Button';
import Link from 'next/link';
import { SVG } from '@/assest/svg';


export default function AddTanpura() {
    const dynamicOptions = [
        {
            value: 'C',
            label: 'C',
        },
        {
            value: 'C#',
            label: 'C#',
        },
        {
            value: 'D',
            label: 'D',
        },
        {
            value: 'D#',
            label: 'D#',
        },
        {
            value: 'E',
            label: 'E',
        },
        {
            value: 'F',
            label: 'F',
        },
        {
            value: 'F#',
            label: 'F#',
        },
        {
            value: 'G',
            label: 'G',
        },
        {
            value: 'G#',
            label: 'G#',
        },
        {
            value: 'F',
            label: 'F',
        },
        {
            value: 'F#',
            label: 'F#',
        },
        {
            value: 'B',
            label: 'B',
        },
    ];

    const MusicOptions = [
        {
            value: 'SA-PA',
            label: 'SA-PA',
        },
        {
            value: 'SA-MA',
            label: 'SA-MA',
        },
        {
            value: 'SA-NI',
            label: 'SA-NI',
        },
    ];

    const [selectedValue, setSelectedValue] = useState('C#');
    const [musicValue, setMusicValue] = useState('SA-PA');


    const handleCategoryChange = (value) => {
        setSelectedValue(value);
    };

    const handleMusicChange = (value) => {
        setMusicValue(value);
    };



    return (
        <LayoutHoc>
            <Col className={styles.title}>
                <h3>Add Tanpura Music</h3>
                <Link href="/manage-tanpura">  <FilledButtonComponent> <SVG.Arrow /> Back</FilledButtonComponent></Link>
            </Col>
            <Col className="tableBox">
                <Col className={styles.titleBox}>
                    <SearchCategory
                        title="Select Pitch"
                        defaultValue={selectedValue}
                        onChange={handleCategoryChange}
                        options={dynamicOptions}
                    />
                </Col>
                <Col className={styles.titleBox}>
                    <SearchCategory
                        title="Select type "
                        defaultValue={musicValue}
                        onChange={handleMusicChange}
                        options={MusicOptions}
                    />
                </Col>


            </Col>
            <Col className='tableBox fileAttach'>
                <h3>Attach File</h3>
                    <Row  className={`${styles.appendRow}`}>

                        <Col md={5} className={`${styles.fileName}`}> 
                            <Fileuploader
                                title="File 1"
                               
                            />
                        </Col>
                        <Col md={5} className={`${styles.fileName}`}>
                            <Fileuploader
                                title="File 2 (optional)"
                                
                            />
                        </Col>
                        <Col md={5} className={`${styles.fileName}`}>
                            <Fileuploader
                                title="File 3 (optional)"
                                
                            />
                        </Col>
                        <Col md={5} className={`${styles.fileName}`}>
                            <Fileuploader
                                title="File 4 (optional)"
                                
                            />
                        </Col>
                        <Col md={4}>
                            <label>BPM</label>
                            <LabelInputComponent/>
                         
                        </Col>
                
                    </Row>
                <Col style={{ textAlign: 'end', marginTop: '15px' }}>
                    <FilledButtonComponent className="btn submit" >
                        Save
                    </FilledButtonComponent>
                </Col>
            </Col>
        </LayoutHoc>
    );
}
