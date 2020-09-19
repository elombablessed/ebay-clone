<template>
<div>
    <div class="navigations">
        <div class="nav-top-left">
            <span>Hi <a href="">Sign in </a> or <a href="">register</a> </span>
            <span class="daily-deals">Daily Deals</span>
            <span>Help & Contact</span>
        </div>
      
      <div class="nav-top-right">
            <span>Ship to</span>
            <span>Sell</span>
            <span>Watchlist<v-icon>mdi-chevron-down</v-icon></span>
            
            <span>My eBay<v-icon>mdi-chevron-down</v-icon></span>
        

      <v-btn icon>
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </div>
    </div>
    <v-divider></v-divider>
    <div class="nav-middle">
        <img src="https://pngimg.com/uploads/ebay/ebay_PNG22.png" alt="">
        <div class="shop">
            <span>Shop by
            <span >Category</span>
            </span>
            <v-icon>mdi-chevron-down</v-icon>
        </div>
        <div class="search_input">
            <input type="text" placeholder="Search for anything">
        </div>
    </div>
    <v-divider></v-divider>
    <div class="nav-bottom">
        <p>bottom</p>
    </div>
</div>
</template>
<style>
.navigations{
    height: 25px;
    margin-top: 5px;
    margin-left: 30px;
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
}
.navigations span{
    padding: 5px;
    font-family: Helvetica, sans-serif;
    font-size: 12px;
}
.navigations a{
    text-decoration: none;
}
.nav-top-left{
    display: flex;
    justify-content: space-evenly;
}

.nav-top-left-opt{
    display: flex;
    justify-content: space-evenly;
}
.daily-deals{
    padding-left: 5px;
}
.nav-middle{
    height: 80px;
    margin-top: 5px;
    margin-left: 30px;
    margin-right: 30px;
    display: flex;
    align-items: center;
}
.nav-middle > img{
     height: 130px;
    
}
.shop{
    padding: 5px;
    display: flex;
    justify-items: center;
}
.shop span{
    display: grid;
}
input{
    border-radius: 2px;
}
.search_input{
    display: flex;
    align-items: center;
    padding: 10px;
    margin-left: 10px;
    border-color: black;
}
.search_input > input{
    
    outline-width: 0;
    background-color: transparent;
    border: 10px;
}
</style>