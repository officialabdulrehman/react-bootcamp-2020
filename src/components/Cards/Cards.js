import React, { useEffect } from "react";

import Card from "./Card/Card";
// import { data } from "../../data/dummy";

export default function Cards({data}) {
  useEffect(() => {

  })
  return (
    <div className='cards'>
      {data == [] && data.map((card, index) => (
        <Card key={index} cardData={card}/>
      ))}
    </div>
  );
}
