
// after jquery is loaded
$(document).ready(() => {
    // add custom validation method to JQuery validator
    jQuery.validator.addMethod('checkForUpperCase', (value, element, param) => {
        // check if value has upper case letter
        return /[A-Z]/.test(value)

    }, 'Password must have at least one upper case letter')

    // add custom validation method to JQuery validator
    jQuery.validator.addMethod('checkForLowerCase', (value, element, param) => {
        // check if value has lower case letter
        return /[a-z]/.test(value)

    }, 'Password must have at least one lower case letter')

    //check if value has digit
    jQuery.validator.addMethod('checkForNumber', (value, element, param) => {
        // check if value has number
        return /[0-9]/.test(value)

    }, 'Password must have at least one number')

    //check if value has special character
    jQuery.validator.addMethod('checkForSpecialCharacter', (value, element, param) => {
        // check if value has lower case letter
        return /[!@#\$%\^&]/.test(value)

    }, 'Password must have at least one special character')

    //check if value has special character
    jQuery.validator.addMethod('checkLength', (value, element, param) => {
        // check if value has lower case letter
        return 8 === value.length

    }, 'Password must be at least 8 characters long')

    // get year
    let year = new Date().getFullYear()

    // set copyright text
    let copyrightText = '<p style="text-align:center">Copyright Farming Robots &copy; ' + year +
        ' <br>Developed by Michael Lungu</p>'
    // update footer
    $("#footer").html(copyrightText)

    // add style to content tag
    $('#content').css({
        'flex-direction': 'column'
    })

    // set up validation rules
    $("form[name='register']").validate({
        rules: {
            firstName: "required",
            surname: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                // checkLength: true,
                checkForUpperCase: true,
                checkForLowerCase: true,
                checkForNumber: true,
                checkForSpecialCharacter: true

            },
            confirmPassword: {
                required: true,
                equalTo: '#password'
            }
        },
        // set up validation messages
        messages: {
            firstName: 'Please enter your first name',
            surname: 'Please enter your Surname',
            password: {
                required: 'Please provide a password',
            },
            confirmPassword: {
                required: 'Please re-type your chosen password',
            },
            email: 'Please enter a valid e-mail address'
        },
        // set up form handler
        submitHandler: (form) => {

            alert(`firstName: ${form.elements.namedItem('firstName').value}
            \nsurnName: ${form.elements.namedItem('surname').value}
            \nemail: ${form.elements.namedItem('email').value}
            \npassword: ${form.elements.namedItem('password').value}
            \nconfirmPassword: ${form.elements.namedItem('confirmPassword').value}
            `)
            console.log(form.elements)
        }
    })
})
