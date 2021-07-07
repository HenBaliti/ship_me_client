export const validateJobTitle = (jobTitle) => {
  return jobTitle.length >= 1;
};
export const validatePhone = (phone) => {
  return phone.length >= 9;
};

export const validatePassword = (password) => {
  const passRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  return passRegex.test(password);
};
export const validateFirstName = (firstName) => {
  return firstName.length >= 1;
};
export const validateLastName = (lastName) => {
  return lastName.length >= 1;
};

export const validateEmail = (email) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};
