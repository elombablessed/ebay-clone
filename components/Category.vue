<template>
    <div class="category">
        <span>
            <a href=""><h1> Explore popular categories </h1> </a> 
            <span class="vl">|</span>  
                <a href=""><h2>See all</h2> 
                <v-icon large >mdi-arrow-right</v-icon> </a> 
        </span>

    </div>
</template>
<style scoped>
.category{
    margin-top: 45px;
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
    color: #555555;
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