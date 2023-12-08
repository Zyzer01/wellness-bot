// Dialog.tsx

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Dialog = () => {
  const { theme } = useContext(ThemeContext); 

  return <div style={{ color: theme === 'light' ? 'black' : 'white' }} className='dark:text-white'>Content</div>;
};

export default Dialog;
