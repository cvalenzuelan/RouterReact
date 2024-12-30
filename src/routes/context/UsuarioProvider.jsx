import { useState } from 'react'
import { UsuarioContext } from './UsuarioContext'
// const usuario = {
// 	nombre: 'Nombre',
// 	apellidoPaterno: 'Paterno',
// 	email: 'email@gmail.com'
// }
export const UsuarioProvider = ({ children }) => {
	const [usuario, setUsuario] = useState({})
	return (
		<UsuarioContext.Provider value={{ usuario, setUsuario }}>
			{children}
		</UsuarioContext.Provider>
	)
}