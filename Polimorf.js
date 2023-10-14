class Dot {
    constructor(name, count) {
        this.name = name;
        this.count = count;
    }
    
    exist() {
            console.log(`${this.name} существует`);
            return (this.name);
        }
    
    greeting() {
        console.log(`Привет, я ${this.name}`);
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
    greeting() {
        console.log(`Привет, я ${this.name}`);
    }
}

let line = new Line("Отрезок", 2, 'Красный');

class Rectangular extends Line {
    constructor(name, count, color, type) {
        super(name, count, color,)
        this.type = type;
    }
        side(side) {
            this.side = side;
            if (this.side>3 || this.side <3){
                console.log('Неверное количество сторон треугольника')
            } else {
            console.log(`Две стороны объекта ${this.name} = ${this.side} см`)
            }
        }
        corner(corner) {
            this.corner = corner;
            if (this.corner > 180 || this.corner < 1) {
                console.log('Неверно задан угол') 
            } else {
            console.log(`Это ${this.type} ${this.name}, имеет ${this.count} точки, цвета - ${this.color}, его меньший угол - ${this.corner} градусов`)
            }
            
        } 
        greeting() {
            console.log(`Привет, я ${this.name}`);
        }   
}
let rectangular = new Rectangular('Треугольник', 3, 'Синий', 'Равнобедренный')

const array =  [ new Line('Отрезок', 2, 'Красный'), new Rectangular('Треугольник', 3, 'Синий', 'Равнобедренный')];

array.forEach(Dot => {
        Dot.exist();
        Dot.greeting();
    });

 