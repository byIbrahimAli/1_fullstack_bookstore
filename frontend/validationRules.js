/**
 * @summary all client-side validation rules can be found here 🤘
 */

const validationRules = {
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Enter a valid email address',
  },
  password: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    message:
      'Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, and a number.',
  },
  name: {
    regex: /^[a-zA-Z\s'-]+$/,
    message: `Name cannot contain numbers or special characters. Spaces, hyphens -, and apostrophes ', are allowed.`,
  },
  productId: {
    regex: /^[a-zA-Z0-9]{3,10}$/,
    message:
      'Product ID must be an alphanumeric value from 3 to 10 characters.',
  },
  quantity: {
    regex: /^[1-9][0-9]*$/,
    message: 'Quantity has got to be bigger than 0.',
  },
}

export default validationRules
