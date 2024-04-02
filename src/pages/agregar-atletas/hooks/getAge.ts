import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function getAge(day: number, month: number, year: number) {
  const [edadActual, setEdadActual] = useState(Number);

  useEffect(() => {
    const dayActual = dayjs().date();
    const monthActual = dayjs().month() + 1;
    const yearActual = dayjs().year();
    setEdadActual(yearActual - year);

    if (monthActual < month) {
      return setEdadActual(edadActual - 1);
    } else if (monthActual === month && dayActual < day) {
      return setEdadActual(edadActual - 1);
    }
  }, [day, month, year, setEdadActual]);

  return edadActual;
}
