import React from 'react';
import './App.css';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
     <MantineProvider >
       <h1 className="text-3xl font-bold underline">   Hello world!</h1>
     </MantineProvider>
  );
}

export default App;
