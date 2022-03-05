(function ($) {
	var vuex = new Vuex.Store({
	    state : {
	        datesAvailable  : [ null ],
	        datesReturnAvailable  : [ null ],
	    },
	    mutations : {
	        setDatesAvailable (state,payload) {
	            state.datesAvailable = payload;
	        },
	        setDatesReturnAvailable (state,payload) {
	            state.datesReturnAvailable = payload;
	        }
	    },
	    getters : {
	        getDatesAvailable(state) {
	            return state.datesAvailable;
	        },
	        getDatesReturnAvailable(state) {
	            return state.datesReturnAvailable;
	        }
	    },
	    actions : {

	    }

	});

	let experience_calendar = new Vue({
	    el: '#app',
	    data: {
	        date: null,
	        popover : {
	            visibility : 'click'
	        }
	    },
	    mounted() {
	        $('.select2').select2();
	        let me = this;
	        vuex.commit('setDatesAvailable', [  ]);
	    },
	    methods:{
	        input: function () {
	            let me = $(this.$refs.el);
	            vuex.commit('setDatesReturnAvailable', [ this.date ]);
	        }
	    },
	    computed : {
	        datesDepartureAvailable(){
	            return vuex.getters.getDatesAvailable;
	        },
	        datesReturnAvailable(){
	            return vuex.getters.getDatesReturnAvailable;
	        }
	    }
	});
})(jQuery);
