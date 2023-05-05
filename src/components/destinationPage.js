import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import CornerLogo from './cornerLogo';
import { CitiesAutocomplete } from './citiesAutocomplete';

import earthImg from '.././images/earth.png';
import halfEarthImg from '.././images/half-earth.png';

import './../App.css';

function DestinationPage() {
  const [showAutocomplete, setShowAutocomplete] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [showButton, setShowButton] = useState(true);

  const handleButtonClick = () => {
    setShowAutocomplete(false);
    setShowHeader(false);
    setShowButton(false);
  };

  return (
    <div className="App">
      <CornerLogo />

      {showHeader && (
        <h1 className="MainHeader">Let's Find Your Destination</h1>
      )}

      {showAutocomplete && <CitiesAutocomplete />}

      {showButton && (
        <Box style={{ marginTop: 30 }}>
          <Button
            onClick={handleButtonClick}
            id="proceedToAttractionsBtn"
            variant="contained"
            size="large"
            endIcon={<ArrowRightIcon />}
            style={{ backgroundColor: 'rgb(0,30,54)' }}
          >
            Proceed
          </Button>
        </Box>
      )}

      <img id="EarthImg" src={halfEarthImg} alt="Earth Image" />
    </div>
  );
}

export default DestinationPage;