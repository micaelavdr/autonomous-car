const assert = require('assert');

const { simulate } = require('./simulator');
const outOfBoundsInput = require('./input/out-of-bounds.json');
const successInput = require('./input/success.json');
const successReverseInput = require('./input/success-reverse.json');
const badDataInput = require('./input/bad-data.json');

describe('autonomous-car simulator', () => {
  describe('when the car navigates successfully', () => {
    it('should return a success status', () => {
      const output = simulate(successInput);
      assert.deepEqual(output, { "status": "success" });
    });
  });

  describe('when the car goes out of bounds', () => {
    it('should return an error status', () => {
      const output = simulate(outOfBoundsInput);
      assert.deepEqual(output, { "status": "error", "position": "2" });
    });
  });

  describe('when the car reverses', () => {
    it('should return a success status', () => {
      const output = simulate(successReverseInput);
      assert.deepEqual(output, { "status": "success" });
    });
  });

  describe('if position is not a positive integer', () => {
    it('should return an error status', () => {
      const output = simulate(badDataInput);
      assert.deepEqual(output, { "status": "error" });
    });
  });
});
