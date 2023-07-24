<template>
  <div>
    <span>{{message}}</span>

    <ul>
      <li 
        v-for="(product, index) in productList" 
        :key="index" 
        @click="product.editMode = true, focusInput(index)"
      >
        <input 
          v-if="product.editMode" 
          :ref="index" 
          type="text" 
          v-model="product.name"
          @keyup.enter="product.editMode = false" @focusout="product.editMode = false"
        >
        <span v-else>{{product.name}}</span>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "teste",
  data() {
    return {
      message: "oi eu sou o goku",
      productList: [
        {
          name: "bacia",
          editMode: false
        },
        {
          name: "peneira",
          editMode: false
        },
        {
          name: "agua",
          editMode: false
        },
        {
          name: "mangueira",
          editMode: false
        }
      ]
    }
  },
  methods: {
    focusInput(ref) {
      this.$nextTick(() => {
  
        this.$refs[ref][0].focus()
      })
    }
  }
}
</script>