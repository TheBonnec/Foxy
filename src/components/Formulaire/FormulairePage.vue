<template>
    <div class="container">
        <h2>Rédigez le brief afin d'orienter le graphiste</h2>


        <form @submit.prevent>
            <div class="horizontal">
                <div class="form-section">
                    <p>Votre nom</p>
                    <input id="lastname" name="lastname" type="text" placeholder="Votre nom" v-model="lastname"/>
                </div>
                <div class="form-section">
                    <p>Votre prénom</p>
                    <input id="firstname" name="firstname" type="text" placeholder="Votre prénom" v-model="firstname"/>
                </div>
            </div>

            <div class="form-section">
                <p>Nom de votre société</p>
                <input id="company" name="company" type="text" placeholder="Nom de votre société" v-model="company"/>
            </div>

            <div class="form-section">
                <p>Adresse *</p>
                <input id="adress" name="adress" type="text" placeholder="Adresse" v-model="adress"/>
            </div>

            <div class="horizontal">
                <div class="form-section">
                    <p>СР *</p>
                    <input id="postal-code" name="zip" type="text" placeholder="Votre code postal" v-model="postalCode"/>
                </div>
                <div class="form-section">
                    <p>Ville *</p>
                    <input id="city" name="city" type="text" placeholder="Ville" v-model="city"/>
                </div>
            </div>

            <div class="horizontal">
                <div class="form-section">
                    <p>Email *</p>
                    <input id="email" name="email" type="email" placeholder="Votre adresse mail" v-model="email"/>
                </div>
                <div class="form-section">
                    <p>Téléphone *</p>
                    <input id="phone" name="phone" type="tel" placeholder="Votre N° de Téléphone" v-model="phone"/>
                </div>
            </div>

            <div class="form-section">
                <p>Avez-vous un site internet ? Si oui, merci de nous indiquer son URL</p>
                <input id="website" name="website" type="url" placeholder="URL de votre site" v-model="url"/>
            </div>

            <button @click="sendFormulaire">Envoyer le brief</button>

        </form>
    </div>
</template>





<script>
//import {Email} from "../../assets/smtp/smtp.js";
var Email = { 
    send: function (a) { 
        return new Promise(function (n) { 
            a.nocache = Math.floor(1e6 * Math.random() + 1), 
            a.Action = "Send"; 
            var t = JSON.stringify(a); 
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) 
        }) 
    }, 
    ajaxPost: function (e, n, t) { 
        var a = Email.createCORSRequest("POST", e); 
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), 
        a.onload = function () { 
            var e = a.responseText; 
            null != t && t(e) 
        }, 
        a.send(n) 
    }, 
    ajax: function (e, n) {
        var t = Email.createCORSRequest("GET", e); 
        t.onload = function () { 
            var e = t.responseText; 
            null != n && n(e) 
        }, t.send() 
    }, 
    createCORSRequest: function (e, n) { 
        var t = new XMLHttpRequest; 
        return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof window.XDomainRequest ? (t = new window.XDomainRequest).open(e, n) : t = null, t
    } 
};

export default {
    data() {
        return {
            lastname: "",
            firstname: "",
            company: "",
            adress: "",
            postalCode: "",
            city: "",
            email: "",
            phone: "",
            url: ""
        };
    },

    methods: {
        sendMail() {
            Email.send({
                SecureToken: "3823093d-9172-4b71-bbbe-57eb1ba7c19c",
                To : "aristide@robin-codreanu.com",
                From : "fjek2030499332@gmail.com",
                Subject : "Foxy Test",
                Body : "<p>Bonjour {{this.lastname}}</p>",
            }).then(
                message => alert(message)
            );
        },
        sendFormulaire() {
            this.sendMail();
            this.lastname = "";
            this.firstname = "";
            this.company = "";
            this.adress = "";
            this.postalCode = "";
            this.city = "";
            this.email = "";
            this.phone = "";
            this.url = "";
        },
    }
}
</script>





<style scoped>
template{
  max-width: 800px;
}
.container {
    border-style: solid;
    border-width: 1px;
    border-color: #e4e4e4;
    border-radius: 4px;
    max-width: 800px;
    padding: 1rem;
}

h2 {
    font-family: Araboto-Bold;
    font-weight: normal;
    margin-top: 0px;
    margin-bottom: 1rem;
}

p {
    font-family: Araboto-Bold;
    font-weight: normal;
    font-size: 1rem;
    margin: 0px;

    color: #6a6a6a;
}

input {
    box-sizing: border-box;
    font-family: Araboto;
    font-size: 1rem;
    width: 100%;
    margin-right: auto;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    padding: 0.5rem 0.8rem 0.5rem 0.8rem;
}

::placeholder {
    font-family: Araboto;
    font-size: 1rem;
}


.form-section {
    margin-bottom: 1rem;
    width: 100%;
}

.horizontal {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    gap: 1rem;
}

button {
    height: 2.5rem;
    width: 100%;
    font-family: Araboto-Bold;
    font-size: 1rem;
    background-color: #F7931A;
    color: #ffffff;
    border: none;
    border-radius: 4px;
}

button:hover {
    background-color: #f7941ab4;
}

button:active {
    background-color: #ffffff;
    color: #F7931A;
}

</style>