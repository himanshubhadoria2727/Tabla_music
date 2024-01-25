import LayoutHoc from "@/HOC/LayoutHoc";
import DataTable from "@/components/Datatable";
import { Col } from "antd";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/assest/images";
import { SVG } from "@/assest/svg";
import DateRangePickerComponent from "@/components/TextFields/datepicker";
const data = [
  {
    key: "1",
    number: "1",
    pagename: "Homepage",

  },
  {
    key: "2",
    number: "2",
    pagename: "Privacy Policy",

  },
  {
    key: "3",
    number: "3",
    pagename: "Terms of Use",

  },

];

const columns = [
  {
    title: "Sr. No",
    dataIndex: "number",
    key: "number",
    width: "10%",
    searchable: true
    // ...getColumnSearchProps("name"),
  },
  {
    title: "Page Name",
    dataIndex: "pagename",
    key: "pagename",
    width: "10%",
    searchable: true
    // ...getColumnSearchProps("mobilenumber"),
  },

  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    width: "10%",
    render: (text, record) => (
      <span className={`${styles.options}`}>
        <Link href="/edit-content">
          <SVG.Edit />
        </Link>

        <Link href="#">
          <Image src={IMAGES.Delete} alt="" style={{ width: "20px", height: "20px", objectFit: "contain" }} />
        </Link>
      </span>
    ),

  },


];

export default function ManageContent() {

  return (
    <LayoutHoc>
      <Col className={`${styles.title}`}>
        <h3>Manage Content</h3>
        {/* <DateRangePickerComponent/> */}
      </Col>
      <Col className="tableBox">
        <DataTable rowData={data} colData={columns} />
      </Col>
    </LayoutHoc>
  );
}
