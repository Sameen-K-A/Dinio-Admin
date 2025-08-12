import { differenceInDays, formatDistanceToNow } from "date-fns";

export function renderSubscriptionStatus(expiryDate: string) {
  const diffDays = differenceInDays(new Date(expiryDate), new Date());

  let colorClass = "text-green-500";

  if (diffDays < 0) {
    colorClass = diffDays <= 0 ? "text-red-500" : "text-orange-500";
  }

  let statusText = "";
  if (diffDays === 0) {
    statusText = "Expires today";
  } else if (diffDays > 0) {
    statusText = `${formatDistanceToNow(new Date(expiryDate), { addSuffix: true })} left`;
  } else {
    statusText = `Expired ${formatDistanceToNow(new Date(expiryDate), { addSuffix: true })}`;
  }

  return <span className={`${colorClass}`}>{statusText}</span>;
};