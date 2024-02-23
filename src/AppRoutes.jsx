import { Routes, Route } from 'react-router-dom'
import { NotFound } from './pages/not-found/NotFound'
import { MainPage } from './pages/main-page/MainPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        index
        element={<MainPage />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
}
