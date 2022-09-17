import React, { useState } from 'react';
import{
    FormSection,
    FormTitle,
    FormContainer,
    FormColumn,
    FormRow,
    FormWrapper,
    FormMessage,
    FormInputRow,
    FormInput,
    FormLabel,
    FormImgWrapper,
    FormImg,
    FormButton
} from './FormStyles'

import {Container} from '../../globalStyles'
import validateForm from './ValidateForm';

const Form = () => {

    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [confirmPassword, setConfirmPassword]= useState('')
    const [error, setError]= useState(null)
    const [success, setSuccess]= useState(null)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const resultError= validateForm({name, email, password, confirmPassword});

        if(resultError !==null){
            setError(resultError);
            return;
        }
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError(null);
        setSuccess('Your request was submitted');
    };

    const messageVariants={
        hidden:{y:-30, opacity:0},
        animate:{y:0, opacity:1, transition:{delay: 0.2, duration: 0.4}},
    };

    const formData=[
        {
            label: 'Name', 
         value: name,
         onChange:(e)=>setName(e.target.value), 
         type:'text'
        },
        {
            label: 'Email', 
         value: email, 
         onChange: (e)=>setEmail(e.target.value), 
         type:'email'
        },
        {
            label:'Password',
            value: password,
            onchange: (e)=>setPassword(e.target.value),
            type: 'password'
        },
        {
            label:'Confirm Password',
            value: confirmPassword,
            onchange:(e)=>setConfirmPassword(e.target.value),
            type:'password'
        }
    ]

    return (
       <FormSection>
        <Container>
            <FormRow>
                <FormColumn small>
                    <FormTitle> Register </FormTitle>
                    <FormWrapper onSubmit={handleSubmit}>
                        {formData.map((el, index)=>{
                            <FormInputRow key={index}>
                                <FormLabel>{el.label}</FormLabel>
                                <FormInput 
                                type={el.type}
                                placeholder={`Enter your ${el.label.toLocaleLowerCase}`}
                                value={el.value}
                                onChange={el.onChange}
                                />
                            </FormInputRow>
                        })}
                        <FormButton type="submit"> Signup </FormButton>
                    </FormWrapper>
                    {error && (
                        <FormMessage
                        variants={messageVariants}
                        initial='hidden'
                        animate='animate'
                        error
                        >
                            {error}
                        </FormMessage>
                    )}
                    {success && (
                        <FormMessage
                        variants={messageVariants}
                        initial='hidden'
                        animate='animate'
                        >
                            {success}
                        </FormMessage>

                    )}
                </FormColumn>
            </FormRow>
        </Container>
       </FormSection>
    );
};

export default Form;