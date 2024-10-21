var payment_in_progress = false;

$(document).ready(function() {

    $('.thumbnail').on('click', function(e) {
        e.preventDefault();
        $(this).parent().find("img").addClass('d-none');
        $(this).parent().find("iframe").removeClass('d-none');
    });
    
   /* function sortOptions() {
         var allOptions = $("#country_code option");
         allOptions.sort(function (op1, op2) {
            var text1 = $(op1).text().toLowerCase();
            var text2 = $(op2).text().toLowerCase();
            return (text1 < text2) ? -1 : 1;
         });
         allOptions.appendTo("select#country_code");
         $("#country_code").val('+91').trigger('change');
    }
    sortOptions();*/

    $(".testinomial-content-more").hide();
    $(".show_hide").on("click", function() {
        var txt = $(".testinomial-content-more").is(':visible') ? 'Read More' : '';
        $(this).parent().find(".show_hide").text(txt);
        $(this).parent().find(".show_hide").hide();
        $(this).next('.testinomial-content-more').slideToggle(200);
    });

    $(".accordion-item").slice(4, 9).hide();
    if ($(".accordion-item:hidden").length != 0) {
        $("#load").show();
    }
    $("#load").on("click", function (e) {
        e.preventDefault();
        $(".accordion-item:hidden").slice(0, 5).slideDown();
        if ($(".accordion-item:hidden").length == 0) {
            $("#load").text("No More to view").fadeOut("slow");
        }
    });

    $("#pay_button_gift").click(function(e) {
        if (payment_in_progress) {
            return false;
        }
        e.preventDefault();

        $('.input-focus').removeClass('input-focus');

        if ($('#gift_name').val() == '') {
            $('#gift_name').addClass('input-focus');
            $('#gift_name').focus();
            $("#gift_name_error").html("Please enter name");
            return false;
        } else {
            var checkString = $('#gift_name').val();
            if (!/^[a-zA-Z\s]*$/.test(checkString)) {
                $('#gift_name').addClass('input-focus');
                $('#gift_name').focus();
                $("#gift_name_error").html("Please enter valid name");
                return false;
            }
            $("#gift_name_error").html("");
        }

        if ($('#gift_phone').val() == "") {
            $('#gift_phone').addClass('input-focus');
            $('#gift_phone').focus();
            $("#gift_mob_error").html("Please enter phone number");
            return false;
        } else {
            var check_num = $('#gift_phone').val();
            if (!/^[0-9]+$/.test(check_num)) {
                $('#gift_phone').addClass('input-focus');
                $('#gift_phone').focus();
                $("#gift_mob_error").html("Please enter valid phone number");
                return false;
            }
            $("#gift_mob_error").html("");
        }
        /* if ($('#rcp_name').val() == '') {
            $('#rcp_name').addClass('input-focus');
            $('#rcp_name').focus();
            $("#rcp_name_error").html("Please enter name");
            return false;
        } else {
            var checkString = $('#rcp_name').val();
            if (!/^[a-zA-Z\s]*$/.test(checkString)) {
                $('#rcp_name').addClass('input-focus');
                $('#rcp_name').focus();
                $("#rcp_name_error").html("Please enter valid name");
                return false;
            }
            $("#rcp_name_error").html("");
        } */

        if ($('#gift_email').val() == '') {
            $('#gift_email').addClass('input-focus');
            $('#gift_email').focus();
            $("#gift_email_error").html("Please enter email");
            return false;
        } else {
            var check_email = $('#gift_email').val();
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(check_email)) {
                $('#gift_email').addClass('input-focus');
                $('#gift_email').focus();
                $("#gift_email_error").html("Please enter valid email");
                return false;
            }
            $("#gift_email_error").html("");
        }

        /* if ($('#rcp_email').val() == '') {
            $('#rcp_email').addClass('input-focus');
            $('#rcp_email').focus();
            $("#rcp_email_error").html("Please enter email");
            return false;
        } else {
            var check_email = $('#rcp_email').val();
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(check_email)) {
                $('#rcp_email').addClass('input-focus');
                $('#rcp_email').focus();
                $("#rcp_email_error").html("Please enter valid email");
                return false;
            }
            $("#rcp_email_error").html("");
        } */

        /* if ($('#rcp_phone').val() == "") {
            $('#rcp_phone').addClass('input-focus');
            $('#rcp_phone').focus();
            $("#rcp_mob_error").html("Please enter phone number");
            return false;
        } else {
            var check_num = $('#rcp_phone').val();
            if (!/^[0-9]+$/.test(check_num)) {
                $('#rcp_phone').addClass('input-focus');
                $('#rcp_phone').focus();
                $("#rcp_mob_error").html("Please enter valid phone number");
                return false;
            }
            $("#rcp_mob_error").html("");
        } */
        
        var country_code = $('.gift_phone .country.active .country-name').html(); 
        if(country_code == '+91'){
			var check_num = $('#gift_phone').val();
			if(check_num.length == 10){
				$("#gift_mob_error").html("");
			}else{
				$('#gift_phone').addClass('input-focus');
                $('#gift_phone').focus();
				$("#gift_mob_error").html("Please enter 10 digit phone number");
				return false;
			}
    	}
    	
    	/* var rcp_country_code = $('.rcp_phone .country.active .country-name').html(); 
        if(rcp_country_code == '+91'){
			var check_num = $('#rcp_phone').val();
			if(check_num.length == 10){
				$("#rcp_mob_error").html("");
			}else{
				$('#rcp_phone').addClass('input-focus');
                $('#rcp_phone').focus();
				$("#rcp_mob_error").html("Please enter 10 digit phone number");
				return false;
			}
    	} */
        rcp_details = [];
        var total_element = $(".all-recipients").children().length;
	    var lastid = $('.all-recipients').children().last().data('recipients_id');
	    for (let i = 1; i <= lastid; i++) {
		    var rcp_name = $('#rcp_name_'+i+'').val();
		    var rcp_phone = $('#rcp_phone_'+i+'').val();
		    var rcp_email = $('#rcp_email_'+i+'').val();
            var rcp_city = $('#rcp_city_'+i+'').val()
		    //var pqty = $('#product_qty_'+i+'').val();
            
            if ($('#rcp_name_'+i+'').val() == '') {
                $('#rcp_name_'+i+'').addClass('input-focus');
                $('#rcp_name_'+i+'').focus();
                $('#rcp_name_error_'+i+'').html("Please enter name");
                return false;
            } else {
                var checkString = $('#rcp_name_'+i+'').val();
                if (!/^[a-zA-Z\s]*$/.test(checkString)) {
                    $('#rcp_name_'+i+'').addClass('input-focus');
                    $('#rcp_name_'+i+'').focus();
                    $('#rcp_name_error_'+i+'').html("Please enter valid name");
                    return false;
                }
                $('#rcp_name_error_'+i+'').html("");
            }

            if ($('#rcp_phone_'+i+'').val() == "") {
                $('#rcp_phone_'+i+'').addClass('input-focus');
                $('#rcp_phone_'+i+'').focus();
                $('#rcp_mob_error_'+i+'').html("Please enter phone number");
                return false;
            } else {
                var check_num = $('#rcp_phone_'+i+'').val();
                if (!/^[0-9]+$/.test(check_num)) {
                    $('#rcp_phone_'+i+'').addClass('input-focus');
                    $('#rcp_phone_'+i+'').focus();
                    $('#rcp_mob_error_'+i+'').html("Please enter valid phone number");
                    return false;
                }
                $('#rcp_mob_error_'+i+'').html("");
            }

            var rcp_country_code = $('.rcp_phone_'+i+' .country.active .country-name').html(); 
            if(rcp_country_code == '+91'){
		    	var check_num = $('#rcp_phone_'+i+'').val();
		    	if(check_num.length == 10){
		    		$('#rcp_mob_error_'+i+'').html("");
		    	}else{
		    		$('#rcp_phone_'+i+'').addClass('input-focus');
                    $('#rcp_phone_'+i+'').focus();
		    		$('#rcp_mob_error_'+i+'').html("Please enter 10 digit phone number");
		    		return false;
		    	}
    	    }

            /* if ($('#rcp_email_'+i+'').val() == '') {
                $('#rcp_email_'+i+'').addClass('input-focus');
                $('#rcp_email_'+i+'').focus();
                $('#rcp_email_error_'+i+'').html("Please enter email");
                return false;
            } else {
                var check_email = $('#rcp_email_'+i+'').val();
                if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(check_email)) {
                    $('#rcp_email_'+i+'').addClass('input-focus');
                    $('#rcp_email_'+i+'').focus();
                    $('#rcp_email_error_'+i+'').html("Please enter valid email");
                    return false;
                }
                $('#rcp_email_error_'+i+'').html("");
            } */

            if ($('#rcp_city_'+i+'').val() == '') {
                $('#rcp_city_'+i+'').addClass('input-focus');
                $('#rcp_city_'+i+'').focus();
                $('#rcp_city_error_'+i+'').html("Please enter city");
                return false;
            } else {
                var checkString = $('#rcp_city_'+i+'').val();
                if (!/^[a-zA-Z\s]*$/.test(checkString)) {
                    $('#rcp_city_'+i+'').addClass('input-focus');
                    $('#rcp_city_'+i+'').focus();
                    $('#rcp_city_error_'+i+'').html("Please enter valid city");
                    return false;
                }
                $('#rcp_city_error_'+i+'').html("");
            }
        
            var obj = {
                'rcp_name': rcp_name,
                'rcp_mob':  rcp_country_code + rcp_phone,
                'rcp_email': rcp_email,
                'rcp_city': rcp_city
            };
            rcp_details.push(obj);
        }
        //console.log(rcp_details);
        $("#pay_button_gift").html("Loading...");
        $("#pay_button_gift").prop("disabled", true);

        payment_in_progress = true;

        var name = $('#gift_name').val();
        //var rcp_name = $('#rcp_name').val();
        var amount = ($('#amount').val())*total_element;
        //var rcp_email = $('#rcp_email').val();
        var email = $('#gift_email').val();
        var phone = country_code + $('#gift_phone').val();
        //var rcp_phone = rcp_country_code + $('#rcp_phone').val();
        var msg = $('#rcp_msg').val();
        var utm_source = $('#utm_source').val();
        var utm_medium = $('#utm_medium').val();
        var utm_campaign = $('#utm_campaign').val();
        var utm_term = $('#utm_term').val();
        var utm_content = $('#utm_content').val();
        var http_refer_id = $('#http_refer_id').val();
        var current_url = window.location.href;
        var time_slot = $('#time_slot').val();
        var language = '';
        if(time_slot.length > 0){
            language = $('#time_slot').find(':selected').data('language')
        }
        var user_distinct_id = (mixpanel) ? mixpanel.get_distinct_id() : '';
        var ajax_page_url = page_url + "ajax/checkout/";
        $.ajax({
            url: ajax_page_url,
            type: 'POST',
            data: {
                'sender-name': name,
                //'rcp-name': rcp_name,
                'sender-email': email,
                //'rcp-email': rcp_email,
                'sender-mob': phone,
                //'rcp-mob': rcp_phone,
                'rcp_detail': rcp_details,
                'rcp-msg': msg,
                'reg-amount': amount,
                'utm_source': utm_source,
                'utm_medium': utm_medium,
                'utm_campaign': utm_campaign,
                'utm_term': utm_term,
                'utm_content': utm_content,
                'http_refer_id': http_refer_id,
                'current_url': current_url,
                'workshop-date': workshop_date,
                'language' : language,
                'mixpanel_distinct_id': !mixpanelidverify(user_distinct_id) ? user_distinct_id : '',
                'sbmt_ajax': 'submit_gift_form'
            },
            success: function(data) {
                var options = jQuery.parseJSON(data);
                //console.log(options)
                $('#razorpay_order_id').val(options.order_id);

                // Boolean whether to show image inside a white frame. (default: true)
                options.theme.image_padding = false;
                options.handler = function(payment) {
                    $('#razorpay_payment_id').val(payment.razorpay_payment_id);
                    $('#razorpay_signature').val(payment.razorpay_signature);
                    var form_data = $('#rxp_frm').serializeArray();

                    $.ajax({
                        url: ajax_page_url,
                        data: {
                            'razorpay_payment_id': $('#razorpay_payment_id').val(),
                            'razorpay_signature': $('#razorpay_signature').val(),
                            'razorpay_order_id': $('#razorpay_order_id').val(),
                            'sbmt_ajax': 'gift_payment_success'
                        },
                        type: 'POST',
                        success: function(response) {
                            payment_in_progress = false;
                            $("#pay_button_gift").html("Pay Now");
                            var result = jQuery.parseJSON(response);

                            if (result.check == 'success') {
                                var c_url = window.location.href;
                                var urlObject = new URL(c_url);

                                // Extract the path without the query string
                                var pathWithoutQueryString = urlObject.pathname;
                                pathWithoutQueryString = pathWithoutQueryString.replace(/^\//, '');

                                //var param = c_url.slice(page_url.length, c_url.length);
                                window.location = page_url + "thankyou?ref=" + pathWithoutQueryString;
                            } else {
                                $("#gift_success_msg").html("Payment Verification in progress...");

                            }
                        },
                        error: function(error) {
                            $("#gift_success_msg").html("Payment Verification in progress...");
                        }
                    });
                };

                options.modal = {
                    ondismiss: function() {
                        payment_in_progress = false;
                        $("#pay_button_gift").html("Pay Now");
                        $("#pay_button_gift").removeAttr('disabled');
                        console.log("This code runs when the popup is closed");
                    },
                    // Boolean indicating whether pressing escape key 
                    // should close the checkout form. (default: true)
                    escape: true,
                    // Boolean indicating whether clicking translucent blank
                    // space outside checkout form should close the form. (default: false)
                    backdropclose: false
                };

                var rzp = new Razorpay(options);
                rzp.open();
                if (mixpanel && typeof mixpanel.track === 'function') {
                    mixpanel.track('pay_now', {
                        'workshop_name': workshopname,
                        'location': city,
                        'time-slot': $('#time_slot').find(':selected').data('timeslot'),
                        'activity_code': 'pay_now',
                        'source_page' : source_page,
                        'current_url_path': current_url_path,
                        'current_url_protocol': current_url_protocol,
                        'current_domain': current_domain
                    });
                }


            },
            error: function(xhr, status, error) {
                $("#gift_success_msg").html("Payment Verification in progress...");
            }
        });
    });


    $("#pay_button").click(function(e) {
        if (payment_in_progress) {
            return false;
        }
        e.preventDefault();

        $('.input-focus').removeClass('input-focus');

        if ($('#name').val() == '') {
            $('#name').addClass('input-focus');
            $('#name').focus();
            $("#name_error").html("Please enter name");
            return false;
        } else {
            var checkString = $('#name').val();
            if (!/^[a-zA-Z\s]*$/.test(checkString)) {
                $('#name').addClass('input-focus');
                $('#name').focus();
                $("#name_error").html("Please enter valid name");
                return false;
            }
            $("#name_error").html("");
        }

        if ($('#email').val() == '') {
            $('#email').addClass('input-focus');
            $('#email').focus();
            $("#email_error").html("Please enter email");
            return false;
        } else {
            var check_email = $('#email').val();
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(check_email)) {
                $('#email').addClass('input-focus');
                $('#email').focus();
                $("#email_error").html("Please enter valid email");
                return false;
            }
            $("#email_error").html("");
        }

        if ($('#phone').val() == "") {
            $('#phone').addClass('input-focus');
            $('#phone').focus();
            $("#mob_error").html("Please enter phone number");
            return false;
        } else {
            var check_num = $('#phone').val();
            if (!/^[0-9]+$/.test(check_num)) {
                $('#phone').addClass('input-focus');
                $('#phone').focus();
                $("#mob_error").html("Please enter valid phone number");
                return false;
            }
            $("#mob_error").html("");
        }
        
        var country_code = $('#country_code').val();
        var isValidCountry = false;
	    for(var i = 0; i < countries.length; i++){
	            if(countries[i].data == country_code){
	                isValidCountry = true;
	                break;
	            }
	        }
	        if(!isValidCountry){
	            $("#mob_error").html("Please choose valid STD code");
	            if (mixpanel && typeof mixpanel.track === 'function') {
	                    mixpanel.track('invalid_std_code', {
	                        'form_data': $('#reg_form').serializeArray(),
	                        'source_page' : source_page,
	                        'current_url_path': current_url_path,
	                        'current_url_protocol': current_url_protocol,
	                        'current_domain': current_domain
	                    });
	                }  
	            return false;
	    }       
        if(country_code == '+91'){
			var check_num = $('#phone').val();
			if(check_num.length == 10){
				$("#mob_error").html("");
			}else{
				$('#phone').addClass('input-focus');
                $('#phone').focus();
				$("#mob_error").html("Please enter 10 digit phone number");
				return false;
			}
    	}
            	

        if ($('#city').val() == '') {
            $('#city').addClass('input-focus');
            $('#city').focus();
            $("#city_error").html("Please enter city");
            return false;
        } else {
            $("#city_error").html("");
        }
        if ($('#time_slot').val() == '') {
            $('#time_slot').addClass('input-focus');
            $('#time_slot').focus();
            $("#time_slot_error").html("Please select workshop language");
            return false;
        } else {
            $("#time_slot_error").html("");
        }
        
        if ($('#terms').prop('checked')) {
            $("#terms_error").html("");
            $('#terms').removeClass('border-yellow');
        } else {
            $('#terms').addClass('input-focus');
            $('#terms').focus();
            $('#terms').addClass('border-yellow');
            $("#terms_error").html(" Please select checkbox above to proceed");
            return false;
        }
        

        // if ($('#aware').prop('checked')) {
        //     $("#aware_error").html("");
        //     $('#aware').removeClass('border-yellow');
        // } else {
        //     $('#aware').addClass('input-focus');
        //     $('#aware').focus();
        //     $('#aware').addClass('border-yellow');
        //     $("#aware_error").html(" Please select checkbox above to proceed");
        //     return false;
        // }

        $("#pay_button").html("Loading...");
        $("#pay_button").prop("disabled", true);

        payment_in_progress = true;

        var phone_no = $('#country_code').val() + '' + $('#phone').val();
        if($('#country_code').val() != '+91' && $('#phone').val()[0] == 0){
            phone_no = $('#country_code').val() + '' + $('#phone').val().slice(1);
        }

        var name = $('#name').val();
        var amount = $('#amount').val();
        var city = $('#city').val();
        var email = $('#email').val();
        var phone = phone_no;
        var time_slot = $('#time_slot').val();
        var utm_source = $('#utm_source').val();
        var utm_medium = $('#utm_medium').val();
        var utm_campaign = $('#utm_campaign').val();
        var utm_term = $('#utm_term').val();
        var utm_content = $('#utm_content').val();
        var http_refer_id = $('#http_refer_id').val();
        var current_url = window.location.href;
        var country = $('#country').val();
        if(time_slot.length > 0){
            workshop_date = $('#time_slot').find(':selected').data('workshop_date');
        }
        var user_distinct_id = (mixpanel) ? mixpanel.get_distinct_id() : '';
        var ajax_page_url = page_url + "ajax/checkout/";
        $.ajax({
            url: ajax_page_url,
            type: 'POST',
            data: {
                'reg-name': name,
                'reg-city': city,
                'reg-email': email,
                'reg-mob': phone,
                'reg-country' : country,
                'reg-amount': amount,
                'workshop_date_form_id' : time_slot,
                'utm_source': utm_source,
                'utm_medium': utm_medium,
                'utm_campaign': utm_campaign,
                'utm_term': utm_term,
                'utm_content': utm_content,
                'http_refer_id': http_refer_id,
                'current_url': current_url,
                'workshop-date': workshop_date,
                'mixpanel_distinct_id': !mixpanelidverify(user_distinct_id) ? user_distinct_id : '',
                'sbmt_ajax': 'submit_register_form'
            },
            success: function(data) {
                var options = jQuery.parseJSON(data);
                //console.log(options)
                var check = options.check;
                if(check == 'failure'){
                    $("#pay_button").html('Pay Now <img loading="lazy" class="btn_arrow" src="'+page_url+'/resources/img/btn-arrow-brown.png" alt="arrow" width="20" height="17" />');
                    $("#pay_button").prop("disabled", false);

                    payment_in_progress = false;
                    if(options.errorfield == 'email'){
                        $("#email_error").html(options.msg);
                        return false;
                    }
                }
              
                $('#razorpay_order_id').val(options.order_id);

                // Boolean whether to show image inside a white frame. (default: true)
                options.theme.image_padding = false;
                options.handler = function(payment) {
                    $('#razorpay_payment_id').val(payment.razorpay_payment_id);
                    $('#razorpay_signature').val(payment.razorpay_signature);
                    var form_data = $('#rxp_frm').serializeArray();

                    $.ajax({
                        url: ajax_page_url,
                        data: {
                            'razorpay_payment_id': $('#razorpay_payment_id').val(),
                            'razorpay_signature': $('#razorpay_signature').val(),
                            'razorpay_order_id': $('#razorpay_order_id').val(),
                            'sbmt_ajax': 'payment_success'
                        },
                        type: 'POST',
                        success: function(response) {
                            payment_in_progress = false;
                            $("#pay_button").html("Pay Now");
                            var result = jQuery.parseJSON(response);

                            if (result.check == 'success') {
                                var c_url = window.location.href;
                                var param = c_url.slice(page_url.length, c_url.length);
                                if(result.order_id != ''){
                                   var order_url = "encoded_order_id=" + result.order_id; 
                                        order_url +="&";
                                }else{
                                    var order_url = "";
                                }
                                window.location = page_url + "thankyou?"+order_url +"ref=" + param;
                            } else {
                                $("#success_msg").html("Payment Verification in progress...");

                            }
                        },
                        error: function(error) {
                            $("#success_msg").html("Payment Verification in progress...");
                        }
                    });
                };

                options.modal = {
                    ondismiss: function() {
                        payment_in_progress = false;
                        $("#pay_button").html("Pay Now");
                        $("#pay_button").removeAttr('disabled');
                        console.log("This code runs when the popup is closed");
                    },
                    // Boolean indicating whether pressing escape key 
                    // should close the checkout form. (default: true)
                    escape: true,
                    // Boolean indicating whether clicking translucent blank
                    // space outside checkout form should close the form. (default: false)
                    backdropclose: false
                };

                var rzp = new Razorpay(options);
                rzp.open();
                if (mixpanel && typeof mixpanel.track === 'function') {
                    mixpanel.track('pay_now', {
                        'workshop_name': workshopname,
                        'location': city,
                        'time-slot': $('#time_slot').find(':selected').data('timeslot'),
                        'language': $('#time_slot').find(':selected').data('language'),
                        'activity_code': 'pay_now',
                        'source_page' : source_page,
                        'current_url_path': current_url_path,
                        'current_url_protocol': current_url_protocol,
                        'current_domain': current_domain
                    });
                }

            },
            error: function(xhr, status, error) {
                $("#success_msg").html("Payment Verification in progress...");
            }
        });
    });

    $("#submit_button").click(function(e) {
        e.preventDefault();

        $('.input-focus').removeClass('input-focus');

        if ($('#name').val() == '') {
            $('#name').addClass('input-focus');
            $('#name').focus();
            $("#name_error").html("Please enter name");
            return false;
        } else {
            var checkString = $('#name').val();
            if (!/^[a-zA-Z\s]*$/.test(checkString)) {
                $('#name').addClass('input-focus');
                $('#name').focus();
                $("#name_error").html("Please enter valid name");
                return false;
            }
            $("#name_error").html("");
        }

        if ($('#email').val() == '') {
            $('#email').addClass('input-focus');
            $('#email').focus();
            $("#email_error").html("Please enter email");
            return false;
        } else {
            var check_email = $('#email').val();
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(check_email)) {
                $('#email').addClass('input-focus');
                $('#email').focus();
                $("#email_error").html("Please enter valid email");
                return false;
            }
            $("#email_error").html("");
        }

        if ($('#phone').val() == "") {
            $('#phone').addClass('input-focus');
            $('#phone').focus();
            $("#mob_error").html("Please enter phone number");
            return false;
        } else {
            var check_num = $('#phone').val();
            if (!/^[0-9]+$/.test(check_num)) {
                $('#phone').addClass('input-focus');
                $('#phone').focus();
                $("#mob_error").html("Please enter valid phone number");
                return false;
            }
            $("#mob_error").html("");
        }
        
        var country_code = $('#country_code').val(); 
        if(country_code == '+91'){
			var check_num = $('#phone').val();
			if(check_num.length == 10){
				$("#mob_error").html("");
			}else{
				$('#phone').addClass('input-focus');
                $('#phone').focus();
				$("#mob_error").html("Please enter 10 digit phone number");
				return false;
			}
    	}
            	

        if ($('#city').val() == '') {
            $('#city').addClass('input-focus');
            $('#city').focus();
            $("#city_error").html("Please enter city");
            return false;
        } else {
            $("#city_error").html("");
        }
        
        $("#submit_button").prop("disabled", true);

        var name = $('#name').val();
        var city = $('#city').val();
        var email = $('#email').val();
        var phone = country_code + $('#phone').val();
        var current_url = window.location.href;
		var user_distinct_id = (mixpanel) ? mixpanel.get_distinct_id() : '';

        var ajax_page_url = page_url + "ajax/checkout/";
        $.ajax({
            url: ajax_page_url,
            type: 'POST',
            data: {
                'name': name,
                'city': city,
                'email': email,
                'phone': phone,
                'current_url': current_url,
                'mixpanel_distinct_id': !mixpanelidverify(user_distinct_id) ? user_distinct_id : '',
                'sbmt_ajax': 'submit_newsletter_form'
            },
            success: function(data) {
                var msg = jQuery.parseJSON(data);
                //$("#success_msg").html(msg.message);
                window.location = page_url + "subscription_successful";
            },
            error: function(xhr, status, error) {}
        });
    });
    $('#curriculumCollapseButton').on('click', function(e) {
        if($('#collapseCurriculum').hasClass('show')){
            $('#collapseCurriculum').removeClass('show');
            $('#curriculumCollapseButton').html('Click here to see the curriculum +');
        }else{
            $('#collapseCurriculum').addClass('show');
            $('#curriculumCollapseButton').html('Click here to see the curriculum -');
        }
    });

});
var countries = [{"value":"+93","data":"+93","code":"AF"},{"value":"+358","data":"+358","code":"AX"},{"value":"+355","data":"+355","code":"AL"},{"value":"+213","data":"+213","code":"DZ"},{"value":"+1684","data":"+1684","code":"AS"},{"value":"+376","data":"+376","code":"AD"},{"value":"+244","data":"+244","code":"AO"},{"value":"+1264","data":"+1264","code":"AI"},{"value":"+672","data":"+672","code":"AQ"},{"value":"+1268","data":"+1268","code":"AG"},{"value":"+54","data":"+54","code":"AR"},{"value":"+374","data":"+374","code":"AM"},{"value":"+297","data":"+297","code":"AW"},{"value":"+61","data":"+61","code":"AU"},{"value":"+43","data":"+43","code":"AT"},{"value":"+994","data":"+994","code":"AZ"},{"value":"+1242","data":"+1242","code":"BS"},{"value":"+973","data":"+973","code":"BH"},{"value":"+880","data":"+880","code":"BD"},{"value":"+1246","data":"+1246","code":"BB"},{"value":"+375","data":"+375","code":"BY"},{"value":"+32","data":"+32","code":"BE"},{"value":"+501","data":"+501","code":"BZ"},{"value":"+229","data":"+229","code":"BJ"},{"value":"+1441","data":"+1441","code":"BM"},{"value":"+975","data":"+975","code":"BT"},{"value":"+591","data":"+591","code":"BO"},{"value":"+387","data":"+387","code":"BA"},{"value":"+267","data":"+267","code":"BW"},{"value":"+55","data":"+55","code":"BR"},{"value":"+246","data":"+246","code":"IO"},{"value":"+673","data":"+673","code":"BN"},{"value":"+359","data":"+359","code":"BG"},{"value":"+226","data":"+226","code":"BF"},{"value":"+257","data":"+257","code":"BI"},{"value":"+855","data":"+855","code":"KH"},{"value":"+237","data":"+237","code":"CM"},{"value":"+1","data":"+1","code":"CA"},{"value":"+238","data":"+238","code":"CV"},{"value":"+ 345","data":"+ 345","code":"KY"},{"value":"+236","data":"+236","code":"CF"},{"value":"+235","data":"+235","code":"TD"},{"value":"+56","data":"+56","code":"CL"},{"value":"+86","data":"+86","code":"CN"},{"value":"+61","data":"+61","code":"CX"},{"value":"+61","data":"+61","code":"CC"},{"value":"+57","data":"+57","code":"CO"},{"value":"+269","data":"+269","code":"KM"},{"value":"+242","data":"+242","code":"CG"},{"value":"+243","data":"+243","code":"CD"},{"value":"+682","data":"+682","code":"CK"},{"value":"+506","data":"+506","code":"CR"},{"value":"+225","data":"+225","code":"CI"},{"value":"+385","data":"+385","code":"HR"},{"value":"+53","data":"+53","code":"CU"},{"value":"+357","data":"+357","code":"CY"},{"value":"+420","data":"+420","code":"CZ"},{"value":"+45","data":"+45","code":"DK"},{"value":"+253","data":"+253","code":"DJ"},{"value":"+1767","data":"+1767","code":"DM"},{"value":"+1849","data":"+1849","code":"DO"},{"value":"+593","data":"+593","code":"EC"},{"value":"+20","data":"+20","code":"EG"},{"value":"+503","data":"+503","code":"SV"},{"value":"+240","data":"+240","code":"GQ"},{"value":"+291","data":"+291","code":"ER"},{"value":"+372","data":"+372","code":"EE"},{"value":"+251","data":"+251","code":"ET"},{"value":"+500","data":"+500","code":"FK"},{"value":"+298","data":"+298","code":"FO"},{"value":"+679","data":"+679","code":"FJ"},{"value":"+358","data":"+358","code":"FI"},{"value":"+33","data":"+33","code":"FR"},{"value":"+594","data":"+594","code":"GF"},{"value":"+689","data":"+689","code":"PF"},{"value":"+241","data":"+241","code":"GA"},{"value":"+220","data":"+220","code":"GM"},{"value":"+995","data":"+995","code":"GE"},{"value":"+49","data":"+49","code":"DE"},{"value":"+233","data":"+233","code":"GH"},{"value":"+350","data":"+350","code":"GI"},{"value":"+30","data":"+30","code":"GR"},{"value":"+299","data":"+299","code":"GL"},{"value":"+1473","data":"+1473","code":"GD"},{"value":"+590","data":"+590","code":"GP"},{"value":"+1671","data":"+1671","code":"GU"},{"value":"+502","data":"+502","code":"GT"},{"value":"+44","data":"+44","code":"GG"},{"value":"+224","data":"+224","code":"GN"},{"value":"+245","data":"+245","code":"GW"},{"value":"+595","data":"+595","code":"GY"},{"value":"+509","data":"+509","code":"HT"},{"value":"+379","data":"+379","code":"VA"},{"value":"+504","data":"+504","code":"HN"},{"value":"+852","data":"+852","code":"HK"},{"value":"+36","data":"+36","code":"HU"},{"value":"+354","data":"+354","code":"IS"},{"value":"+91","data":"+91","code":"IN"},{"value":"+62","data":"+62","code":"ID"},{"value":"+98","data":"+98","code":"IR"},{"value":"+964","data":"+964","code":"IQ"},{"value":"+353","data":"+353","code":"IE"},{"value":"+44","data":"+44","code":"IM"},{"value":"+972","data":"+972","code":"IL"},{"value":"+39","data":"+39","code":"IT"},{"value":"+1876","data":"+1876","code":"JM"},{"value":"+81","data":"+81","code":"JP"},{"value":"+44","data":"+44","code":"JE"},{"value":"+962","data":"+962","code":"JO"},{"value":"+77","data":"+77","code":"KZ"},{"value":"+254","data":"+254","code":"KE"},{"value":"+686","data":"+686","code":"KI"},{"value":"+850","data":"+850","code":"KP"},{"value":"+82","data":"+82","code":"KR"},{"value":"+965","data":"+965","code":"KW"},{"value":"+996","data":"+996","code":"KG"},{"value":"+856","data":"+856","code":"LA"},{"value":"+371","data":"+371","code":"LV"},{"value":"+961","data":"+961","code":"LB"},{"value":"+266","data":"+266","code":"LS"},{"value":"+231","data":"+231","code":"LR"},{"value":"+218","data":"+218","code":"LY"},{"value":"+423","data":"+423","code":"LI"},{"value":"+370","data":"+370","code":"LT"},{"value":"+352","data":"+352","code":"LU"},{"value":"+853","data":"+853","code":"MO"},{"value":"+389","data":"+389","code":"MK"},{"value":"+261","data":"+261","code":"MG"},{"value":"+265","data":"+265","code":"MW"},{"value":"+60","data":"+60","code":"MY"},{"value":"+960","data":"+960","code":"MV"},{"value":"+223","data":"+223","code":"ML"},{"value":"+356","data":"+356","code":"MT"},{"value":"+692","data":"+692","code":"MH"},{"value":"+596","data":"+596","code":"MQ"},{"value":"+222","data":"+222","code":"MR"},{"value":"+230","data":"+230","code":"MU"},{"value":"+262","data":"+262","code":"YT"},{"value":"+52","data":"+52","code":"MX"},{"value":"+691","data":"+691","code":"FM"},{"value":"+373","data":"+373","code":"MD"},{"value":"+377","data":"+377","code":"MC"},{"value":"+976","data":"+976","code":"MN"},{"value":"+382","data":"+382","code":"ME"},{"value":"+1664","data":"+1664","code":"MS"},{"value":"+212","data":"+212","code":"MA"},{"value":"+258","data":"+258","code":"MZ"},{"value":"+95","data":"+95","code":"MM"},{"value":"+264","data":"+264","code":"NA"},{"value":"+674","data":"+674","code":"NR"},{"value":"+977","data":"+977","code":"NP"},{"value":"+31","data":"+31","code":"NL"},{"value":"+599","data":"+599","code":"AN"},{"value":"+687","data":"+687","code":"NC"},{"value":"+64","data":"+64","code":"NZ"},{"value":"+505","data":"+505","code":"NI"},{"value":"+227","data":"+227","code":"NE"},{"value":"+234","data":"+234","code":"NG"},{"value":"+683","data":"+683","code":"NU"},{"value":"+672","data":"+672","code":"NF"},{"value":"+1670","data":"+1670","code":"MP"},{"value":"+47","data":"+47","code":"NO"},{"value":"+968","data":"+968","code":"OM"},{"value":"+92","data":"+92","code":"PK"},{"value":"+680","data":"+680","code":"PW"},{"value":"+970","data":"+970","code":"PS"},{"value":"+507","data":"+507","code":"PA"},{"value":"+675","data":"+675","code":"PG"},{"value":"+595","data":"+595","code":"PY"},{"value":"+51","data":"+51","code":"PE"},{"value":"+63","data":"+63","code":"PH"},{"value":"+872","data":"+872","code":"PN"},{"value":"+48","data":"+48","code":"PL"},{"value":"+351","data":"+351","code":"PT"},{"value":"+1939","data":"+1939","code":"PR"},{"value":"+974","data":"+974","code":"QA"},{"value":"+40","data":"+40","code":"RO"},{"value":"+7","data":"+7","code":"RU"},{"value":"+250","data":"+250","code":"RW"},{"value":"+262","data":"+262","code":"RE"},{"value":"+590","data":"+590","code":"BL"},{"value":"+290","data":"+290","code":"SH"},{"value":"+1869","data":"+1869","code":"KN"},{"value":"+1758","data":"+1758","code":"LC"},{"value":"+590","data":"+590","code":"MF"},{"value":"+508","data":"+508","code":"PM"},{"value":"+1784","data":"+1784","code":"VC"},{"value":"+685","data":"+685","code":"WS"},{"value":"+378","data":"+378","code":"SM"},{"value":"+239","data":"+239","code":"ST"},{"value":"+966","data":"+966","code":"SA"},{"value":"+221","data":"+221","code":"SN"},{"value":"+381","data":"+381","code":"RS"},{"value":"+248","data":"+248","code":"SC"},{"value":"+232","data":"+232","code":"SL"},{"value":"+65","data":"+65","code":"SG"},{"value":"+421","data":"+421","code":"SK"},{"value":"+386","data":"+386","code":"SI"},{"value":"+677","data":"+677","code":"SB"},{"value":"+252","data":"+252","code":"SO"},{"value":"+27","data":"+27","code":"ZA"},{"value":"+211","data":"+211","code":"SS"},{"value":"+500","data":"+500","code":"GS"},{"value":"+34","data":"+34","code":"ES"},{"value":"+94","data":"+94","code":"LK"},{"value":"+249","data":"+249","code":"SD"},{"value":"+597","data":"+597","code":"SR"},{"value":"+47","data":"+47","code":"SJ"},{"value":"+268","data":"+268","code":"SZ"},{"value":"+46","data":"+46","code":"SE"},{"value":"+41","data":"+41","code":"CH"},{"value":"+963","data":"+963","code":"SY"},{"value":"+886","data":"+886","code":"TW"},{"value":"+992","data":"+992","code":"TJ"},{"value":"+255","data":"+255","code":"TZ"},{"value":"+66","data":"+66","code":"TH"},{"value":"+670","data":"+670","code":"TL"},{"value":"+228","data":"+228","code":"TG"},{"value":"+690","data":"+690","code":"TK"},{"value":"+676","data":"+676","code":"TO"},{"value":"+1868","data":"+1868","code":"TT"},{"value":"+216","data":"+216","code":"TN"},{"value":"+90","data":"+90","code":"TR"},{"value":"+993","data":"+993","code":"TM"},{"value":"+1649","data":"+1649","code":"TC"},{"value":"+688","data":"+688","code":"TV"},{"value":"+256","data":"+256","code":"UG"},{"value":"+380","data":"+380","code":"UA"},{"value":"+971","data":"+971","code":"AE"},{"value":"+44","data":"+44","code":"GB"},{"value":"+1","data":"+1","code":"US"},{"value":"+598","data":"+598","code":"UY"},{"value":"+998","data":"+998","code":"UZ"},{"value":"+678","data":"+678","code":"VU"},{"value":"+58","data":"+58","code":"VE"},{"value":"+84","data":"+84","code":"VN"},{"value":"+1284","data":"+1284","code":"VG"},{"value":"+1340","data":"+1340","code":"VI"},{"value":"+681","data":"+681","code":"WF"},{"value":"+967","data":"+967","code":"YE"},{"value":"+260","data":"+260","code":"ZM"},{"value":"+263","data":"+263","code":"ZW"}];
  
  function updateEmailForm(old_email){
    var html = '';
    html += '<div class="text-left pb-2">';
    html += '<div class="d-flex"><h5 class="fw-bold">New Email</h5>';
    html += '<a class="ms-auto" onclick="backForm();" style="cursor: pointer;"><img loading="lazy" class="btn_arrow" src="'+page_url+'/resources/img/back-btn.png" alt="arrow" width="20" height="17" /></a></div>';
    html += '<div class="form-group pt-2 mb-2">';
    html += '<label for="new_email">New Email</label>';
    html += '<input type="email" class="form-control p-3" name="new_email" id="new_email" placeholder="example@123">';
    html += '<input type="hidden" name="old_email" id="old_email" value="'+old_email+'">';
    html += '</div>';
    html += '<div id="email_error"></div>';
    html += '<div id="loader" class=""></div>';
    html += '</div>';
    html += '<div class="contact_form_btn">';
    html += '<a type="button" class="btn btn-success w-100 fw-bold" id="emailUpdateButton" onclick="sendEmailOTP()">Update Email</a>';
    html += '</div>';
    $('.contact_form').addClass('d-none');
    $('.update_details_form').removeClass('d-none');
    $('.update_details_form').html(html);
    if (mixpanel && typeof mixpanel.track === 'function') {
        mixpanel.track('email_edit_initiated', {
            'workshop_name': workshopname,
            'activity_code': 'email_edit_initiated',
            'current_url_path': current_url_path,
            'current_url_protocol': current_url_protocol,
            'current_domain': current_domain
        });
    }
}
function updatePhoneForm(old_wa_no){
    var html = '';
    html += '<div class="text-left pb-2">';
    html += '<div class="d-flex"><h5 class="fw-bold">New Number</h5>';
    html += '<a class="ms-auto" onclick="backForm();" style="cursor: pointer;"><img loading="lazy" class="btn_arrow" src="'+page_url+'/resources/img/back-btn.png" alt="arrow" width="20" height="17" /></a></div>';
    html += '<div class="form-group pt-2 pb-2">';
    html += '<label for="new_wa_no">New WhatsApp Number</label>';
    html += '<div class="d-flex">';
    html += '<select name="new_country_code" id="new_country_code" class="form-control p-2 me-2 country_code" style="width: 43%;">';
    html += '</select>';
    html += '<input class="form-control p-3" name="new_wa_no" id="new_wa_no">';
    html += '<input type="hidden" name="old_wa_no" id="old_wa_no" value="'+old_wa_no+'">';
    html += '</div>';
    html += '</div>';
    html += '<div id="mob_error" class="pt-2"></div>';
    html += '</div>';
    html += '<div id="loader" class=""></div>';
    html += '</div>';
    html += '<div class="contact_form_btn">';
    html += '<a type="button" class="btn btn-success w-100 fw-bold" onclick="sendWhatsapp_otp();">Update Number</a>';
    html += '</div>';
    $('.contact_form').addClass('d-none');
    $('.update_details_form').removeClass('d-none');
    $('.update_details_form').html(html);
    var $select = $('.country_code'); 
    var listitems = '';
    $.each(countries, function(key, value){
        var selected = '';
        if(value.data == '+91'){
            selected = 'selected';
        }
        listitems += '<option value=' + value.data + ' ' + selected + '>' + value.code +' '+ value.data + '</option>';
    });
    if (mixpanel && typeof mixpanel.track === 'function') {
        mixpanel.track('mobile_edit_initiated', {
            'workshop_name': workshopname,
            'activity_code': 'mobile_edit_initiated',
            'current_url_path': current_url_path,
            'current_url_protocol': current_url_protocol,
            'current_domain': current_domain
        });
    }
    $select.append(listitems);
}

