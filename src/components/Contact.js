// import React from 'react'

// const Contact = () => {

//   return (
//     <section id="contact__section" className="contact">
//       <div className="container">
//         <h2 className="subtitle">Contactame</h2>
//         <form action="https://formspree.io/f/mleoqgqz" method="POST">
//           <label htmlFor="name">Nombre</label>
//           <input type="text" id="name" name="name" placeholder="Tu nombre.." required />

//           <label htmlFor="_replyto">Correo</label>
//           <input type="email" name="_replyto" placeholder="Tu correo.." required />

//           <label htmlFor="message" >Mensaje</label>
//           <textarea name="message" placeholder="" rows="10" required></textarea>

//           <button type="submit">Enviar</button>
//         </form>
//       </div>
//     </section>
//   )
// }


// export default Contact
import React from 'react';



export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <section id="contact__section" className="contact">
        <div className="container">
          <h2 className="subtitle">Contactame</h2>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/mleoqgqz"
            method="POST">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre.." required />

            <label htmlFor="_replyto">Correo</label>
            <input type="email" name="_replyto" placeholder="Tu correo.." required />

            <label htmlFor="message" >Mensaje</label>
            <textarea name="message" placeholder="" rows="10" required></textarea>

            <button type="submit">Enviar</button>
            {status === "SUCCESS" ? <p>¡Se envio el mensaeje con éxito! ¡Me pondré en contacto con usted pronto!</p> : <p></p>}
            {status === "ERROR" && <p>
              ¡Vaya! Hubo un error. Intente enviar el formulario nuevamente o comuníquese conmigo a jhasmanyroquechambi@gmail.com</p>}
          </form>
        </div>
      </section>

      //       <section id="contact">
      //        <form
      //          onSubmit={this.submitForm}
      //          action="https://formspree.io/f/mleoqgqz"
      //          method="POST"
      //        >
      //           <br></br> 
      //          <h3>Use this contact form to reach out and I will get back to you as soon as possible!</h3>
      //          <div>
      //          <label htmlFor="email">Email:</label>
      //          <input class="email" type="email" name="email" />
      //          <label htmlFor="message">Message:</label>
      //          <input class="message" type="text" name="message" />
      //          {status === "SUCCESS" ? <p>¡Éxito! ¡Me pondré en contacto con usted pronto!</p> : <button>Submit</button>}
      //          {status === "ERROR" && <p>
      // ¡Vaya! Hubo un error. Intente enviar el formulario nuevamente o comuníquese conmigo directamente al jhasmanyroquechambi@gmail.com</p>}
      //          </div>
      //        </form>
      //        </section>

    )
  }
}
