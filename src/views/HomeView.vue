<script setup>
const name = 'Shrijana Karki'
const tagline = 'Java Developer | Computer Science Graduate'
</script>


<template>
  <div class="home">
    <section class="intro">
      <h1>{{ name }}</h1>
      <p>{{ tagline }}</p>

      <RouterLink to="/about">
        <Button label="Learn More About Me" class="p-button-raised p-button-success" />
      </RouterLink>

    </section>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 50px;
  background-color: #f5f5f5;
}

.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}

h1 {
  font-size: 3.5rem;
  color: #333;
}

p {
  font-size: 1.5rem;
  margin: 20px 0;
  color: #666;
}
</style>