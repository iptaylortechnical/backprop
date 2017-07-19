module.exports = class Layer {

  constructor(neuronCount, nextNeuronCount) {
    this.neuronCount = neuronCount;
    this.nextNeuronCount = nextNeuronCount;
    this.neurons = [];
  }

  getNeurons() {
    return this.neurons;
  }

  randomizeWeights() {
    for (let n in this.neurons) {
      this.neurons[n].randomizeWeights();
    }
  }

  createWeights() {
    for (let n in this.neurons) {
      this.neurons[n].createWeights();
    }
  }

  getWeights() {
    let theWeights = [];
    for (let n in this.neurons) {
      theWeights.push(this.neurons[n].getWeights());
    }

    return theWeights;
  }

  processLayer(lastValues) {
    let newValues = [];

    for (let n = 0; n < this.neurons.length; n++) {
      let custom = [];
      for (let l in lastValues) {
        custom.push(lastValues[l][n]);
      }

      newValues.push(this.neurons[n].pass(custom));
    }

    return newValues;
  }
}