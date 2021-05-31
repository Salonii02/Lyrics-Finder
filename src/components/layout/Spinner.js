import React from 'react';
import spinnergif from './spinner.gif';

const Spinner =()  => {
  return (
    <div>
      <img
        src={spinnergif}
        alt="Loading..."
        style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
      />
    </div>
  );
};
export default Spinner;