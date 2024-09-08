<script setup>

</script>


<template>
  <div class="home">
    <section class="intro">
      <img src="@/assets/img.png" alt="Shrijana Karki" class="profile-image" />

      <h1>Shrijana Karki</h1>
      <p>Java Developer | Computer Science Graduate</p>
      <p class="description-text "> I am a passionate developer with experience in full-stack development,
        specializing in Java and related technologies.</p>

      <RouterLink to="/about">
        <Button label="Learn More About Me" class="custom-button p-button-raised" />
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
  font-size: 3rem;
  color: #333;
  margin-bottom: 0;
  margin-top: 5px;
}

p {
  font-size: 1.5rem;
  margin: 20px 0;
  color: #666;
}

.custom-button {
  background-color: #3498db;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
}

.custom-button:hover {
  background-color: #2980b9;
}

.custom-button:focus {
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.5);
}
.description-text {
  font-size: 1.25rem;
  color: #888;
  margin-top: 0;
}
</style>