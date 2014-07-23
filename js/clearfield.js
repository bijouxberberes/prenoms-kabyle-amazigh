$(document).ready(function() {
		
		var defaultMemoFormValue = 'Transcribe message here';
		
		var defaultFirstFormValue = 'First';
		var defaultLastFormValue = 'Last';
		var defaultEmailFormValue = 'you@website.com';
		var defaultURLFormValue = 'Linkedin URL';


		$('#memo_field').on('focus', function(evt) {
			if($(this).attr('value') == defaultMemoFormValue) {
				$(this).attr({'value' : ''});
			};
		});

		$('#memo_field').on('blur', function(evt) {
			console.log('focused');

			if($(this).attr('value') == '') {
				$(this).attr({'value' : defaultMemoFormValue});
			};
		});

		
		$('#first_input').on('focus', function(evt) {
			if($(this).attr('value') == defaultFirstFormValue) {
				$(this).attr({'value' : ''});
			};
		});

		$('#first_input').on('blur', function(evt) {
			if($(this).attr('value') == '') {
				$(this).attr({'value' : defaultFirstFormValue});
			};
		});
		
		
		
		
		$('#last_input').on('focus', function(evt) {
			if($(this).attr('value') == defaultLastFormValue) {
				$(this).attr({'value' : ''});
			};
		});

		$('#last_input').on('blur', function(evt) {
			if($(this).attr('value') == '') {
				$(this).attr({'value' : defaultLastFormValue});
			};
		});
		
		
		
		
		$('#email_input').on('focus', function(evt) {
			if($(this).attr('value') == defaultEmailFormValue) {
				$(this).attr({'value' : ''});
			};
		});

		$('#email_input').on('blur', function(evt) {
			if($(this).attr('value') == '') {
				$(this).attr({'value' : defaultEmailFormValue});
			};
		});
		
		
		
		$('#url_input').on('focus', function(evt) {
			if($(this).attr('value') == defaultURLFormValue) {
				$(this).attr({'value' : ''});
			};
		});

		$('#url_input').on('blur', function(evt) {
			if($(this).attr('value') == '') {
				$(this).attr({'value' : defaultURLFormValue});
			};
		});
});
