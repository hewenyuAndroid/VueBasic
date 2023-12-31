# vue_test3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 创建 Vue3 工程

## 1. 使用 `vue-cli` 创建

官方文档: https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create

```shell
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version
## 安装或者升级你的@vue/cli
npm install -g @vue/cli
## 创建
vue create vue_test
## 启动
cd vue_test
npm run serve
```

## 使用 vite 创建

官方文档: https://v3.cn.vuejs.org/guide/installation.html#vite

vite官网: https://vitejs.cn

- 什么是 vite: 新一代前端构建工具;
- 优势如下: 
    - 开发环境中，无需打包操作，可以快速冷启动;
    - 轻量快速的热重载(HMR);
    - 真正的按需编译，不再等待整个应用编译完成;

传统构建与 vite 构建对比图

![传统构建](./img/traditional_construction.png)

![vite构建](./img/vite_construction.png)


```shell
## 创建工程
npm init vite-app <project-name>
## 进入工程目录
cd <project-name>
## 安装依赖
npm install
## 运行
npm run dev
```


# 常用 `Composition API`

官方文档: https://v3.cn.vuejs.org/guide/composition-api-introduction.html

## 1. `setup` 函数

1. 理解: Vue3.0 中一个新的配置项，值为一个函数;
2. `setup` 是所有 `Composition Api` (组合API) "表演的舞台";
3. 组件中所有用到的: 数据(data), 方法(methods)等，均要配置在 `setup` 中;
4. `setup` 函数的两种返回值:
    - 对象: 对象中的属性、方法，在模板中均可以直接使用;
    - 函数(渲染函数): 可以自定义渲染内容;
5. 注意点:
    - 尽量不要与 `Vue2.x` 配混用;
        - 在 `Vue2.x` 配置 (`data`, `methods`, `computed`...) 中可以访问到 `setup` 中的属性、方法; (vue2的配置可以读取到vue3的配置)
        - 在 `setup` 中，不能访问到 `Vue2.x` 配置 (`data`,`methods`,`computed`...); 
        - 如果有重名 (例如: `data` 中配置了 `name`, `setup` 中也配置了 `name`), 优先使用 `setup` 中的数据;
    - `setup` 不能是一个 `async` 函数，因为返回值不再是 return 对象，而是 `promise`, 模板看不到 `return` 对象中的属性。(后期也可以返回一个 `Promise` 实例，但需要 `Suspense` 和 异步组件的配合)


## 2. `ref` 函数

1. 作用: 定义一个响应式数据；
2. 语法: `const name = ref('zhangsan')`
    - 创建一个包含响应式数据的 **引用对象** (`reference` 对象，简称 `ref` 对象);
    - JS中操作数据: `name.value='lisi'`;
    - 模板中读取数据: 不需要 `name.value` 直接: `<div>{{ name }}</div>`

备注: 
    - 接收的数据可以是: 基本类型，也可以是对象类型；
    - 基本类型的数据: 响应式依然是依靠 `Object.defineProperty()` 的 `get` 和 `set` 完成;
    - 对象类型的数据: 内部 借助了 `Vue3.0` 中的一个新函数 -- `reactive` 函数;

## 3. `reactive` 函数

1. 作用: 定义一个 对象类型 的响应式数据 (基本类型不要用它，要用 ref 函数)
2. 语法: `const 代理对象 = reactive( 源对象 )` 接收一个对象 (或数组)，返回一个 **代理对象** ( `Proxy` 的实例对象，简称 `proxy` 对象);
3. `reactive` 定义的响应式数据是 深层次的 (如果属性是一个对象，属性内部的属性变更也可以监听到);
4. 内部基于 ES6 的 `Proxy` 实现，通过代理对象操作源对象内部数据进行操作;


## 4. `Vue3.0` 中响应式的原理

### 1. `vue2.x` 的响应式

1. 实现原理:
    - 对象类型: 通过 `Object.defineProperty()` 对属性的 读取(`get`)、修改(`set`) 进行拦截 (数据劫持);
    - 数组类型: 通过 重写 更新数组的一系列方法来拦截。（对数组的变更方法进行了包裹）
    ```js
    Object.defineProperty(person, 'sex', {
        get() {...},
        set() {...}
    })
    ```
2. 存在的问题:
    - 新增属性、删除属性，界面不会更新; (因为只拦截了 get/set)
    - 直接通过下标修改数组的内容，页面不会更新 (因为是通过重写数组的相关函数实现)。

