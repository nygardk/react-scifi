import Matrix from 'models/Matrix';

describe('matrix', function() {
  let matrix;

  beforeEach(() => {
    matrix = new Matrix(2, 3, 1);
  });

  describe('set', () => {
    it('should return a copy of the matrix', () => {
      const matrixCopy = matrix.set();

      expect(Object.is(matrixCopy, matrix)).not.toBe(true);
    });

    it('set value by x and y indexes', () => {

    });
  });

  describe('_resize', () => {
    it('should add null values to the matrix if value is not given', () => {

    });

    it('should add given values to the matrix if value is given', () => {

    });
  });

  it('createCopy method should create a copy', () => {

  });
});
