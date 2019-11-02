export default class Errors {
  /**
   * Errors constructor.
   * @param fields
   */
  constructor (fields) {
    this.errors = {}
    this.initErrors(fields)
  }

  /**
   * Init empty form errors.
   */
  initErrors (fields) {
    fields.forEach((field) => {
      this.errors[field] = []
    })
  }

  /**
   * Determine if the given field contains any error.
   * @param field
   * @returns {boolean}
   */
  has (field) {
    return this.errors[field].length
  }

  /**
   * Determine if any field contains any error.
   * @returns {boolean}
   */
  any () {
    return Object.values(this.errors).some((errors) => {
      return errors.length
    })
  }

  /**
   * Get the first error of the given field.
   * @param field
   * @returns {null|*}
   */
  first (field) {
    if (this.errors[field]) {
      return this.errors[field][0]
    }

    return null
  }

  /**
   * Get all errors of the given field.
   * @param field
   * @returns {null|*}
   */
  get (field) {
    return this.errors[field]
  }

  /**
   * Assign errors.
   * @param errors
   */
  assign (errors) {
    Object.keys(errors).forEach((field) => {
      this.errors[field] = errors[field]
    })
  }

  /**
   * Clear the field errors.
   * @param field
   */
  clear (field) {
    this.errors[field] = []
  }

  /**
   * Reset errors for all fields
   */
  reset () {
    Object.keys(this.errors).forEach((field) => {
      this.errors[field] = []
    })
  }
}