function backForm(){
    $('.contact_form').removeClass('d-none');
    $('.update_details_form').addClass('d-none');
}

function sendEmailOTP(){
    var old_email = $('#old_email').val();
    var new_email = $('#new_email').val();
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(new_email))){
        $("#email_error").html("Please enter valid email");
        return false;
    }
    if(old_email == new_email){
        return false;
    }
    var data_send = {
        'type': 'email',
        'email': new_email,
        'sbmt_ajax': 'send_otp'
    }
    var ajax_page_url = page_url + "ajax/otp_login/"; 
    $.ajax({
        url: ajax_page_url,
        type: 'POST',
        dataType: 'json',
        data: data_send,
        beforeSend: function(){
            $('#loader').addClass('loading');
            $('#loader').css('height','25px');
        },
        complete: function(){
            $('#loader').removeClass('loading');
            $('#loader').css('height','0px');
        },
        success: function(data) {
            var data_to_send = JSON.stringify(data_send).replace(/"/g, '\\"');
            if(data.check == 'success'){
                var html = '';
                html += '<div class="text-left pb-2">';
                html += '<div class="d-flex"><h5 class="fw-bold">We have send code on email to '+new_email+'</h5>';
                html += '<a class="ms-auto" onclick="backForm();" style="cursor: pointer;"><img loading="lazy" class="btn_arrow" src="'+page_url+'/resources/img/back-btn.png" alt="arrow" width="20" height="17" /></a></div>';
                html += '<p class="">Verification Code</p>';
                html += '<div class="form-group mb-2">';
                html += '<input type="text" class="form-control p-3" name="verification_code" id="verification_code" pattern="\d*" maxlength="4"  onkeyup="if (this.value.length == 4) updateVerify(\'email\');">';
                html += '</div>';
                html += '<p class="wrong_otp text-danger d-none">Wrong OTP</p>';
                html += "<input type='hidden' name='data_send' id='data_send' value='\\"+data_to_send+"'>";
                html += "<input type='hidden' name='new_email_id' id='new_email_id' value='"+new_email+"'>";
                html += '<p class="try_again_msg d-none">Try again with new verification code</p>';
                html += '<a class="" style="cursor:pointer;" onclick="resendOtp()">Resend Code</p>';
                html += '<div id="loader" class=""></div>';
                html += '<div class="contact_form_btn">';
                html += '<a type="button" class="btn btn-success w-100 fw-bold" onclick="updateVerify(\'email\');">Verify Account</a>';
                html += '</div>';
                $('.update_details_form').html(html);
            }
        }
    });
}

