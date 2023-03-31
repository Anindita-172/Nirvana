import VueGoogleApi from 'vue-google-api'

Vue.use(VueGoogleApi, {
  clientConfig: {
    clientId: 'YOUR_CLIENT_ID',
    scope: 'profile email'
  }
})