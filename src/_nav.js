import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
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
    },
  },
  {
    component: CNavTitle,
    name: 'Products',
  },
  {
    component: CNavItem,
    name: 'Products',
    to: '/products',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Add Product',
    to: '/add',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Orders',
  },
  {
    component: CNavGroup,
    name: 'Orders',
    to: '/orders',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Orders',
        to: '/orders',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Users',
  },
  {
    component: CNavGroup,
    name: 'Users',
    to: '/users',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Users',
        to: '/users',
      },
    ],
  },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
]

export default _nav
