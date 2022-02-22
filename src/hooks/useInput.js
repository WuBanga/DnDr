const textRegExp = /^[\wа-яА-Я,\s]*$/;
const numberRegExp = /^\d*$/;

export const useInputOnChange = (props) => {
  const { type, onChange } = props;

  const textOnChange = (e) => {
    let value = e.target.value;
    if (!value.match(textRegExp)) {
      return;
    }
    onChange(value.trimStart());
  };
  const numberOnChange = (e) => {
    let value = e.target.value;
    if (!value.match(numberRegExp)) {
      return;
    }

    onChange(value !== '' ? Number(value) : undefined);
  };

  switch (type) {
    case 'text':
      return textOnChange;

    case 'number':
      return numberOnChange;

    default:
      throw new Error(`Unexpected type: ${type}`);
  }
};
