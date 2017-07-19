# guster

Guster is a light, simple, yet adaptable neural network builder. 

Installation:

```bash
npm install guster --save
```

Usage:

```javascript
let Guster = require('guster')

let hiddenLayers = 1;
let neuronsPerLayer = 2;
let inputs = 2;
let outputs = 1;

let weights = 
[
    [
        [0.2, 0.3, 0.5],
        [0.4, 0.8, 0.1]
    ],
    [
        [0.7],
        [0.2],
        [0.2]
    ]
];

let network = new Guster(hiddenLayers, neuronsPerLayer, inputs, outputs, weights);
let inputParameters = [0, 1];
network.start(inputParameters);
```

You can also have a network generate its own weights.

```javascript
let network = new Guster(hiddenLayers, neuronsPerLayer, inputs, outputs);
network.createWeights();
network.start(inputParameters);
```

You can also store that weight set for later manipulation.

```javascript
let generatedWeights = network.getWeights();
```