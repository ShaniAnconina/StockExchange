import './assets/scss/styles.scss'
import React from 'react'
import { Provider } from 'react-redux'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { store } from './store/store'
import { Login } from './pages/login'
import { HomePage } from './pages/home-page'
import { TraderIndex } from './pages/trader-index'
import { AccountIndex } from './pages/account-index'
import { AppHeader } from './cmps/app-header'

export function App() {

  return (
    <Provider store={store}>

      <Router>
        <section className="App full main-layout">
          <AppHeader />
          <main className="full main-layout">
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<Login />} path="/login" />
              <Route element={<TraderIndex />} path="/trader" />
              <Route element={<AccountIndex />} path="/account" />
            </Routes>
          </main>
        </section>
      </Router>
      
    </Provider>
  )
}