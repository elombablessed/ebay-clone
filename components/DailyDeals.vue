<template>
    <div class="deals">
        <span>
            <a href=""><h1> Daily Deals </h1> </a> 
            <span class="vl">|</span>  
                <a href=""><h2>See all</h2> 
                <v-icon large >mdi-arrow-right</v-icon> </a> 
        </span>

        <v-sheet
            class="mx-auto"
            elevation="8"
            max-width="1216"
            max-height="273"
        >
            <v-slide-group
            v-model="model"
            class="pa-4"
            active-class="success"
            show-arrows
            >
            <v-slide-item
                v-for="n in 15"
                :key="n"
                v-slot:default="{ active, toggle }"
            >
                <v-card
                :color="active ? undefined : 'grey lighten-1'"
                class="ma-4"
                height="203"
                width="203"
                @click="toggle"
                >
                <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                >
                    <v-scale-transition>
                    <v-icon
                        v-if="active"
                        color="white"
                        size="48"
                        v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                    </v-scale-transition>
                </v-row>
                </v-card>
            </v-slide-item>
            </v-slide-group>
        </v-sheet>

    </div>
</template>

<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>

<style scoped>
.deals{
    margin-top: 45px;
    margin-left: 35px;
    margin-right: 35px;
}
.deals h1 {
    font-family: sans-serif;
    color: black;
    font-size: 24px;
}
.deals h2{
    margin-right: 3px;
    font-family: sans-serif;
    font-size: 20px;
    color: #2f2e2e;
}

span{
    display: flex;
    align-items: center;
}
.vl{
    margin-left: 20px;
    margin-right: 20px;
    font-family: sans-serif;
    font-size: 24px;
    color: #55555562;
    
   
}
a{
    display: flex;
    align-items: center;
    text-decoration: none;
}

</style>

