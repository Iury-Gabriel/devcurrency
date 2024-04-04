import { Link } from 'react-router-dom'
import styles from './notFound.module.css'

export function NotFound() {
    return (
        <div className={styles.container}>
            <h1>Pagina não existe</h1>
            <Link to="/">
                Acessar cripto Moedas
            </Link>
        </div>
    )
}