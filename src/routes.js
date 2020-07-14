import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Introduction from '~/pages/Introduction'
import Home from '~/pages/Home'
import Configs from '~/pages/Configs'
import Info from '~/pages/Info'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Introduction} />
      <Route path="/home" component={Home} />
      <Route path="/configs" component={Configs} />
      <Route path="/info" component={Info} />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  )
}
