<template>
  <div class="home">
    <section class="intro">
      <img src="@/assets/img.jpg" alt="Shrijana Karki" class="profile-image" />

      <h1>Shrijana Karki</h1>
      <p>Java Developer | Computer Science UnderGraduate</p>
      <p class="description-text ">
        I am a passionate developer with experience in full-stack development, specializing in Java and related technologies.
        I believe that every day is a new opportunity to learn and grow.</p>

      <RouterLink to="/about">
        <Button label="Learn More About Me" class="custom-button p-button-raised" />
      </RouterLink>

    </section>
  </div>

  <AboutView />
  <ExperienceView />
  <ProjectView />
  <ContactView />
</template>

<script setup>
import AboutView from "@/views/AboutView.vue";
import ExperienceView from "@/views/ExperienceView.vue";
import ProjectView from "@/views/ProjectView.vue";
import ContactView from "@/views/ContactView.vue";
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
  height: 100vh;
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
  margin-bottom: 20px;
  margin-top: 20px;
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
  background-color: #3498db !important;
  border: none !important;
  color: white !important;
  font-size: 1.1rem !important;
  font-weight: bold !important;
  padding: 10px 20px !important;
  border-radius: 4px !important;
  margin-top: 15px !important;
}

.custom-button:hover {
  background-color: #2980b9;
}

.custom-button:focus {
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.5);
}
.description-text {
  font-size: 1.3rem;
  color: #888;
  max-width: 900px;
  margin: 10px auto;
  padding: 0 20px;
  line-height: 1.6;
}
</style>
