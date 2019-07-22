当 <router-link> 对应的路由匹配成功，将自动设置 class 属性值 .router-link-active


<div id="app">
  <router-view></router-view>
</div>

这里的 <router-view> 是最顶层的出口，渲染最高级路由匹配到的组件

同样地，一个被渲染组件同样可以包含自己的嵌套 <router-view>。例如，在 User 组件的模板添加一个 <router-view>

const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}

要在嵌套的出口中渲染组件，需要在 VueRouter 的参数中使用 children 配置：

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})


此时，基于上面的配置，当你访问 /user/foo 时，User 的出口是不会渲染任何东西，
这是因为没有匹配到合适的子路由。如果你想要渲染点什么，可以提供一个 空的 子路由：

可以提供一个 空的 子路由 没有匹配到 默认显示的组件
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id', component: User,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: '', component: UserHome },

        // ...其他子路由
      ]
    }
  ]
})



在动态组件上使用 keep-alive 缓存组件 但是不会再调用生命周期钩子方法


动态路由参数：
我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染

我们可以在 vue-router 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：
const User = {
  template: '<div>User</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})

像 /user/foo 和 /user/bar 都将映射到相同的路由。


一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。
于是，我们可以更新 User 的模板，输出当前用户的 ID：

const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}


你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 $route.params 中。例如：

模式	匹配路径	$route.params
    模式                                匹配路径                      $route.params
/user/:username	                      /user/evan	               { username: 'evan' }
/user/:username/post/:post_id   	/user/evan/post/123	           { username: 'evan', post_id: '123' }


当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。
因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。
不过，这也意味着组件的生命周期钩子不会再被调用。


$route对象代表当前路由
里面包含很多属性：
params
fullPath
path
query


复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) $route 对象：

const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      //to 当前的路由对象
      //from 原来的路由对象
    }
  }
}


参数传递：param参数和query参数



直接在浏览器上访问该路径  那么对应的父组件 （home组件 message组件）也会重新渲染 执行对应的生命周期方法
因为子组件想要显示出来，前提是父组件也要对应的存在 创建出来
http://localhost:8090/#/home/message/detail/5



**捕获所有路由或 404 Not found 路由**
常规参数只会匹配被 / 分隔的 URL 片段中的字符。
如果想匹配任意路径，我们可以使用通配符 (*)：

{
  // 会匹配所有路径
  path: '*'
}
{
  // 会匹配以 `/user-` 开头的任意路径
  path: '/user-*'
}
当使用通配符路由时，请确保路由的顺序是正确的，也就是说含有通配符的路由应该放在最后。
路由 { path: '*' } 通常用于客户端 404 错误。

当使用一个通配符时，$route.params 内会自动添加一个名为 pathMatch 参数。
它包含了 URL 通过通配符被匹配的部分：

// 给出一个路由 { path: '/user-*' }
this.$router.push('/user-admin')
this.$route.params.pathMatch // 'admin'

// 给出一个路由 { path: '*' }
this.$router.push('/non-existing')
this.$route.params.pathMatch // '/non-existing'



**编程式路由导航**

通过js代码实现路由的跳转


除了使用 <router-link> 创建 a 标签来定义导航链接，我们还可以借助 router **路由器** 的实例方法，通过编写代码来实现。
api:   router.push(location, onComplete?, onAbort?)
注意：在 Vue 实例内部，你可以通过 $router 访问路由实例。因此你可以调用 this.$router.push。
这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。

当你点击 <router-link> 时，这个方法会在内部调用，
所以说，点击 <router-link :to="..."> 等同于调用 router.push(...)。

     声明式	                         编程式
<router-link :to="...">	       router.push(...)


该方法的参数可以是一个字符串路径，或者一个描述地址的对象。

// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})



注意：如果提供了 path，params 会被忽略

const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123

**// 这里的 params 不生效**
router.push({ path: '/user', params: { userId }}) // -> /user



router.replace(location, onComplete?, onAbort?)
跟 router.push 很像，唯一的不同就是，
它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

    声明式	                                编程式
<router-link :to="..." replace>	    router.replace(...)

#router.go(n)


Vue中的nextTick涉及到Vue中DOM的异步更新

在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，
这个操作都应该放进Vue.nextTick()的回调函数中。




**命名路由**

在创建 Router 实例的时候，在 routes 配置中给某个路由设置名称。

const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
})

要链接到一个命名路由，可以给 router-link 的 to 属性传一个对象：
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
这跟代码调用 router.push() 是一回事：
router.push({ name: 'user', params: { userId: 123 }})

这两种方式都会把路由导航到 /user/123 路径。


**命名视图**

有时候想同时 (同级) 展示多个视图，而不是嵌套展示
例如创建一个布局，有 sidebar (侧导航) 和 main (主内容) 两个视图，这个时候命名视图就派上用场了

你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。
如果 router-view 没有设置名字，那么默认为 default。

<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>


一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 components 配置 (带上 s)：

const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    }
  ]
})



**重定向和别名**
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})


重定向的目标也可以是一个命名的路由：

const router = new VueRouter({
  routes: [
    { path: '/a', redirect: { name: 'foo' }}
  ]
})



**别名**

const router = new VueRouter({
  routes: [
    { path: '/a', component: A, alias: '/b' }
  ]
})

/a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。
别名”的功能让你可以自由地将 UI 结构映射到任意的 URL，而不是受限于配置的嵌套路由结构。




**axios拦截器**
npm install axios --save

页面发送http请求，很多情况我们要对请求和其响应进行特定的处理  单独对每一个请求进行处理会变得非常麻烦
axios为开发者提供了这样一个API：拦截器。拦截器分为 请求（request）拦截器和 响应（response）拦截器。







**Promise**

catch为then的语法糖，它是then(null, rejection)的别名。
也就是说，catch也是then，它用于捕获错误，它的参数也就是是then的第二个参数。

then()方法用于指定当前实例状态发生改变时的回调函数。它返回一个新的Promise实例。
对promise添加onFulfilled和onRejected回调，并返回的是一个新的Promise实例（不是原来那个Promise实例），
**且返回值将作为参数传入这个新Promise的resolve函数。**

Promise.prototype.then(onFulfilled, onRejected);

    参数	                             描述
onFulfilled	         当前实例变成fulfilled状态时，该参数作为回调函数被调用。
onRejected	         当前实例变成reject状态时，该参数作为回调函数被调用。






