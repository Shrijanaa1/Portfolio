<template>
  <div class="home">
    <section class="intro">
      <img src="@/assets/img.png" alt="Shrijana Karki" class="profile-image" />

      <h1>Shrijana Karki</h1>
      <p>Java Developer | Computer Science UnderGraduate</p>
      <p class="description-text "> I am a passionate developer with experience in full-stack development,
        specializing in Java and related technologies.</p>

      <RouterLink to="/about">
        <Button label="Learn More About Me" class="custom-button p-button-raised" />
      </RouterLink>

    </section>
  </div>
</template>

<script setup>
// Import external CSS file
import '@/assets/styles/home.css';
</script>
