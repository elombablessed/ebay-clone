<template>
<div>
    <div class="navigations">
        <div class="nav-top-left">
            <span>Hi</span>
            <span>Sign in</span>
            <span>or</span>
            <span>register</span>
            <span>Daily Deals</span>
            <span>Help & Contact</span>
        </div>
      <v-spacer></v-spacer>
      <div class="nav-top-right">
            <span>Ship to</span>
            <span>Sell</span>
            <span>Watchlist</span>
            <span>My eBay</span>
        

      <v-btn icon>
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </div>
    </div>
    <v-divider></v-divider>
</div>
</template>
<style>
.navigations{
    margin-top: 5px;
    margin-left: 30px;
    margin-right: 30px;
    display: flex;
    justify-content: space-between; 
    justify-items: center;
}
.nav-top-left{
    display: flex;
    justify-content: space-evenly;
}

.nav-top-left-opt{
    display: flex;
    justify-content: space-evenly;
}

</style>