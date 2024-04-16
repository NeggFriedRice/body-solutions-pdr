import React, { useRef } from 'react';
import axios from 'axios'

export default function Quote() {

    const submitHandler = (event) => {
        console.log("button clicked")
        event.preventDefault();
        
        console.log(event.target.elements.attachment.files[0])

        const formData = JSON.stringify(Object.fromEntries(new FormData(event.target)))
        const file = event.target.elements.attachment.files[0]

        if (file) {
            formData.append('image', file)
        }
    
        const submission = axios.post('https://formsubmit.co/0b7a0fcefdab9feedbaddd6e161f8093', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        console.log(submission)
      };

      return (
        <form encType="multipart/form-data" onSubmit={submitHandler}>
            <input type="email" name="email" placeholder="Your email" />
            <textarea name="message" placeholder="Details of your problem"></textarea>
            <input type="file" name="attachment" accept="image/png, image/jpeg" />
            <button type="submit">Send Test</button>
        </form>
      );
    }