[vue2.x监测数据改变的原理](../vue_basic/12.列表渲染/10.总结Vue数据监测.html)

### 2. `vue3.0` 的响应式

实现原理:
    - 通过 `Proxy` (代理): 拦截对象中任意属性的变化，包括: 属性值的读/写 (`get/set`)、属性的添加 ( 也是通过 `set` 回调)、属性的删除 (`deleteProperty`)等;
    - 通过 `Reflect` (反射): 对源对象的属性操作;
    - MDN 文档中描述的 `Proxy` 和 `Reflect`
        - `Proxy`: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
        - `Reflect`: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

```js
let person = {name:'zhangsan', age:20};

new Proxy(person, {
    
    /**
     * 拦截获取属性的操作
     * @param target: 源对象，这里为 person
     * @param prop: 当前 get 操作对应的属性名称
     * */
    get(target, prop) {
        console.log(`拦截了 person 对象的 ${prop} 属性的 get操作`)
        // 直接通过对象获取属性
        // return target[prop];
        
        // 通过 Reflect 获取属性 （推荐）
        return Reflect.get(target, prop);
    },

    /**
     * 拦截修改属性 / 新增属性 的操作
     * */
    set(target, prop, value){
        console.log(`拦截了 person 对象的 ${prop} 属性的 set/add 操作`);
        // 直接通过对象设置
        // return target.set(prop, value)

        // 通过 Reflect 更新属性
        return Reflect.set(target, prop, value)
    },

    // 拦截删除属性的操作
    deleteProperty(target, prop) {
        console.log(`拦截了 person 对象的 ${prop} 属性的 删除 操作`);
        // return delete target[prop]
        return Reflect.deleteProperty(target, prop);
    }
})
```

## 5. `reactive` 对比 `ref`

1. 从定义数据的角度对比:
    - `ref`用来定义: 基本类型数据;
    - `reactive` 用来定义: 对象 (或数组) 类型数据;
    - 备注: `ref` 也可以用来定义 对象 (或数组) 类型数据，它内部会自动通过 `reactive` 转为代理对象;
2. 从原理角度对比:
    - `ref`: 通过 `Object.defineProperty()` 的 `get` 和 `set` 来实现响应式（数据劫持）;
    - `reactive`: 通过使用 `Proxy` 来实现响应式 (数据劫持)，并通过 `Reflect` 操作 源对象 内部的数据;
3. 从使用角度对比:
    - `ref` 定义的数据: 操作数据需要 `.value`, 读取数据时，模板中直接读取不需要 `.value`;
    - `reactive` 定义的数据: 操作数据与读取数据均不需要 `.value`;

## 6. `setup` 的两个注意点

- `setup` 的执行时机
    - 在 `beforeCreate()` 之前执行一次，`this` 是 `undefined`;
- `setup` 的参数
    - `props`: 值为对象，包含: 组件外部传递过来，但是没有在 `props` 配置中声明的属性，相当于 `this.$attrs`.
    - `slots`: 收到的插槽内容，相当于 `this.$slots`.
    - `emit`: 分发自定义事件的函数，相当于 `this.$emit`;

## 7. 计算属性与监视属性

### 计算属性 `computed` 函数

与 `vue2.x` 中的 `computed` 配置功能一致，写法如下:
```js
// 1. 导入计算属性
import { reactive, computed } from "vue";

// 2. 使用计算属性
let person = reactive({
    firstName: "zhang",
    lastName: "san",
});

// 声明一个计算属性
// let fullName = computed(() => {
//   return person.firstName + "-" + person.lastName;
// });

  // 声明计算属性，然后直接给 person 增加一个属性 (简写方式，只有get)
/*
person.fullName = computed(() => {
    return person.firstName + "-" + person.lastName;
});
*/

// 声明计算属性，然后直接给 person 增加一个属性 (完整写法，get/set)
person.fullName = computed({
    get() {
        return person.firstName + "-" + person.lastName;
    },
    set(value) {
        const arr = value.split("-");
        person.firstName = arr[0];
        person.lastName = arr[1];
    },
});
```

### 2. 监视属性 `watch` 函数

- 与 `vue2.x` 中 `watch` 配置功能一致;
- 两个小 "坑":
    - 监视 `reactive` 定义的响应式数据时: `oldValue` 无法正确获取、强制开启了深度监视 (`deep`配置无效);
    - 监视 `reactive` 定义的响应式数据中某个属性时: `deep` 配置有效;  

