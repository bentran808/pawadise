import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ShopPage from './pages/StorePage/ShopPage';
import CafePage from './pages/StorePage/CafePage';
import MedicalPage from './pages/StorePage/MedicalPage';
import NewsPage from './pages/NewsPage/NewsPage';
import EventsPage from './pages/EventsPage/EventsPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ShopDetailsPage from './pages/DetailsPage/ShopDetailsPage';
import CafeDetailsPage from './pages/DetailsPage/CafeDetailsPage';
import MedicalDetailsPage from './pages/DetailsPage/MedicalDetailsPage';
import Image from './pages/GalleryPage/Image';
import ProfilePage from './pages/ProfilePage/ProfilePage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/shop',
        exact: true,
        main: ({match}) => <ShopPage match={match}/>
    },
    {
        path: '/cafe',
        exact: true,
        main: ({match}) => <CafePage match={match}/>
    },
    {
        path: '/medical',
        exact: true,
        main: ({match}) => <MedicalPage match={match}/>
    },
    {
        path: '/news',
        exact: false,
        main: () => <NewsPage />
    },
    {
        path: '/events',
        exact: false,
        main: () => <EventsPage />
    },
    {
        path: '/gallery',
        exact: false,
        main: () => <GalleryPage />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <ContactPage />
    },
    {
        path: '/shop/:slug',
        exact: false,
        main: () => <ShopDetailsPage />
    },
    {
        path: '/cafe/:slug',
        exact: false,
        main: () => <CafeDetailsPage />
    },
    {
        path: '/medical/:slug',
        exact: false,
        main: () => <MedicalDetailsPage />
    },
    {
        path: '/img',
        exact: false,
        main: () => <Image />
    },
    {
        path: '/profile',
        exact: false,
        main: () => <ProfilePage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes;