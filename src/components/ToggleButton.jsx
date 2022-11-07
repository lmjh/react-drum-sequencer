import React from 'react';

/**
 * Button calls passed toggleFunction on click. Label is based on the passed property.
 */
const ToggleButton = ({ property, toggleFunction, onLabel, offLabel  }) => {
  return (
    <div>
      <button onClick={toggleFunction}>{ property ? onLabel : offLabel }</button>
    </div>
  )
}

export default ToggleButton;