/*var app = new Vue({
  el: '.station-container',
  data: {
    isHover: false,
    isActive: false
  },
  methods: {
    test: function () {
     this.isActive = !this.isActive
     this.isHover = !this.isHover
    }
  }
})
*/


Vue.component('station-container', {
 data: function () {
  return	{
    isHover: false,
    isActive: false
	}
  },
  methods: {
    test: function () {
     this.isActive = !this.isActive
     this.isHover = !this.isHover
    }
  },
  props: ['station'],
  template: `<div v-bind:class="{hovering:isHover,active:isActive}" v-on:mouseover="isHover=(true && !isActive)" v-on:mouseleave="isHover=false" v-on:click="test" class="station-container">
  				<div class="station-info">
					{{station}}
				</div>
				<div class="platform-container">
					<div class="platform-info">
						<div class="plat-loc">{{station}}-1</div>
						<div class="plat-msg">unkown</div>
						<div class="plat-play">100</div>
					</div>
					<div class="platform-display">
						No Messages Recieved 
					</div>	
				</div>
				<div class="platform-container">
					<div class="platform-info">
						<div class="plat-loc">{{station}}-2</div>
						<div class="plat-msg">unkown</div>
						<div class="plat-play">100</div>
					</div>
					<div class="platform-display">
						No Messages Recieved 
					</div>	
				</div>
			</div>`
})

new Vue({ el: '#station' })
/*
document.querySelector(".station-container").addEventListener("click", function(){
  this.classList.toggle("active");
});*/