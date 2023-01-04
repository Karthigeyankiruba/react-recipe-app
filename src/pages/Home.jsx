import React from 'react'
import styled from 'styled-components'
import Popular from '../components/Popular'
import Veggie from '../components/Veggie'
import { motion } from 'framer-motion'
function Home() {
  return (
    <HomeStyle
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
        <Popular />
        <Veggie />
    </HomeStyle>
  )
}

const HomeStyle = styled(motion.div)`
 margin: 0% 5%;
`

export default Home