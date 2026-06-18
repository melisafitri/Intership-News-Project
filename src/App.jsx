import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Topic from './views/Topic/Topic'
import TopicTemplate from './templates/TopicTemplate/TopicTemplate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<Home />} />
        <Route path="/topicpage/:slug" element={<Topic />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App