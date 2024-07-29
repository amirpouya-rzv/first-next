import React from 'react'
import Welcome from '/app/home/Welcome'
import Partners from '/app/home/Partners'
import Whattodo from './Whattodo'
import Connect from './Connect'


function page() {
  return (
    <div>
      <Welcome/>
      <Partners/>
      <Whattodo/>
      <Connect/>
    </div>
  )
}

export default page