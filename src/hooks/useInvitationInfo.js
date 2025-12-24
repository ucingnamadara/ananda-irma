import { useState, useEffect } from 'react';
import API from '../api/apiClient';

export const useInvitationInfo = (code) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!code) {
            setLoading(false);
            console.log("No code provided");
            return;
        }

        const invitationCode = String(code);
        console.log("Fetching invitation info for code: " + invitationCode);

        const fetchInvitationInfo = async () => {
            try {
                const endpoint = `/invitation/${invitationCode}`;
                console.log("API Endpoint: %s", endpoint);
                setLoading(true);
                const response = await API.get(endpoint);
                console.log("API Response: %O", response);
                if (response.status != 200) {
                    setError('Failed to fetch invitation info');
                    setData(null);
                    return;
                }

                const result = response.data;
                localStorage.setItem('guestId', result.id);
                setData(result);
                setError(null);
                console.log("API RESULT: %O", data);
            } catch (err) {
                
                console.log("API ERROR: %O", err);
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchInvitationInfo();
    }, []);

    return { data, loading, error };
};