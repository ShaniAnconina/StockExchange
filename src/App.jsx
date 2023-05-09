import React, { useEffect, useRef } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { AppHeader } from './assets/scss/cmps/app-header'
import { Login } from './assets/scss/cmps/login'
import './assets/scss/styles.scss'
import { HomePage } from './assets/scss/cmps/home-page'
import { Traders } from './assets/scss/cmps/traders'

export function App() {

  return (
    <>
      <Router>
        <section className="App">
          <AppHeader />
          <main className="full">
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<Login />} path="/login" />
              <Route element={<Traders />} path="/traders" />
              {/* <Route element={<User />} path="/user" /> */}
            </Routes>
          </main>
          {/* <AppFooter /> */}
        </section>
      </Router>
    </>
  )
}