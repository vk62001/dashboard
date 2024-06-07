
import React from 'react';
import { useSelector} from 'react-redux'
import { RootState } from '../store/store';
import { Navigate } from 'react-router-dom';


interface PrivateRouteProps {
    children: React.ReactNode;
  }

export const PublicRoute = ({children}:PrivateRouteProps) => {
    
    const {loggedIn} = useSelector((state: RootState) => state.dataSlice);

    return (!loggedIn ? <>{children}</> : <Navigate to="/inicio"/>)
}
