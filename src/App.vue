<template>
  <div id="app">
    <h1>TODOリスト</h1>
    <div>
      <input v-model="newTodoName"/>
      <button @click="addTodo()">追加</button>
    </div>

    <ul>
      <li>
        <input type="checkbox" />
        タスク名
        <button>X</button>
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
     }
   },
  created(){
   this.db = firebase.firestore()
   this.todosRef = this.db.collection('todos')
      },
  methods: {
    addTodo(){
      if(this.newTodoName === ''){ return }
      this.todosRef.add({
        name: this.newTodoName,
        isComplete: false,
      })
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
