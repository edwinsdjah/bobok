import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Reservation',
  description: 'Who Are We',
};

const MyReservationPage = () => {
  return <div className='py-20 mt-10'>My Reservation Page</div>;
};

export default MyReservationPage;
