import Home from './components/Index.vue';
import Navigation from './components/reusable/Navigation.vue';
import Contact from './components/Contact.vue';
import About from './components/About.vue';

import Login from './components/Login.vue';
import Register from './components/Register.vue';

import Panel from './components/panel/Panel.vue';
import PanelStart from './components/panel/PanelStart.vue';
import Categories from './components/panel/Category/Categories.vue';
import Genres from './components/panel/Genre/Genres.vue';
import Favorites from './components/panel/Favorites.vue';
import AddNewContent from './components/panel/Post/AddNewContent.vue';

import View from './components/panel/Post/View.vue';
import ViewAllList from './components/panel/Post/ViewAllList.vue';
import ViewDetails from './components/panel/Post/ViewDetails.vue';

const token = localStorage.getItem('token');
const redirectToPanel = (to, from, next) => {
  if (token) {
    next({path: '/panel'});
  } else {
    next(true);
  }
}

const rediretToLogin = (to, from, next) => {
  if (token) {
    next();
  } else {
    next({path: '/login'});
  }
}

export const routes = [
  { path: '', name: 'Home', components: {
      default: Home,
      'Navigation': Navigation
    }, beforeEnter: redirectToPanel
  },
  { path: '/about', components: {
      default: About,
      'Navigation': Navigation
    }
  },
  { path: '/contact', components: {
      default: Contact,
      'Navigation': Navigation
    }
  },

  { path: '/login', beforeEnter: redirectToPanel, name: 'login', component: Login },
  { path: '/register', beforeEnter: redirectToPanel, name: 'register', component: Register },

  { path: '/panel', component: Panel, children: [
      { path: '', component: PanelStart },
      { path: 'view', component: View, children: [
          { path: '', component: ViewAllList },
          { path: ':filterBy', name: 'filterBy', component: ViewAllList },
          { path: ':category/:title', name: 'viewDetails', component: ViewDetails }
        ]
      },
      { path: 'add', component: AddNewContent }
    ],
    beforeEnter: rediretToLogin
  }
];
