import { createRouter, createWebHistory } from "vue-router";

const Header = () => import("@/components/Header.vue");
const Footer = () => import("@/components/Footer.vue");
const siteName = "Adna Annuaire";
const routes = [
  // front office routes
  {
    path: "/",
    name: "home",
    components: {
      default: () => import("@/views/front/Home.vue"),
      header: Header,
      footer: Footer,
    },
    meta: {
      title: siteName + " - Accueil",
    },
  },
  {
    path: "/search",
    name: "search",
    components: {
      default: () => import("@/views/front/Search.vue"),
      header: Header,
      footer: Footer,
    },
    meta: {
      title: siteName + " - Search",
    },
  },
  {
    path: "/category",
    name: "category",
    components: {
      default: () => import("@/views/front/Category.vue"),
      header: Header,
      footer: Footer,
    },
    meta: {
      title: siteName + " - Search",
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// router.beforeEach((to, from, next) => {
//   const authenticateStore = useAuthenticateStore();

//   if (to.params.slug) {
//     document.title =
//       `${to.params.slug[0].toUpperCase()}${to.params.slug
//         .replaceAll("-", " ")
//         .slice(1)} | ` + siteName;
//   } else {
//     document.title = to.meta.title;
//   }
//   if (
//     to.meta.isAdmin &&
//     (!authenticateStore.user || authenticateStore.user.type != "admin") &&
//     to.meta.requiresAuth &&
//     !authenticateStore.token
//   ) {
//     next({ name: "login.admin" });
//   } else if (to.meta.requiresAuth && !authenticateStore.token) {
//     next({ name: "login" });
//   } else {
//     next();
//   }
// });

export default router;
