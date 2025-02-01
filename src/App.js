import React from "react"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import CourseList from "./components/CourseList"
import Footer from "./components/Footer"
import Brokers from "./components/Brokers"

function App() {
  return (
    <div id="home" className="w-full min-h-screen">
      <Header />
      <main className="">
        <Hero />
        <CourseList />
        <Brokers/>
      </main>
      <Footer />
    </div>
  )
}

export default App

