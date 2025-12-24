import { useState, useEffect } from 'react';
import API from '../api/apiClient';
import { getAllRsvps } from '../api/rsvpService';

export const useRvspList = ({page, limit, rsvpList, setRsvpList, setTotalPages, setCurrentPage}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRvspList = async () => {
            try {
                if(rsvpList.length > 0){
                    return;
                }
                setLoading(true);
                const response = await getAllRsvps({page, limit});
                if (response.status != 200) {
                    setError('Failed to fetch rsvp list');
                    setData(null);
                    return;
                }
                setTotalPages(response.data.totalPages);
                const data = await response.data;
                setRsvpList(data.rsvps);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRvspList();
    }, []);

    return { loading, error };
};