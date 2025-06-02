import { useParams } from "react-router-dom";
import useQuery from "../api/useQuery";
import { ActivityListItem } from "./ActivityList";

export default function SingleActivityPage() {
  const { id } = useParams();
  const { activity } = useQuery(id);
  return (
    <div>
      <ActivityListItem activity={activity}></ActivityListItem>
      <h2> 
        {activity.name}
      </h2>
      <h3> 
        Creator ID: {activity.creatorid}
      </h3>
      <p>
        {activity.description}
      </p>
    </div>
  );
}
