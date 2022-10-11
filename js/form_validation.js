$(function () {

    // initialize variables
    var myform1 = $('#myform1');
    var myform2 = $('#myform2');
    var user = $('#username');
    var email = $('#email');
    var subject = $('#subject');
    var text_msg = $('#text_msg');
    var phone = $('#phone');

    var user_error = false; // user error msg  
    var email_error = false;//email error msg 
    var subj_error = false;//subject error msg 
    var text_msg_error = false;//text_msg error msg   
    //var phone_error = false;//phone_error error msg  

    /*======================== CREATE VALIDATION FUNCTION ==================*/

    // defining function for showing errors 
    function error_msg(target, css, msg) {

        target.css('display', css);

        target.html(msg);

        //passed parameters 1) target to show msg 2) css to display container 3) error msg 
    }

    // checking username 
    function check_username() {

        //var pattern = /[^A-Za-z0-9]+\s/; first method to allow space between the words
        var pattern = /[^A-Za-z0-9_ -]/;

        //trim the val of inp
        var user_val = user.val().trim();

        var username_length = user_val.length;

        if (user_val == '' || user_val == null) {

            // if value of username is null show error msg
            error_msg($('.user-error'), 'block', 'This field is required.');

            user_error = true;

        } else if (username_length < 5 || username_length > 20) {

            error_msg($('.user-error'), 'block', 'Should be between 5-20 characters');

            user_error = true;

        } else if (pattern.test(user_val)) { //prevent user enter special charc  

            error_msg($('.user-error'), 'block', 'characters and letters only');

            user_error = true;

        } else {

            error_msg($('.user-error'), 'none', 'none');

        }

    }//end checking username 

    //checking email
    function check_email() {

        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        var email_val = email.val();

        if (email_val == '' || email_val == null) {

            error_msg($('.email-error'), 'block', 'This field is required.');

            user_error = true;

        } else if (!pattern.test(email_val)) {

            error_msg($('.email-error'), 'block', 'invalid email');

            email_error = true;

        } else {

            error_msg($('.email-error'), 'none', 'none');

        }

    }//end checking email

    //checking subject 
    function check_subject() {

        var pattern = /[^A-Za-z0-9_ -]/;

        var subj_val = subject.val().trim();

        var subj_length = subj_val.length;

        if (subj_val == '' || subj_val == null) {

            error_msg($('.subject-error'), 'block', 'This field is required.');

            subj_error = true;

        } else if (subj_length < 5 || subj_length > 20) {

            error_msg($('.subject-error'), 'block', 'Should be between 5-20 characters');

            subj_error = true;

        } else if (pattern.test(subj_val)) {

            error_msg($('.subject-error'), 'block', 'characters and letters only');

            subj_error = true;

        } else {

            error_msg($('.subject-error'), 'none', 'none');

        }

    }//end checking subject 

    // checking textarea
    function check_textarea() {

        var pattern = /[^A-Za-z0-9_ -]/;

        var text_msg_val = text_msg.val().trim();

        var text_msg_length = text_msg_val.length;

        if (text_msg_val == '' || text_msg_val == null) {

            error_msg($('.text-error'), 'block', 'This field is required.');

            text_msg_error = true;

        } else if (text_msg_length < 5 || text_msg_length > 100) {

            error_msg($('.text-error'), 'block', 'Should be between 5-100 characters');

            text_msg_error = true;

        } else if (pattern.test(text_msg_val)) {

            error_msg($('.text-error'), 'block', 'characters and letters only');

            text_msg_error = true;

        } else {

            error_msg($('.text-error'), 'none', 'none');

        }

    }//end checking textarea   

    function check_phone() {

        var phone_val = phone.val();

        if (phone_val == '' || phone_val == null) {

            error_msg($('.phone-error'), 'block', 'This field is required.');

            // this variable exist in iti flags validation , no validation
            bool_err = true;

        } else {

            error_msg($('.phone-error'), 'none', 'none');

        }

    }//end checking phone 

    /*========================== RUN THE FUNCTIONS START ================================*/

    //calling the function on keyup
    user.keyup(function () {
        check_username();
    });

    email.keyup(function () {
        check_email();
    });

    subject.keyup(function () {
        check_subject();
    });

    text_msg.keyup(function () {
        check_textarea();
    });

    phone.keyup(function () {
        check_phone();
    });

    /*========================== RUN THE FUNCTIONS END ================================*/

    // Submit Form Validation 
    myform1.submit(function () {

        user_error = false;
        email_error = false;
        subj_error = false;
        text_msg_error = false;

        //call the fucnction 
        check_username();
        check_email();
        check_subject();
        check_textarea();

        //if no errors submit the form
        if (user_error == false && email_error == false && subj_error == false && text_msg_error == false) {

            alert("Registration Successfull");

            return true;

        } else {

            return false;

        }

    });

    /*=============================== GET A QUOTE FORM ==================================== */

    // Submit get a quote Validation 
    myform2.submit(function () {

        user_error = false;
        email_error = false;
        text_msg_error = false;

        //call the fucnction 
        check_username();
        check_email();
        check_textarea();
        check_phone();

        if ((user_error == false && email_error == false && text_msg_error == false && bool_err == false) && ($(this).intlTelInput("isValidNumber"))) {

            console.log(bool_err);
            alert("Thank You!");

            return true;

        } else {

            return false;

        }

    });

});//end document