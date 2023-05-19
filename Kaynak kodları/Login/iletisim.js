const formDOM = document.getElementById('userForm')


formDOM.addEventListener('submit', function(e)
{
    e.preventDefault();
    [...this.elements].forEach(formElement => {
            
        if(!formElement.checkValidity())
        {
            if(formElement.NextElementSibling?.className != 'error-msg')
            {
                const error = document.createElement('small')
                error.className='error-msg'
                error.innerText = formElement.validationMessage
                formElement.insertAdjacentElement('afterend', error)
            }
        }
        else{
            if(formElement.NextElementSibling?.className == 'error-msg')
            {
                formElement.NextElementSibling.remove()
            }
        }
    })
});