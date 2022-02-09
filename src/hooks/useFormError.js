export const useFormError = (props) => {
  const { rules } = props;

  const validate = (data) => {
    const result = {};
    let isError = false;
    for (const name of Object.keys(rules)) {
      const error = getErrorMessage(name, data[name]);
      if (error === undefined) {
        continue;
      }
      result[name] = error;
      isError = true;
    }
    return isError ? result : true;
  };

  const getErrorMessage = (name, value) => {
    const nameRules = rules[name];
    if (!nameRules) {
      return undefined;
    }

    for (const rule of nameRules) {
      if (rule.validate) {
        if (rule.validate(value)) {
          return undefined;
        }
        return rule.errorMessage;
      }
      if (!rule.type) {
        throw new Error('Rule type is not provided');
      }
      if (!defaultRules[rule.type]) {
        throw new Error(`Unknown rule type: ${rule.type}`);
      }
      if (!defaultRules[rule.type](value)) {
        return rule.errorMessage;
      }
    }
    return undefined;
  };

  return { getErrorMessage, validate };
};

const defaultRules = {
  required: (value) => {
    if (value === undefined) {
      return false;
    }
    if (value === '') {
      return false;
    }
    return true;
  },
};
