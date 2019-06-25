import React from 'react';

const StylistList = props => {
  return(
    <div>
        <h3>{props.stylist.username}</h3>
        <p>{props.stylist.about}</p>
        <p>Skills: {props.stylist.skills}</p>
        <button onClick={props.pushToStylistPage(props.stylist.id)}>View Profile</button>
    </div>
  )
}

export default StylistList;

//render & style stylists data here from Style component
//use Card decks from MDB to style
