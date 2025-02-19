export const formatPhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/[^\d]/g, "");
  if (cleaned.length !== 11) {
    return null;
  }

  const formatted = cleaned.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  return formatted;
};
