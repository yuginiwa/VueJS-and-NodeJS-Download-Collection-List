<template>
  <div>
    <ul v-for="category in categories">
      <li>{{ category }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['categories']
}
</script>

<style scoped>

</style>
