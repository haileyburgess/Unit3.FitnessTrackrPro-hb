import { useParams } from "react-router-dom";

export default function SingleActivityPage() {

    const { activity } = useParams();

    return (
    <h2>
        {activity.name}
    </h2>
);
}