<template>
    <div class="container-sm text-center">
        <h1>Lägg in en ny kurs</h1>
        <br/>
        <p ref="message">{{ message }}</p>
        <div class="mx-auto col-10 col-md-8 col-lg-6">    
            <form id="kursform" name="kursform" @submit.prevent="setPost">
                <div class="row mb-3">
                    <label for="code" class="form-label">Kurskod</label>
                    <input id="code" ref="code" name="code" type="text" class="form-control">
                </div>
                <div class="row mb-3">
                    <label for="name" class="form-label">Kursnamn</label>
                    <input id="name" ref="name" name="name" type="text" class="form-control">                        
                </div>
                <br/>
                <div class="row">
                    <div class="mx-auto col-6 col-md-4 col-lg-2"> 
                        <h6>Poäng:</h6>
                        <input type="number" ref="credits" id="credits" name="credits" min="0" max="30" step="0.1"/>                       
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
                                <input class="form-check-input me-2" v-model="completed" name="completed" value="Nej" type="radio" />
                                <span>Nej</span>
                            </label>
                        </p>
                    </div>
                </div>
                <br/>
                <br/>
                <div class="container text-center">
                    <div class="mx-auto col-10 col-md-5 col-lg-5"> 
                        <button type="submit" class="btn btn-primary me-4"><b> SKICKA &nbsp;<i class="bi bi-send"></i></b></button>
                        <br/>
                    </div>
                    <br/>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                level: '',
                completed: '',
                message: ''
            };
        },
        methods: {
            setPost: function () {
                if (this.$refs.code.value === "" || this.$refs.name.value === "" || this.$refs.credits.value === "")
                    return;
                else {
                    axios.post('http://localhost:8080/Uppgift2/public/api/addcourse', {
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
                        alert("Kursen har skickats utan större bekymmer");
                    });
                }
            }
        }
    };
</script>
