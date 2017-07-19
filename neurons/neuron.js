const Connector = require('./connector');

module.exports = class Neuron {
  constructor(weights = [], outputCount) {
    this.weights = weights;
    this.outputCount = outputCount;
  }

  getWeights() {
    return this.weights;
  }

  pass(previousValues) {
    let sum = 0.0;

    for (let pV in previousValues) {
      sum += previousValues[pV];
    }

    let finalSum = this.sigmoid(sum);
    let newSums = [];

    for (let w in this.weights) {
      newSums.push(finalSum * this.weights[w]);
    }

    return newSums;
  }

  randomizeWeights () {
    for (let w in this.weights) {
      this.weights[w] = Math.random();
    }
  }

  createWeights() {
    this.weights = [];

    for (let n = 0; n < this.outputCount; n++) {
      this.weights.push(Math.random());
    }
  }

  sigmoid(t) {
    return 1 / (1 + Math.pow(Math.E, -t));
  }
}