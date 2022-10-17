import styles from './Rodape.module.css'
import {ReactComponent as MarcaRegistrada} from 'assets/marca_registrada.svg'

import React from 'react'

const Rodape = () => {
  return (
    <footer className={styles.rodape}>
        <MarcaRegistrada />

         Desenvolvido por BluRiver
    </footer>
  )
}

export default Rodape