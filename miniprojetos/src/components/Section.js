import styles from './Section.module.css'

function Section({titulo, desc, extraTags}) {
    return (
        <section className={styles.box}>
            <h1 className={styles.titulo}>{titulo}</h1>
            <p className={styles.desc}>{desc}</p>
            {extraTags}
        </section>
    )
}

export default Section