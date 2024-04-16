import React, { useRef } from 'react';

export default function Quote() {

    const submitHandler = (event) => {
        console.log("button clicked")
        event.preventDefault();
    
        fetch('https://formsubmit.co//tomloo222@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
    })
      };

      return (
        <form encType="multipart/form-data" onSubmit={submitHandler}>
            <input type="email" name="email" placeholder="Your email" />
            <textarea name="message" placeholder="Details of your problem"></textarea>
            {/* <input type="file" name="attachment" accept="image/png, image/jpeg" /> */}
            <button type="submit">Send Test</button>
        </form>
      );
    }
