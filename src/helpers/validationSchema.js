const MIN_PASSWORD_LENGTH = 6;
const validEmailRegex = RegExp(
  // eslint-disable-next-line
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validationByType = (value, type) => {
  let error = "";
  switch (type) {
    case "email":
      error = validEmailRegex.test(value)
        ? ""
        : "Email is invalid! Please enter a valid email like example@example.com";
      if (value.trim().length === 0) {
        error = "Email field is required";
      }
      break;
    case "password":
    case "passwordConfirm":
      error =
        value.trim().length < MIN_PASSWORD_LENGTH
          ? `Password must be a minimum of ${MIN_PASSWORD_LENGTH} characters long!`
          : "";
      break;
    default:
      break;
  }
  return error;
};

export default validationByType;
