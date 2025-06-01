import { useParams } from "react-router-dom";
import useQuery from "../api/useQuery";
import { act } from "react";


export default function SingleActivityPage() {

    const { id } = useParams();
    const  { activity } = useQuery(id);

    console.log(activity);
    return (
    <h2>
    
    </h2>
);
}