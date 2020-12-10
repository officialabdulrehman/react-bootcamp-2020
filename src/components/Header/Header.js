import React from 'react'

import {motion} from 'framer-motion'

const headerVariants = {
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

export default function Header() {
  return (
    <motion.div
      className='Header'
      variants={headerVariants}
      initial='hidden'
      animate='visible'
      >
      <h1>React Bootcamp</h1>
    </motion.div>
  )
}
