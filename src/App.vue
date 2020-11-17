<template>
  <div id="app">
    <h1>TODOリスト</h1>
    <div>
      <input v-model="newTodoName"/>
      <button @click="addTodo()">追加</button>
    </div>

    <ul>
      <li v-for="(todo, key) in todos" :key="key">
        <input type="checkbox" v-model="todo.isComplete" @click="updateTodo(todo, key)"/>
        {{ todo.name }}
        <button @click="removeTodo(key)">X</button>
      </li>
    </ul>
    </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'App',
  data(){
    return {
      db: null,
      todosRef: null,
      newTodoName: '',
      todos: {}
     }
   },
  created(){
   this.db = firebase.firestore()
   this.todosRef = this.db.collection('todos')
   this.todosRef.onSnapshot(querySnapshot => {
     const obj = {}
     querySnapshot.forEach(doc => {
       obj[doc.id] = doc.data() //doc.id=firestoreのID=todosのとこ doc.data=firestoreのデータのとこ
     }) //querySnapshot=現在のtodoに入れたデータ
     this.todos = obj
   })
      },
  methods: {
    addTodo(){
      if(this.newTodoName === ''){ return }
      this.todosRef.add({
        name: this.newTodoName,
        isComplete: false,
      })
    },
    updateTodo(todo, key){
      todo.isComplete = !todo.isComplete //現在のisCompleteの状態を反転
      this.todosRef.doc(key).update(todo)
    },
    removeTodo(key){
      this.todosRef.doc(key).delete()
    }
  }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
