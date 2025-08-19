class Sensor{
    constructor(car){
        this.car = car;
        this.rayCount = 3;
        this.rayLength = 150;
        this.raySpread = Math.PI / 2; // 90 degrees
        this.rays = [];
        this.readings = [];
    }
}