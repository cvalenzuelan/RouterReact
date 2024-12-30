import { useContext } from "react"
import { UsuarioContext } from "./context/UsuarioContext"

export const HomeScreen = () => {
	const { usuario } = useContext(UsuarioContext)
	return (
		<div className="container">
			<hr />
			<table className="table">
				<thead className="thead-dark">
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Apellido</th>
						<th scope="col">Email</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">{usuario.nombre}</th>
						<td>{usuario.apellidoPaterno}</td>
						<td>{usuario.email}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
