import "./App.css";
import UniversityCard from "./components/UniversityCard";
import { useEffect, useState } from "react";
import type { IUniversityData } from "./interfaces";

function App() {
    useEffect(() => {
        fetchTcasData();
    }, []);

    const [tcasData, setTcasData] = useState<IUniversityData[]>([]);

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
        <>
            {tcasData.map((data, idx) => (
                <UniversityCard key={idx} {...data} />
            ))}

            {/* <pre>{JSON.stringify(tcasData, null, 2)}</pre> */}
        </>
    );
}

export default App;

