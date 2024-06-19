//import Typewriter from "./TypeWriter";
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';

//TODO: Uses more or less the same code from Typewriter; we should rewrite this to avoid reused code
const JobTitle = ({ delay, variant, textColor, infinite, children }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      let timeout = infinite
  
      if (currentIndex < children.length) {
        timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + children[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);
  
      } else if (infinite) { // ADD THIS CHECK
        setCurrentIndex(0);
        setCurrentText('');
      }
      return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, children]);
  
    return (
      <>
      <Typography
        variant={variant}
        display='inline'
        sx={{ color: textColor, fontWeight: "bold", display: 'inline-block'}}>
        {currentText} 
        <Typography variant='h2' component="span"
                  sx={{color: "#990000", fontWeight: "bold"}}>
                      Developer
                  </Typography>
        <Collapse
              orientation="horizontal"
              component='div'
              in={currentText == children}
              {...(currentText == children ? { timeout: 2000 } : {})}
              style={{ transitionDelay: currentText == children ? '500ms' : '0ms' }}>

                  <Typography variant='h2' component="span" display='inline'
                  sx={{color: "#990000", fontWeight: "bold"}}>
                      Developer
                  </Typography>
        </Collapse>
      </Typography>
      

      </>);
  };
  
  export default JobTitle;