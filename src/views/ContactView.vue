<template>
  <section class="contact">
    <h2> Connect With Me </h2>
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

</script>

<style scoped>

.contact {
  margin-top: 0;
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
}


.contact-link:hover {
  text-decoration: underline;
}
</style>