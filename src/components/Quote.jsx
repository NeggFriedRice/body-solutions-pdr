import React, { useRef } from 'react';
import axios from 'axios'

export default function Quote() {

    // const submitHandler = (event) => {
    //     console.log("button clicked")
    //     event.preventDefault();
        
    //     console.log(event.target.elements.attachment.files[0])

    //     const formData = JSON.stringify(Object.fromEntries(new FormData(event.target)))
    //     const file = event.target.elements.attachment.files[0]

    //     if (file) {
    //         formData.append('image', file)
    //     }
    
    //     const submission = axios.post('https://formsubmit.co/0b7a0fcefdab9feedbaddd6e161f8093', formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     })

    //     console.log(submission)
    //   };

    //   return (
    //     <form encType="multipart/form-data" onSubmit={submitHandler}>
    //         <input type="email" name="email" placeholder="Your email" />
    //         <textarea name="message" placeholder="Details of your problem"></textarea>
    //         <input type="file" name="attachment" accept="image/png, image/jpeg" />
    //         <button type="submit">Send Test</button>
    //     </form>
    //   );

    return (
        <div className="container">
          <h1>FormSubmit Demo</h1>
          <form target="_blank" action="https://formsubmit.co/tomloo222@gmail.com" method="POST" enctype="multipart/form-data">
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                </div>
                <div className="col">
                  <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
            </div>
            <input type="file" name="attachment" accept="image/png, image/jpeg" />
            <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
          </form>
        </div>
      )
    }
