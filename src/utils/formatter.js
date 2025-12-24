import converter from 'number-to-words';

/**
 * Converts any number to words and appends "guest(s)"
 * Example: 1 -> "one guest", 22 -> "twenty-two guests"
 */
export const formatGuestCount = (count) => {
  if(count == null) return "";
  if (count < 0) return "Invalid number";
  
  // Convert number to words (e.g., 22 -> "twenty-two")
  const word = converter.toWords(count);
  
  // Handle pluralization logic
  const label = count === 1 ? "guest" : "guests";

  return `${word} ${label}`;
};

export const formatAttendanceStatus = (isPresence) => {
  if (isPresence === true) {
    return "Will Attend";
  } else if (isPresence === false) {
    return "Will Not Attend";
  } else {
    return "Unknown";
  }
}

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}