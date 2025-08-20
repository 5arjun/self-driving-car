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
            );
            const start = { 
                x: this.car.x, 
                y: this.car.y 
            };
            const end = {
                x: this.car.x - Math.sin(this.car.angle + rayAngle) * this.rayLength,
                y: this.car.y - Math.cos(this.car.angle + rayAngle) * this.rayLength
            };
            this.rays.push({ start, end });
        }
    }

    draw(ctx){
        for(let i = 0; i < this.rays.length; i++){
            const ray = this.rays[i];
            ctx.beginPath();
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = "yellow";
            ctx.moveTo(
                ray.start.x,
                ray.start.y
            );
            ctx.lineTo(
                ray.end.x,
                ray.end.y
            );
            ctx.stroke();
        }
    }
}