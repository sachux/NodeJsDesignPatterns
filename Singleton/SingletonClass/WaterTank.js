let waterLevel = 0;

class WaterTank{
    addWater(quantityInLitre){
        waterLevel += quantityInLitre;
        return waterLevel;
    }
    releaseWater(quantityInLitre){
        waterLevel -= quantityInLitre;
        return waterLevel;
    }
    getCurrentWaterLevel(){
        return waterLevel;
    }
}

module.exports = new WaterTank();