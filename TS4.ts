let SayHello = (name: string): void => {
  console.log("Hello " + name);
}

let AddNumbers = (num1: number, num2: number): number => {
  return num1 + num2;
}

type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

type Point = {
    x : number;
    y : number;
}
function GetDistance (p1: Point, p2: Point): number {
    return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
}

function filterByType(arr: any[], type: string): any[] {
  return arr.filter(item => typeof item === type);
}