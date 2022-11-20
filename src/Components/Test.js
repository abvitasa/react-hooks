import React, { useEffect, useRef, useState } from 'react';

/*
<React.StrictMode>
@ First Render
Render --> Render --> Use Effect --> Return Use Effect --> Use Effect

@ Update display with Use State
Render --> Render --> Return Use Effect --> Use Effect

#################################################################

No <React.StrictMode>
@ First Render
Render --> Use Effect

@ Update display with Use State 
Render --> Return Use Effect --> Use Effect

*/

const Test = () => {
  const [log1, setLog1] = useState(0);
  const [log2, setLog2] = useState(0);

  const count = useRef(1);

  const handleClick = () => {
    console.log('--> Button Clicked');
    drawLine();

    setLog1((prev) => prev + 1);
    setLog2((prev) => prev + 1);
  };

  const drawLine = () => {
    console.log(
      '--------------------------------------------------------------'
    );
  };

  console.log(`${count.current}: ${log1}`);
  console.log(`${count.current}: ${log2}`);
  drawLine();

  count.current++;

  useEffect(() => {
    console.log(`${count.current}: Use Effect`);
    drawLine();

    count.current++;

    return () => {
      console.log(`${count.current}: Return Use Effect`);
      drawLine();
      count.current++;
    };
  });

  useEffect(() => {
    console.log('--> Use Effect Single');
    drawLine();

    return () => {
      console.log('--> Return Use Effect Single');
      drawLine();
    };
  }, []);

  return (
    <>
      <button onClick={handleClick}>Button1</button>
    </>
  );
};

export default Test;
