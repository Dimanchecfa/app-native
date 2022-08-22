import React, { lazy } from 'react';
import { Text, View } from 'react-native';
import { PERMISSIONS} from '../../utilities/constant/app.constants';
import AuthGuard from '../components/AuthGuard';

const guestRoutes = [
    {
        name: 'Home',
        components: lazy(() => import('../../screens/Home/index')),
        permissions: [PERMISSIONS.FREE , PERMISSIONS.PREMIUM]
    },
    {
        name: 'Free',
        components: lazy(() => import('../../screens/Free/index')),
        permissions: [PERMISSIONS.FREE , PERMISSIONS.PREMIUM],
        
    
    },
    {
        name: 'Premium',
        components: lazy(() => import('../../screens/Premium/index')),
        permissions: [PERMISSIONS.PREMIUM],
        guard: AuthGuard

    },
    {
        name: 'Profile',
        components: lazy(() => import('../../screens/Profile/index')),
        permissions: [PERMISSIONS.PREMIUM],
        guard: AuthGuard

    }

]

export default guestRoutes
;
