//import Typewriter from "./TypeWriter";
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Typewriter from './Typewriter';

//TODO: Uses more or less the same code from Typewriter; we should rewrite this to avoid reused code
const JobTitle = ({}) => {
    const [firstChecked, setFirstChecked] = useState(false);
    const [secondChecked, setSecondChecked] = useState(false);
    const [thirdChecked, setThirdChecked] = useState(false);

    // I'm not gonna front, I'm hardcoding this
    useEffect(() => {
      let timeout = undefined
      setFirstChecked(true)
      timeout = setTimeout(function(){ setSecondChecked(true) }, 2000);
      timeout = setTimeout(function(){ setThirdChecked(true) }, 4000);

      return () => clearTimeout(timeout);
    }, []);
  
    return (
      <>
              <Typewriter
                variant='h2'
                delay={100}
                textColor={"#EEEEEE"}
                infinite={!firstChecked}>
                Hi, I&apos;m Uche
              </Typewriter>
              <Typewriter
                variant='h2'
                delay={100}
                textColor={"#EEEEEE"}
                infinite={!secondChecked}>
                and I&apos;m a
              </Typewriter>
              <Collapse
                orientation="horizontal"
                component='span'
                in={thirdChecked}
                {...(thirdChecked ? { timeout: 2000 } : {})}>
                <Typography 
                  variant='h2' 
                  component="span" 
                  display='inline'
                  sx={{color: "#EEEEEE", fontWeight: "bold"}}>
                  {/*I'm using this weird ass symbol because the collapse splits the words otherwise*/}
                  Game&nbsp;<span style={{color: "#990000"}}>Developer</span>
                </Typography>
              </Collapse>   
      </>);
  };
  
  export default JobTitle;