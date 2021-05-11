import React from 'react'
import { Dashboard } from '/imports/ui/components/Dashboard/Dashboard.tsx'
import { Landing } from '/imports/ui/pages/public/Landing.tsx'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'

const PublicRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/about'>
          <Dashboard />
        </Route>
        <Route exact path='/'>
          <Landing />
        </Route>
      </Switch>
    </>
  )
}

export default PublicRoutes
