import LayoutHoc from '@/HOC/LayoutHoc'
import React from 'react'
import styles from "../category.module.css"
import { Col } from 'antd'
import LabelInputComponent from '@/components/TextFields/labelInput'
import FilledButtonComponent from '@/components/Button'
import Link from 'next/link'
import { SVG } from '@/assest/svg'

import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from 'yup';
import { addCategoryapi } from '@/api/Categoryapi'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'




export default function AddCategory() {
    const router = useRouter()
    const initialState = {
        CategoryName: "",
        category: ""

    }
    const categorySchema = Yup.object().shape({
        CategoryName: Yup.string().required('CategoryName is required'),
        category: Yup.string().required('File is required'),
    });


    return (
        <>
            <LayoutHoc>
                <Col className={`${styles.title}`}>
                    <h3 style={{ position: "relative", top: "6px" }}>Add Category</h3>
                    <Link href="/manage-raag-sub-raag">  <FilledButtonComponent> <SVG.Arrow /> Back</FilledButtonComponent></Link>
                </Col>
                <Formik
                    initialValues={initialState}
                    validationSchema={categorySchema}

                    onSubmit={(values) => {

                        addCategoryapi(values).then((data) => {

                            toast.success(`${data?.data?.message}`)
                            router.push('/manage-raag-sub-raag')

                        })
                            .catch((err) => {
                                if (err) {
                                    toast.error(`Some went wrong`)
                                }
                                console.log(err);
                            })

                    }}
                >
                    {({ setFieldValue, values }) => (
                        <Form>


                            <Col className="tableBoxed tableBox">
                                <Col >
                                    <LabelInputComponent type="text" title="Category Name" name="CategoryName" />
                                    <ErrorMessage name='CategoryName' />
                                </Col>

                                <Col>
                                    <input type="file" onChange={(e) => {
                                        let Catfile = e.target.files[0]
                                        setFieldValue('category', Catfile)

                                    }} style={{
                                        width: "100%",
                                        borderRadius: '12px solid red',

                                        background: '#FFF',
                                        boxShadow: '0px 10px 30px 0px rgba(41, 17, 80, 0.05)',
                                        height: '44px',
                                        marginBottom: '18px',
                                    }} />
                                    <ErrorMessage name='category' style={{ color: "red" }} />

                                </Col>
                                <Col style={{ textAlign: "end", marginTop: "15px" }}>
                                    <button className="btn submit">Save</button>
                                </Col>
                            </Col>

                        </Form>
                    )}
                </Formik>
            </LayoutHoc>
        </>
    )
}
