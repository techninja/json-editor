import { NumberEditor } from './number.js'
import { isInteger } from '../utilities.js'

export class IntegerEditor extends NumberEditor {
  getNumColumns () {
    return 2
  }

  getValue () {
    const value = isInteger(this.value) ? parseInt(this.value) : this.value
    if (!this.jsoneditor.options.use_default_values && value === '') {
      return undefined
    }
    return value
  }
}
