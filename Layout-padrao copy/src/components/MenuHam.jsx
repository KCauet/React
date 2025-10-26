import styles from './MenuHam.module.css'
import { useState } from 'react';

function MenuHam() {

    const [display, AtivarDisplay] = useState(false)

    return (
        <div>
            <button onClick={() => AtivarDisplay(!display)} className={styles.MenuBtn}>
                <div className={styles.BtnLines}></div>
                <div className={styles.BtnLines}></div>
                <div className={styles.BtnLines}></div>
            </button>

            {display && (
                <div className={styles.itens}>
                    <li>sobre</li>
                    <li>contatos</li>
                    <li>Eventos</li>
                </div>
            )}
            
            
        </div>
    );
};

export default MenuHam