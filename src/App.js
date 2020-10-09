import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import withHelmet  from './utils/withHelmet'
import routes from './config/routes'
import GlobalStyle from './components/GlobalStyle'
import Navbar from './components/NavBar'



function App() {
  return (
    <>
    <GlobalStyle />
    <Router>
      
      <Suspense fallback="...loding">
      <Navbar />
        <Switch>
          {Object.keys(routes).map(routeKey => (
            <Route key={routeKey} {...routes[routeKey]} />
          ))}
        </Switch>
      </Suspense>
    </Router>
    </>
  )
}
export default withHelmet('Pongpon | BlogApp')(App)
