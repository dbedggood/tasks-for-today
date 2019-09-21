import Dashboard from './components/Dashboard'
import Test from './components/Test'
import PageNotFound from './components/PageNotFound'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/:time(\\d{4})', component: Test },
  { path: '*', component: PageNotFound }
]

export default routes
