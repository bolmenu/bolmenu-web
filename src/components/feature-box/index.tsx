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
  <div className="w-1/3 flex gap-[30px] px-[15px] py-[60px]">
    <figure>
      <FontAwesomeIcon icon={icon} size="3x" color="#054f48" />
    </figure>
    <article>
      <Typography theme={TypographyTypes.H4} className="text-[#054f48]">{title}</Typography>
      <Typography theme={TypographyTypes.P} className="text-[#8d8d8d]">{detail}</Typography>
    </article>
  </div>
);
