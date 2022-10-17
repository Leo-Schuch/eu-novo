import "./Post.css";

import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "components/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "components/PaginaPadrao";

const Post = () => {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }
  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route index element ={
          <PostModelo
          fotoCapa={`/assets/posts/${post.id}/capa.png`}
          titulo={post.titulo}
        >
          <div className="post-markdown-container">
            <ReactMarkdown>{post.texto}</ReactMarkdown>
          </div>
        </PostModelo>
        }>
          
        </Route>
      </Route>
    </Routes>
  );
};

export default Post;
