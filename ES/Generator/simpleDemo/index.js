const colors = require('colors');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});
/**
 * 作为数据结构，描述待办任务
 */
console.log('作为数据结构，描述待办任务'.info)

const syncStuff1 = function stuff1() {
  console.info('stuff1 done!')
}

const syncStuff2 = function stuff2() {
  console.info('stuff2 done!')
}

const syncStuff3 = function stuff3() {
  console.info('stuff3 done!')
}

function* toDoStuff() {
  yield syncStuff1
  yield syncStuff2
  yield syncStuff3
}
for (const stuff of toDoStuff()) {
  stuff()
}
/**
 * 流程控制
 */
console.log('流程控制'.info)

function* toDoSyncStuff() {
  yield syncStuff1()
  yield syncStuff2()
  yield syncStuff3()
}

function scheduler(syncTask) {
  var taskObj = syncTask.next(syncTask.value);
  // 如果Generator函数未结束，就继续调用
  if (!taskObj.done) {
    syncTask.value = taskObj.value
    scheduler(syncTask);
  }
}
scheduler(toDoSyncStuff());

/**
 * 部署Iterator接口
 */
console.log('部署Iterator接口'.info)

function toDoProtocolMission() {
  console.info('protocol description')
}

function* iteratorProtocol() {
  console.info('iteratorProtocol start!')
  yield toDoProtocolMission()
  console.info('iteratorProtocol end!')
}
const iterableObj = {
  [Symbol.iterator]: iteratorProtocol
}
for (const iterator of iterableObj) {}

/**
 * 作为有序状态集合
 */
console.log('作为有序状态集合'.info)

const orderedStates = (function* orderedStates() {
  while (true) {
    yield console.info('status one');
    yield console.info('status two');
  }
})()
orderedStates.next()
orderedStates.next()
orderedStates.next()

/**
 * 同步表达异步操作
 */
console.log('同步表达异步操作'.info)

function beforeAction() {
  console.info('beforeAction')
}

function afterAction() {
  console.info('afterAction')
}

function asyncAction() {
  return new Promise((resolve) => {
    console.info('asyncAction completed!')
    resolve()
  })
}

function* toDoAction() {
  beforeAction()
  yield asyncAction()
  afterAction()
}
const actions = toDoAction()
actions.next()
//asyncAction start...
//asyncAction is doing...
//asyncAction is done...
actions.next()