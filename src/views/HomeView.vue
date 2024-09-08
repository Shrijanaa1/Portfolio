<script setup>

</script>


<template>
  <div class="home">
    <section class="intro">
      <img src="@/assets/img.png" alt="Shrijana Karki" class="profile-image" />

      <h1>Shrijana Karki</h1>
      <p>Java Developer | Computer Science Graduate</p>

      <RouterLink to="/about">
        <Button label="Learn More About Me" class="p-button-raised p-button-success" />
      </RouterLink>

    </section>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
}

.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

h1 {
  font-size: 3.5rem;
  color: #333;
  margin-bottom: 0;
}

p {
  font-size: 1.5rem;
  margin: 20px 0;
  color: #666;
}
</style>