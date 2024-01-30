import React, { useState } from 'react';
import NoticeBoard from './components/NoticeBoard';
import NoticeForm from './components/NoticeForm';

const NoticeApp = () => {
  const [notices, setNotices] = useState([]);

  const handleAddNotice = (newNotice) => {
    setNotices((prevNotices) => [...prevNotices, newNotice]);
  };

  return (
    <div>
      <NoticeForm onAddNotice={handleAddNotice} />
      <NoticeBoard notices={notices} />
    </div>
  );
};

export default NoticeApp;