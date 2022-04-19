// Node Js module system by default provides the cached instance of the object which acts as a basic framework for Singleton.
// Modules are cached when they are accessed via require statement for the first time, there after the same instance is used.
// Eventhough this acts as a singleton it is basically a single cached instance

let waterLevel = 0;

const WaterTank = {
    addWater(quantityInLitre){
        waterLevel += quantityInLitre;
        return waterLevel;
    },
    releaseWater(quantityInLitre){
        waterLevel -= quantityInLitre;
        return waterLevel;
    },
    getCurrentWaterLevel(){
        return waterLevel;
    }
}

module.exports = WaterTank;