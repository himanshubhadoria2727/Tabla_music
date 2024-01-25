import LayoutHoc from "@/HOC/LayoutHoc";
import { Col, Row } from "antd";
import React, { useState } from "react";
import styles from "./user.module.css";
import Datatable from "@/components/Datatable";
import Image from "next/image";
import Link from "next/link";
import FilledButtonComponent from "@/components/Button";
import { IMAGES } from "@/assest/images";
import DateRangePickerComponent from "@/components/TextFields/datepicker";
import LabelInputComponent from "@/components/TextFields/labelInput";
import SelectDropdownComponent from "@/components/TextFields/selectDropdown";
import CheckBoxComponent from "@/components/TextFields/checkBox";

function ManageUser() {

  const [freeUsersChecked, setFreeUsersChecked] = useState(false);
  const [paidUsersChecked, setPaidUsersChecked] = useState(false);

  const data = [
    {
      key: "1",
      creation_date: "26.7.2023",
      user: "#1",
      name: "John",
      email: "praveen.vaidhya@gmail.com",
      number: "9898989277",
      plan: "free Plan",
      option: (
        <Link href="#">
          <Image src={IMAGES.Delete} alt="" style={{ width: "20px", height: "20px", objectFit: "contain" }} />
        </Link>
      ),
    },

  ];

  const columns = [
    {
      title: "Creation Date",
      dataIndex: "creation_date",
      key: "creation_date",
      width: "16%",
    },
    {
      title: "User Id",
      dataIndex: "user",
      key: "user",
      width: "16%",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
      searchable: true
      // ...getColumnSearchProps("name"),
    },

    {
      title: "Email Id",
      dataIndex: "email",
      key: "email",
      width: "20%",
      searchable: true
      // ...getColumnSearchProps("slug"),
    },
    {
      title: "Phone Number",
      dataIndex: "number",
      key: "number",
      width: "20%",
      searchable: true
      // ...getColumnSearchProps("date"),
    },
    {
      title: "Payment Plan",
      dataIndex: "plan",
      key: "plan",
      width: "40%",
      searchable: true
      // ...getColumnSearchProps("code"),
    },

    {
      title: "Action",
      dataIndex: "option",
      key: "option",
    },
  ];

  return (
    <LayoutHoc>
      <Col className={`${styles.title}`}>
        <Row className="optionTag">
          <Col md={14}>
            <h3>Manage User</h3>
          </Col>
        </Row>
        <Col className={`${styles.dateFilter}`}>
          <DateRangePickerComponent />
          <Col>
            <CheckBoxComponent
              checked={freeUsersChecked}
              onChange={(checked) => {
                setFreeUsersChecked(checked);
                if (checked) {
                  // If Free Users checkbox is checked, uncheck Paid Users checkbox
                  setPaidUsersChecked(false);
                }
                console.log(checked);
              }}
            >
              Free Users
            </CheckBoxComponent>
            <CheckBoxComponent
              checked={paidUsersChecked}
              onChange={(checked) => {
                setPaidUsersChecked(checked);
                if (checked) {
           
                  setFreeUsersChecked(false);
                }
                console.log(checked);
              }}
            >
              Paid Users
            </CheckBoxComponent>
          </Col>
        </Col>
      </Col>
      <Col className="tableBox">

        <Datatable rowData={data} colData={columns} />
      </Col>
    </LayoutHoc>
  );
}

export default ManageUser;
