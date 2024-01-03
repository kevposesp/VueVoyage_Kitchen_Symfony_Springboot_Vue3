import { createRouter, createWebHistory } from "vue-router";
import Categories from "../views/admin/Categories.vue";
import Dashboard from "../views/admin/Dashboard.vue";
import Restaurant from "../views/admin/Restaurant.vue";
import CategoriesRestaurant from "../views/admin/CategoriesRestaurant.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/client/Home.vue";
import Shop from "../views/client/Shop.vue";
import Users from "../views/admin/Users.vue";
import User from "../views/admin/User.vue";
import RestaurantClient from "../views/client/Restaurant.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    name: "client",
    component: () => import("../views/client/App.vue"),
    children: [
      {
        path: "home",
        name: "home",
        component: Home
      },
      {
        path: "login",
        name: "login",
        component: Login
      },
      {
        path: "register",
        name: "register",
        component: Register
      },
      {
        path: "shop",
        name: "shop",
        component: Shop
      },
      {
        path: "shop/:filters",
        name: "shop_filter",
        component: Shop
      },
      {
        path: "restaurant/:id",
        name: "restaurant",
        component: RestaurantClient,
      },
    ]
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin/App.vue"),
    children: [
      {
        path: "dashboard",
        name: "dash",
        component: Dashboard,
      },
      {
        path: "dashboard/:idRestaurant",
        name: "dashRest",
        component: Restaurant
      },
      {
        path: "dashboard/categories",
        name: "dashCategories",
        component: Categories
      },
      {
        path: "dashboard/:idRestaurant/categories",
        name: "categoriesRestaurnat",
        component: CategoriesRestaurant
      },
      {
        path: "dashboard/users",
        name: "dashUsers",
        component: Users,
      },
      {
        path: "dashboard/users/:idUser",
        name: "dashUser",
        component: User,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;