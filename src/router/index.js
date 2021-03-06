import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Video from '@/components/video/video-list'
import Article from '@/components/article/article-list'
import Painting from '@/components/painting/painting-list'
import Trip from '@/components/trip/trip-list'
import Raise from '@/components/raise/raise-list'
import Music from '@/components/music/music-list'
import Recommend from '@/components/recommend/recommend-list'
import Search from '@/components/search/search'
import Dynamic from '@/components/dynamic/dynamic-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/Baidu/:keyword',
      name: 'baidu',
      component: Search
    },
    {
      path: '/video/:page?/:display?',
      name: 'video',
      component: Video,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/article',
      name: 'article',
      component: Article,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/painting',
      name: 'painting',
      component: Painting,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/trip',
      name: 'trip',
      component: Trip,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/raise',
      name: 'raise',
      component: Raise,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/music',
      name: 'music',
      component: Music,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/dynamic',
      component: Dynamic,
      meta: {
        keepAlive: true
      }
    }
  ]
})
