<template>
    <div class="container-sm text-center">
        <h1>Uppdatera kurs</h1>
        <br/>
        <p ref="message">{{ message }}</p>
        <div class="mx-auto col-10 col-md-8 col-lg-6">    
            <form id="kursform" name="kursform" @submit.prevent="sendPost">
                <div class="row mb-3">
                    <label for="courseid" class="form-label">Kursid</label>
                    <input id="courseid" ref="courseid" name="courseid" type="text" v-model="courseid" class="form-control" disabled="disabled">
                </div>
                <div class="row mb-3">
                    <label for="code" class="form-label">Kurskod</label>
                    <input id="code" ref="code" name="code" type="text" class="form-control" v-model="code">
                </div>
                <div class="row mb-3">
                    <label for="name" class="form-label">Kursnamn</label>
                    <input id="name" ref="name" name="name" type="text" class="form-control" v-model="name">                        
                </div>
                <br/>
                <div class="row">
                    <div class="mx-auto col-6 col-md-4 col-lg-2"> 
                        <h6>Poäng:</h6>
                        <input type="number" ref="credits" id="credits" name="credits" v-model="credits" min="0" max="30" step="0.1"/>                       
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="mx-auto col-6 col-md-4 col-lg-2"> 
                        <h6>Nivå:</h6>
                        <br/>
                        <p>
                            <label class="form-check-label">
                                <input class="form-check-input me-2" v-model="level" name="level" type="radio" value="A" />
                                <span>A</span>
                            </label>
                        </p>
                        <p>
                            <label class="form-check-label">
                                <input class="form-check-input me-2" v-model="level" name="level" value="B" type="radio" />
                                <span>B</span>
                            </label>
                        </p>
                        <p>
                            <label class="form-check-label">
                                <input class="form-check-input me-2" v-model="level" name="level" value="C" type="radio" />
                                <span>C</span>
                            </label>
                        </p>
                        <p>
                            <label class="form-check-label">
                                <input class="form-check-input me-2" v-model="level" name="level" value="AV" type="radio" />
                                <span>AV</span>
                            </label>
                        </p>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="mx-auto col-6 col-md-4 col-lg-2"> 
                        <h6>Slutförd:</h6>
                        <br/>
                        <p>
                            <label class="form-check-label">
                                <input class="form-check-input me-2" v-model="completed" name="completed" type="radio" value="Ja" />
                                <span>Ja</span>
                            </label>
                        </p>
                        <p>
                            <label class="form-check-label">
                                <input class="form-check-input me-2" v-model="completed" name="completed" type="radio" value="Nej" />
                                <span>Nej</span>
                            </label>
                        </p>
                    </div>
                </div>
                <br/>
                <br/>
                <div class="container text-center">
                    <div class="mx-auto col-10 col-md-5 col-lg-5"> 
                        <button  type="submit" class="btn btn-primary"><b> SKICKA &nbsp;<i class="bi bi-send"></i></b></button>
                        <br/>
                    </div>
                    <br/>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { useRoute } from 'vue-router'
    import axios from "axios";
    export default {
        data() {
            return {
                level: '',
                completed: '',
                message: '',
                courseid: 0,
                code: '',
                name: '',
                credits: ''
            };
        },
        methods: {
            sendPost() {
                if (this.$refs.courseid.value === "" || this.$refs.code.value === "" || this.$refs.name.value === "" || this.$refs.credits.value === "")
                    return;
                else {
                    axios.put('http://localhost:8080/Uppgift2/public/api/course/' + this.courseid, {
                        code: this.$refs.code.value,
                        name: this.$refs.name.value,
                        credits: this.$refs.credits.value,
                        level: this.level,
                        completed: this.completed
                    }).then(() => {
                        this.$refs.message.innerHTML = "Kursen har skickats utan större bekymmer";
                        this.$refs.message.style.color = "red";
                        this.$refs.code.value = "";
                        this.$refs.name.value = "";
                        const answer = confirm("Kursen har skickats utan större bekymmer \n\n Vill Du omdirigeras till tabellen?");
                        if(answer){
                            this.$router.push({name: 'services'});
                        }
                        else{
                            this.$router.push({name: 'home'});
                        }
                    });
                }
            }
        },
        created() {          
                const route = useRoute();
                const obj = route.params.course;
                const course = JSON.parse(obj);
                this.courseid = course.id;
                this.code = course.code;
                this.name = course.name;
                this.credits = course.credits;
                this.level = course.level;
                this.completed = course.completed;
        }
    };
</script>
