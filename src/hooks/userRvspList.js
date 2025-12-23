import { useState, useEffect } from 'react';
import API from '../api/apiClient';

export const useRvspList = (userId) => {
    const [rvspList, setRvspList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRvspList = async () => {
            try {
                setLoading(true);
                const response = await API.get(`/rsvp`);
                console.log("API Response: %O", response);
                if (response.status != 200) {
                    setError('Failed to fetch invitation info');
                    setData(null);
                    return;
                }
                const data = await response.json();
                setRvspList(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchRvspList();
        }
    }, [userId]);

    return { rvspList, loading, error };
};