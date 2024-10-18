import React from 'react';
import "../styles/MyButton_styles.css";

function MyButton({children,func,...props}) {
  return (  
    <button {...props} onClick={func}>{children}</button>
  );
}

export default MyButton;
