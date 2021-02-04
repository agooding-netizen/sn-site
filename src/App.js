import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside, useWindowDimensions } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Banner } from './components';
import FocusLock from 'react-focus-lock';
import biopic from './Images/fx-gs.webp';

function App() {
  const [open, setOpen] = useState(false);
  const { height, width } = useWindowDimensions();
  const isMobile = width <= 800;

  return (
    <div>
      <Banner open={open} setOpen={setOpen} isMobile={isMobile} />
      <div>
        <img src={biopic} alt="Stephen Naulls" />
      </div> 
    </div>
  );
}

export default App;
