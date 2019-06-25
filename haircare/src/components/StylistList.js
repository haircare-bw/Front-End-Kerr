import React from 'react';

const StylistList = props => {
  return(
    <div>
      {props.stylist.name}
      {props.stylist.about}
    </div>
  )
}

export default StylistList;

//render & style stylists data here from Style component
