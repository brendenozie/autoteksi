import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Base
const Trips = React.lazy(() => import('./views/trips/Trips'))
const Users = React.lazy(() => import('./views/users/Users'))
const Vehicles = React.lazy(() => import('./views/vehicles/Vehicles'))
const Categories = React.lazy(() => import('./views/categories/Categories'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/trips', name: 'Trips', element: Trips },
  { path: '/users', name: 'Users', element: Users },
  { path: '/vehicles', name: 'Vehicles', element: Vehicles },
  { path: '/categories', name: 'Categories', element: Categories },
]

export default routes
