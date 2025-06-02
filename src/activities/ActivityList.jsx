import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useNavigate } from "react-router-dom";


/** Shows a list of activities. */
export default function ActivityList() {
  const {
    data: activities,
    loading,
    error,
  } = useQuery("/activities", "activities");

  console.log(activities);

  if (loading || !activities) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} />
      ))}
    </ul>
  );
}

/** Shows a single activity. Logged-in users will also see a delete button. */
export function ActivityListItem({ activity }) {
  console.log(activity);
  const navigate = useNavigate();
  const { token } = useAuth();
  const {
    mutate: deleteActivity,
    loading,
    error,
  } = useMutation("DELETE", `/activities/${activity.id}` ["activities"]);

  const handleClick = () => {
    console.log(`${activity.name}`); //confirmed it is logging 
    console.log(`${activity.description}`);
    navigate(`/activities/${activity.name}`);
    console.log(`${activity.id}`);
  }

  return (
    <li onClick={handleClick}>
      <p>{activity.name}</p>
      {token && (
        <button onClick={() => deleteActivity()}>
          {loading ? "Deleting" : error ? error : "Delete"}
        </button>
      )}
    </li>
  );
}
