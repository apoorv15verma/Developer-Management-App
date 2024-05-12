import React from 'react'
import Banner from './Banner/Banner'
import  TodoBanner from './TodoBanner/TodoBanner'
import NotesBanner from './NotesBanner/NotesBanner'

function LandingPage() {
  return (
    <>
    <Banner/>
    <TodoBanner/>
    <NotesBanner/>
    </>
  )
}

export default LandingPage