class Dot {
    constructor(name, count) {
        this.name = name;
        this.count = count;
    }
    
}
let dot = new Dot('Точка', 1);

class Line extends Dot {
    constructor(name, count, color) {
        super(name, count);
        this.color = color;
    }
    long (long) {
        this.long = long;
        console.log(`Это ${this.name} , имеет ${this.count} точки, цвета - ${this.color} и его длина ${this.long} см`)
    }
}
let line = new Line("Отрезок", 2, 'Красный');

class Triangle extends Line {
    constructor(name, count, color, side) {
        super(name, count, color,)
        this.side = side;
    }
        corner(corner) {
            this.corner = corner;
            
            console.log(`Это ${this.name}, имеет ${this.count} точки, цвета - ${this.color}, его меньший угол - ${this.corner} градусов`)
            } 
}
let triangle = new Triangle('Треугольник', 3, 'Синий', 'Равнобедренный')

let Primes = {
    corner(corner) {
        this.corner = corner;
        
        console.log(`Это ${this.name}, имеет ${this.count} точки, цвета - ${this.color}, у него нет углов`)
        },
    long (long) {
        this.long = long;
        console.log(`Это ${this.name} , имеет ${this.count} точки, цвета - ${this.color} и его длина бесконечна`)
    }
  };

  class Luch extends Dot{
    constructor(name,count,color) {
      super("Луч",1,"Красный");
      this.name = name;
      this.count = count;
      this.color = color;
    }
  }

    Object.assign(Luch.prototype, Primes);
  
    let myLuch = new Luch("Луч",1,"Синий");
    myLuch.corner();
    myLuch.long();




    class myTime extends Date {
        constructor() {
          super();
        }
      
        currentTime() {
          return this.toLocaleTimeString('ru-RU');
        }
      }
      
        let Time = new myTime();
        console.log(Time.currentTime()); 



function protoNames(obj) {
  let prototype = Object.getPrototypeOf(obj);
  while (prototype) {
    console.log(prototype.constructor.name);
    prototype = Object.getPrototypeOf(prototype);
  }
}
  protoNames(line); 






  console.log(triangle instanceof Dot);
  Object.setPrototypeOf(triangle, null);
  console.log(triangle instanceof Dot);
  Object.setPrototypeOf(triangle, Line);
  

 



