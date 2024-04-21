import React, {useContext} from 'react'
import Slideshow from './Slideshow'
import Heading from './Heading'
import HorizontalBarOptions from './TopOptionBar/HorizontalBarOptions'
import ExploreItems from './ExploreItems'
import ChanesOnHover from './info/ChanesOnHover'
import Footer from './Footer'

import userContext from './context/Context'


function Home() {
    const value = useContext(userContext)
  return (
    <>
                 <Slideshow></Slideshow>
         <HorizontalBarOptions></HorizontalBarOptions>
         <Heading></Heading>
         <ChanesOnHover></ChanesOnHover>
         <ExploreItems theme={value.theme} exploreItems={value.exploreItems}></ExploreItems>
    </>
  )
}

export default Home