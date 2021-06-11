import React from 'react'

const PersonCard =(props)=> {
 
  const {firstName, lastName, age, hairColor} = props;
  return(
    <div className="container">
      <h2>
        {lastName},{firstName}
      </h2>
      <p>Age:{age}</p>
      <p>Hair Color:{hairColor}</p>
      <br/>
    </div>
  );
  
}

export default PersonCard;