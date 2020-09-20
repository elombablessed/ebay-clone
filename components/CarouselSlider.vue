<template>
  <v-carousel hide-delimiters cycle height="330" class="carousel-slider">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://i.ebayimg.com/images/g/nGIAAOSwN2RfYgCb/s-l1600.webp',
          },
          {
            src: 'https://s3.amazonaws.com/pas-wordpress-media/content/uploads/2015/09/02163032/starting-an-ebay-business.jpg',
          },
          {
            src: 'https://i.ebayimg.com/images/g/9TIAAOSwPkxfYc2B/s-l1600.webp',
          },
          {
            src: 'https://cdn.shopify.com/shopifycloud/brochure/assets/external-sales-channels/ebay/share-image-3def8e2018ad853a936fa62f0143c1c6d7863441b8aa5ca57c0df3ca1eb43c16.jpg',
          },
        ],
      }
    },
  }
</script>

