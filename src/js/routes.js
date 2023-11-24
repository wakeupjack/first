
import HomePage from '../pages/home.f7';
import AboutPage from '../pages/about.f7';
import FormPage from '../pages/form.f7';
import NovelPage from '../pages/novel.f7';
import CeritaPage from '../pages/cerita.f7';
import SunsetPage from '../pages/sunset.f7';
import Sunset1Page from '../pages/sunset1.f7';
import BintangPage from '../pages/bintang.f7';
import Bintang1Page from '../pages/bintang1.f7';
import BumiPage from '../pages/bumi.f7';
import Bumi1Page from '../pages/bumi1.f7';
import AtomicPage from '../pages/atomic.f7';
import Atomic1Page from '../pages/atomic1.f7';
import TerasPage from '../pages/teras.f7';
import Teras1Page from '../pages/teras1.f7';
import MoneyPage from '../pages/money.f7';
import Money1Page from '../pages/money1.f7';







import DynamicRoutePage from '../pages/dynamic-route.f7';
import RequestAndLoad from '../pages/request-and-load.f7';
import NotFoundPage from '../pages/404.f7';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/novel/',
    component: NovelPage,
  },
  {
    path: '/cerita/',
    component: CeritaPage,
  },
  {
    path: '/sunset/',
    component: SunsetPage,
  },
  {
    path: '/sunset1/',
    component: Sunset1Page,
  },
  {
    path: '/bintang/',
    component: BintangPage,
  },
  {
    path: '/bintang1/',
    component: Bintang1Page,
  },
  {
    path: '/bumi/',
    component: BumiPage,
  },
  {
    path: '/bumi1/',
    component: Bumi1Page,
  },
  {
    path: '/atomic/',
    component: AtomicPage,
  },
  {
    path: '/atomic1/',
    component: Atomic1Page,
  },
  {
    path: '/teras/',
    component: TerasPage,
  },
  {
    path: '/teras1/',
    component: Teras1Page,
  },
  {
    path: '/money/',
    component: MoneyPage,
  },
  {
    path: '/money1/',
    component: Money1Page,
  },
  








  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;