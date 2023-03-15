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
  document.title = `Contact Page`
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
      <h1 className="pageHeader">Contact</h1>
      <div className='contact'>
        <div className='contactForm'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <ContactLabel htmlFor='fullname'>Full Name</ContactLabel>
              <ContactInput placeholder='Enter your full name' name='fullname' id='fullname' {...register('fullName')}/>
              <p className='error'>{errors.fullName?.message}</p>
            </div>
            <div>
              <ContactLabel htmlFor='email' className='label'>Email</ContactLabel>
              <ContactInput placeholder='Enter your email address' name='email' id='email'{...register('email')} />
              <p className='error'>{errors.email?.message}</p>
            </div>
            <div>
              <ContactLabel htmlFor='subject' className='label'>Subject</ContactLabel>
              <ContactInput placeholder='Brief explanation of problem' name='subject' id='subject' {...register('subject')}/>
              <p className='error'>{errors.subject?.message}</p>
            </div>
            <div>
              <ContactLabel htmlFor="body" className='label'>Message</ContactLabel>
              <ContactInput placeholder='Detailed explanation of problem' name='body' id='body' {...register('body')}/>
              <p className='error'>{errors.body?.message}</p>
            </div>
            
            <SubmitButton>Submit</SubmitButton>
          </form>
        </div>
        <div className='contactInfo'>
        <h2>Got any questions?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet velit quis sapien finibus placerat. Proin felis nunc, porta vel interdum et, congue sodales nunc. 
          Donec nulla turpis, hendrerit non lorem quis, accumsan molestie metus. Nulla id euismod eros, a malesuada velit. Maecenas nec enim fringilla, bibendum purus in, 
          lobortis lacus. Sed augue nisi, tincidunt eu diam sed, finibus egestas risus. Maecenas feugiat fringilla felis, sed auctor est aliquet ac. 
          Vivamus posuere quam a mauris suscipit venenatis.
        </p>
        <p>
          In scelerisque porta ex tincidunt posuere. Sed vitae dui eu odio tristique blandit. 
          Sed aliquam, nulla non vulputate facilisis, orci ligula venenatis justo, in faucibus massa tortor tristique felis. Praesent et gravida nulla. 
          Nunc vehicula risus et nunc cursus elementum. Vivamus quis consectetur leo, et maximus neque. Donec eget condimentum orci. Curabitur condimentum sodales nunc, 
          id porttitor ex sollicitudin a. Nam non ex non velit fermentum fringilla sed ac tortor. Cras sit amet eros nec velit efficitur porta. Proin sit amet est quis neque 
          varius vehicula. Sed vitae facilisis enim. Cras sodales fermentum vehicula. Morbi egestas est eget risus consequat, porta sollicitudin massa euismod. 
          Quisque ac venenatis felis, id vehicula erat
        </p>
        </div>
      </div>
    </>
  )
}
