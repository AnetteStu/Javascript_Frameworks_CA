import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {  ContactInput, ContactLabel, SubmitButton } from '../components/styledComponents/Buttons';

import "../styling/css/contact.css";

const schema = yup.object({
  fullName: yup.string().min(3).max(50).required(),
  email: yup.string().email().required(),
  subject: yup.string().min(3).max(100).required(),
  body: yup.string().min(3).max(1000).required()
})
.required();

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (

    <>
      <>
        <h1 className="pageHeader">Contact</h1>
        <div className='contactForm'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ContactLabel htmlFor='fullname'>Full Name</ContactLabel><br/>
            <ContactInput placeholder='Enter your full name' name='fullname' id='fullname' {...register('fullName')}/>
            <p className='error'>{errors.fullName?.message}</p>

            <ContactLabel htmlFor='email' className='label'>Email</ContactLabel><br/>
            <ContactInput name='email' id='email'{...register('email')} />
            <p className='error'>{errors.email?.message}</p>

            <ContactLabel htmlFor='subject' className='label'>Subject</ContactLabel><br/>
            <ContactInput name='subject' id='subject' {...register('subject')}/>
            <p className='error'>{errors.subject?.message}</p>

            <ContactLabel htmlFor="body" className='label'>Message</ContactLabel><br/>
            <ContactInput name='body' id='body' {...register('body')}/>
            <p className='error'>{errors.body?.message}</p>
            
            <SubmitButton>Submit</SubmitButton>
          </form>
        </div>
      </>
    </>
  )
}