监视 ref 响应式数据
```js
let sum = ref(0);
let msg = ref("hello");

// 情况1: 监视 ref 所定义的的 一个 响应式数据
/*
watch(
    sum,
    (newValue, oldValue) => {
    console.log(
        `响应式数据 sum 变更了, oldValue=${oldValue}, newValue=${newValue}.`
    );
    },
    { immediate: true } // 支持传入第三个参数，配置监视属性: immediate:true 表示一加载就执行
);
*/

// 情况2: ref 所定义的 多个 响应式数据
// 1. 监视对象使用数组传入
// 2. 函数的参数 newValue, oldValue 也为为数组，每个index对应的属性与传入的顺序一致
// 这里的多个是指一个 watch 监视多个，当然也可以使用 多个watch，每个watch监视一个属性
watch(
    [sum, msg],
    (newValue, oldValue) => {
    // oldValue=[0, 'hello']
    // newValue=[1, 'hello']
    console.log(
        "响应式数据 sum 或 msg 变更了, oldValue=",
        oldValue,
        ", newValue=",
        newValue
    );
    },
    { immediate: true }
);
```

监视 reactive 响应式数据:
```js
let job = reactive({
    type: "开发",
    salary: 30,
    members: {
    count: 5,
    info: {
        age: 2,
    },
    },
});

// 情况3: 监视 reactive 所定义的一个响应式数据的 全部属性
// 注意:
// 1. 此处无法正确的获取 oldValue
// 2. 强制开启了深度监视 (deep配置无效了)，即: job.members.count 发生变化也能被监视到
/* 
watch(
    job,
    (newValue, oldValue) => {
    // 这里不能正确的获取到 oldValue
    // newValue=oldValue=Proxy(Object) {"type":"开发","salary":30,"members":{"count":6,"info":{"age":2}}}
    console.log(
        "reactive job 数据发生了变更, oldValue=",
        JSON.stringify(oldValue),
        ",  newValue=",
        JSON.stringify(newValue)
    );
    },
    // 此处的 deep:false 配置无效
    { immediate: true, deep: false }
);
*/

// 情况4: 监视 reactive 所定义的一个响应式数据中的某个属性
// 这里的 oldValue 能够正常返回
/*
watch(
    () => job.type,
    (newValue, oldValue) => {
    // reactvie job.type 数据发生了变更, oldValue=开发^, newValue=开发^^.
    console.log(
        `reactvie job.type 数据发生了变更, oldValue=${oldValue}, newValue=${newValue}.`
    );
    }
);
*/

// 情况5: 监视 reactive 所定义的一个响应式数据的某些属性
watch([() => job.type, () => job.members.count], (newValue, oldValue) => {
    // 同样，这里的 oldValue 也能成功的获取到
    // oldValue=['开发^', 5]
    // newValue=['开发^', 6]
    console.log(
    `reactvie job.type 或 job.members.count 数据发生了变更, oldValue=${oldValue}, newValue=${newValue}.`
    );
});

// 特殊情况
watch(
    () => job.members,
    (newValue, oldValue) => {
    console.log("reactive job.members 发生了变更", oldValue, newValue);
    },
    // 由于此处监视的是 reactive 所定义的某个属性，所以 deep 配置有效
    { deep: true }
);
```

watch监视ref数据的说明
```js
let sum = ref(0);
let msg = ref("hello");
// 这里使用 ref 创建的响应式数据是一个对象，refImpl 底层会通过 reactive 创建一个 proxy 对象作为 value
// RefImpl.value = Proxy()
let person = ref({
    name: "admin",
    age: 10,
});

// 对于基本类型数据 RefImpl.value = 具体值
// 这里 相当于 监视 RemImpl 对象，其属性 value 发生变更后，可以被监视到
watch(
    sum,
    (newValue, oldValue) => {
    console.log(
        `sum 数据发生了变更, oldValue=${oldValue}, newValue=${newValue}.`
    );
    },
    { immediate: true }
);

console.log("person=", person);

// 对于对象类型数据 RefImpl.value = Proxy() 底层会调用 reactive 创建
// 这里相当于监视 RefImpl 对象，默认情况下，只有 Proxy() 对象被替换后，才会触发监视属性
// 可以通过如下两种方案监视 Proxy() 中属性的变更

// 方案1: 直接监视 Proxy() 对象
/*
watch(person.value, (newValue, oldValue) => {
    // 同样，这里的 oldValue 也不能正确的获取到数据
    // person 对象的属性发生了变更, Proxy(Object) {name: 'admin^^', age: 10} Proxy(Object) {name: 'admin^^', age: 10}
    console.log("person 对象的属性发生了变更,", oldValue, newValue);
});
*/

// 方案2: 开启深度监视
watch(
    person,
    (newValue, oldValue) => {
    // 同样，这里的 oldValue 也不能正确的获取到数据
    // person 对象的属性发生了变更, Proxy(Object) {name: 'admin^^', age: 10} Proxy(Object) {name: 'admin^^', age: 10}
    console.log("person 对象的属性发生了变更,", oldValue, newValue);
    },
    { deep: true }
);
```


