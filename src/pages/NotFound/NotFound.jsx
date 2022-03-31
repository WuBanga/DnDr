import { Link } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import './NotFound.css';

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__header">Страница не найдена</h1>
      <Link to="/">
        <Button>Вернуться на главную страницу</Button>
      </Link>
    </div>
  );
};
