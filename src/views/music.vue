<template>
    <v-container fluid>
       <v-card class="mx-auto" max-width="370">
  <v-img
     class="white--text align-end"
     height="200px"
     src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
   >
   <v-card-title class="text-h5 mb-1 ">Classical piano session<br>Balewadi, Pune</v-card-title>
   </v-img>
   <v-img
     class="white--text align-end"
     height="180px"
     src="../assets/BACKG.png"
   >

   <v-card-subtitle  class="pb-0 card-subtitle">
     <p><span style="font-weight: bold;">Details</span> </p>
   </v-card-subtitle>
   <v-card-text  class="pb-0 card-subtitle1 text-vcard ">
    A 1-hour session playing classical piano with accompaniment.<br>
     <br><span style="font-weight: bold;">Date:</span> 07/04/23&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style="font-weight: bold;"> Time:</span> 10:30 <br> 
    <span style="font-weight: bold;">Venue:</span> D1 Kolte patil ,Balewadi <br> 
   </v-card-text>
     </v-img>
   <v-card-actions>
     <v-btn
     color="accent" class="my-btn">
       Add to My Session
     </v-btn>
     <v-btn class="my-btn"
       color="accent">
       Get Contact
     </v-btn> 
   </v-card-actions>
 </v-card>
 <v-card class="mx-auto" max-width="370">
  <v-img
     class="white--text align-end"
     height="200px"
     src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
   >
   <v-card-title class="text-h5 mb-1 ">Band practice<br>Kothrud, Pune</v-card-title>
   </v-img>
   <v-img
     class="white--text align-end"
     height="180px"
     src="../assets/BACKG.png"
   >

   <v-card-subtitle  class="pb-0 card-subtitle">
     <p><span style="font-weight: bold;">Details</span> </p>
   </v-card-subtitle>
   <v-card-text  class="pb-0 card-subtitle1 text-vcard ">
    Need a vocalist for a band playing English songs (mainly rock)<br>
     <br><span style="font-weight: bold;">Date:</span> 14/09/23&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style="font-weight: bold;"> Time:</span> 21:00 <br> 
    <span style="font-weight: bold;">Venue:</span> Orchid Hotel,Kothrud <br> 
   </v-card-text>
     </v-img>
   <v-card-actions>
     <v-btn
     color="accent" class="my-btn">
       Add to My Session
     </v-btn>
     <v-btn class="my-btn"
       color="accent">
       Get Contact
     </v-btn> 
   </v-card-actions>
 </v-card>
 <v-card class="mx-auto" max-width="370">
  <v-img
     class="white--text align-end"
     height="200px"
     src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
   >
   <v-card-title class="text-h5 mb-1 ">Singing duet<br>Khadki, Pune</v-card-title>
   </v-img>
   <v-img
     class="white--text align-end"
     height="180px"
     src="../assets/BACKG.png"
   >

   <v-card-subtitle  class="pb-0 card-subtitle">
     <p><span style="font-weight: bold;">Details</span> </p>
   </v-card-subtitle>
   <v-card-text  class="pb-0 card-subtitle1 text-vcard ">
    Need someone who can sing bollywood music for social media recording.<br>
     <br><span style="font-weight: bold;">Date:</span> 07/04/23&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style="font-weight: bold;"> Time:</span> 21:00 <br> 
    <span style="font-weight: bold;">Venue:</span> The Taj Vivanta,Khadki <br> 
   </v-card-text>
     </v-img>
   <v-card-actions>
     <v-btn
     color="accent" class="my-btn">
       Add to My Session
     </v-btn>
     <v-btn class="my-btn"
       color="accent">
       Get Contact
     </v-btn> 
   </v-card-actions>
 </v-card>
</v-container>

</template>

<script>
   export default {
       
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
 .card-subtitle1 {
 color: rgb(24, 11, 11);}
 .card-subtitle {
 color: rgb(24, 11, 11);
 font-size: 18px;
 border-bottom: 2px solid transparent; /* set a transparent border to make space for the custom border */
 border-image: linear-gradient(to right, #8b00dbc2, #8b00dbc2) 1; /* create a gradient border */
 border-image-slice: 1 0.000001cm; /* set the border to repeat only 1cm */
 font-family: sans-serif  !important;
}
.text-vcard{font-family: sans-serif  !important;}
.text-h5 {
 font-size: 18px !important; /* adjust the font size as per your requirement */
 margin-bottom: 1em; /* adjust the margin value as per your requirement */
  /* set the font family to Montserrat */

}
/* 10 over cricket match */
p {
   line-height: 0.3;
 }

 .my-btn {
   padding: 20px !important; 
 }
</style>