### 3. `watchEffect` 函数

- `watch` 的套路是: 既要指明监视的属性，也要指明监视的回调;
- `watchEffect` 的套路是: 不用指明监视哪个属性，监视的回调中用到了哪个属性，就监视哪个属性;
- `watchEffect` 有点像 `computed`:
    - 但 `computed` 注重的计算出来的值 （回调函数的返回值），所以必须要写返回值;
    - 而 `watchEffect` 更注重的是过程 (回调函数的函数体)，所以不用写返回值;
```js
// watchEffect 所指定的回调中用到的数据只要发生变化，则直接重新执行回调;
watchEffect(() => {
    // 使用到了sum
    const a = sum.value;
    // 这里 job 对象里面的其它字段变更，不会回调这个函数
    const b = job.members.count;
    console.log("watchEffect() 所指定的回调执行了");
});
```

## 8. 生命周期

- `Vue2`生命周期
![Vue2生命周期](./img/lifecycle_vue_2.png)

- `Vue3`生命周期
![Vue3生命周期](./img/lifecycle_vue_3.png)


- `Vue3` 中可以继续使用 `Vue2`中的生命周期钩子，但是有两个被更名；
    1. `beforeDestroy()  ->  beforeUnmount()`
    2. `destroyed()  ->  unmounted()`
- `Vue3` 也提供了 `Composition API` 形式的生命周期钩子, 与 `Vue2` 中钩子的对应关系如下:
    - `beforeCreate  ->  setup()`
    - `created  ->  setup()`
    - `beforeMount  ->  onBeforeMount()`
    - `mounted  ->  onMounted()`
    - `beforeUpdate  ->  onBeforeUpdate()`
    - `updated  ->  onUpdated()`
    - `beforeDestroy 不再触发` -> `beforeUnmount  ->  onBeforeUnmount()`
    - `destroy 不再触发` -> `unmounted  ->  onUnmounted()`

备注:
1. `Vue2` 中的钩子，在 `Vue3` 中也可以使用;
2. 如果组合`API` 跟 `vue2` 的生命周期钩子重复了，则 两个生命周期钩子都会执行，且组合`API` 会优先执行;

```js
// 回调顺序如下:
perfrom setup() // 组合式api回调
perfrom vue2 created.
perfrom vue2 beforeCreate.
perfrom api onBeforeMount   // 组合式api回调
perfrom vue2 beforeMount.
perfrom api onMounted   // 组合式api回调
perfrom vue2 mounted.
perfrom api onBeforeUpdate  // 组合式api回调
perform vue2 beforeUdpate
perfrom api onUpdated   // 组合式api回调
perform vue2 updated
perfrom api onBeforeUnmount // 组合式api回调
perform vue2 beforeUnmount
perfrom api onUnmounted // 组合式api回调
perform vue2 unmounted
```

## 9. 自定义 `hook` 函数

> 什么是 `hook`?

本质是一个函数，把 `setup` 函数中使用的 `Componsition API` 进行了封装; (将用到的数据，函数，生命周期钩子统一放到一个js的函数中)

类似于 `vue2` 中的 `mixin`;

优势: 复用代码，让 `setup` 中的逻辑简化，易懂;
    

## 10. `toRef` 和 `toRefs` 函数

1. 作用: 创建一个 `ref` 对象，其 `value` 值指向另一个对象中的某个属性;
2. 语法: `const name = toRef(person, 'name)` 、`const x = toRefs(person)`; 
3. 应用: 要将响应式数据中的一个 或 几个 属性单独提供给外部使用时;
4. 扩展: `toRefs` 与 `toRef` 功能一致，但是可以批量创建多个 `ref` 对象; (注意: `toRefs` 只能解析一层对象)


