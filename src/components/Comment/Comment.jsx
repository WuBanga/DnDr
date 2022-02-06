import { useState } from 'react';

export const Comment = () => {
  const [comment, setComment] = useState('');
  return (
    <div>
      <label htmlFor="">Комментарий</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
    </div>
  );
};
