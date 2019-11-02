import Errors from './Errors'

const VALIDATION_ERROR_STATUS = 422

export default class Form {
  /**
   * Form constructor.
   * @param data
   */
  constructor (data) {
    this.originalData = data
    this.isPending = false
    this.initFields(data)
    this.initErrors(data)
  }

  /**
   * Init form fields.
   * @param data
   */
  initFields (data) {
    Object.keys(data).forEach((field) => {
      this[field] = data[field]
    })
  }

  /**
   * Init form errors.
   * @param data
   */
  initErrors (data) {
    this.errors = new Errors(Object.keys(data))
  }

  /**
   * Get the form data without any non relevant fields.
   */
  data () {
    const data = {}

    Object.keys(this.originalData).forEach((property) => {
      data[property] = this[property]
    })

    return data
  }

  /**
   * Transform the form data by merging with the given data object.
   * @param data
   */
  transform (data) {
    const transformed = this.data()

    Object.keys(data).forEach((property) => {
      transformed[property] = data[property]
    })

    return transformed
  }

  /**
   * Reset form fields and errors.
   */
  reset () {
    this.initFields(this.originalData)
    this.errors.clear()
  }

  /**
   * Set errors.
   * @param errors
   */
  setErrors (errors) {
    this.errors.assign(errors)
  }

  /**
   * Submit form using promised callback.
   * @param callback
   * @returns {Promise<*>}
   */
  submitUsing (callback) {
    return new Promise((resolve, reject) => {
      if (this.isPending) {
        return reject(new Error('Request is pending...'))
      }

      if (this.errors.any()) {
        return reject(new Error('Validation errors are not resolved.'))
      }

      this.isPending = true

      callback(this.data())
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          if (error.response.status === VALIDATION_ERROR_STATUS) {
            return this.setErrors(error.response.data.errors)
          }

          reject(error.response, error)
        })
        .finally(() => {
          this.isPending = false
        })
    })
  }
}
