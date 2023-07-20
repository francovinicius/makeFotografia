import styles from './Links.css'
import '../../index.css'

export default function Links() {
    return (
        <section className="d-flex flex-column justfy-content-center align-items-center link-container">
            <a href="https://api.whatsapp.com/send?phone=5524999256629&text=Ol%C3%A1&fbclid=PAAaZt2vDYFNTUkMkhZ2SBx0aaf2_hK5ZRVV984U8FKTu2fK7SFDSuGXfQQJw" target='blank' className="nav-link btn btn-lg btn-link">Contato</a>
            <a href="https://instagram.com/makefotografia?igshid=MzRlODBiNWFlZA==" target='blank' className="nav-link btn btn-lg btn-link">Instagram</a>
        </section>
    )
}