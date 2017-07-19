const Neuron = require('./neuron');

module.exports = class InputNeuron extends Neuron {
  constructor (weights = [], outputCount, value) {
    super(weights, outputCount);
    this.value = value;
  }
}