function sendWhatsapp_otp(){
    var old_wa_no = $('#old_wa_no').val();
    var new_country_code = $('#new_country_code').val();
    var new_wa_no = $('#new_wa_no').val();
    var new_number = new_country_code + new_wa_no;
    if (!/^[0-9]+$/.test(new_wa_no) ){
        $("#mob_error").html("Please enter valid number");
        return false;
    }
    if(new_country_code == '+91'){
        if(new_wa_no.length != 10){
            $("#mob_error").html("Please enter 10 digit phone number");
			return false;
        }
    }
    if(old_wa_no == new_number){
        return false;
    }
    var data_send = {
        'type': 'mobile',
        'mobile': new_number,
        'sbmt_ajax': 'send_otp'
    }
    var ajax_page_url = page_url + "ajax/otp_login/"; 
    $.ajax({
        url: ajax_page_url,
        type: 'POST',
        dataType: 'json',
        data: data_send,
        beforeSend: function(){
            $('#loader').addClass('loading');
            $('#loader').css('height','25px');
        },
        complete: function(){
            $('#loader').removeClass('loading');
            $('#loader').css('height','0px');
        },
        success: function(data) {
            var data_to_send = JSON.stringify(data_send).replace(/"/g, '\\"');
            if (data.check == 'success') {
                var html = '';
                html += '<div class="text-left pb-2">';
                html += '<div class="d-flex"><h5 class="fw-bold">We have send code on WhatsApp to '+new_number+'</h5>';
                html += '<a class="ms-auto" onclick="backForm();" style="cursor: pointer;"><img loading="lazy" class="btn_arrow" src="'+page_url+'/resources/img/back-btn.png" alt="arrow" width="20" height="17" /></a></div>';
                html += '<p class="">Verification Code</p>';
                html += '<div class="form-group mb-2">';
                html += '<input type="text" class="form-control p-3" name="verification_code" id="verification_code" pattern="\d*" maxlength="4" onkeyup="if (this.value.length == 4) updateVerify(\'mobile\');">';
                html += '</div>';
                html += '<p class="wrong_otp text-danger d-none">Wrong OTP</p>';
                html += "<input type='hidden' name='data_send' id='data_send' value='\\"+data_to_send+"'>";
                html += "<input type='hidden' name='new_mob_no' id='new_mob_no' value='"+new_number+"'>";
                html += '<p class="try_again_msg d-none">Try again with new verification code</p>';
                html += '<a class="" style="cursor:pointer;" onclick="resendOtp()">Resend Code</p>';
                html += '<div id="loader" class=""></div>';
                html += '<div class="contact_form_btn">';
                html += '<a type="button" class="btn btn-success w-100 fw-bold" onclick="updateVerify(\'mobile\');">Verify Account</a>';
                html += '</div>';
                $('.update_details_form').html(html);
            } 
        }
    });
}
function resendOtp(){
    $('.try_again_msg').removeClass('d-none');
    var data = $('#data_send').val();
    var value = data.replace(/\\"/g, '"');
    var data_send = value.replace('\\', '');
    data_send = JSON.parse(data_send);
    var ajax_page_url = page_url + "ajax/otp_login/"; 
    $.ajax({
        url:  ajax_page_url,
        type: 'POST',
        dataType: 'json',
        data: data_send,
        beforeSend: function(){
            $('#loader').addClass('loading');
            $('#loader').css('height','25px');
        },
        complete: function(){
            $('#loader').removeClass('loading');
            $('#loader').css('height','0px');
        },
        success: function(data) {
            if(data.check == 'success'){
                $('#verification_code').val('');
                $('.wrong_otp').addClass('d-none');
            }
        }
    });
}
function updateVerify(type){
    var otp = $('#verification_code').val();
    var msg = '';
    if(otp.length <= 0 || !(/^\d+$/.test(otp))){
        return false;
    }
    var wdf_id = $('#workshop_date_form_id').val();
    var payment_id = $('#razorpay_payment_id').val();
    var data_send = {};
    data_send.otp = otp;
    data_send.type = type;
    data_send.sbmt_ajax = 'verify_otp';
    data_send.razorpay_payment_id = payment_id;
    data_send.wdf_id = wdf_id;
    data_send.action = 'update_workshop_registration_info';
    if(type == 'email'){
        var n_email = $('#new_email_id').val();
        data_send.new_email = n_email;
        msg = 'Email Updated Successfully';
    }if(type == 'mobile'){
        var new_mob = $('#new_mob_no').val();
        data_send.new_mobile = new_mob;
        msg = 'Mobile No. Updated Successfully';
    }
    var ajax_page_url = page_url + "ajax/otp_login/"; 
    $.ajax({
        url: ajax_page_url,
        type: 'POST',
        dataType: 'json',
        data: data_send,
        beforeSend: function(){
            $('#loader').addClass('loading');
            $('#loader').css('height','25px');
        },
        complete: function(){
            $('#loader').removeClass('loading');
            $('#loader').css('height','0px');
        },
        success: function(data) {
            if(data.check == 'success'){
                $('.wrong_otp').addClass('d-none');
                iziToast.success({
                    timeout: 3000,
                    title: 'Success',
                    message: data.message,
                    position: 'topRight',
                    onClosing: function(){
                        window.location.reload();
                    },
                });
                if (mixpanel && typeof mixpanel.track === 'function') {
                    var mixpaneldata = {
                        'workshop_name': workshopname,
                        'current_url_path': current_url_path,
                        'current_url_protocol': current_url_protocol,
                        'current_domain': current_domain
                    }
                    var eventname = '';
                    if(type == 'email'){
                        eventname = 'email_change';
                        mixpaneldata['old_email'] = $.trim($('#old_email').val());
                        mixpaneldata['activity_code'] = 'email_change';
                    } else if(type == 'mobile'){
                        eventname = 'mobile_edit_confirm';
                        mixpaneldata['old_phone'] = $.trim($('#old_wa_no').val());
                        mixpaneldata['activity_code'] = 'mobile_edit_confirm';
                    }
                    mixpanel.track(eventname, mixpaneldata);
                }
            }
            if(data.check == 'failure'){
                $('.wrong_otp').removeClass('d-none');
                iziToast.error({
                    title: 'Error',
                    message: (data.message != undefined && data.message.length > 0) ? data.message : 'Something went wrong, Please try again',
                    position: 'topRight',
                });
            }
        }
    });
}
function openAppStore() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (mixpanel && typeof mixpanel.track === 'function') {
        mixpanel.track('thankyou_page_Activity', {
            'workshop_name': workshopname,
            'activity_code': 'thankyou_page_Activity',
            'activity': 'app-download',
            'current_url_path': current_url_path,
            'current_url_protocol': current_url_protocol,
            'current_domain': current_domain
        });
    }
}
function openTestinomial(page) {
    var i;
    var x = document.getElementsByClassName("testimonial");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(page).style.display = "block";
}

let page_btn = document.querySelectorAll('.page-link');
let testinomial_content = document.querySelectorAll('.testimonial');

for (let i = 0; i < page_btn.length; i++) {
    page_btn[i].addEventListener('click', () => btnClick(i));
}

function btnClick(currentTab1) {
    removebtnActive();
    page_btn[currentTab1].classList.add('active');
    testinomial_content[currentTab1].classList.add('active');
}

function removebtnActive() {
    for (let i = 0; i < page_btn.length; i++) {
        page_btn[i].classList.remove('active');
        testinomial_content[i].classList.remove('active');
    }
}

function openGiftForm() {
    if($('#gift_from').hasClass('d-none')){
        $('#gift_from').removeClass('d-none');
        $('#register_form').addClass('d-none');
        $('#gift').addClass('d-none');
        $('#reg_gift').removeClass('d-none');
    }else{
        $('#gift_from').addClass('d-none');
        $('#register_form').removeClass('d-none');
        $('#gift').removeClass('d-none');
        $('#reg_gift').addClass('d-none');
    }
}
function isOnScreen(elem) {
	// if the element doesn't exist, abort
	if( elem.length == 0 ) {
		return;
	}
	var $window = jQuery(window);
	var viewport_top = $window.scrollTop();
	var viewport_height = $window.height();
	var viewport_bottom = viewport_top + viewport_height;
	var $elem = jQuery(elem);
	var top = $elem.offset().top;
	var height = $elem.height();
	var bottom = top + height;

	return (top >= viewport_top && top < viewport_bottom) ||
	(bottom > viewport_top && bottom <= viewport_bottom) ||
	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom);
}
jQuery( document ).ready( function() {
	window.addEventListener('scroll', function(e) {
		if( isOnScreen( jQuery( '#register_form' ) ) || isOnScreen( jQuery( '#gift_form' ) )) { /* Pass element id/class you want to check */
            if ($(window).width() > 769) { 
                $('#header').hide();
            }else{
                $('.register_mobile').removeClass('d-block');
			    $('.register_mobile').addClass('d-none');
            }
 		}else{
            if ($(window).width() > 769) { 
			    $('#header').show();
            }else{
                $('.register_mobile').removeClass('d-none');
			    $('.register_mobile').addClass('d-block');
            }
		}
        //alert(window.location.hash);	
	});
    if( isOnScreen( jQuery( '#register_form' ) ) || isOnScreen( jQuery( '#gift_form' ) )) { /* Pass element id/class you want to check */
        if ($(window).width() > 769) { 
            $('#header').hide();
        }else{
            $('.register_mobile').removeClass('d-block');
            $('.register_mobile').addClass('d-none');
        }
 	}else{
		if ($(window).width() > 769) { 
            $('#header').show();
        }else{
            $('.register_mobile').removeClass('d-none');
            $('.register_mobile').addClass('d-block');
        }
	}
});
function add_more_rcp(){
    last_rcp_id = $('.all-recipients').children().last().data('recipients_id');
    if($(".all-recipients").children().length == 10){
        $('#add_more_rcp_error').html("You can't add more than 10 recipients.");
        return false;
    }else{
        $('#add_more_rcp_error').html("");
    }
    html = '';
    html += '<div data-recipients_id="'+ ++last_rcp_id +'">';
    html += '<div class="row">';
    html += '<div class="col-sm-12 col-lg-12 mb-3 mb-sm-0">';
    html += '<h2 class="form_heading">Receiver '+ last_rcp_id +'\'s details</h2>';
    html += '</div>';
    html += '</div>';
    html += '<div class="row d-flex">';
    html += '<div class="col-sm-12 col-lg-12 mb-3 mb-sm-0">';
    html += '<div class="d-flex">';
    html += '<input type="text" class="form-control" placeholder="Receiver Name*" name="gift-rcp-name[]" required id="rcp_name_'+ last_rcp_id +'">&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" onclick="remove_rcp_row('+ last_rcp_id +');" data-toggle="tooltip" title="" class="btn btn-danger remove_btn" data-original-title="Remove"><i class="fa fa-minus-circle"></i>&nbsp;Remove</button>';
    html += '</div>';
    html += '<div class="rcp_name_error" id="rcp_name_error_'+ last_rcp_id +'"></div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="row mb-3">';
    html += '<div class="col-sm-12 col-lg-6 mb-4 mb-sm-3 mb-md-3 d-flex rcp_phone_'+ last_rcp_id +'">';
    html += '<select name="rcp_country_code" id="rcp_country_code" class="custom-autocomplete">';
	html += '<option value="+376">AD +376</option><option value="+971">AE +971</option><option value="+93">AF +93</option><option value="+1268">AG +1268</option><option value="+1264">AI +1264</option><option value="+355">AL +355</option><option value="+374">AM +374</option><option value="+599">AN +599</option><option value="+244">AO +244</option><option value="+672">AQ +672</option><option value="+54">AR +54</option><option value="+1684">AS +1684</option><option value="+43">AT +43</option><option value="+61">AU +61</option><option value="+297">AW +297</option><option value="+358">AX +358</option><option value="+994">AZ +994</option><option value="+387">BA +387</option><option value="+1246">BB +1246</option><option value="+880">BD +880</option><option value="+32">BE +32</option><option value="+226">BF +226</option><option value="+359">BG +359</option><option value="+973">BH +973</option><option value="+257">BI +257</option><option value="+229">BJ +229</option><option value="+590">BL +590</option><option value="+1441">BM +1441</option><option value="+673">BN +673</option><option value="+591">BO +591</option><option value="+55">BR +55</option><option value="+1242">BS +1242</option><option value="+975">BT +975</option><option value="+267">BW +267</option><option value="+375">BY +375</option><option value="+501">BZ +501</option><option value="+1">CA +1</option><option value="+61">CC +61</option><option value="+243">CD +243</option><option value="+236">CF +236</option><option value="+242">CG +242</option><option value="+41">CH +41</option><option value="+225">CI +225</option><option value="+682">CK +682</option><option value="+56">CL +56</option><option value="+237">CM +237</option><option value="+86">CN +86</option><option value="+57">CO +57</option><option value="+506">CR +506</option><option value="+53">CU +53</option><option value="+238">CV +238</option><option value="+61">CX +61</option><option value="+357">CY +357</option><option value="+420">CZ +420</option><option value="+49">DE +49</option><option value="+253">DJ +253</option><option value="+45">DK +45</option><option value="+1767">DM +1767</option><option value="+1849">DO +1849</option><option value="+213">DZ +213</option><option value="+593">EC +593</option><option value="+372">EE +372</option><option value="+20">EG +20</option><option value="+291">ER +291</option><option value="+34">ES +34</option><option value="+251">ET +251</option><option value="+358">FI +358</option><option value="+679">FJ +679</option><option value="+500">FK +500</option><option value="+691">FM +691</option><option value="+298">FO +298</option><option value="+33">FR +33</option><option value="+241">GA +241</option><option value="+44">GB +44</option><option value="+1473">GD +1473</option><option value="+995">GE +995</option><option value="+594">GF +594</option><option value="+44">GG +44</option><option value="+233">GH +233</option><option value="+350">GI +350</option><option value="+299">GL +299</option><option value="+220">GM +220</option><option value="+224">GN +224</option><option value="+590">GP +590</option><option value="+240">GQ +240</option><option value="+30">GR +30</option><option value="+500">GS +500</option><option value="+502">GT +502</option><option value="+1671">GU +1671</option><option value="+245">GW +245</option><option value="+595">GY +595</option><option value="+852">HK +852</option><option value="+504">HN +504</option><option value="+385">HR +385</option><option value="+509">HT +509</option><option value="+36">HU +36</option><option value="+62">ID +62</option><option value="+353">IE +353</option><option value="+972">IL +972</option><option value="+44">IM +44</option><option value="+91" selected>IN +91</option><option value="+246">IO +246</option><option value="+964">IQ +964</option><option value="+98">IR +98</option><option value="+354">IS +354</option><option value="+39">IT +39</option><option value="+44">JE +44</option><option value="+1876">JM +1876</option><option value="+962">JO +962</option><option value="+81">JP +81</option><option value="+254">KE +254</option><option value="+996">KG +996</option><option value="+855">KH +855</option><option value="+686">KI +686</option><option value="+269">KM +269</option><option value="+1869">KN +1869</option><option value="+850">KP +850</option><option value="+82">KR +82</option><option value="+965">KW +965</option><option value="+ 345">KY + 345</option><option value="+77">KZ +77</option><option value="+856">LA +856</option><option value="+961">LB +961</option><option value="+1758">LC +1758</option><option value="+423">LI +423</option><option value="+94">LK +94</option><option value="+231">LR +231</option><option value="+266">LS +266</option><option value="+370">LT +370</option><option value="+352">LU +352</option><option value="+371">LV +371</option><option value="+218">LY +218</option><option value="+212">MA +212</option><option value="+377">MC +377</option><option value="+373">MD +373</option><option value="+382">ME +382</option><option value="+590">MF +590</option><option value="+261">MG +261</option><option value="+692">MH +692</option><option value="+389">MK +389</option><option value="+223">ML +223</option><option value="+95">MM +95</option><option value="+976">MN +976</option><option value="+853">MO +853</option><option value="+1670">MP +1670</option><option value="+596">MQ +596</option><option value="+222">MR +222</option><option value="+1664">MS +1664</option><option value="+356">MT +356</option><option value="+230">MU +230</option><option value="+960">MV +960</option><option value="+265">MW +265</option><option value="+52">MX +52</option><option value="+60">MY +60</option><option value="+258">MZ +258</option><option value="+264">NA +264</option><option value="+687">NC +687</option><option value="+227">NE +227</option><option value="+672">NF +672</option><option value="+234">NG +234</option><option value="+505">NI +505</option><option value="+31">NL +31</option><option value="+47">NO +47</option><option value="+977">NP +977</option><option value="+674">NR +674</option><option value="+683">NU +683</option><option value="+64">NZ +64</option><option value="+968">OM +968</option><option value="+507">PA +507</option><option value="+51">PE +51</option><option value="+689">PF +689</option><option value="+675">PG +675</option><option value="+63">PH +63</option><option value="+92">PK +92</option><option value="+48">PL +48</option><option value="+508">PM +508</option><option value="+872">PN +872</option><option value="+1939">PR +1939</option><option value="+970">PS +970</option><option value="+351">PT +351</option><option value="+680">PW +680</option><option value="+595">PY +595</option><option value="+974">QA +974</option><option value="+262">RE +262</option><option value="+40">RO +40</option><option value="+381">RS +381</option><option value="+7">RU +7</option><option value="+250">RW +250</option><option value="+966">SA +966</option><option value="+677">SB +677</option><option value="+248">SC +248</option><option value="+249">SD +249</option><option value="+46">SE +46</option><option value="+65">SG +65</option><option value="+290">SH +290</option><option value="+386">SI +386</option><option value="+47">SJ +47</option><option value="+421">SK +421</option><option value="+232">SL +232</option><option value="+378">SM +378</option><option value="+221">SN +221</option><option value="+252">SO +252</option><option value="+597">SR +597</option><option value="+211">SS +211</option><option value="+239">ST +239</option><option value="+503">SV +503</option><option value="+963">SY +963</option><option value="+268">SZ +268</option><option value="+1649">TC +1649</option><option value="+235">TD +235</option><option value="+228">TG +228</option><option value="+66">TH +66</option><option value="+992">TJ +992</option><option value="+690">TK +690</option><option value="+670">TL +670</option><option value="+993">TM +993</option><option value="+216">TN +216</option><option value="+676">TO +676</option><option value="+90">TR +90</option><option value="+1868">TT +1868</option><option value="+688">TV +688</option><option value="+886">TW +886</option><option value="+255">TZ +255</option><option value="+380">UA +380</option><option value="+256">UG +256</option><option value="+1">US +1</option><option value="+598">UY +598</option><option value="+998">UZ +998</option><option value="+379">VA +379</option><option value="+1784">VC +1784</option><option value="+58">VE +58</option><option value="+1284">VG +1284</option><option value="+1340">VI +1340</option><option value="+84">VN +84</option><option value="+678">VU +678</option><option value="+681">WF +681</option><option value="+685">WS +685</option><option value="+967">YE +967</option><option value="+262">YT +262</option><option value="+27">ZA +27</option><option value="+260">ZM +260</option><option value="+263">ZW +263</option>';
	html += '</select>';
    html += '<input type="hidden" id="rcp_country_code" value="">';
    html += '<div class="d-block w-100">';
    html += '<input type="text" class="form-control phone" placeholder="Receiver Number*" name="rcp-reg-mob[]" required id="rcp_phone_'+ last_rcp_id +'">';
    html += '</div>';
    html += '<div class="rcp_mob_error" id="rcp_mob_error_'+ last_rcp_id +'"></div>';
    html += '</div>';									
    html += '<div class="col-sm-12 col-lg-6 mb-3 mb-sm-0">';
    html += '<input type="email" class="form-control" placeholder="Receiver or Your Email*" name="gift-rcp-email[]" required id="rcp_email_'+ last_rcp_id +'">';
    html += '<div class="rcp_email_error" id="rcp_email_error_'+ last_rcp_id +'"></div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="row mb-3">';
    html += '<div class="col-sm-12 col-lg-12 mb-3 mt-3 mt-sm-0 mt-md-0 mb-sm-0">';
    html += '<input type="text" class="form-control" placeholder="Receiver City*" name="gift-rcp-city[]" required id="rcp_city_'+ last_rcp_id +'">';
    html += '<div class="rcp_city_error" id="rcp_city_error_'+ last_rcp_id +'"></div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';    
    $('.all-recipients').append(html);
    amount = $('#amount').val();
    no_of_rcp = $(".all-recipients").children().length;
    $('.contribution').html('Contribution: â‚¹ '+ (amount/100)*no_of_rcp);
}
function remove_rcp_row(id){
    $('.all-recipients > [data-recipients_id="'+id+'"]').remove();
    amount = $('#amount').val();
    no_of_rcp = $(".all-recipients").children().length;
    $('.contribution').html('Contribution: â‚¹ '+ (amount/100)*no_of_rcp);
}
$(document).on('blur', 'input[name=reg-email]', function(e) {
    var $t = $(e.currentTarget);
    var hasChanged = true;
    var email = $t.val();
    var oldValue = $t.attr('data-oldValue');

    if(email.length <= 0){
        return false;
    }

    if(email == oldValue){
        hasChanged = false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        $("#email_error").html("Please enter valid email");
        hasChanged = false;
    }

    if(!hasChanged){
        return false;
    }

    var ajax_page_url = page_url + "ajax/checkout/";
    $.ajax({
        url: ajax_page_url,
        type: 'POST',
        dataType: 'json',
        data: {
            'email': email,
            'sbmt_ajax': 'validate_email'
        },
        beforeSend: function(){
            $t.addClass('loading');
            $t.prop('disabled',true);
        },
        success: function(data) {
            $t.removeClass('loading');
            $t.attr('disabled',false);
            $t.attr('data-oldValue',email);
            if(data.check == 'success'){
                $("#email_error").html("");
            }else{
                $("#email_error").html("Please enter valid email");
            }
        }
    });
});
$(document).on('focus', 'input[name=reg-email]', function(e) {
    var $t = $(e.currentTarget);
    $t.removeClass('loading');
});
$(document).on('blur', 'input[name=reg-mob]', function(e) {
    var $t = $(e.currentTarget);
    var mob = $t.val();
    if (!/^[0-9]+$/.test(mob)) {
        $t.addClass('input-focus');
        $("#mob_error").html("Please enter valid phone number");
        return false;
    }
    var country_code = $('#country_code').val(); 
    if(country_code == '+91'){
        if(mob.length != 10){
            $('#phone').addClass('input-focus');
            $("#mob_error").html("Please enter 10 digit phone number");
            return false;
        }
    }
});
$(document).on('focus', 'input[name=reg-mob]', function(e) {
    $("#mob_error").html("");
});
function mixpanelidverify(datastr) {
    if(typeof datastr == 'object'){
        return true;
    }else{
        return /["\\/]/.test(datastr);
    }
}