import { validateEmail, validatePassword, validatePhoneNumber } from "../hooks/validation/usevalidation";

describe('Validation functions', () => {
  describe('validateEmail function', () => {
    it('should return true for valid email format', () => {
      expect(validateEmail('test@example.com')).toBe(true);
    });

    it('should return false for invalid email format', () => {
      expect(validateEmail('invalid-email')).toBe(false);
    });
  });

  describe('validatePhoneNumber function', () => {
    it('should return true for valid phone number format', () => {
      expect(validatePhoneNumber('12345678')).toBe(true);
    });

    it('should return false for invalid phone number format', () => {
      expect(validatePhoneNumber('invalid')).toBe(false);
    });
  });

  describe('validatePassword function', () => {
    it('should return true for valid password format', () => {
      expect(validatePassword('Abc123')).toBe(true);
    });

    it('should return false for invalid password format', () => {
      // Password length less than 6 characters
      expect(validatePassword('Abc12')).toBe(false);

      // Password without digits
      expect(validatePassword('Abcdef')).toBe(false);

      // Password without letters
      expect(validatePassword('123456')).toBe(false);
    });
  });
});
