export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
  };
  export const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneNumberRegex = /^\d{8}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  export const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
    return passwordRegex.test(password);
  };
