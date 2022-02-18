import { Link } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import './NotFound.css';

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__header">Страница не найдена</h1>
      <Button as={Link} to="/">
        Вернуться на главную страницу
      </Button>
    </div>
  );
};
