class Sorter {
  constructor() {
    // your implementation
    this.sorter = [];
  }

  add(element) {
    // your implementation
    this.sorter.push(element);
  }

  at(index) {
    // your implementation
    return this.sorter[index];
  }

  get length() {
    // your implementation
    return this.sorter.length;
  }

  toArray() {
    // your implementation
    return this.sorter;
  }

  sort(indices) {
    // your implementation
    var array = [];
    indices.sort((a,b)=>a-b);
    for(var n = 0; n < indices.length; n++){
      array.push(this.sorter[indices[n]]);
    } 
    if(this.compareFunction) 
      array.sort(this.compareFunction);
    else array.sort((a,b)=>a-b);
    for(var n = 0; n < indices.length; n++){
      this.sorter[indices[n]] = array[n];
    }
    return this.sorter;
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;