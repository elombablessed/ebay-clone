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
            
                <v-icon >mdi-magnify</v-icon>
                <input type="text" placeholder="Search for anything">
    
                
            <v-spacer></v-spacer>
            <div class="inner_search_input"> 
                <span>All Categories</span>
                <v-spacer></v-spacer>
                <v-icon>mdi-chevron-down</v-icon>
                </div>
            
        </div>
            <div class="my-2">
             <button class="btn-clr">Search</button>
             <span>Advanced</span>
            </div>
    </div>
    <v-divider></v-divider>
    <div class="nav-bottom">
        <div class="inner-nav-bottom">
            <ul>
                <li > <apan class="home"><a href="">Home</a> </apan></li>
                <li> <v-icon small>mdi-heart</v-icon> Saved</li>
                <li><a href="">Electronics</a> </li>
                <li> <a href="">Fashion</a> </li>
                <li> <a href="">Health & Beauty</a>  </li>
                <li> <a href="">Motors</a> </li>
                <li> <a href="">Collectibles</a> </li>
                <li> <a href="">Sports</a> </li>
                <li> <a href="">Home & Garden</a> </li>
                <li> <a href="">Deals</a> </li>
                <li> <a href="">Under $10</a> </li>
            </ul>
        </div>

    </div>
    <v-divider></v-divider>
</div>
</template>

<script>
export default {
    data:{
        isHidden: false
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
    color: #555555;
}
.navigations{
    height: 25px;
    margin-top: 5px;
    margin-left: 35px;
    margin-right: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
}
.my-2 > span{
    color: #555555;
}
span{
    padding: 5px;
    font-family: Helvetica, sans-serif;
    font-size: 12px;
   justify-items: center;
   
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
    height: 73px;
    margin-top: 5px;
    margin-left: 35px;
    margin-right: 35px;
    display: flex;
    align-items: center;
}
.nav-middle > img{
     height: 128px;
    
}
.shop{
    padding: 5px;
    display: flex;
    justify-items: center;
}
.shop span{
    display: grid;
    padding: 0;
    font-size: small;
    color: #555555;
}
input{
    border-radius: 2px;
}
.search_input{
    display: flex;
    flex: 1;
    align-items: center;
    padding: 10px;
    margin-left: 10px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.726);
    height: 45px;
    border-width: 2px;
}
.inner_search_input{
    display: flex;
    align-items: center;
    padding: 10px;
    margin-left: 10px;
    border-style: solid;
    border-right: none;
    border-color: rgba(0, 0, 0, 0.726);
    height: 45px;
    border-width: 1px;
}
.inner_search_input > span{
    color: #555555;
}
.search_input > input{
    display: flex;
    flex: 10;
    outline-width: 0;
    background-color: transparent;
    font-family: Helvetica, sans-serif;

}
.my-2{
    margin-left: 5px;
}
.btn-clr{
    height:45px;
    width: 168px;
   background-color:#3665f3;
   color: white;
}
.nav-bottom{
    margin-left: 150px;
    margin-right: 150px;
    display: flex;
    align-items: center;
}
.inner-nav-bottom{
    align-content: space-between;
    color: #555555;

}
.inner-nav-bottom > ul{
    display: flex;
    list-style: none;
}
li{
    padding: 9px 12px;
    
}
.home{
    margin-top: 10px;
    border-style: none none solid none;
    border-width: 3px;
   

}
</style>