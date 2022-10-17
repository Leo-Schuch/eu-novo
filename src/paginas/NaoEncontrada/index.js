import styles from "./NaoEncontrada.module.css";
import erro404 from "../../assets/erro_404.png";
import BotaoPrincipal from "components/BotaoPrincipal";
import { useNavigate } from "react-router-dom";

const NaoEncontrada = () => {
  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! página não encontrada.</h1>

        <p className={styles.paragrafo}>
          Tem certeza de que digitou corretamente?
        </p>
        <p className={styles.paragrafo}>
          Aguarde um instante e recarregue a página
        </p>
        <div 
            className={styles.botaoContainer}
            onClick={() => navegar(-1)}          
          >
            
          <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
        </div>
        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="Cachorro de óculos"
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
};

export default NaoEncontrada;
