import validationByType from "./validationSchema";

const handleValidation = (fields) => {
  const errorsData = {};
  Object.keys(fields).forEach((type) => {
    const error = validationByType(fields[type], type);
    const isError = Boolean(error);
    if (isError) {
      errorsData[type] = error;
    }
  });
  return errorsData;
};

export default handleValidation;
