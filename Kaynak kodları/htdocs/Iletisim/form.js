
        
    
        const formDOM = document.getElementById('form1')


        formDOM.addEventListener('submit', function(e)
        {
            e.preventDefault();
            [...this.elements].forEach(formElement => {
                
                let parent = formElement

                if(formElement.getAttribute('type') === 'radio' || formElement.getAttribute('type') === 'checkbox'){
                    parent = formElement.closest('.radio-container')
                }

                if(!formElement.checkValidity())
                {
                    
                    try{
                        if(parent.nextElementSibling.className != 'error-msg')
                        {
                            const error = document.createElement('small')
                            error.className='error-msg'
                            error.innerText = formElement.validationMessage
                            parent.insertAdjacentElement('afterend', error)
                        }

                    }
                    catch(Expension)
                    {
                        parent.nextElementSibling.innerText = formElement.validationMessage
                    }
                }
                else{
                    try
                    {
                        if(parent.nextElementSibling.className == 'error-msg')
                        {
                            parent.nextElementSibling.remove()
                        }

                    }
                    catch(Expension)
                    {
                        
                    }
                }
            })

            if(this.checkValidity())
            {
                new FormData(formDOM)

            }
        });


        formDOM.addEventListener('formdata', function(e){
            const data = e.formData
            var request = new XMLHttpRequest();
            request.open("POST", "form.php");
            request.addEventListener('load', function(response) {
                console.log(response.currentTarget.response);
            });
            request.send(data);
        })