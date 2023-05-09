import './assets/scss/styles.scss'

import React from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { TraderIndex } from './cmps/trader/trader-index'
import { HomePage } from './cmps/home-page'
import { Login } from './cmps/login'
import { AppHeader } from './cmps/app-header'

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
              <Route element={<TraderIndex />} path="/trader" />
              {/* <Route element={<User />} path="/user" /> */}
            </Routes>
          </main>
          {/* <AppFooter /> */}
        </section>
      </Router>
    </>
  )
}