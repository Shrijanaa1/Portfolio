<template>
  <section class="experience">
    <h2>Work Experience</h2>
    <div class="experience-container">
      <div v-for="item in experiences" :key="item.role" class="experience-card">
        <img :src="item.imageSrc" alt="Company Logo" class="company-logo" />
        <div class="experience-details">
          <h3>{{ item.role }}</h3>
          <h4>{{ item.organisation }}</h4>
          <p>{{ item.startDate }} – {{ item.endDate }}</p>
          <ul>
            <li v-for="exp in item.experiences" :key="exp">{{ exp }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import synergyImg from '@/assets/synergy.png';
import f1softImg from '@/assets/f1soft.png';

const experiences = [
  {
    role: "Java Intern",
    organisation: "Synergy Tech Software",
    startDate: "July, 2023",
    endDate: "Present",
    experiences: [
      "Developed a personal expense tracker application using Java EE and JSF, enhancing my skills in full-stack development.",
      "Gained hands-on experience with Linux environments and version control using Git and GitHub.",
      "Collaborated with senior developers to improve code quality."
    ],
    imageSrc: synergyImg
  },
  {
    role: "Software Engineer Intern (Java)",
    organisation: "F1Soft Pvt. Ltd.",
    startDate: "April, 2023",
    endDate: "July, 2023",
    experiences: [
      "Learned about Java, Spring and SpringBoot Framework and Angular.",
      "Learned about version control using Git and GitHub.",
      "Developed minor projects including CRUD operations and RESTful services."
    ],
    imageSrc: f1softImg
  }
];
</script>

<style scoped>
.experience {
  padding: 2rem;
  background: #f5f5f5;
  color: #333;
}
.experience h2 {
  font-size: 2rem;
  //margin-bottom: 1rem;
  text-align: center;
}
.experience-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 30px;
}
.experience-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  flex: 1 1 calc(33.333% - 2rem);
  display: flex;
  align-items: center;
}
.company-logo {
  width: 100px;
  height: auto;
  margin-right: 1.5rem;
}
.experience-details {
  flex: 1;
}
.experience-details h3 {
  margin: 0;
  font-size: 1.5rem;
}
.experience-details h4 {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}
.experience-details p {
  margin: 0.5rem 0;
  font-size: 1rem;
}
.experience-details ul {
  padding-left: 20px;

}
.experience-details li {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}
</style>