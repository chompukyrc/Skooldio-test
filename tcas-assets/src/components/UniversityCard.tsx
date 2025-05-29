import "./UniversityCard.css";
import type { IUniversityData } from "../interfaces";

export default function UniversityCard(data: IUniversityData) {
    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

