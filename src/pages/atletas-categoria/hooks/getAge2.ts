import dayjs from "dayjs";

// sin useEffect porq esta ya en un mapeo de datos , y se hace una sola ver por index.
export default function getAge2(day: number, month: number, year: number) {
    const dayActual = dayjs().date();
    const monthActual = dayjs().month() + 1;
    const yearActual = dayjs().year();
    let age = yearActual - year;
  
    if (monthActual < month || (monthActual === month && dayActual < day)) {
      age--;
    }
  
    return age;
  }