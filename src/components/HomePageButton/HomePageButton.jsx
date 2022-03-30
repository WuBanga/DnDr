import { Link } from 'react-router-dom';

import { HomeIcon } from '../../icons/HomeIcon';
import { IconButton } from '../IconButton/IconButton';
import './HomePageButton.css';

export const HomePageButton = () => {
  return (
    <Link to="/">
      <IconButton
        className="home-page-button"
        size="medium"
        icon={<HomeIcon />}
      />
    </Link>
  );
};
