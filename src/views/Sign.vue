<template>
    <v-container fluid>
    <div class="my-text">
        <h2>Sign up to explore your passion today!!</h2>
        <v-card>
    <v-toolbar
      color="secondary"
      dark
      dense
      flat
    >
    <v-toolbar-title class="center text-center">
       <div class="text-center">
        Sign up
       </div>
</v-toolbar-title>
    </v-toolbar>
        <v-row>
            <v-col cols="10" offset="1">
                <v-card-text>
                    <p class="text-h4 text--primary"></p>
                    
                        <v-col cols="72" sm="100" md="100">
                            
          <v-text-field label="email" Required v-model="email"  outlined color="secondary"></v-text-field>              
          <v-text-field label="username" v-model="username"  outlined color="secondary"></v-text-field>
          <v-text-field label="password" type= "password" v-model="password"  outlined ></v-text-field>
          <v-text-field label="confirm password" type= "password" v-model="confirm_password"  outlined ></v-text-field>
            </v-col>
                
                <v-col cols="72" sm="100" md="100"></v-col>
                <v-btn large
                        color  = "secondary"
                      class  = "btn-black-text "
                             width="250px" block elevation="2"  @click="auth()" to="/about">
                    Sign up
                </v-btn>
    
            </v-card-text>
            </v-col>
        </v-row>
    </v-card>
    </div>

</v-container>
</template>

<script>
    export default {
        data() {
            return {
                username: "",
                password: "",
                confirm_password: "",

            }
        },
        methods: {
            auth() {
                alert(this.username +" "+this.password)
            },
            signInWithGoogle() {
          this.$gapi
          .signIn()
          .then(response => {
            const accessToken = response.access_token
          this.$gapi.client
            .request({
              path: '/plus/v1/people/me',
              method: 'GET'
            })
            .then(response => {
              const email = response.result.emails[0].value
              // check if email is registered and log user in
            })
        })
    }
        },
    }
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('../assets/BACKG.png');
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;}


.btn-black-text {
color: black;
}
.my-text {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 20px;
  font-weight: 150;
  
}
.text-center {
    text-align: center;
  }
</style>