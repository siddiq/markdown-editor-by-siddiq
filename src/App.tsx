import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import WatchlistPage from "./pages/WatchlistPage"
import DetailedShowPage from "./pages/DetailedShowPage"
import TrendingPage from "./pages/TrendingPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/show/:id" element={<DetailedShowPage />} />
        <Route path="/trending" element={<TrendingPage />} />
      </Routes>
    </div>
  )
}

export default App
