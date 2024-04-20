import { useEffect } from "react";
import { Helmet } from "react-helmet";

interface IProps {
  title: string;
}

export default function Head({ title }: IProps): JSX.Element {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
