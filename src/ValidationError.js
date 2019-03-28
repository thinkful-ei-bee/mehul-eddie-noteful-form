import React from 'react';

export default function ValidationError(props) {
  console.log(props.message);

  if(props.hasError) {
    return (
      <div className="error">{props.message}</div>
    );
  }

  return <></>
}