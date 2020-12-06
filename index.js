// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides
    }
    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.sides.reduce(reducer)  
    }
}

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]

       if (this.countSides === 3) {
           if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2 ) {
               return true
           } 
       }
       return false
    }
}

class Square extends Polygon {
    get isValid() {
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]

       if (this.countSides === 4) {
           if ((side1 === side2) && (side1 === side3) && (side1 === side4)) {
               return true
           } 
       }
       return false
    }
    get area() {
        return this.sides[0] * this.sides[0]
    }
}
