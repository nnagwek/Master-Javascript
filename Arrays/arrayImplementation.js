class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length -1];
        delete this.data[this.length -1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
        return item
    }

    shiftItems(index){
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length -1];
        this.length-- ;
    }

}

const newArray = new MyArray();
console.log(newArray); // MyArray { length: 0, data: {} }
console.log(newArray.get(0)); // undefined
console.log(newArray.push("Hi"));- // 1
console.log(newArray); // MyArray { length: 1, data: { '0': 'Hi' } }
console.log(newArray.push("John")); // 2
console.log(newArray); // MyArray { length: 2, data: { '0': 'Hi', '1': 'John' } }
console.log(newArray.push("!")); // 3
console.log(newArray); // MyArray { length: 3, data: { '0': 'Hi', '1': 'John', '2': '!' } } 
// console.log(newArray.pop()); // \!
// console.log(newArray); // MyArray { length: 2, data: { '0': 'Hi', '1': 'John' } }
// console.log(newArray.pop()); // John
// console.log(newArray);// MyArray { length: 1, data: { '0': 'Hi' } }

newArray.delete(1); // John
console.log(newArray); // MyArray { length: 2, data: { '0': 'Hi', '1': '!' } }