import { useEffect, useState } from 'react';
import { AppData } from './models';

export function useFetchAppData(): [AppData, () => void] {
    const [appData, setAppData] = useState<AppData>(null!);
    const fetchData = async () => {
        console.log("Fetching data");
        try {
            const response = await fetch("http://localhost:5001/api/appdata");
            const json = await response.json();
            setAppData(json as AppData);
        }
        catch (e) {
            console.log(e);
        }
    }

    const reload = () => {
        setAppData(null!);
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, []);

    return [
        appData,
        reload
    ]
}