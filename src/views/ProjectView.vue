<template>
  <section id="my-projects">
    <h2 class="section-title">Projects</h2>
    <div class="projects-container">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <img :src="getImage(project.image)" alt="Project Image" class="project-img">
        <div class="project-info">
          <h3 class="project-name">{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="project-link">View on GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyProjects',
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Personal Expense Tracker',
          description: 'Track your expenses and income, set budgets, and manage your personal finances efficiently.',
          image: 'pet.png',
          link: 'https://github.com/Shrijanaa1/PersonalExpenseTracker'
        },
        {
          id: 2,
          name: 'Sentiment Analysis Web App',
          description: 'Analyze tweets about Airlines Reviews and classify them as positive, negative, or neutral using machine learning.',
          image: 'sa.png',
          link: 'https://github.com/Shrijanaa1/Sentiment-Analysis-Web-App'
        },
        {
          id: 3,
          name: 'Customer Reach',
          description: 'A system to analyze and enhance customer reach and engagement for businesses.',
          image: 'img.png',
          link: 'https://github.com/Shrijanaa1/CustomerReach'
        },
        {
          id: 4,
          name: 'Hospital Management System',
          description: 'A comprehensive system to manage hospital operations including patient records, appointments, and staff management.',
          image: 'hms.jpeg',
          link: 'https://github.com/Shrijanaa1/Hospital-Management-System'
        }
      ]
    }
  },
  methods: {
    getImage(imageName) {
      try {
        return require(`@/assets/${imageName}`);
      } catch (error) {
        console.error("Image not found:", error);
        return '';
      }
    }
  }
}
</script>

<style scoped>
#my-projects {
  padding: 20px;
  background-color: #f1f1f1;
}

h2.section-title {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  color: #2c3e50;
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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
  font-size: 20px;
  color: #2c3e50;
}

.project-info p {
  font-size: 16px;
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
</style>
