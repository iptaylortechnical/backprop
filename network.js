const HiddenLayer = require('./layers/hiddenLayer');
const InputNeuron = require('./neurons/inputNeuron');
const OutputNeuron = require('./neurons/outputNeuron');
const InputLayer = require('./layers/inputLayer');
const OutputLayer = require('./layers/outputLayer');

module.exports = class Network {
  constructor(numberOfLayers, neuronsPerLayer, inputCount, outputCount, weights = []) {
    this.layers = [];

    let inputWeights = weights.shift();

    for (let l = 0; l < numberOfLayers - 1; l++) {
      this.layers.push(new HiddenLayer(neuronsPerLayer, neuronsPerLayer, weights[l]));
    }

    this.layers.push(new HiddenLayer(neuronsPerLayer, outputCount, weights.pop()));

    this.inputLayer = new InputLayer(inputCount, neuronsPerLayer, inputWeights);
    this.outputLayer = new OutputLayer(outputCount);
  }

  getLayers() {
    return this.layers;
  }

  getWeights() {
    let theWeights = [];
    theWeights.push(this.inputLayer.getWeights());

    for (let l in this.layers) {
      theWeights.push(this.layers[l].getWeights());
    }

    return theWeights;
  }

  randomizeWeights() {
    this.inputLayer.randomizeWeights();

    for (let l in this.layers) {
      this.layers[l].randomizeWeights();
    }
  }

  createWeights() {
    this.inputLayer.createWeights();

    for (let l in this.layers) {
      this.layers[l].createWeights();
    }
  }

  start(inputParams) {
    let first = this.inputLayer.processLayer([inputParams]);
    let datum = [];
    let last = this.layers[0].processLayer(first);

    for (let l = 1; l < this.layers.length; l++) {
      last = this.layers[l].processLayer(last);
    }

    let final = this.outputLayer.processLayer(last);
    console.log(final);
  }
}