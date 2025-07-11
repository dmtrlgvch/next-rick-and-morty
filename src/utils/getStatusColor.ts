export const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "alive":
      return "bg-gradient-to-r from-green-500 to-green-600";
    case "dead":
      return "bg-gradient-to-r from-red-500 to-red-600";
    default:
      return "bg-gradient-to-r from-gray-500 to-gray-600";
  }
};
