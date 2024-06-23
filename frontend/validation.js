/**
 * @summary consume validation rules into a generic validation function
 */

import validationRules from './validationRules'

const validateField = (name, value) => {
  const rule = validationRules[name]
  if (!rule) return null // hmm: do we want to throw an error here?

  if (!rule.regex.test(value)) {
    // if there is no regex match - i.e. doesn't match pattern we want
    return rule.message
  }

  return null // hmm: wanna declare success somewhere?
}

export default validateField
