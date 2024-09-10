<template>
  <section id="project-detail">
    <h2>{{ project.name }}</h2>
    <img :src="project.imageSrc" alt="Project Image" class="project-img-detail">
    <div class="project-info">
      <p><strong>Description:</strong> {{ project.description }}</p>
      <p><strong>Languages/Technologies Used:</strong> {{ project.languages }}</p>
      <div class="project-usage">
        <h3>How to use this app:</h3>
        <p>{{ project.usage }}</p>
      </div>
    </div>
    <a :href="project.link" target="_blank" class="project-link-detail">View on GitHub</a>
  </section>
</template>

<script setup>
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import petImg from "@/assets/pet.png";
import saImg from "@/assets/sentiment.png";
import customerReachImg from "@/assets/cms.jpeg";
import hmsImg from "@/assets/hms.jpeg";

const projects = [
  {
    id: 1,
    name: 'Personal Expense Tracker',
    description: 'A web application built using Java EE, JSF, and PrimeFaces to track your expenses and income based on categories, set budgets, and manage your personal finances efficiently.',
    imageSrc: petImg,
    languages: 'Java EE, PrimeFaces, Vue.js',
    usage: 'To use the app first login or sign up, add income, expenses and budgets, and view the monthly/yearly reports.',
    link: 'https://github.com/Shrijanaa1/PersonalExpenseTracker'
  },
  {
    id: 2,
    name: 'Sentiment Analysis Web App',
    description: 'A machine learning-based web app developed using Python libraries, including Scikit-learn, and using Support Vector Machine (SVM) classifier to analyze tweets about Airlines Reviews and classify them as positive, negative, or neutral.',
    imageSrc: saImg,
    languages: 'Python, Scikit-learn',
    usage: 'Enter text to analyze sentiment for tweets, and the app will classify them as positive/negative/neutral.',
    link: 'https://github.com/Shrijanaa1/Sentiment-Analysis-Web-App'
  },
  {
    id: 3,
    name: 'Customer Reach',
    description: 'A system built using Java, Spring Boot, and Angular to maintain and manage customer contact details, with features like security to ensure data protection and proper management of user interactions.',
    imageSrc: customerReachImg,
    languages: 'Java, Spring Boot, Angular',
    usage: 'To use the app first login or sign up then add, edit and update customer details.',
    link: 'https://github.com/Shrijanaa1/CustomerReach'
  },
  {
    id: 4,
    name: 'Hospital Management System',
    description: 'A console-based system developed using Java, which provides functionalities like adding patients, viewing patients and doctors, booking appointments, and managing operations through a simple menu interface.',
    imageSrc: hmsImg,
    languages: 'Java',
    usage: 'Choose an operation from the menu (add patient, view doctor, book appointment, etc.) and follow the instructions for the selected operation.',
    link: 'https://github.com/Shrijanaa1/Hospital-Management-System'
  }
];

const route = useRoute();
const projectId = route.params.id;

const project = computed(() => projects.find(p => p.id === parseInt(projectId)));
</script>

<style scoped>
#project-detail {
  padding: 20px;
  text-align: center;
}

.project-img-detail {
  width: 80%; /* Decreased the size */
  max-width: 150px; /* Added a maximum width */
  height: 150px;
  margin: 20px auto;
  border-radius: 8px;
}

.project-info {
  margin-top: 20px;
}

.project-usage ol {
  text-align: left;
  margin: 0 auto;
  max-width: 600px;
}

.project-link-detail {
  display: inline-block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
}

.project-link-detail:hover {
  text-decoration: underline;
}
</style>
