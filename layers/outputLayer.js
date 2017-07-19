const Layer = require('./layer');
const OutputNeuron = require('./outputNeuron');

module.exports = class OutputLayer extends Layer {
  constructor(neuronCount) {
    super(neuronCount);

    for (let nC = 0; nC < neuronCount; nC++) {
      this.neurons.push(new OutputNeuron());
    }
  }
}