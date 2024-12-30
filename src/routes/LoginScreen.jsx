import { useContext } from "react"
import { useForm } from "./hooks/useForm"
import { UsuarioContext } from "./context/UsuarioContext"

export const LoginScreen = () => {
	const initialForm = {
		nombre: '',
		apellidoPaterno: '',
		email: ''
	}
	const { formulario, nombre, apellidoPaterno, email, onInputChange } = useForm(initialForm)
	const { setUsuario } = useContext(UsuarioContext)
	const onSubmit = (e) => {
		e.preventDefault()
		setUsuario(formulario)
	}
	return (
		<div className='container'>
			<hr />
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="nombre">Nombre</label>
					<input type="text" className="form-control" name="nombre" placeholder="Ingrese su Nombre" value={nombre} onChange={onInputChange} />
				</div>
				<div className="form-group">
					<label htmlFor="apellido">Apellido</label>
					<input type="text" className="form-control" name="apellidoPaterno" placeholder="Ingrese su apellido paterno" value={apellidoPaterno} onChange={onInputChange} />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email address</label>
					<input type="email" className="form-control" name="email" placeholder="Ingrese su email" value={email} onChange={onInputChange} />
				</div>
				<br />
				<button type="submit" className="btn btn-primary">Registar Datos</button>
			</form>
		</div>
	)
}