# 3. 其它 `Composition API`

## 1. `shallowReactive` 与 `shallowRef`

- `shallowReactive`: 只处理对象最外层属性的响应式 （浅响应式）;
- `shallowRef`: 只处理基本数据类型的响应式，不进行对象的响应式处理;

> 什么时候用?

- 如果有一个对象数据，结构比较深，但变化时，只是外层属性变化 --> `shallowReactive`
- 如果有一个对象数据，后续功能不会修改对象中的属性，而是创建新的对象来应用 --> `shallowRef`


## 2. `readonly` 与 `shallowReadonly`

- `readonly`: 让一个响应式数据变为只读的 (深只读: 包含属性对象的属性也是只读的);
- `shallowReadonly`: 让一个响应式数据变为只读的 (浅只读: 只有直接属性是只读的，属性对象的属性依然是可读可写的);
- 使用数据: 组件给外部提供数据，但是不希望数据被外部修改时;

注意: `shallowReadonly` 返回的对象，修改属性的属性时，修改的是原始的数据对象的值;
```js
let job = reactive({
    members: {
        count: 0;
    }
})

let shallowReadonlyJob = shallowReadonly(job);
shallowReadonlyJob.members.count++;
// 此时这里相当于 job.members.count++
```

## 3. `toRaw` 与 `markRaw`

- `toRaw`:
    - 作用: 将一个 `reactive` 生成的 响应式对象 转为普通对象;
    - 使用场景: 用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新;
- `markRaw`:
    - 作用: 标记一个对象，使其永远不会再成为 响应式对象;
    - 使用场景:
        1. 有些值不应被设置为响应式的，例如: 复杂的第三方类库等;
        2. 当渲染具有**不可变数据源**的大列表时，跳过响应式转换可以提高性能;

注意: `toRaw`、`markRaw` 标记的对象为非响应式数据，数据依然可以被修改，只是不重新解析模板，如果修改数据后，其它内容触发了模板重新解析，此时会将最新的数据刷新到模板中;

## 4. `customRef`

- 作用: 创建一个自定义的 `ref`，并对其依赖项追踪和更新触发进行显示控制;
- 实现防抖效果:
```vue
<template>
  <input type="text" v-model="keywords" />
  <h2>{{ keywords }}</h2>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    // 使用 vue 提供的默认响应式数据
    // let keywords = ref("hello");

    // 自定义ref
    function myRef(value) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`perform myRef get, value=${value}`);
            // get() 函数中必须调用 trace() 来表明需要捕获 value 数据的变更，此时才会在数据变更时，通知模板解析
            track();
            return value; // 返回value
          },
          set(newValue) {
            console.log(`perform myRef set, newValue=${newValue}`);
            // // 接收数据
            // value = newValue;
            // // 通知vue重新解析模板
            // trigger();

            // 延迟并防抖更新页面
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger();
            }, 1000);
          },
        };
      });
    }
    // 使用自定义的 myRef 创建响应式数据
    let keywords = myRef("hello");
    return { keywords };
  },
};
</script>
```
## 5. `provide` 与 `inject`

![provide与inject](./img/provide与inject.jpg)

1. 作用: 实现层级组件之间的的通信;
2. 如何使用: 父组件有一个 `provide` 选项来提供数据，后台组件有一个 `inject` 选项来获取这些数据;
3. 代码实现:
- 父组件中:
```js
import { reactive, provide } from 'vue'

setup() {
    // 定义数据
    let person = reactive({ name:'zhangsan', age:20 });
    // 使用 provide 传递数据
    provide('person', person);
    return { person };
}
```
- 后代组件中:
```js
import { provide, inject } from 'vue'

setup() {
    let person = inject('person');
    return { person }
}
```

## 6. 响应式数据的判断

- `isRef`: 判断一个数据是否为 `ref` 对象;
- `isReactive`: 判断一个对象是否是由 `reaceive` 创建的响应式代理;
- `isReadonly`: 判断一个对象是否是由 `readonly` 创建的只读代理;
- `isProxy`: 判断一个对象是否是由 `reaceive` 或 `readonly` 方法创建的代理;

# `Componsition API` 的优势

- `Options API` 存在的问题 (`Vue2.x`)

使用传统 `Options API` 中，新增/修改一个需求，就需要在 `data`、`methods`、`computed`里面修改;

