<template>
  <h1>Blog Post Details</h1>
  <div>

    <h2>{{ post.title }}</h2>
    <p><strong>Yazar:</strong> {{ post.writer }}</p>
    <p><strong>Tarih:</strong> {{ post.date }}</p>
    <p>{{ post.content }}</p>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['id'],
  data() {
    return {
      post: null as any,
    posts:  [
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
},
created() {
    const id = Number(this.$route.params.id);
    this.post = this.posts.find(p => p.id === id) || null;
},


})

</script>

<style scoped>

div {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
}

h1 {
  text-align: center;
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 30px;
}

h2 {
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 15px;
}

p strong {
  color: #2c3e50;
}

p {
  color: #555;
  margin-bottom: 12px;
}

p:last-child {
  font-size: 1rem;
  color: #333;
  margin-top: 20px;
}

p:first-of-type, p:nth-of-type(2) {
  font-size: 0.95rem;
  color: #777;
}

</style>
