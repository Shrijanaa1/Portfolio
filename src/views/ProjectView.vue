<template>
  <section id="my-projects">
    <h2 class="section-title">Projects</h2>
    <div class="projects-container">


      <div v-for="project in projects" :key="project.id" class="project-card">
        <img :src="project.imageSrc" alt="Project Image" class="project-img">
        <div class="project-info">
          <h3 class="project-name">{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="project-link">View on GitHub</a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import petImg from '@/assets/pet.png';
import saImg from '@/assets/sentiment.png';
import customerReachImg from '@/assets/cms.jpeg';
import hmsImg from '@/assets/hms.jpeg';

const projects = [
  {
    id: 1,
    name: 'Personal Expense Tracker',
    description: 'A web application built using Java EE, JSF, and PrimeFaces to track your expenses and income based on categories, set budgets, and manage your personal finances efficiently.',
    imageSrc: petImg,
    link: 'https://github.com/Shrijanaa1/PersonalExpenseTracker'
  },
  {
    id: 2,
    name: 'Sentiment Analysis Web App',
    description: 'A machine learning-based web app developed using Python libraries, including Scikit-learn, and using Support Vector Machine (SVM) classifier to analyze tweets about Airlines Reviews and classify them as positive, negative, or neutral.',
    imageSrc: saImg,
    link: 'https://github.com/Shrijanaa1/Sentiment-Analysis-Web-App'
  },
  {
    id: 3,
    name: 'Customer Reach',
    description: 'A system built using Java, Spring Boot, and Angular to maintain and manage customer contact details, with features like security to ensure data protection and proper management of user interactions.',
    imageSrc: customerReachImg,
    link: 'https://github.com/Shrijanaa1/CustomerReach'
  },
  {
    id: 4,
    name: 'Hospital Management System',
    description: 'A console-based system developed using Java, which provides functionalities like adding patients, viewing patients and doctors, booking appointments, and managing operations through a simple menu interface.',
    imageSrc: hmsImg,
    link: 'https://github.com/Shrijanaa1/Hospital-Management-System'
  }
];
</script>

<style scoped>
#my-projects {
  padding: 20px;
  background-color: #f0f0f5;
}

h2.section-title {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  color: #2c3e50;
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.project-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: calc(50% - 20px);
  margin-bottom: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.project-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
}

.project-info {
  padding: 15px;
}

.project-info h3.project-name {
  margin: 0;
  font-size: 1.5rem;
  color: #2c3e50;
}

.project-info p {
  font-size: 1.1rem;
  color: #666;
}

.project-link {
  margin-top: 10px;
  font-size: 16px;
  color: #007bff;
  text-decoration: none;
  display: inline-block;
}

.project-link:hover {
  text-decoration: underline;
}

/* Responsive styles */
@media (max-width: 768px) {
  .project-card {
    width: calc(100% - 20px);
    flex-direction: column;
    text-align: center;
  }

  .project-img {
    margin-right: 0;
    margin-bottom: 15px;
  }

  .project-info h3.project-name {
    font-size: 1.25rem;
  }

  .project-info p {
    font-size: 1rem;
  }

  .projects-container {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  h2.section-title {
    font-size: 1.5rem;
  }

  .project-card {
    padding: 10px;
  }

  .project-info {
    padding: 10px;
  }

  .project-info h3.project-name {
    font-size: 1.2rem;
  }

  .project-info p {
    font-size: 0.9rem;
  }
}
</style>
