import React, { useState } from 'react';
import AList from './articlesList.js';
import Calendar from './Calender.js';

const News = () => {
  return (

    <div >
      <span style={{ fontSize: '52px', color: 'white', display: 'block', textAlign: 'center', backgroundColor: '#230871' }}>
        Current Events Calendar
      </span>
      <Calendar />
      <AList />
    </div>
  );
}

export default News;