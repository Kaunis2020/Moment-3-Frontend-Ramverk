<template>
    <div class="container-sm text-center">
        <h1>Webbtjänster med Vue.js</h1>
        <br/>
        <p><router-link to="/addcourse" class="blockquote mx-3">Lägg in ny kurs</router-link></p><br/>
        <div class="d-flex justify-content-center">
            <table class="table table-bordered">
                <thead>
                    <tr><th>ID</th><th>Kurs</th><th>Namn</th><th>Poäng</th><th>Nivå</th><th>Slutförd</th><th>Ändra</th><th>Radera</th></tr>
                </thead>
                <tbody>
                    <tr v-for="post in posts" v-bind:key="post.id">
                        <td>{{ post.id }}</td>
                        <td>{{ post.code }}</td>
                        <td>{{ post.name }}</td>
                        <td>{{ post.credits }}</td>
                        <td>{{ post.level }}</td>
                        <td v-if="post.completed === 1">Ja</td>
                        <td v-else>Nej</td>
                        <td><button class="bg-success" v-on:click="updateCourse(post, $event)">{{ post.id }}</button></td>
                        <td><button class="bg-danger" v-on:click="deleteId(post.id, $event)">{{ post.id }}</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posts: []
            };
        },
        methods: {
            async getData() {
                try {
                    let response = await fetch("http://localhost:8080/Uppgift2/public/api/courses");
                    this.posts = await response.json();
                } catch (error) {
                    console.log(error);
                }
            },
            deleteId: function (value, event) {
                if (event) {
                    fetch('http://localhost:8080/Uppgift2/public/api/course/' + value, {method: 'DELETE'}).then(() => event.target.innerHTML = "Raderat");
                }
            },
            updateCourse: function (value, event) {
                if (event) {
                    this.$router.push({name: 'updatecourse', params: {course: JSON.stringify(value)}});
                }
            }
        },
        created() {
            this.getData();
        }
    };
</script>