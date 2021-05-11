import React from 'react'
import PublicRoutes from '/imports/client/routes/PublicRoutes.tsx'
import PrivateRoutes from '/imports/client/routes/PrivateRoutes.tsx'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'

export const App = () => {
  return (
    <Router>
      <PublicRoutes />
      <PrivateRoutes />
    </Router>
  )
}
