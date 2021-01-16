import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
  const cardComponent = robots.map((user, i) => {
    return <Card id={robots[i].id} name={robots[0].name} email={robots[0].email} />
  })
  return (
    <div>
    { cardComponent }
  </div>
    );
}

export default CardList;
