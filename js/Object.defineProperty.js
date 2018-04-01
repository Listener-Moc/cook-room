let data = {
	data1: {
		one: 1,
		two: 2,
		three: 3
	},
	data2: {
		one: 1,
		two: 2,
		three: 3
	}
}

function defindReactive(obj, key, val) {
	Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      /* 将Dep.target（即当前的Watcher对象存入dep的subs中） */
      // dep.addSub(Dep.target);
      return val;         
    },
    set: function reactiveSetter (newVal) {
      if (newVal === val) return;
      /* 在set的时候触发dep的notify来通知所有的Watcher对象更新视图 */
      // dep.notify();
      console.log('视图更新~~~~');
    }
  });
}

function observer(value) {
	Object.keys(value).forEach(key => {
		defindReactive(data, key, data[key]);
	})
}

observer(data);

data.data1 = {};
