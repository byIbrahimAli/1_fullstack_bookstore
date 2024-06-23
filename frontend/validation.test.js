import validateField from './validation'

test('tests name cannot be a bunch of numbers', () => {
  expect(validateField('name', '123456')).toBe(
    `Name cannot contain numbers or special characters. Spaces, hyphens -, and apostrophes ', are allowed.`
  )
})

// todo: test your validation rules work through your validation fn
