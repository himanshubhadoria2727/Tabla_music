import { Form, Input } from "antd";
import React from "react";

function LabelInputComponent({ title, className, placeholder, disabledStatus,...rest }) {
  return (
    <div>
      {title && <label>{title}</label>}
      <Input placeholder={placeholder} className={className} disabled={disabledStatus} {...rest}  />
    </div>
  );
}

export default LabelInputComponent;
