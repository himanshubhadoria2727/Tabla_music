import { Col, Row } from "antd";
import React from "react";
import styles from "./login.module.css";
import LabelInputComponent from "../TextFields/labelInput";
import FilledButtonComponent from "../Button";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/assest/images";


function LoginForm() {
  return (
    <div>
      <Col>
        <Row>

          <Col md={24}>
            <Col className={`${styles.rightBody}`}>
              <div className={`${styles.loginBox}`}>
                <Col className={`${styles.title}`}>
                <h2>Tabla</h2>
                </Col>
                {/* <Image src={IMAGES.Logo} alt="" /> */}
                <h3>LOGIN</h3>
                <LabelInputComponent title="Email" placeholder="Email" />
                <LabelInputComponent title="Password" placeholder="Password" />
                <Link href="/dashboard">
                  {" "}
                  <FilledButtonComponent type="submit" onClick={() => console.log("Custom click handler")} className={`${styles.submitBtn}`}>
                    Submit
                  </FilledButtonComponent>
                </Link>
              </div>
            </Col>
          </Col>
        </Row>
      </Col>
    </div>
  );
}

export default LoginForm;
