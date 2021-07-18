import React, { useEffect } from 'react';

function printExample(test) {
  console.log('example');
}

const toto = { myVar: 'bibi', var2: 'toto' };

const [data, setData] = React.useState([]);

useEffect(() => {
  setData();
}, [data]);
