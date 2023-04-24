function parseCount(value) {
    const result = Number.parseFloat(value);

    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    }

    return result;
}

function validateCount(value) {    
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    } 
}


class Triangle {
    constructor(a , b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a > (b + c) || b > (a + c) || c > (a + b)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        
    }

    get perimeter() {
        return this.a + this.b + this.c;        
    }

    get area() {
        const p = 0.5 * (this.a + this.b + this.c);
        const s = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));
        return Number(s.toFixed(3));
    }

}

function getTriangle(a, b, c) {
    try {
        const triangle = new Triangle(a, b, c);  
        return triangle;      
    } catch (err) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            }, 
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }        
    }

} 