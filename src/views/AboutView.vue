<template>
  <div class="portfolio">
    <div class="content-wrapper">

      <!-- Education Section -->
      <Card class="education">
        <template #header>
          <h2>Education</h2>
        </template>
        <template #content>
        <div class="education-details">
          <div v-for="education in educations" :key="education.period">
            <h3>{{ education.degree }}</h3>
            <p>{{ education.institution }}
              <span class="education-period">{{ education.period }}</span>
            </p>
          </div>
        </div>
        </template>
      </Card>


      <!-- Skills Section -->
      <Card class="skills">
        <template #header>
          <h2>Skills</h2>
        </template>
        <template #content>
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
          </template>
      </Card>

    </div>

  </div>
</template>

<script setup>

// Import external CSS file
// import '@/assets/styles/about.css';

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
  { degree: "BSc in Computer Science and Information Technology",
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
  //height: 70vh;
}

.content-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
  gap: 50px;
}

.education, .skills {
  flex: 1;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 10px;
}

.education h2, .skills h2 {
  font-size: 1.7rem;
  color: #34495e;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.icon {
  font-size: 2rem;
  margin-right: 10px;
}

.education-details h3 {
  font-size: 1.3rem;
  color: #2c3e50;
}

.education-details p {
  font-size: 1.1rem;
  color: #7f8c8d;
  display: flex;
  justify-content: space-between;
}

.skills-wrapper {
  display: flex;
  justify-content: space-between;
  /*gap: 1.5rem;*/
}

.skills-column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.skill-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.skill-tag {
  margin-left: 10px;
  font-size: 1.2rem !important;
  background-color: transparent !important;
  color: #34495e !important;
}

.skill-icon {
  font-size: 1.5rem;
  color: #3498db;
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