![OptionsAPI](./img/optionsApi.gif)

![OptionsAPI Update](./img/optionsApiUpdate.gif)


- `Composition API` 的优势;
使用 `Composition API` 可以更加优雅的组织代码，函数。让相关功能代码更加有序的组织在一起;

![CompositionApi](./img/compositionApi.gif)

![CompositionApi Update](./img/compositionApiUpdate.gif)

# 新的组件

## 1. `Fragment`

- 在 `Vue2.x` 中，组件必须有一个跟标签;
- 在 `Vue3` 中，组件可以没有根标签，内部会将多个标签包含在一个 `Fragment` 虚拟元素中; (减少标签层级，减少内存占用)

## 2. `Teleport`

`Teleport` 是一个能够给将我们的 组件html结构 移动到指定位置的技术;

```html
<!--
    移动的位置可以是css选择器，也可以是 body 这种
-->
<teleport to="移动位置">
    <div v-if="isShow" class="mask">
        <div class="dialog">
            <h3>弹窗标题</h3>
            <button @click="isShow=false">关闭弹窗</button>
        </div>
    </div>
</teleport>
```

## 3. `Suspense`

- 等待异步组件时渲染一些额外的内容，让应用有更好的体验；
- 使用步骤:
    - 异步引入组件:
    ```js
    // 静态引入 defineAsyncComponent 函数
    import { defineAsyncComponent } from 'vue'
    // 动态引入组件
    // const Child = defineAsyncComponent(()=>{ return import('./components/Child.Vue') })
    // 简写
    const Child = defineAsyncComponent(() => import('./components/Child.vue'))
    ```
    - 使用 `Suspense` 包裹组件，并配置好 `default` 与 `fallback` （具名插槽）
    ```html
    <template>
        <div class="app">
            <h3>我是App组件</h3>
            <Suspense>
                <template v-slot:default>
                    <!-- default 插槽中使用目标数据填充，这里数据可能会有延迟 -->
                    <Child />
                </template>
                <template v-slot:fallback>
                    <!-- fallback 插槽，在default没有成功返回时显示 -->
                    <h3>加载中...</h3>
                </template>
            </Suspense>
        </div>
    </template>
    ```

# 其它

## 1. 全局 API 的转移

`Vue2.x` 有许多全局 API 和配置，例如: 注册全局组件，注册全局指令等;
```js
//注册全局组件
Vue.component('MyButton', {
  data: () => ({
    count: 0
  }),
  template: '<button @click="count++">Clicked {{ count }} times.</button>'
})

//注册全局指令
Vue.directive('focus', {
  inserted: el => el.focus()
}
```
Vue3.0中对这些API做出了调整：将全局的API，即：```Vue.xxx```调整到应用实例（```app```）上

| 2.x 全局 API（```Vue```） | 3.x 实例 API (`app`)                        |
| ------------------------- | ------------------------------------------- |
| Vue.config.xxxx           | app.config.xxxx                             |
| Vue.config.productionTip  | <strong style="color:#DD5145">移除</strong> |
| Vue.component             | app.component                               |
| Vue.directive             | app.directive                               |
| Vue.mixin                 | app.mixin                                   |
| Vue.use                   | app.use                                     |
| Vue.prototype             | app.config.globalProperties                 |


## 2. 其它改变

- data选项应始终被声明为一个函数。
- 过度类名的更改
    - Vue2.x写法
    ```js
    .v-enter,
    .v-leave-to {
        opacity: 0;
    }
    .v-leave,
    .v-enter-to {
        opacity: 1;
    }
    ```
    - Vue3.x写法
    ```js
    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

    .v-leave-from,
    .v-enter-to {
        opacity: 1;
    }
    ```
- 移除keyCode作为 v-on 的修饰符，同时也不再支持`config.keyCodes`
- 移除`v-on.native`修饰符
    - 父组件中绑定事件
    ```html
    <my-component
        v-on:close="handleComponentEvent"
        v-on:click="handleNativeClickEvent"
    />
    ```
    - 子组件中声明自定义事件
    ```js
    <script>
    export default {
        emits: ['close']
    }
    </script>
    ```
- 移除过滤器 `filter`

过滤器虽然这看起来很方便，但它需要一个自定义语法，打破大括号内表达式是 “只是 JavaScript” 的假设，这不仅有学习成本，而且有实现成本！建议用方法调用或计算属性去替换过滤器。