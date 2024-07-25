import React from 'react'
import Swal from 'sweetalert2'
import './Ask.css'


const Ask = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e1c8d574-8fec-46aa-86e5-9c67e9057e32");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };

  return (
    <div>
      <section className="ask">
        <form onSubmit={onSubmit}>
          <h1 className='ask-head1'>Have a Question?</h1>
          <h2 className='ask-head2'>Ask!</h2>
          <div className="input-box">
            <label className='label-head'>Name</label>
            <input
              name='name'
              type="text"
              className='field'
              placeholder='Name'
              required />
          </div>
          <div className="input-box">
            <label className='label-head'>Email</label>
            <input
              name='email'
              type="email"
              className='field'
              placeholder='Email'
              required />
          </div>
          <div className="input-box">
            <label className='label-head'>Your Message</label>
            <textarea
              name="message"
              className='field mess'
              placeholder='Enter your message here'
              required></textarea>
          </div>
          <button type='submit'>Send</button>
        </form>
      </section>
    </div>
  )
}

export default Ask
