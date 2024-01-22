import {endOfWeek, format, isWithinInterval, startOfWeek } from "date-fns";

export function getCurrentDate() {
    const currentDate = new Date();
    const formatCurrentDate = format(currentDate, 'MM/dd/yyyy');
    return formatCurrentDate;
  }
  
export function isInThisWeek(dateToCheck){
    const currentDate = new Date();
    const startOfThisWeek = startOfWeek(currentDate);
    const endOfThisWeek = endOfWeek(currentDate);

    const isInWeek = isWithinInterval(dateToCheck, {start: startOfThisWeek, end: endOfThisWeek})
    return isInWeek;
}
  