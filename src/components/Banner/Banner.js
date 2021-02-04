import React, { useState, useRef } from 'react';
import { bool, func } from 'prop-types';
import { StyledBanner } from './Banner.styled';
import { useOnClickOutside } from '../../hooks';
import { Burger, Menu } from '../../components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../global';
import FocusLock from 'react-focus-lock';
import { theme } from '../../theme';

function Banner ({isMobile, open, setOpen, ...props }) {
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));
  
  if (isMobile) {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <div className="banner-mobile">
            <div ref={node}>
              <FocusLock disabled={!open}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
              </FocusLock>
              <h1 className="h1-mobile">Dr Stephen Naulls</h1>
            </div>
          </div>
        </>
      </ThemeProvider>  
    );
  } else {
    return(
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <div className="banner">
          <div className="banner-left">
            <div className="banner-link">Home</div>
            <div className="banner-link">Campaigns &amp; Media</div>
          </div>
          <div className="banner-title">
            <h1 data-heading="Dr Stephen Naulls"><span data-heading="Dr Stephen Naulls">Dr Stephen Naulls</span></h1>
          </div>
          <div className="banner-right">
            <div className="banner-link">Articles</div>
            <div className="banner-link">Contact</div>
          </div>
        </div>
      </ThemeProvider>   
    );
  } 
}

export default Banner;