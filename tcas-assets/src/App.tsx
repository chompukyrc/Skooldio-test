import "./App.css";
import DepartmentCard from "./components/DepartmentCard";
import { useEffect, useState } from "react";
import type { IDepartmentData } from "./interfaces";

function App() {
    useEffect(() => {
        fetchTcasData();
    }, []);

    const [tcasData, setTcasData] = useState<IDepartmentData[]>([]);

    const fetchTcasData = async () => {
        const response = await fetch(
            "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json"
        );
        if (response) {
            const json = await response.json();
            setTcasData(json);
        }
    };

    return (
        <div className=" flex flex-wrap">
            {tcasData.map((data) => (
                <DepartmentCard key={data.id} {...data} />
            ))}
        </div>
    );
}

export default App;

