<template>
  <section class="contact">
    <h2> Connect With Me </h2>

    <!-- Contact Form Section -->
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="formData.name" placeholder="Your Name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="formData.email" placeholder="Your Email" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
            id="message"
            v-model="formData.message"
            placeholder="Your Message"
            rows="5"
            required
        ></textarea>
      </div>
      <div class="form-group-button">
        <button type="submit">Send Message</button>
      </div>
    </form>

    <!--    Social Media Links-->
    <div class="contact-links">
      <a href="https://github.com/Shrijanaa1" target="_blank" class="contact-link">
        <i class="pi pi-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/shrijana-karki/" target="_blank" class="contact-link">
        <i class="pi pi-linkedin"></i>
      </a>
      <a href="mailto:srznakrki111@gmail.com" target="_blank" class="contact-link">
        <i class="pi pi-envelope"></i>
      </a>
    </div>
  </section>
</template>

<script setup>
import { reactive, toRaw } from 'vue'

// Create a reactive object to hold the form data
const formData = reactive({
  name: '',
  email: '',
  message: ''
})

// Handle form submission
const handleSubmit = () => {
  console.log('Form Data:', toRaw(formData))
  alert(`Thank you, ${formData.name}! Your message has been sent.`)

  // Reset form fields after submission
  formData.name = ''
  formData.email = ''
  formData.message = ''
}
</script>

<style scoped>

.contact {
  margin-top: 0;
  //height: 100vh;
}

.contact h2 {
  font-size: 1.9rem;
  color: whitesmoke;
  text-align: center;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 4rem;
}

.contact-link i {
  font-size: 3rem;
  gap: 25px;
  color: #3498db;
}


.contact-link:hover {
  text-decoration: underline;
}

/* Contact Form Styles */
.contact-form {
  max-width: 500px;
  margin: 2rem auto 2rem;
  padding: 1.5rem;
  background: #031b34;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #ecf0f1;
}

.form-group input,
.form-group textarea {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  color: black;
  background-color: whitesmoke;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: 2px solid #2980b9;
}

.form-group-button {
  text-align: center;
}

button {
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #2980b9;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}


</style>