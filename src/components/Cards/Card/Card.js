import React from "react";

import { ReactComponent as BookmarkEmpty } from "../../../svg/bookmarkEmpty.svg";
import { ReactComponent as BookmarkFilled } from "../../../svg/bookmarkFilled.svg";

import {motion} from 'framer-motion'

const cardVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      type: 'tween',
      ease: 'easeInOut',
    }
  }
}

export default function Card(props) {
  const { label, calories, image, totalTime, ingredientLines } = props.recipe.recipe;
  console.log(props);
  // return (
  //   <div className='card'>
  //     <div className='cardHead'>
  //       <h2>{label}</h2>
  //     </div>
  //     <div className='cardImage'>
  //       <img src={image}/>
  //     </div>
  //     <div className='cardBot'>
  //       <p>Calories: <span>{calories}</span></p>
  //     </div>
  //   </div>
  // )
  return (
    <motion.div 
      className="card"
      variants={cardVariants}
      initial='hidden'
      animate='visible'
      >
      <div className="card_heading">
        <h3>{label}</h3>
        <h4>
          {totalTime == "0"
            ? "N/A"
            : totalTime + " min"}
        </h4>
      </div>
      <div className="card_mid">
        <img src={image} alt={label} />
      </div>
      <div className="card_foot">
        <h4>Ingredients:</h4>
        {ingredientLines.map((ing, index) => {
          if (index == 6)
            return (
              <p key={index} className="seemore">
                ...see more
              </p>
            );
          else if (index > 6) return;
          return (
            <p key={index}>
              <span>{index}.</span> {ing.slice(0, 40)} {ing.length > 40 && <span>...</span>}
            </p>
          );
        })}
      </div>
      <div className="footer1">
        <div className="bookmark">
          <BookmarkEmpty/>
        </div>
        <p>
          <span>Calories: </span>
          {calories.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
}
