import React, { useState } from 'react'
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

export default function SubscriptionSetting() {
    const [selectedPlan, setSelectedPlan] = useState('Monthly');

    const handlePlanChange = (value) => {
        setSelectedPlan(value);
    };

    const [planAmounts, setPlanAmounts] = useState(['']);

    const handleAddPlanAmount = () => {
        setPlanAmounts((prevPlanAmounts) => [...prevPlanAmounts, '']);
    };

    const handleRemovePlanAmount = (index) => {
        setPlanAmounts((prevPlanAmounts) => {
            const updatedPlanAmounts = [...prevPlanAmounts];
            updatedPlanAmounts.splice(index, 1);
            return updatedPlanAmounts;
        });
    };



    const handleSelectChange = (value) => {
        console.log(`Selected: ${value}`);
        // Add your custom logic here
    };

    // Define your dynamic options
    const countryOptions = [
        { value: 'usa', label: 'USA' },
        { value: 'india', label: 'India' },
        // Add more options as needed
    ];


    const handleCheckBoxChange = (type) => {
        // Reset all checkboxes
        setMonthlyChecked(false);
        setAnnualChecked(false);
        setBothChecked(false);

        // Set the selected checkbox
        if (type === 'monthly') {
            setMonthlyChecked(true);
        } else if (type === 'annual') {
            setAnnualChecked(true);
        } else if (type === 'both') {
            setBothChecked(true);
        }
    };

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
    return (
        <>
            <LayoutHoc>
                <Col className={`${styles.title}`}>
                    <h3>Manage Subscription Setting</h3>
                    {/* <DateRangePickerComponent /> */}
                </Col>

                <Col className="tableBox">
                    <h3>Create Subscription</h3>
                    <Col>
                        <LabelInputComponent title="Plan name" />
                        {/* <LabelInputComponent title="Number of Search Allowed" type="number" /> */}
                        <TextAreaComponent label="Plan Description" placeholder="Description" />

                        {planAmounts.map((planAmount, index) => (

                            <Col key={index} style={{ marginTop: "20px" }}>
                                <Col style={{ marginBottom: "14px", marginTop: "14px" }}>
                                    <SelectDropdownComponent
                                        placeholder="Country Selection"
                                        title="Country Selection"
                                        options={countryOptions}
                                        onChange={handleSelectChange}
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
                                    value={planAmount}
                                    onChange={(e) => {
                                        const updatedPlanAmounts = [...planAmounts];
                                        updatedPlanAmounts[index] = e.target.value;
                                        setPlanAmounts(updatedPlanAmounts);
                                    }}
                                />
                                {/* Conditionally render Remove button */}
                                {index > 0 && (
                                    <FilledButtonComponent
                                        onClick={() => handleRemovePlanAmount(index)}
                                        className={`${styles.deleteBtn}`}
                                    >
                                        <Image src={IMAGES.Delete} alt="" />
                                    </FilledButtonComponent>
                                )}
                            </Col>
                        ))}
                        <Col style={{ marginTop: "1px" }}>
                            <FilledButtonComponent onClick={handleAddPlanAmount} className={`${styles.deleteBtn}`}>
                                <Image src={IMAGES.Add} alt="" />
                            </FilledButtonComponent>
                        </Col>

                        <Col style={{ textAlign: "end", marginTop: "18px" }}>
                            <FilledButtonComponent className="btn submit">Save</FilledButtonComponent>
                        </Col>
                    </Col>
                </Col>

                <Col className="tableBox">
                    <h3>View Subscription</h3>
                    <DataTable rowData={data} colData={columns} />
                </Col>
            </LayoutHoc >
        </>
    )
}
