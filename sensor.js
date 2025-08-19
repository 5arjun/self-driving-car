class Sensor{
    constructor(car){
        this.car = car;
        this.rayCount = 3;
        this.rayLength = 100;
        this.raySpread = Math.PI / 4; // 45 degrees
        
        this.rays = [];
    }
    update(){
        this.rays = [];
        for(let i = 0; i< this.rayCount; i++){
            const rayAngle = lerp(
                this.raySpread / 2,
                -this.raySpread / 2,
                i/(this.rayCount - 1)
            )
        }
    }
}