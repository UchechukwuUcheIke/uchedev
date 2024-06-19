import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const Typewriter = ({ delay, variant, textColor, infinite, children }) => {
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
    <Typography
    variant={variant}
    sx={{ color: textColor, fontWeight: "bold" }}>
      {currentText}
    </Typography>);
};

export default Typewriter;