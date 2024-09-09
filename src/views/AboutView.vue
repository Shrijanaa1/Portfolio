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
            <p>{{ education.institution }}
              <span class="education-period">{{ education.period }}</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="skills p-ml-3">
        <h2>
          <i class="pi pi-star icon"></i> Skills
        </h2>
        <div class="skills-wrapper p-d-flex p-flex-wrap">
          <div class="skills-column">
            <div v-for="skill in column1Skills" :key="skill.name" class="skill-item">
              <i :class="skill.icon" class="skill-icon"></i>
              <Tag :value="skill.name" severity="info" class="skill-tag" />
            </div>
          </div>
          <div class="skills-column">
            <div v-for="skill in column2Skills" :key="skill.name" class="skill-item">
              <i :class="skill.icon" class="skill-icon"></i>
              <Tag :value="skill.name" severity="info" class="skill-tag" />
            </div>
          </div>
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
        <a href="mailto:srznakrki111@gmail.com" target="_blank" class="contact-link">
          <i class="pi pi-envelope"></i> Email
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>

// Import external CSS file
import '@/assets/styles/about.css';

const column1Skills = [
  { name: 'Java', icon: 'fab fa-java' },
  { name: 'Spring', icon: 'fas fa-leaf' },
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'PrimeFaces', icon: 'fas fa-palette' },
];

const column2Skills = [
  { name: 'Vue.js', icon: 'fab fa-vuejs' },
  { name: 'CSS', icon: 'fab fa-css3-alt' },
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'MySQL', icon: 'fas fa-database' },
];


const educations = [
  { degree: "BS in Computer Science and Information Technology",
    institution: "St.Xavier's College, Maitighar",
    period: "2018 - 2023" },
  { degree: "Science(High School)", institution: "Grammar College, Koteshwor",
    period: "2016 - 2018" }
];


</script>

