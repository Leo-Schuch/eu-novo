import styles from "./SobreMim.module.css";
import PostModelo from "components/PostModelo";
import React from "react";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/eu.png";

const SobreMim = () => {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h2 className={styles.subtitulo}>
        Olá, Eu sou o Leonardo (Beiçola).
        </h2>
         <img
        src={fotoSobreMim}
        alt="foto front"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou desenvolvedor Front-end da BluRiver.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou com 14 anos, na época eu codava para o meu próprio OtServer de tibia em Lua,
                após isso fiquei anos e anos sem ter nenhum contato com a programação, estudei Eng Civil e fui Morar em Atlanta nos Usa.
            </p>
            <p className={styles.paragrafo}>
                Voltando, desempregado para a casa da minha mãe no Brasil optei por virar Uber para pagar minhas contas, após quase 1 ano rodando de Uber tive contato com um primo que está na área e me deu a idéia de estudar e até me indicou os cursos do Guanabara. Após estudar HTML e CSS ele me indicou estudar pela Alura.
            </p>
            <p className={styles.paragrafo}>
                Depois de meses estudando 10 horas por dia incluindo finais de semana, optei por me dedicar 100% a programação. Me juntei com outros 4 programadores, todos já estabelecidos na área, com uma bagagem imensa e que quando dei a idéia não pensaram 2 vezes e aceitaram o desafio de criar uma empresa onde visamos clean code, aproximação com o cliente e códigos simplificados para facilitar a manutenção.
            </p>
            <p className={styles.paragrafo}>
                Existem outras pessoas também que tenho muito a agradecer Luis da MobiPlus, foi um grande tutor, onde me mostrou o caminho a ser tomado nos estudos. Se não fosse ele acho que teria desistido no meio do caminho ^^.
                Meu primo, Tiago que foi quem me ajudou demais no começo, tirando dúvidas, entrando em call para explicar o comecinho da programação, me incentivando, etc.
                Meu sócio, Gledson, que ficou madrugadas me ensinando Javascript.
                Meu sócio, Airam, que me ensinou demais Hooks e css.
                Meu sócio, Gregory, que me ajudou muito em questões de integrar APIS pro front.
            </p>
            <p className={styles.paragrafo}>
                Então é isso galera, nunca é tarde para se reinventar e aqui vai uma frase "Eu não tenho sonhos, eu tenho objetivos", não se compare aos outros siga seu caminho, se você é mais velho use sua sabedoria de vida e sua força de vontade obtida durante esses anos e transforme em vontade de ser quem realmente você quer ser.
            </p>
            
    </PostModelo>
  );
};

export default SobreMim;
