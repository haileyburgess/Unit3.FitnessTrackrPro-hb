import { useParams } from "react-router-dom";
import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";

export default function SingleActivityPage() {
  const { id } = useParams();
  const { data } = useQuery(`/activities/${id}`);
  const { token } = useAuth();
  const {
    mutate: deleteActivity,
    loading,
    error,
  } = useMutation("DELETE", `/activities/${id}`, ["activities"]);
  return (
    <div>
      {data && (
        <div>
          <h2>{data.name}</h2>
          <h3>Creator ID: {data.creatorid}</h3>
          <p>{data.description}</p>
        </div>
      )}
      {token && (
        <button onClick={() => deleteActivity()}>
          {loading ? "Deleting" : error ? error : "Delete"}
        </button>
      )}
    </div>
  );
}
