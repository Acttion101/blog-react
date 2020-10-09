import {lazy } from 'react'

export default {
  Home :{
    path:'/',
    exact: true ,
    component: lazy(() => import('../page/Home'))
  },
  About:{
    path:'/about',
    component:lazy (()=>import('../page/About'))
  },
  Contact:{
    path: '/contact',
    component: lazy(()=>import('../page/Contact'))
  },
  Story:{
    path:'/story/:storyId',
    component: lazy(() =>import('../page/Story'))
  }
}