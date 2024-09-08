<template>
  <div class="about">

      <h1>About Me</h1>
      <p> I am a passionate developer with experience in full-stack development,
        specializing in Java and related technologies.</p>


    <section class="skills">
      <h2>Skills</h2>
      <div class="skills-wrapper p-d-flex p-flex-wrap">
        <Tag v-for="skill in skills" :key="skill" :value="skill" severity="info" class="skill-tag" />
      </div>
    </section>
  </div>
</template>

<script setup>
  const skills = ['Java', 'Spring', 'JSF', 'PrimeFaces', 'Vue.js', 'CSS3', 'HTML5', 'MySQL'];
</script>

<style scoped>
.about {
  padding: 50px 20px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-me {
  width: 100%;
  max-width: 800px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 40px;
}

h1, h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
}

p {
  font-size: 1.25rem;
  color: #333;
  text-align: center;
  line-height: 1.6;
}

.skills {
  margin-top: 40px;
}

.skills-wrapper {
  justify-content: center;
}

.skill-tag {
  margin: 5px;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .about {
    padding: 30px 10px;
  }

  h1, h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.1rem;
  }
}
</style>