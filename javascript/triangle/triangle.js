/*
Triangles must obey the following rules:  a,b,c > 0   |   a+b >= c

Determine if a triangle is equilateral, isosceles, or scalene.
For sides of lengths a,b,c:
  Equilateral: a=b=c
  Isosceles: a=b (for the purpose of this exercise, at least two)
  Scalene: a

  Bonus-- Degenerate triangle: a+b = c. (Area = 0, looks like a single line.)
*/

export class Triangle {
  constructor(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    const {a,b,c} = this; //get side lengths
    //legality tests
    if (a+b+c===0) throw new error('test triangles with no size are illegal'); //[a,b,c].includes(0)
    if ([a,b,c].some(x => x<0)) throw new error('triangles with negative sides are illegal');
    if ((a+b)<c) throw new error('triangles violating triangle inequality are illegal');
    if ((b+c)<a) throw new error('triangles violating triangle inequality are illegal 2');
    if ((a+c)<b) throw new error('triangles violating triangle inequality are illegal 3');

    //type tests
    if (a===b && b===c) return 'equilateral';
    if (a===b || b===c || a===c) return 'isosceles';
    //if ((a+b===c) || (b+c===a) || (a+c===b)) return 'degenerate';
    else return 'scalene';
  }
}
