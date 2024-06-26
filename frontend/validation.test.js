import validateField from './validation'

describe('validation msg shown on regex mismatch', () => {
  test('email field', () => {
    expect(validateField('email', 'dot.dot.com')).toBe(
      `Enter a valid email address`
    )
  })

  test('password field', () => {
    expect(validateField('password', 'pass1234')).toBe(
      `Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, and a number.`
    )
  })

  test('name field', () => {
    expect(validateField('name', '123456')).toBe(
      `Name cannot contain numbers or special characters. Spaces, hyphens -, and apostrophes ', are allowed.`
    )
  })

  test('productId field', () => {
    expect(validateField('productId', '1Two,Three')).toBe(
      `Product ID must be an alphanumeric value from 3 to 10 characters.`
    )
  })

  test('quantity field', () => {
    expect(validateField('quantity', '0')).toBe(
      `Quantity has got to be bigger than 0.`
    )
  })
  // hmm: validation is too simple, what'd be cool is precise error msgs on what the user needs to fix - i.e. add a capital letter; rather than the generic blanket error msg.
})
