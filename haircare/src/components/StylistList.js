import React from 'react';

const StylistList = props => {
  return(
    <div>
        <h1>{props.stylist.username}</h1>
        <p>{props.stylist.about}</p>
        <p>{props.stylist.skills}</p>
    </div>
  )
}

export default StylistList;

//render & style stylists data here from Style component
