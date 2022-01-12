import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
            href="https://www.linkedin.com/in/igor-felipe-duca-535bb1170/"
            target="_blank"
            rel="noopener noreferrer"
            >
            Coded by{' '}
            <h3 style={{marginLeft: 5}}>Igor Duca</h3>
            </a>
        </footer>
    )
}