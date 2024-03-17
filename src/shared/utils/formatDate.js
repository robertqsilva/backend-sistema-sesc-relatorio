import { format } from "date-fns";

const formatDate = () => {
  const dateBRL = format(new Date(), "dd/MM/yyyy HH:mm:ss");
  return dateBRL;
};
export default formatDate;
