import Vue from 'vue';
import VueRouter from 'vue-router';
import footers_all from '../views/footers_all';
import projects_all from '../views/projects_all';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home-Main.vue'),
  },
  {
    path: '/footers',
    name: 'footers',
    component: footers_all,
  },
  {
    path: '/projects',
    name: 'projects',
    component: projects_all,
  },
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;