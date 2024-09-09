<template>
  <div class="portfolio">
    <div class="content-wrapper">

      <!-- Education Section -->
      <div class="education">
        <h2>
           Education
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
      <div class="skills">
        <h2>
           Skills
        </h2>
        <div class="skills-wrapper">
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

