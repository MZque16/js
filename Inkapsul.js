class Teacher {
    static _imya = 'Hi';
    static #count = 0;
    static steelQuality = "high-quality"; 
    #name;
    type;
    _defense;

    constructor(name, age, type, klass) { 
    this.name = name;
    this.age = age;
    this.type = type;
    this._klass = klass;

    }
    
    static #privateMethod() { 
    console.log(`Я ${this.name} - ваш учитель. Мой предмет - ${this.type}`);
    }
    
    static _invisibleMethod(){ 
    }
    
    static staticMethod(teacher) { 
    console.log(`Привет, меня зовут ${teacher.name}, мне ${teacher.age} лет и мой предмет - ${teacher.type} .`);
    }
    
    publicMethod() { 
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет и мой предмет ${this.type}.`);
    }

    #Helloword(){
        console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет и мой предмет ${this.type}.`);
    }

    _HelloMir() {
        
    }
    }
    
    
    const teacher1 = new Teacher("Дмитрий", 30,"Физика", "8а"); 
    const teacher2 = new Teacher("Василий", 25, "Математика", "5г");
    const teacher3 = new Teacher("Егор", 26,"география", "6в" );
    teacher2.publicMethod();
    Teacher.staticMethod(teacher1);
    

