import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import Fact from './pages/Fact'

const router = ([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/:factId',
    element: <Fact />,
  },
])

export default router
