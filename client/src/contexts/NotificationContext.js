import { createContext } from 'react';

export const NotificationContext = createContext(
  {
    'isOpen': false,
    'message': '',
    'status': ''
  }
);