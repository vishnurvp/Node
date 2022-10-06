# NODE JS

## Kick starting node js

### Task 2

1. Arrow functions
```
const multiply = (a, b) => {
  return a*b;
}
```
2. JavaScript Object
```
const student = {
  name: 'pavan',
  age: 25,
  marks: 89,
  printDetails () {
    `${this.name} is ${this.age} years old and has total aggrigate of ${this.marks} %`
  },
};

student.printDetails();
```
3. JavaScript Class

```
// closures, this, arrow functions

class Student {
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }
  
  // using closures
  setPlacementAge(minPlacementAge) {
    const obj = this;
    return function eligibleForCurrentCompany (minMarks) {
      if (obj.marks > minMarks && obj.age > minPlacementAge) {
        console.log(obj.name + ' is ready for placements');
      } else {
        console.log(obj.name + ' is not ready for placements');
      }
    }
  }
  
  // using arrow functions
  setPlacementAge2(minPlacementAge) {
    return (minMarks) => {
      if (this.marks > minMarks && this.age > minPlacementAge) {
        console.log(this.name + ' is ready for placements');
      } else {
        console.log(this.name + ' is not ready for placements');
      }
    }
  }
}

const Pavan = new Student('pavan', 25, 75);
const suresh = new Student('suresh', 13, 35);

Pavan.setPlacementAge(18)(40);
Pavan.setPlacementAge2(18)(80);

suresh.setPlacementAge(18)(40);
suresh.setPlacementAge2(18)(40);

```


### Task 4

2. Array map

```
const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
const mapedArray = array.map(item=>{
  if (item === ' ') return 'empty string';
  else return item;
})
console.log(mapedArray);
const mapedArray2 = array.map(item=>(item===' ')?'empty':item);
console.log(mapedArray2);
```
### Task 5

Async javascript
```
console.log('a');
console.log('b');
setTimeout(() => {
  console.log('c');
  d();
}, 3000);
const d = () => setTimeout(() => {
  console.log('d')
  e();
}, 0);
const e = () => console.log('e');
```

### Task 6


