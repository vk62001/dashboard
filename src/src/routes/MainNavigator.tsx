import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { DashboardRoutes } from '../pages/Dashboard/routes/DashboardRoutes';
import { LoginPage } from '../pages/Auth/LoginPage';




export const MainNavigator = () => {
    return (
      <Routes>
          <Route path="/login/*" element={
              <PublicRoute>
                  <Routes>
                      <Route path="/*" element={<LoginPage />} />
                  </Routes>
              </PublicRoute>
          } />

          <Route path='/*' element={
              <PrivateRoute>
                  <DashboardRoutes />
              </PrivateRoute>
          } />
      </Routes>
  )
}
