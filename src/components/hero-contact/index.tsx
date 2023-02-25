import * as yup from "yup";

import { ElementTypes, IconTypes, TypographyTypes } from "@/styles/theme/type";
import { Input, Button, Typography } from "@/components";

import { useFormik } from "formik";
import { baseValidation, mailValidation } from "@/styles/theme/validation";

export default () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      company: "",
      phone: "",
      mail: "",
    },
    onSubmit: (values) => {
      console.log("submit values: ", values);
    },
    validationSchema: yup.object({
      name: baseValidation,
      company: baseValidation,
      phone: baseValidation,
      mail: mailValidation,
    }),
  });

  return (
    <section className="bg-[#fff] p-[60px] shadow-lg w-[100%] rounded-[10px] translate-y-[-100%]">
      <form onSubmit={formik.handleSubmit}>
        <Typography
          theme={TypographyTypes.H2}
          className="text-[#054f48] mt-[10px]"
        >
          Bizimle iletişime geçin
        </Typography>
        <Typography
          theme={TypographyTypes.P}
          className="text-[#34807a] mt-[10px]"
        >
          Hızlı bir şekilde formu doldurun, size ulaşalım.
        </Typography>
        <div className="flex columns-5 gap-[30px] mt-[30px]">
          <Input
            placeholder="Ad-Soyad"
            icon={IconTypes.Person}
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name && formik.errors.name}
            name="name"
          />

          <Input
            placeholder="İşletme Adı"
            icon={IconTypes.Building}
            onChange={formik.handleChange}
            value={formik.values.company}
            error={formik.touched.company && formik.errors.company}
            name="company"
          />

          <Input
            placeholder="Telefon"
            icon={IconTypes.Phone}
            onChange={formik.handleChange}
            value={formik.values.phone}
            error={formik.touched.phone && formik.errors.phone}
            name="phone"
          />

          <Input
            placeholder="Mail"
            icon={IconTypes.Envelope}
            onChange={formik.handleChange}
            value={formik.values.mail}
            error={formik.touched.phone && formik.errors.mail}
            name="mail"
          />

          <Button type="submit" theme={ElementTypes.Secondary}>
            Gönder
          </Button>
        </div>
      </form>
    </section>
  );
};
