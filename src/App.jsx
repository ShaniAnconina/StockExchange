import './assets/scss/styles.scss'
import { store } from './store/store'

import React from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { TraderIndex } from './pages/trader-index'
import { Login } from './cmps/login'
import { AppHeader } from './cmps/app-header'
import { HomePage } from './pages/home-page'
import { Provider } from 'react-redux'
import { UserAccount } from './pages/user-account'

export function App() {

  return (
    <Provider store={store}>

      <Router>
        <section className="App">
          <AppHeader />
          <main className="full">
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<Login />} path="/login" />
              <Route element={<TraderIndex />} path="/trader" />
              <Route element={<UserAccount />} path="/account" />
            </Routes>
          </main>
          {/* <AppFooter /> */}
        </section>
      </Router>
      </Provider>
  )
}