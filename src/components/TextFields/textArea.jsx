import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const MyQuillEditor = ({label, classname}) => {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div className={classname}>
     {label && <label style={{fontSize:"14px"}}>{label} </label>}
      <ReactQuill value={content} onChange={handleChange} />
    </div>
  );
};

export default MyQuillEditor;