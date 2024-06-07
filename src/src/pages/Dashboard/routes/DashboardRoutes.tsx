
import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '../HomePage'
import { CalculosPage } from '../CalculosPage'
import { SettingsPage } from '../SettingsPage'

export const DashboardRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="inicio" element={<HomePage />} />
            <Route path="calculos" element={<CalculosPage />} />
            <Route path="configuracion" element={<SettingsPage/>} />
            <Route path="/*" element={<Navigate to="/inicio" />} />
        </Routes>
    </>
  )
}
