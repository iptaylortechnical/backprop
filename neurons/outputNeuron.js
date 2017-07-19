const Neuron = require('./neuron');

module.exports = class OutputNeuron extends Neuron {
  constructor () {
    super(null);
  }

  pass (previousValues) {
    let sum = 0;

    for (let pV in previousValues) {
      sum += previousValues[pV];
    }

    return this.sigmoid(sum);
  }
}