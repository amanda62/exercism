export class InputCell {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  setValue(value) {
    this._value = value;
  }
}

export class ComputeCell {
  constructor(InputCellArray, callback) {
    this._value = InputCellArray;
    this._callback = callback;
  }

  get value() {
    return this._callback(InputCellArray);
  }
}
