import React, { useState } from 'react';
import { Col, Row, Button } from 'antd';
import LayoutHoc from '@/HOC/LayoutHoc';
import FilledButtonComponent from '@/components/Button';
import styles from "../styles.module.css"
import SearchCategory from '@/components/search-category';
import Fileuploader from '@/components/FIleUpload';
import { SVG } from '@/assest/svg';
import { IMAGES } from '@/assest/images';
import Image from 'next/image';
import LabelInputComponent from '@/components/TextFields/labelInput';
import Link from 'next/link';

export default function AddTabla() {
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

    const RaagOptions = [
        {
            value: 'Bhairavi',
            label: 'Bhairavi',
        },
        {
            value: 'Bilawal',
            label: 'Bilawal',
        },
        {
            value: 'Kalyan',
            label: 'Kalyan',
        },
        {
            value: 'Khamaj',
            label: 'Khamaj',
        },
        {
            value: 'Purvi',
            label: 'Purvi',
        },
    ];

    const SubRaagOptions = [
        {
            value: 'Asaravi',
            label: 'Asaravi',
        },
        {
            value: 'Bilawal',
            label: 'Bilawal',
        },
        {
            value: 'Kalyan',
            label: 'Kalyan',
        },
        {
            value: 'Khamaj',
            label: 'Khamaj',
        },
        {
            value: 'Purvi',
            label: 'Purvi',
        },
    ];

    const [selectedValue, setSelectedValue] = useState('C');
    const [raagValue, setRaagValue] = useState('Purvi');
    const [subraagValue, setSubRaagValue] = useState('Asaravi');
    const [fileSections, setFileSections] = useState([
        { title: "File 1", bpm: "100HZ" },
    ]);

    const handleCategoryChange = (value) => {
        setSelectedValue(value);
    };

    const handleRaagChange = (value) => {
        setRaagValue(value);
    };
    const handleSubRaagChange = (value) => {
        setSubRaagValue(value);
    };

    const addFileSection = () => {
        const newSection = {

            bpm: selectedValue,
        };
        setFileSections([...fileSections, newSection]);
    };
    const removeFileSection = (index) => {
        const updatedSections = [...fileSections];
        updatedSections.splice(index, 1);
        setFileSections(updatedSections);
    };

    const handleBpmChange = (index, bpm) => {
        const updatedSections = [...fileSections];
        updatedSections[index].bpm = bpm;
        setFileSections(updatedSections);
    };

    const handleSave = () => {
        // Add your save logic here
        console.log('Save button clicked');
    };

    return (
        <LayoutHoc>
            <Col className={styles.title}>
                <h3>Add Tabla Music</h3>
                <Link href="/manage-tabla-music">  <FilledButtonComponent> <SVG.Arrow /> Back</FilledButtonComponent></Link>
            </Col>
            <Col className="tableBox fileAttach">
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
                        title="Select Raag Name "
                        defaultValue={RaagOptions}
                        onChange={handleRaagChange}
                        options={RaagOptions}
                    />
                </Col>

                <Col className={styles.titleBox}>
                    <SearchCategory
                        title="Select Sub Raag Name"
                        defaultValue={subraagValue}
                        onChange={handleSubRaagChange}
                        options={SubRaagOptions}
                    />
                </Col>
                <Col className={`${styles.taalBox}`}>
                            <label>Taal</label>
                            <Col className={`${styles.taalInput}`}>
                                <LabelInputComponent />
                                <LabelInputComponent />
                                <LabelInputComponent />
                                <LabelInputComponent />
                                <LabelInputComponent />
                                <LabelInputComponent />
                                <LabelInputComponent />
                                <LabelInputComponent />
                                <LabelInputComponent />
                                <LabelInputComponent />
                                <LabelInputComponent />
                                <LabelInputComponent />
                                <LabelInputComponent />
                                <LabelInputComponent />
                            </Col>
                        </Col>
                {fileSections.map((section, index) => (
                    <Row key={index} className={`${styles.appendRow}`}>
                        <Col md={11} className={`${styles.fileName}`}>
                            <Fileuploader
                                title="Files(Mp3)"
                                onBpmChange={(bpm) => handleBpmChange(index, bpm)}
                            />
                        </Col>
                          <Col md={1}></Col>
                        <Col md={12}>
                            <Col className={`${styles.fileName}`}>
                                <LabelInputComponent title="BPM" value="100HZ" />
                            </Col>
                        </Col>
                      
                        {index > 0 && (
                            <Col style={{ width: "100%" }}>

                                <Image src={IMAGES.Delete} alt="" onClick={() => removeFileSection(index)} style={{ cursor: "pointer", height: "20px", width: "20px", marginTop: "12px" }} />

                            </Col>
                        )}
                        <Col >

                            <Image src={IMAGES.Add} onClick={addFileSection} alt="" style={{
                                cursor: "pointer", height: "20px", width: "20px", position: " relative",
                                top: "15px"
                            }} />

                        </Col>
                    </Row>

                ))}


                <Col style={{ textAlign: 'end', marginTop: '15px' }}>
                    <FilledButtonComponent className="btn submit" onClick={handleSave}>
                        Save
                    </FilledButtonComponent>
                </Col>

            </Col>

        </LayoutHoc>
    );
}
