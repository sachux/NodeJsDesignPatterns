const waterTank1 = require('./WaterTank')
const waterTank2 = require('./WaterTank')


waterTank1.addWater(15);
waterTank2.addWater(10);
waterTank2.addWater(15);
waterTank2.addWater(5);

console.log(`Water tank capasity waterTank1: ${waterTank1.getCurrentWaterLevel()},   waterTank2: ${waterTank2.getCurrentWaterLevel()},  `)
waterTank1.releaseWater(15);
console.log(`After releasing: Water tank capasity waterTank1: ${waterTank1.getCurrentWaterLevel()},   waterTank2: ${waterTank2.getCurrentWaterLevel()},  `)
