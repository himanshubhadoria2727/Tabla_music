import React, { useState } from 'react';
import { Col, Row, Button } from 'antd';
import LayoutHoc from '@/HOC/LayoutHoc';
import FilledButtonComponent from '@/components/Button';
import styles from "../styles.module.css";
import SearchCategory from '@/components/search-category';
import Fileuploader from '@/components/FIleUpload';
import Link from 'next/link';
import { SVG } from '@/assest/svg';


export default function ManageSurmandal() {
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
            value: 'Raag 1',
            label: 'Raag 1',
        },
        {
            value: 'Raag 2',
            label: 'Raag 2',
        },
        {
            value: 'Raag 3',
            label: 'Raag 3',
        },
    ];

    const [selectedValue, setSelectedValue] = useState('C');
    const [musicValue, setMusicValue] = useState('Raag 1');


    const handleCategoryChange = (value) => {
        setSelectedValue(value);
    };

    const handleMusicChange = (value) => {
        setMusicValue(value);
    };



    return (
        <LayoutHoc>
            <Col className={styles.title}>
                <h3>Add Surmandal</h3>
                <Link href="/manage-surmandal">  <FilledButtonComponent> <SVG.Arrow /> Back</FilledButtonComponent></Link>
            </Col>
            <Col className='tableBox fileAttach'>
                    <Row className={`${styles.appendRow}`}>
                        <Col md={24}>
                            <Col className={styles.titleBox}>
                                <SearchCategory
                                    title="Select Pitch"
                                    defaultValue={selectedValue}
                                    onChange={handleCategoryChange}
                                    options={dynamicOptions}
                                />
                            </Col>
                        </Col>
                        <Col md={24}>
                            <Col className={styles.titleBox}>
                                <SearchCategory
                                    title="Select Raag "
                                    defaultValue={musicValue}
                                    onChange={handleMusicChange}
                                    options={MusicOptions}
                                />
                            </Col>
                        </Col>
                        <Col md={24}>
                            <Fileuploader
                                title="Attached File"
                                onBpmChange={(bpm) => handleBpmChange(index, bpm)}
                            />
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
