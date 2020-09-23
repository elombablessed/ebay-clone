<template>
    <div class="category">
        <span>
            <a href=""><h1> Celebrate 25 Years of eBay </h1> </a> 
            <span class="vl">|</span>  
                <a href=""><h2>See all</h2> 
                <v-icon large >mdi-arrow-right</v-icon> </a> 
        </span>
        <div class="category-container">
                <div class="circular-item">
                    <v-avatar size="145px">
                        <v-img src="https://i.ebayimg.com/thumbs/images/g/7EQAAOSwBTleLDid/s-l225.webp"></v-img>
                    </v-avatar>
                    <h2>eBay 25th</h2>
                </div>
                 <div class="circular-item">
                    <v-avatar size="145px">
                        <v-img src="https://i.ebayimg.com/thumbs/images/g/rM8AAOSwiJReQR08/s-l225.webp"></v-img>
                    </v-avatar>
                    <h2>Sneakers</h2>
                </div>
                 <div class="circular-item">
                    <v-avatar size="145px">
                        <v-img src="https://i.ebayimg.com/thumbs/images/g/wQQAAOSwcwJfNtu5/s-l225.webp"></v-img>
                    </v-avatar>
                    <h2>Korean beauty</h2>
                </div>
                 <div class="circular-item">
                    <v-avatar size="145px">
                        <v-img src="https://i.ebayimg.com/thumbs/images/g/FBkAAOSwXt1fEe67/s-l225.webp"></v-img>
                    </v-avatar>
                    <h2>Wristwatches</h2>
                </div>
                 <div class="circular-item">
                    <v-avatar size="145px">
                        <v-img src="https://i.ebayimg.com/thumbs/images/g/4bYAAOSweohfQ4vV/s-l225.webp"></v-img>
                    </v-avatar>
                    <h2>Fishing</h2>
                </div>
                 <div class="circular-item">
                    <v-avatar size="145px">
                        <v-img src="https://i.ebayimg.com/thumbs/images/g/ctwAAOSw73xeqa32/s-l225.webp"></v-img>
                    </v-avatar>
                    <h2>Collectibles</h2>
                </div>
                 <div class="circular-item">
                    <v-avatar size="145px">
                        <v-img src="https://i.ebayimg.com/thumbs/images/g/NjMAAOSwm8NbF8N0/s-l225.webp"></v-img>
                    </v-avatar>
                    <h2>Smartphones</h2>
                </div>
               
        </div>

    </div>
</template>
<style scoped>
.category-container{
    display: flex;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    justify-content: space-between;
}
.circular-item > h2{
    margin-top: 10px;
    margin-left: 40px;  
}
.category{
    margin-top: 45px;
    margin-bottom: 45px;
    margin-left: 35px;
    margin-right: 35px;
}
.category h1 {
    font-family: sans-serif;
    color: black;
    font-size: 24px;
}
.category h2{
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