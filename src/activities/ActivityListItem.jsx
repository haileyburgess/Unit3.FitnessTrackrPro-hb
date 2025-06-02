import { useNavigate } from "react-router-dom";

/** Shows a single activity. Logged-in users will also see a delete button. */
export default function ActivityListItem({ activity }) {
  console.log(activity);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`${activity.name}`); //confirmed it is logging
    console.log(`${activity.description}`);
    navigate(`/activities/${activity.id}`);
    console.log(`${activity.id}`);
  };

  return (
    <li onClick={handleClick}>
      {activity && (
        <div>
          <p>{activity.name}</p>
        </div>
      )}
    </li>
  );
}
