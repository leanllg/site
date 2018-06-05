import Loadable from 'react-loadable';
import Loading from './components/loading';

export default [
  {
    name: 'admin',
    path: '/admin',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "admin" */ './containers/admin'),
      loading: Loading
    })
  },
  {
    name: 'home',
    path: '/',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "home" */ './containers/home'),
      loading: Loading
    })
  },
  {
    name: 'sign',
    path: '/:type(signin|signup)',
    exact: true,
    component: Loadable({
      loader: () => import(/* webpackChunkName: "sign" */ './containers/sign'),
      loading: Loading
    })
  }
]