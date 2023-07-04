/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 */

interface IRoute{
  path?: string
  icon?: string
  name: string
  routes?: IRoute[]
  checkActive?(pathname: String, route: IRoute): boolean
  exact?: boolean
}

export function routeIsActive (pathname: String, route: IRoute): boolean {
  if (route.checkActive) {
    return route.checkActive(pathname, route)
  }

  return route?.exact
      ? pathname == route?.path
      : (route?.path ? pathname.indexOf(route.path) === 0 : false)
}

const routes: IRoute[] = [
  {
    path: '/radius', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Início', // name that appear in Sidebar
    exact: true,
  },
  {
    path: '/radius/dashboards',
    icon: 'ChartsIcon',
    name: 'Dashboards',
  },
  {
    path: '/radius/radacct',
    icon: 'TablesIcon',
    name: 'Radacct',
  },
  {
    icon: 'PagesIcon',
    name: 'Menus',
    routes: [
      // submenu
      {
        path: '/radius/users',
        name: 'Usuários',
      },
      {
        path: '/radius/create-account',
        name: 'Criar conta',
      },
      {
        path: '/radius/support',
        name: 'Chamar suporte',
      },
      {
        path: '/radius/actions-freeradius',
        name: 'Ações FreeRADIUS',
      },
      {
        path: '/radius/sync',
        name: 'Sincronizar dados',
      },
    ],
  },
]

export type {IRoute}
export default routes
