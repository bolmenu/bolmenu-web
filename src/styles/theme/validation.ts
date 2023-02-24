import * as yup from "yup";

export const baseValidation = yup
  .string()
  .required("Lütfen isim alanını boş bırakmayınız.")
  .min(2, "Lütfen en az 2 karakter giriniz.");

export const mailValidation = yup
  .string()
  .required("Lütfen mail adresinizi giriniz.")
  .email("Lütfen geçerli bir mail adresi giriniz.");
