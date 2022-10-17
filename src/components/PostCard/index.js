import BotaoPrincipal from "components/BotaoPrincipal";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Post.module.css";

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="imagem do post"
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>
        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  );
};

export default PostCard;
