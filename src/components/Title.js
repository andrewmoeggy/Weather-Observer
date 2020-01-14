import React from 'react';
import { WiDaySunny } from 'react-icons/wi'

const Title = () => {
  return (
    <>
      <WiDaySunny className="main-icon" />
      <h1 className="title">Weather Observer</h1>
      <p className="title_paragraph">Enter in a U.S. city!</p>
    </>
  );
}

export default Title;