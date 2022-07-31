import { USER } from "../datos/usuarios"

function Tabla() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                </tr>
            </thead>
            <tbody>
                { USER.map((item) => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                    </tr>
                ))

                }
            </tbody>
        </table>
    )
}

export default Tabla