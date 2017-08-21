<template>
  <div class="hello">
        <img src='http://mikawa.de/img/logo_116x41.gif'>
        <div v-for="menu in menus" v-bind:key='menu.id' class='menu'>
          <div class='embed-responsive embed-responsive-16by9'>
            <youtube class='embed-responsive-item' @ready="ready" @ended='ended' :video-id="menu.id" :player-vars="playeroption"></youtube>
          </div>
          <h4 class="title">{{menu.name}}</h4>
          <div class='price'>{{menu.price}} euro</div>  
          <div class='description'>{{menu.description}}</div>
          <!-- <a href="#" class="btn btn-primary btn-block">Select</a> -->
        </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Players:[],
      menus:[{id:'1IHm6PiRgKQ',name:'Oyakodon',price:'7.5',description:'Reisschüssel-Gericht (Donburi), dessen Zutaten aus Huhn, Ei, Frühlingszwiebeln (manchmal auch normalen Zwiebeln) und anderen Zutaten (Dashi, Sake, Sojasauce) besteht'},
              {id:'hBBxVKKtuGg',name:'Teriyaki sushi roll',price:'8.9',description:'Teriyaki-Sauce ist eine Mischung aus Sojasauce, Mirin oder Sake und Zucker oder Honig'},
              {id:'1IHm6PiRgKQ',name:'Oyakodon',price:'7.5',description:'Reisschüssel-Gericht (Donburi), dessen Zutaten aus Huhn, Ei, Frühlingszwiebeln (manchmal auch normalen Zwiebeln) und anderen Zutaten (Dashi, Sake, Sojasauce) besteht'},
              {id:'hBBxVKKtuGg',name:'Teriyaki sushi roll',price:'8.9',description:'Teriyaki-Sauce ist eine Mischung aus Sojasauce, Mirin oder Sake und Zucker oder Honig'},
              {id:'1IHm6PiRgKQ',name:'Oyakodon',price:'7.5',description:'Reisschüssel-Gericht (Donburi), dessen Zutaten aus Huhn, Ei, Frühlingszwiebeln (manchmal auch normalen Zwiebeln) und anderen Zutaten (Dashi, Sake, Sojasauce) besteht'},
              {id:'hBBxVKKtuGg',name:'Teriyaki sushi roll',price:'8.9',description:'Teriyaki-Sauce ist eine Mischung aus Sojasauce, Mirin oder Sake und Zucker oder Honig'}
              ],
      VideoID:'SAluC5k0Ip8',
      playeroption:{
                    'autoplay' : 1,
                    'rel' : 0,
                    'showinfo' : 0,
                    'showsearch' : 0,
                    'controls' : 0,
                    'loop' : 1,
                    'enablejsapi' : 1,
                    'disablekb': 1,
                    'fs':0,
                    'playsinline':1,
                    'cc_load_policy':0,
                    'autohide':1
      }

    }
  },
  methods:{
    ended(player)
    {
      console.log('ended',player);
      // player.startVideo();
      player.seekTo(0);
      console.log('playback rate:',player.getPlaybackRate())
    },
    ready(player){
      console.log('ready',player);
      console.log(player.getAvailablePlaybackRates())
      player.setPlaybackRate('0.5')
    },
    start(videoId){
      // let player = this.players.find(function(element){
      //   return element.videoID == videoId;
      // });
      // console.log(player);
      // player.startVideo();
    },
    pause(){

    },
    
    stop(videoId){
      // let player = this.players.find(function(element){
      //   return element.videoID == videoId;
      // });
      // player.stopVideo();
    }


  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.title {
  font-size: 48pt;
  text-align: center;
  /* background-color:rgba(219, 213, 212, 1.0); */
  padding-top:40px;
  padding-left:10px;
  padding-bottom:30px;
  margin-top:50px;
  margin-bottom: 0px;
  margin-left:0px;
  margin-right:0px;
  border:0;
  letter-spacing: -6px;
  font-weight:200;
  /* color:white;
  text-shadow: 2px 2px 4px #000000; */
}

.price {
 font-size: 28pt;
  margin-top:20px;
  margin-bottom: 20px;
  /* margin-left:0px;
  margin-right:0px; */
}

.description {
  font-size: 14pt;
  text-align: center;
  margin-top:70px;
  margin-bottom: 70px;
  margin-left:70px;
  margin-right:70px;
  padding-bottom: 70px;

}

youtube {
  border:0;
}
.menu {
  border: 1px solid gray;
  margin-top:50px;
  margin-bottom: 50px;
  margin-left:20px;
  margin-right:20px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2),
	            0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>
