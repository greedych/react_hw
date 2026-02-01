import { useNavigate } from "react-router-dom";

function List({ arr }) {
  const navigate = useNavigate();

  return (
    <div>
      {arr.map((item) => (
        <div>
          <h1>{item.title}</h1>
          <button onClick={() => navigate(item.path)}>Read article</button>
        </div>
      ))}
    </div>
  );
}

export default List;
