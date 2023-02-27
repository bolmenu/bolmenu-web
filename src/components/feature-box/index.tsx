import { TypographyTypes } from "@/styles/theme/type";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@/components";

interface IFeatureBox {
  icon: IconDefinition;
  title: string;
  detail: string;
}

export default ({ icon, title, detail }: IFeatureBox) => (
  <div className="w-1/3">
    <figure>
      <FontAwesomeIcon icon={icon} />
    </figure>
    <article>
      <Typography theme={TypographyTypes.H4}>{title}</Typography>
      <Typography theme={TypographyTypes.P}>{detail}</Typography>
    </article>
  </div>
);
