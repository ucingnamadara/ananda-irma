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