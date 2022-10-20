import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCursor,
  cilPencil,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Activities',
  },
  {
    component: CNavGroup,
    name: 'Trips',
    to: '/trips',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Booked',
        to: '/trips',
      },
      {
        component: CNavItem,
        name: 'Ongoing',
        to: '/trips/ongoing',
      },
      {
        component: CNavItem,
        name: 'Cancelled',
        to: '/trips/cancelled',
      },
      {
        component: CNavItem,
        name: 'Completed',
        to: '/trips/completed',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Users',
    to: '/users',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Pending',
        to: '/users',
      },
      {
        component: CNavItem,
        name: 'Blocked',
        to: '/users/blocked',
      },
      {
        component: CNavItem,
        name: 'Approved',
        to: '/users/approved',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Vehicles',
    to: '/vehicles',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Pending',
        to: '/vehicles',
      },
      {
        component: CNavItem,
        name: 'Blocked',
        to: '/vehicles/blocked',
      },
      {
        component: CNavItem,
        name: 'Approved',
        to: '/vehicles/approved',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Categories',
    to: '/Categories',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Logout',
  },
]

export default _nav
