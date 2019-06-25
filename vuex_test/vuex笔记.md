对vue应用中多个组件的共享状态进行集中的管理（读或者写）

state：vuex中的数据源，我们需要保存的数据就保存在这里，可以在页面通过 this.$store.state来获取我们定义的数据；
驱动中用的数据源

view：view去读取state中保存的数据  以声明的方式将state映射到视图


vuex解决的问题：多个视图依赖于同一个state状态    来自不同视图的行为需要变更同一个状态


vue的一个插件
npm install vuex --save


当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）：

const app = new Vue({
  el: '#app',
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})


通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到。
让我们更新下 Counter 的实现：

const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}

组件仍然保有局部状态:
使用 Vuex 并不意味着你需要将所有的状态放入 Vuex。虽然将所有的状态放到 Vuex 会使状态变化更显式和易调试，但也会使代码变得冗长和不直观。
如果有些状态严格属于单个组件，最好还是作为组件的局部状态。你应该根据你的应用开发需要进行权衡和确定。



const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，
或者通过 context.state 和 context.getters 来获取 state 和 getters。
当我们在之后介绍到 Modules 时，你就知道 context 对象为什么不是 store 实例本身了。

实践中，我们会经常用到 ES2015 的 参数解构 来简化代码（特别是我们需要调用 commit 很多次的时候）：

actions: {
  increment ({ commit }) {
    commit('increment')
  }
}




****getters:****

一：**Getters will receive the state as their 1st argument:**


const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {   //state可以作为参数
      return state.todos.filter(todo => todo.done)
    }
  }
})


Property-Style Access：通过属性的方式获取
The getters will be exposed on the store.getters object, and you access values as properties:
通过store.getters可以获取到getters对象  getters对象直接通过.属性的方式获取值

store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]



二：**Getters will also receive other getters as the 2nd argument:**

getters: {
  // ...
  doneTodosCount: (state, getters) => {
       return getters.doneTodos.length
     }
}
store.getters.doneTodosCount // -> 1


We can now easily make use of it inside any component:

computed: {
  doneTodosCount () {
    return this.$store.getters.doneTodosCount  //以属性的方式访问
  }
}

**Note that getters accessed as properties are cached as part of Vue's reactivity system**