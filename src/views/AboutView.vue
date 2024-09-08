<template>
  <div class="portfolio">
    <div class="content-wrapper p-d-flex p-flex-wrap p-justify-center">

      <!-- Education Section -->
      <div class="education p-mr-3">
        <h2>
          <i class="pi pi-graduation-cap icon"></i> Education
        </h2>
        <div class="education-details">
          <div v-for="education in educations" :key="education.period">
            <h3>{{ education.degree }}</h3>
            <p>{{ education.institution }}</p>
            <p>{{ education.period }}</p>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="skills p-ml-3">
        <h2>
          <i class="pi pi-star icon"></i> Skills
        </h2>
        <div class="skills-wrapper p-d-flex p-flex-wrap">
          <Tag v-for="skill in skills" :key="skill" :value="skill" severity="info" class="skill-tag" />
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <section class="contact">
      <h2>
        <i class="pi pi-envelope icon"></i> Contact
      </h2>
      <div class="contact-links">
        <a href="https://github.com/Shrijanaa1" target="_blank" class="contact-link">
          <i class="pi pi-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/shrijana-karki/" target="_blank" class="contact-link">
          <i class="pi pi-linkedin"></i> LinkedIn
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
const skills = ['Java', 'Spring', 'JSF', 'PrimeFaces', 'Vue.js', 'CSS3', 'HTML5', 'MySQL'];

const educations = [
  { degree: "Bachelor of Science in Computer Science and Information Technology",
    institution: "St.Xavier's College, Maitighar",
    period: "2018 - 2023" },
  { degree: "Science(High School)", institution: "Grammar College, Koteshwor",
    period: "2016 - 2018" }
];
</script>

<style scoped>
.portfolio {
  padding: 50px 20px;
  background-color: #f0f0f5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
}

.education, .skills {
  flex: 1;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 20px;
}

.education h2, .skills h2 {
  font-size: 2rem;
  color: #34495e;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.icon {
  font-size: 2rem;
  margin-right: 10px;
}

.education-details h3 {
  font-size: 1.5rem;
  color: #2c3e50;
}

.education-details p {
  font-size: 1.1rem;
  color: #7f8c8d;
}

.skills-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.skill-tag {
  margin: 5px;
  font-size: 1rem;
  background-color: #3498db;
  color: white;
}

.contact {
  margin-top: 0px;
}

.contact h2 {
  font-size: 2rem;
  color: #34495e;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.contact-link {
  font-size: 1.1rem;
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.contact-link i {
  margin-right: 10px;
}

.contact-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }

  .education, .skills {
    width: 100%;
  }
}
</style>
