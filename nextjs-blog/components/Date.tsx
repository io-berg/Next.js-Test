import { format, parseISO } from "date-fns";
import { FC } from "react";

interface DateProps {
  dateString: string;
}

const Date: FC<DateProps> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "d, LLLL, yyyy")}</time>;
};

export default Date;
