function List () {
  this.pos = 0;
  this.listSize = 0;
  this.dataList = [];
  //简单元素
  this.append = append;
  this.remove = remove;
  this.clear = clear;
  this.update = update;
  this.insert = insert;
  this.find = find;
  this.toString = toString;
  //遍历器
  this.start = start;
  this.end = end;
  this.pre = pre;
  this.next = next;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;

  // 增
  function append(ele) {
    this.dataList[this.listSize++] = ele;
  }
  // 删
  function remove(ele) {
    let index = this.find(ele);
    if (index > -1) {
      this.dataList.splice(index, 1);
      this.listSize--;
      return true;
    }
    return false;
  }
  // 清空
  function clear() {
    delete this.dataList;
    this.dataList = [];
    this.listSize = this.pos = 0;
  }
  // 改
  function update(ele) {
    let index = this.find(ele);
    if (index > -1) {
      this.change(index, ele);
    }
  }

  function change(index, ele) {
    if (index < this.length()) {
      this.dataList[index] = ele;
      return true;
    }
    return false;
  }
  // 插入
  function insert(ele, after) {
    let index = this.find(after);
    if (index > -1) {
      this.dataList.splice(index, 0, ele);
      this.listSize++;
      return true;
    }
    return false;
  }
  // 查
  function find(ele) {
    this.dataList.forEach((element, index) => {
      if (ele === element) {
        return index;
      }
      return -1;
    });
  }

  function length() {
    return this.listSize;
  }

  function toString() {
    return this.dataList;
  }

  function start() {
    this.pos = 0;
  }

  function end() {
    this.pos = this.length() - 1;
  }

  function pre() {
    if (this.pos > 0) this.pos--;
  }

  function next() {
    if (this.pos < this.length() - 1) this.pos++;
  }

  function currPos() {
    return this.pos;
  }

  function moveTo(toPos) {
    this.pos = toPos;
  }

  function getElement() {
    return this.dataList[this.pos];
  }
}

let nameList = new List();

for (var i=0; i < 10; i++) {
  nameList.append(`第${i}个我`)
}

console.log(nameList.toString()) 
