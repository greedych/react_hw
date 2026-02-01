import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is Main page</h1>
      <button onClick={() => navigate("/list")}>Go to Articles List </button>
    </div>
  );
}

export default Main;
