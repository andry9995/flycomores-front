(function ($) {
	var vuex = new Vuex.Store({
	    state : {
	        datesAvailable  : [ null ],
	        datesReturnAvailable  : [ null ],
	        destinations : []
	    },
	    mutations : {
	        setDatesAvailable (state,payload) {
	            state.datesAvailable = payload;
	        },
	        setDatesReturnAvailable (state,payload) {
	            state.datesReturnAvailable = payload;
	        },
	        setDestinations (state,payload) {
	            state.destinations = payload;
	        }
	    },
	    getters : {
	        getDatesAvailable(state) {
	            return state.datesAvailable;
	        },
	        getDatesReturnAvailable(state) {
	            return state.datesReturnAvailable;
	        },
	        getDestinations(state){
	            return state.destinations;
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
	        },
	        departure : 0,
	        destination : 0,
	    },
	    mounted() {
	        $('.select2').select2();
	        let me = this;
	        // vuex.commit('setDatesAvailable', [  ]);
	    },
	    methods:{
	        input: function () {
	            let me = $(this.$refs.el);
	            vuex.commit('setDatesReturnAvailable', [ this.date ]);
	        },
	        departureChange: function() {
	        	console.log('The new value is: ')
	        }
	    },
	    computed : {
	        datesDepartureAvailable(){
	            return vuex.getters.getDatesAvailable;
	        },
	        datesReturnAvailable(){
	            return vuex.getters.getDatesReturnAvailable;
	        },
	        destinations(){
	            return vuex.getters.getDestinations;
	        }
	    }
	});

	$(document).on('change','#departure',function(event) {
		event.preventDefault();

		values = [
			{
				id : 1,
				value : 'Majunga'
			}
		];

        vuex.commit('setDestinations', values );

	});

	$(document).on('change','#destination',function(event) {
		event.preventDefault();

        vuex.commit('setDatesAvailable', [  ]);


	});

	$(document).on('click','#passengers',function(event) {
		event.preventDefault();

		$('.passengers-box').removeClass('d-none');
	});

	$(document).on('click','.close-passengers-box',function(event) {
		event.preventDefault();

		$('.passengers-box').addClass('d-none');
	});

	resize_booking_box();
    
    $(window).on('resize', function () {
        resize_booking_box();
    });

    function resize_booking_box() {
        var width = $( window ).width();
        var booking = $('.booking-box');

        if (width <= 720) {
        	booking.addClass( 'booking-form-mobile' );
        	booking.addClass('box-close');
        	booking.removeClass('booking-form-desktop');
        	booking.removeClass('box-open');
        } else {
        	booking.addClass('booking-form-desktop')
        	booking.addClass('box-open')
        	booking.removeClass('booking-form-mobile')
        	booking.removeClass('box-close')
        }
    }

    $(document).on('click','#booking-box-open-close',function(event) {
    	event.preventDefault();

        var booking = $('.booking-box');
    	var open = booking.hasClass('box-open');

    	if (open) {
    		booking.addClass('box-close');
    		booking.removeClass('box-open');
    	} else {
    		booking.addClass('box-open');
    		booking.removeClass('box-close');
    	}

    })

})(jQuery);
