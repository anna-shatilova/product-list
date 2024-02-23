import { Routes, Route } from 'react-router-dom'
import { NotFound } from './pages/not-found/NotFound'
import { MainPage } from './pages/main-page/MainPage'
import { AppLayout } from './pages/main-page/AppLayout'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          path="/"
          index
          element={<MainPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  )
}
