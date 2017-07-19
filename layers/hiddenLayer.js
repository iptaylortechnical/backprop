const Layer = require('./layer');
const HiddenNeuron = require('./hiddenNeuron');

module.exports = class HiddenLayer extends Layer {

  constructor (neuronCount, nextNeuronCount, weights = []) {
    super(neuronCount, nextNeuronCount);

    for (let nC = 0; nC < neuronCount; nC++) {
      this.neurons.push(new HiddenNeuron(weights[nC], nextNeuronCount));
    }
  }

}