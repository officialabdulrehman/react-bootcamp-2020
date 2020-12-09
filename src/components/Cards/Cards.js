import React, { useEffect } from "react";

import Card from "./Card/Card";
// import { data } from "../../data/dummy";

export default function Cards({recipes}) {
  return (
    <div className='cards'>
      {recipes.map((recipe, index) => (
        <Card key={index} recipe={recipe}/>
      ))}
    </div>
  );
}
