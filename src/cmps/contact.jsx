import { ReactComponent as SmallLine } from '../assets/icons/small-line.svg'
import { ReactComponent as SendMailSvg } from '../assets/icons/sendmail.svg'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';

export const Contact = () => {

    const [msg, setMsg] = useState(null)
    const form = useRef();

    const removeMsg = () => {
        setTimeout(() => {
            setMsg(null)
        }, 8000)
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (!form.current[1].value) {
            setMsg('Please fill all the fields')
            removeMsg()
            return
        }

        emailjs.sendForm('service_io378qk', 'template_cpn2tsd', form.current, 'e0Os6pyTH4Gk7hhYb')
            .then((result) => {
                for (let i = 0; i < 3; i++) {
                    form.current[i].value = ''
                }
                setMsg('Message sent successfully, Thank You!')
                removeMsg()
            }, (error) => {
                setMsg('Failed to send, Try again.')
                removeMsg()
            });
    };

    return (
        <section id="contact" className="contact">
            <div className="container main-layout">
                <h5 className="small-header">
                    <span className="rectangle"><SmallLine /></span>contact
                </h5>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input className="btn btn-send" type="submit" value={"Send"} />
                    <span>{msg}</span>
                </form>
            </div>
        </section>
    )
}