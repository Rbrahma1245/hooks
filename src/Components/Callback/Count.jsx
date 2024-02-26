/* eslint-disable react-refresh/only-export-components */
import React from "react";



// eslint-disable-next-line react/prop-types
const Count = ({text, count}) => {
  console.log("Rendering " , text);

  return (
    <div>{text} - {count}</div>
  )
}

export default React.memo(Count)