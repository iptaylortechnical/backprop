const Layer = require('./layer');
const InputNeuron = require('./inputNeuron');

module.exports = class InputLayer extends Layer {
  constructor (neuronCount, nextNeuronCount, weights = []) {
    super(neuronCount, nextNeuronCount);

    for (let nC = 0; nC < neuronCount; nC++) {
      this.neurons.push(new InputNeuron(weights[nC], this.nextNeuronCount));
    }
  }
}