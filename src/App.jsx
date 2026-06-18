import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Topic from './views/Topic/Topic'
import InterestTopic from './views/InterestTopic/InterestTopic'
import TopicTemplate from './templates/TopicTemplate/TopicTemplate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<Home />} />
        <Route path="/topicpage/:slug" element={<Topic />} />
        <Route path="/interest-topic" element={<InterestTopic />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App