import './Input.css';

export const Input = (props) => {
  const { left, right, ...inputProps } = props;
  // if (type === 'number') {
  //   return (
  //     <div className="input-container">
  //       <button
  //         className="input__button input__button--plus"
  //         onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
  //       >
  //         -
  //       </button>
  //       <input className="input" {...inputProps} />
  //       <button
  //         className="input__button"
  //         onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
  //       >
  //         +
  //       </button>
  //     </div>
  //   );
  // }
  return (
    <div className="input-container">
      {left}
      <input className="input focusable" {...inputProps} />
      {right}
    </div>
  );
};
