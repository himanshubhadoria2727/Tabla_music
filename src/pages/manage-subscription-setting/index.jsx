import React, { useEffect, useState } from 'react'
import styles from "./subscription.module.css"
import LayoutHoc from '@/HOC/LayoutHoc'
import { Col } from 'antd'
import CheckBoxComponent from '@/components/TextFields/checkBox'
import MyQuillEditor from '@/components/TextFields/textArea'
import FilledButtonComponent from '@/components/Button'
import DateRangePickerComponent from '@/components/TextFields/datepicker'
import Link from 'next/link'
import DataTable from '@/components/Datatable'
import Image from 'next/image'
import { IMAGES } from '@/assest/images'
import LabelInputComponent from '@/components/TextFields/labelInput'
import TextAreaComponent from '@/components/TextFields/textArea'
import SelectDropdownComponent from '@/components/TextFields/selectDropdown'
import RadioBox from '@/components/TextFields/radioButton'
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import { addsubcription, deletdsubcription, subcriptionapi } from '@/api/subcriptionapi'
import moment from 'moment/moment'
import Swal from 'sweetalert2'
import { deleteAlertContext } from '@/HOC/alert'
import { toast } from 'react-toastify'

export default function SubscriptionSetting() {
    const [sub, setsub] = useState([])
    const [loading, setloading] = useState(false)

    const initialValues = {
        planname: '',
        description: '',
        plantype: [{
            country: '',
            amount: ''
        }]
    };
    const planSchema = Yup.object().shape({
        planname: Yup.string().required('Plan Name is required'),
        description: Yup.string().required('Description is required'),
        plantype: Yup.array().of(
            Yup.object().shape({
                country: Yup.string().required('Country is required'),
                amount: Yup.number().required('Amount is required').typeError('Amount must be a number'),
            })
        ).required('At least one Plantype is required'),
    });





    // Define your dynamic options
    const countryOptions = [
        { value: 'usa', label: 'USA' },
        { value: 'india', label: 'India' },
        // Add more options as needed
    ];




    const data = [
        {
            key: "1",
            id: "1",
            plan_type: "Monthly",
            plan_name: "Plan Subscription",
            amount: "$2000",
            creation_date: "30-10-22",
            option: (
                <Link href="/edit-user">
                    <Image src={IMAGES.Delete} alt="" style={{ width: "20px", height: "20px", objectFit: "contain" }} />
                </Link>
            ),
        },
    ];

    const columns = [
        {
            title: "Plan Id",
            dataIndex: "id",
            key: "id",
            width: "16%",
        },
        {
            title: "Plan Name",
            dataIndex: "plan_name",
            key: "plan_name",
            width: "20%",
            searchable: true
            // ...getColumnSearchProps("mobilenumber"),
        },
        {
            title: "Plan Type",
            dataIndex: "plan_type",
            key: "plan_type",
            width: "20%",
            searchable: true
            // ...getColumnSearchProps("name"),
        },

        {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
            width: "20%",
            searchable: true
            // ...getColumnSearchProps("slug"),
        },
        {
            title: "Creation Date",
            dataIndex: "creation_date",
            key: "creation_date",
            width: "20%",
            searchable: true
            // ...getColumnSearchProps("slug"),
        },

        {
            title: "Action",
            dataIndex: "option",
            key: "option",
        },
    ];

    useEffect(() => {
        subcriptionapi().then((data) => {

            setsub(data?.data?.data)

        })
    }, [loading])

    console.log(sub, "dhceieii");

    const deleteduser = (id) => {
        setloading(true)

        Swal.fire(deleteAlertContext).then((data) => {
            if (data.isConfirmed) {
                deletdsubcription(id).then((data) => {
                    console.log(data, "cheking respond is");
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                    setloading(false);
                }).catch((err) => {
                    if (err) {
                        setloading(false)
                    }
                })


            }
            setloading(false)
        })

    }

    if (loading) {
        return <h6>
            loading...
        </h6>
    }

    return (
        <>
            <LayoutHoc>

                <Formik
                    initialValues={initialValues}
                    // validationSchema={validationSchema}

                    onSubmit={(values) => {


                        console.log(values, "sciehui");
                        setloading(true)
                        addsubcription(values).then((data) => {
                            if (data) {

                                setloading(false)
                                toast.success("plan will be added sucessfully")
                            }

                        })
                            .catch(error => {
                                setloading(false)
                                console.error("Error adding subscription:", error.response ? error.response.data : error.message);
                                throw error;
                            });
                    }}
                >
                    {({ setFieldValue, values }) => (
                        <Form>
                            <Col className={`${styles.title}`}>
                                <h3>Manage Subscription Setting</h3>
                                {/* <DateRangePickerComponent /> */}
                            </Col>

                            <Col className="tableBox">
                                <h3>Create Subscription</h3>
                                <Col>
                                    <LabelInputComponent title="Plan name" name="planname" />
                                    {/* <LabelInputComponent title="Number of Search Allowed" type="number" /> */}
                                    <TextAreaComponent label="Plan Description" name="description" placeholder="Description" setFieldValue={setFieldValue} />

                                    {values?.plantype?.length > 0 && values?.plantype.map((planAmount, index) => (

                                        <Col key={index} style={{ marginTop: "20px" }}>
                                            <Col style={{ marginBottom: "14px", marginTop: "14px" }}>
                                                <SelectDropdownComponent
                                                    placeholder="Country Selection"
                                                    title="Country Selection"
                                                    options={countryOptions}
                                                    onChange={(value) => {

                                                        setFieldValue(`plantype[${index}].country`, value);

                                                    }}
                                                />
                                            </Col>
                                            {/* <Col style={{ marginTop: "20px" }}>
                                    <label>Plan Subscription</label>
                                    <Col>
                                        <Col className='planName'>
                                            <RadioBox
                                                value="Monthly"
                                                checked={selectedPlan === 'Monthly'}
                                                onChange={() => handlePlanChange('Monthly')}
                                            >
                                                Monthly
                                            </RadioBox>
                                            <RadioBox
                                                value="Annually"
                                                checked={selectedPlan === 'Annually'}
                                                onChange={() => handlePlanChange('Annually')}
                                            >
                                                Annually
                                            </RadioBox>
                                        </Col>

                                    </Col>
                                </Col> */}
                                            <LabelInputComponent
                                                title={`Plan Amount (Monthly)`}

                                                name={`plantype[${index}].amount`}
                                            />



                                            {/* Conditionally render Remove button */}
                                            {index > 0 && (
                                                <FilledButtonComponent
                                                    onClick={() => setFieldValue(
                                                        "plantype",
                                                        values.plantype.filter((o, i) => i !== index)
                                                    )
                                                    }
                                                    className={`${styles.deleteBtn}`}
                                                >
                                                    <Image src={IMAGES.Delete} alt="" />
                                                </FilledButtonComponent>
                                            )}
                                        </Col>
                                    ))}
                                    <Col style={{ marginTop: "1px" }}>
                                        <FilledButtonComponent onClick={() => {
                                            setFieldValue(`plantype`, [...values?.plantype, {
                                                country: '',
                                                amount: ''
                                            }])
                                        }} className={`${styles.deleteBtn}`}>
                                            <Image src={IMAGES.Add} alt="" />
                                        </FilledButtonComponent>
                                    </Col>


                                    <Col style={{ textAlign: "end", marginTop: "18px" }}>
                                        <button className="btn submit" type='submit'>Save</button>
                                    </Col>
                                </Col>
                            </Col>


                        </Form>
                    )}
                </Formik>

                <Col className="tableBox">
                    <h3>View Subscription</h3>
                    <DataTable rowData={sub && sub.length > 0 && sub.map((s, id) => (
                        {
                            key: id,
                            id: parseInt(s?._id?.slice(-8), 12),
                            plan_type: "Monthly",
                            plan_name: s?.
                                planname
                            ,
                            amount: s?.plantype?.length > 0 && s?.plantype?.map((am) => (`${am.amount} `))
                            ,
                            creation_date: moment(s?.updatedAt
                            ).format('L'),
                            option: (

                                <Image src={IMAGES.Delete} alt="" style={{ width: "20px", height: "20px", objectFit: "contain" }} onClick={() => deleteduser(s?._id)} />

                            ),
                        }
                    ))} colData={columns} />
                </Col>
            </LayoutHoc >

        </>
    )
}
