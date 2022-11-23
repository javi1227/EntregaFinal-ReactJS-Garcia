import React from 'react';

const Checkout = () => {
    const createOrdenCompra = (event)=>{
        event.preventDefault()
        console.log(event, "asdasda");
    }

    return (
        <div>
            <form className="row g-3" onSubmit={()=> createOrdenCompra}>
                <div className="col-md-4">
                    <label htmlFor="validationServer01" className="form-label">Nombre</label>
                    <input type="text" className="form-control is-valid" id="validationServer01" placeholder='Román' required />
                    <div className="valid-feedback">
                    Ingrese Nombre
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">Apellido</label>
                    <input type="text" className="form-control is-valid" id="validationServer02" placeholder='Riquelme' required />
                    <div className="valid-feedback">
                    Ingrese Apellido
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServerUsername" className="form-label">Email</label>
                    <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend3">@</span>
                    <input type="text" className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">                       
                        Por favor, elija un nombre de usuario.
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationServer03" className="form-label">Ciudad</label>
                    <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                    <div id="validationServer03Feedback" className="invalid-feedback">
                    Proporcione una ciudad válida.
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input is-invalid" type="checkbox" defaultValue id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
                    <label className="form-check-label" htmlFor="invalidCheck3">
                    Acepto los términos y condiciones
                    </label>
                    <div id="invalidCheck3Feedback" className="invalid-feedback">
                        Debe estar de acuerdo antes de enviar.
                    </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Comprar</button>
                </div>
            </form>

        </div>
    );
}

export default Checkout;
