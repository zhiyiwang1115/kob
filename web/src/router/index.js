import { createRouter, createWebHistory } from 'vue-router'
import PkindexView from '../views/pk/PkindexView'
import RecordindexView from '../views/record/RecordindexView'
import RanklistindexView from '../views/ranklist/RanklistindexView'
import UserBotindexView from '../views/user/bot/UserBotindexView'
import NotFound from '../views/error/NotFound'

const routes = [
  {
    path: "/",
    name: "home",
    redirect:"/pk/",
  },
  {
    path: "/pk/",
    name: "pk_index",
    component:PkindexView,
  },
  {
    path: "/record/",
    name: "record_index",
    component:RecordindexView,
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component:RanklistindexView,
  },
  {
    path: "/user/bot/",
    name: "user_bot_index",
    component:UserBotindexView,
  },
  {
    path: "/404/",
    name: "not_found_index",
    component:NotFound,
  }, 
  {
    path: "/:catchAll(.*)",
    redirect:"/404/",
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
