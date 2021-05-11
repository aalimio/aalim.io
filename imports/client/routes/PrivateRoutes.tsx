import React from 'react'
import { List } from '/imports/ui/components/List/List.tsx'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'

const PrivateRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/list'>
          <List />
        </Route>
      </Switch>
    </>
  )
}

export default PrivateRoutes
