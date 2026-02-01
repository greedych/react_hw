import { useParams } from "react-router-dom";

function Article({ arr }) {
  const { id } = useParams();
  const article = arr.find((item) => item.id === +id);

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </div>
  );
}

export default Article;
