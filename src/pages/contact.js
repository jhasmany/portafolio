import * as React from "react"
import Layout from '../components/layout'

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
      <>
        <Layout>

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
        </Layout>
      </>
    )
  }
}
