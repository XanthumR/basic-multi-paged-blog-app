import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BlogPosts from '@/views/BlogPosts.vue'
import BlogPostDetails from '@/views/BlogPostDetails.vue'

const routes: Array<RouteRecordRaw> = [
{
  path: '/',
  name: "BlogPosts",
  component: BlogPosts,
},
{
  path: '/:id',
  name: "BlogPostDetails",
  component: BlogPostDetails,
  props: true,
}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
