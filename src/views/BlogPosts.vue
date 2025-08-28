<template>
  <h2>Blog Posts</h2>
  <div class="blog-container">
    <div v-for="post in posts" :key="post.id">
      <router-link :to="{ name: 'BlogPostDetails', params: { id: post.id }}" >
        <div class="post-card">
          <h3>{{ post.title }}</h3>
          <p><strong>Yazar:</strong> {{ post.writer }}</p>
          <p class="post-date"><strong>Tarih:</strong> {{ post.date }}</p>
          <p>{{ post.content.slice(0, 80) }}...</p>
        </div>
      </router-link>
    </div>
  </div>
</template>


<script lang="ts">

export default{
  data() {
    return {
      posts: [
  {
    id: 1,
    title: 'Vue Router Nedir?',
    writer: 'John Doe',
    date: '2025-01-01',
    content: 'Vue Router, Vue.js projelerinde birden fazla sayfa arasında geçiş yapmamızı sağlayan resmi yönlendirme (routing) kütüphanesidir. Örneğin bir web sitesinde Home, About, Contact gibi farklı sayfalara yönlenmek için kullanılır. Ayrıca dinamik rotalar sayesinde /user/1 → “User 1 Profili” gibi kullanıcıya özel sayfalar da oluşturulabilir.'
  },
  {
    id: 2,
    title: 'Vue ile Component Kullanımı',
    writer: 'Jane Smith',
    date: '2025-01-05',
    content: 'Vue’de component yapısı, uygulamayı küçük ve tekrar kullanılabilir parçalar hâline getirmemizi sağlar. Örneğin bir Button component’i farklı sayfalarda defalarca kullanılabilir. Bu yaklaşım hem kod tekrarını azaltır hem de projeyi daha düzenli hale getirir.'
  },
  {
    id: 3,
    title: 'Vuex ile State Yönetimi',
    writer: 'Michael Lee',
    date: '2025-01-10',
    content: 'Vuex, Vue uygulamalarında global state yönetimi için kullanılan resmi kütüphanedir. Uygulamanın farklı componentleri arasında veri paylaşımını kolaylaştırır. Store, state, getters, mutations ve actions gibi kavramlara sahiptir.'
  },
  {
    id: 4,
    title: 'Composition API Nedir?',
    writer: 'Emily Johnson',
    date: '2025-01-15',
    content: 'Composition API, Vue 3 ile gelen yeni bir yazım şeklidir. Kodun daha okunabilir ve tekrar kullanılabilir olmasını sağlar. Özellikle büyük projelerde Options API yerine tercih edilir çünkü mantıksal kod parçalarını daha kolay gruplayabilmeyi sağlar.'
  },
  {
    id: 5,
    title: 'Vue 3 ile Lifecycle Hooks',
    writer: 'David Brown',
    date: '2025-01-20',
    content: 'Lifecycle hooks, bir Vue componentinin yaşam döngüsü boyunca belirli noktalarda tetiklenen fonksiyonlardır. Örneğin onMounted, component DOM’a eklendiğinde çalışır. Bu sayede verileri yüklemek, event listener eklemek gibi işlemler yapılabilir.'
  }
]
    }
  }
}


</script>


<style scoped>

.blog-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.post-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}



.post-card:hover {
  transform: translateY(-5px);
  background-color: aquamarine;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
}

.post-card h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.post-card p {
  margin: 5px 0;
  color: #555;
  line-height: 1.5;
}

.post-card p strong {
  color: #333;
}

.post-date {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 10px;
}


</style>
