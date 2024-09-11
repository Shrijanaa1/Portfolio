<template>
  <section class="project-detail">
    <h1>{{ project.name }}</h1>
    <img :src="project.imageSrc" alt="Project Image" class="project-img-detail">
    <div class="project-info">
      <p><strong>Description:</strong> {{ project.description }}</p>
      <p><strong>Languages / Technologies Used:</strong> {{ project.languages }}</p>
<!--      <div class="project-usage">-->
<!--        <p><strong>How to use this app:</strong></p>-->
<!--        <p>{{ project.usage }}</p>-->
<!--      </div>-->
      <a :href="project.link" target="_blank" class="project-link-detail">View Source Code</a>
    </div>
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
    description: 'A comprehensive web application designed to help users track their expenses and income, categorize their transactions, set budgets, and gain insights through detailed monthly and yearly reports. The app is built using Java EE, JSF, and PrimeFaces, leveraging a responsive and user-friendly interface to manage personal finances efficiently. Key features include real-time budget monitoring and secure user authentication for privacy protection.',
    imageSrc: petImg,
    languages: 'Java EE, PrimeFaces, JSF',
    // usage: 'To use the app first login or sign up, add income,/n expenses and budgets, and view the monthly/yearly reports.',
    link: 'https://github.com/Shrijanaa1/PersonalExpenseTracker'
  },
  {
    id: 2,
    name: 'Sentiment Analysis Web App',
    description: 'This machine learning-based web app analyzes sentiment from airline reviews, including Nepali airlines such as Buddha Air and Yeti Airlines. Various classifiers like Support Vector Machine (SVM), Random Forest, and Naive Bayes were compared, with SVM chosen for its highest accuracy. The app allows users to input text for analysis, and they can also upload CSV files for bulk sentiment analysis. Additionally, the app generates a word cloud and a bar chart showcasing the most frequently used words. These visualizations provide deeper insights into the sentiment expressed in reviews.',
    imageSrc: saImg,
    languages: 'Python, Scikit-learn',
    // usage: 'Enter text to analyze sentiment for tweets, and the app will classify them as positive/negative/neutral.',
    link: 'https://github.com/Shrijanaa1/Sentiment-Analysis-Web-App'
  },
  {
    id: 3,
    name: 'Customer Reach',
    description: 'Customer Reach is a web application designed to manage customer details such as contact information, addresses, and other key details for businesses. Built using Java, Spring Boot, and Angular, it offers a streamlined approach for easy access to customer information, allowing businesses to add, edit, update, and manage customer data efficiently. Security features such as encrypted data storage and role-based access control ensure that sensitive customer information is protected while being easily accessible to authorized users.',
    imageSrc: customerReachImg,
    languages: 'Java, Spring Boot, Angular',
    // usage: 'To use the app first login or sign up then add, edit and update customer details.',
    link: 'https://github.com/Shrijanaa1/CustomerReach'
  },
  {
    id: 4,
    name: 'Hospital Management System',
    description: 'This console-based system, built in Java, provides hospitals with an easy-to-use platform for managing patient records, doctor assignments, and scheduling appointments. It includes a simple text-based menu interface through which users can perform a variety of tasks such as adding patient information, viewing available doctors, booking appointments, and updating existing records. The application aims to automate routine administrative tasks within a hospital environment, reducing paperwork and improving the overall efficiency of hospital management.',
    imageSrc: hmsImg,
    languages: 'Java',
    // usage: 'Choose an operation from the menu (add patient, view doctor, book appointment, etc.) and follow the instructions for the selected operation.',
    link: 'https://github.com/Shrijanaa1/Hospital-Management-System'
  }
];

const route = useRoute();  //Access current route details
const projectId = route.params.id; //Extract id of the project from route parameters

//computed() computes a value based on its dependencies(Here it filters projects array by projectId)
const project = computed(() => projects.find(p => p.id === parseInt(projectId)));

</script>

<style scoped>

.project-detail {
  background-color: #f5f5f5;
  color: black;
  padding: 20px;
  height: 100vh;
}

.project-detail h1 {
  text-align: center;
  font-size: 2rem;
}

.project-img-detail {
  display: block;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.project-info {
  margin-top: 20px;
  font-size: 1.2rem;
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
