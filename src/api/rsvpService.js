import API from "./apiClient";

export const getAllRsvps = async ({page, limit}) => {
    const response = await API.get(`/rsvp`, {
        params:{
            page:page || 1,
            limit:limit || 5
        }
    });
    console.log(response);
    return response;
};

export const submitRsvp = async ({name, email, isPresence, comment, total, guestId}) => {
    const response = await API.post(`/rsvp`, {
        name,
        isPresence,
        comment,
        guestId,
        total
    });
    return response;
}