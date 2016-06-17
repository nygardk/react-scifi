import times from 'lodash.times';

function shallowCopy(value) {
  return typeof value === 'object'
    ? {...value}
    : value;
}

function matrix(...sizes) {
  return [...sizes]
    .reverse()
    .reduce((prev, curr) => times(curr, () => prev), null);
}

export default class Matrix extends Array {
  constructor(...sizes) {
    super(sizes);
    this.values = matrix.apply(null, sizes);
  }

  set() {

  }

  resize(xSize, ySize) {

  }
}
