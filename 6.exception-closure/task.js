function parseCount(value) {
    let quantity = Number.parseInt(value);
    if (isNaN(quantity)) {
        throw new Error("Невалидное значение")
    }
    return quantity
}

function validateCount(value) {
    try {
        return parseCount(value)
    } catch(error) {
        return error
    } 
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a > (b + c) || b > (a + c) || c > (a + b)) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }

    getPerimeter() {
        this.p = (this.a + this.b + this.c)
        return this.p
    }

    getArea() {
        this.square = Math.sqrt((this.p / 2)*((this.p / 2)-this.a)*((this.p / 2)-this.b)*((this.p / 2)-this.c))
        return +this.square.toFixed(3)
    }
}

function getTriangle(a, b, c) {
    try {
        const triangle = new Triangle(a, b, c)
        return triangle
    } catch(error) {
        let errorTriangle = {}
        errorTriangle.getPerimeter = function getPerimeter() {
            return "Ошибка! Треугольник не существует"
        }
        errorTriangle.getArea = function getArea() {
            return "Ошибка! Треугольник не существует"
        }
        return errorTriangle
    }
}