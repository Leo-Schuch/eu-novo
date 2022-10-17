import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/eu3.png'

export const Banner = () => {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                BluRiver
            </h1>
            <p className={styles.paragrafo}>
                Seja bem vindo ao meu espaço pessoal. Me chamo Leonardo Schuch, Front-end da BluRiver. aqui compartilho conhecimentos sobre programação e inovação. fiquem a vontade para me enviar dúvidas.
            </p>
        </div>
        <div className={styles.imagens}>
            <img 
            className={styles.circuloColorido}
            src={circuloColorido} 
            aria-hidden={true}     
            alt="eu"    
            />
            <img
                className={styles.minhaFoto}
                src={minhaFoto}
                alt="Foto Leo"
            />
        </div>
    </div>
  )
}
