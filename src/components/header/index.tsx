import styles from './header.module.css';
import { Link } from 'react-router-dom';
import logoimg from '../../assets/logo.svg';

export function Header() {
    return (
        <header className={styles.container}>
            <div>
                <Link to="/">
                    <img src={logoimg} alt="Logo crypto" />
                </Link>
            </div>
        </header>
    )
}