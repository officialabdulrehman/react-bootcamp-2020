import React from "react";

import Loader from '../Loader/Loader';

import ClipLoader from 'react-spinners/ClipLoader'

import {motion} from 'framer-motion'

const buttonVariants = {
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
      ease: 'easeInOut'
    }
  }
}

const inputVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      type: 'tween',
      ease: 'easeInOut'
    }
  }
}

export default function Input(props) {
  const { onSubmitHandler, onChangeHandler, query, loading } = props;
  let myButton = (
    <motion.button
      type="submit"
      variants={buttonVariants}
      initial='hidden'
      animate='visible'
      >
        Search</motion.button>
  )
  if(loading){
    myButton = (
      <button type="submit">
        <ClipLoader
          size={15}
          color={"#4fc3f7"}
          loading={loading}
        />
      </button>
    )
  }
    return (
      <motion.div className="Input">
        <form onSubmit={onSubmitHandler}>
          <motion.input 
            value={query} 
            onChange={onChangeHandler}
            variants={inputVariants}
            initial='hidden'
            animate='visible'
            />
          {/* <button type="submit">Search</button> */}
          {myButton}
        </form>
      </motion.div>
    );
}
