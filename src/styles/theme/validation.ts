import * as yup from "yup";

export const baseValidation = yup
  .string()
  .required("* Lütfen alanı boş bırakmayınız.");

export const phoneValidation = yup
  .string()
  .required("* Lütfen alanı boş bırakmayınız.");

export const nameValidation = yup
  .string()
  .required("* Lütfen ad-soyad alanını boş bırakmayınız.")
  .min(2, "* Lütfen en az 2 karakter giriniz.");

export const companyValidation = yup
  .string()
  .required("* Lütfen işletme isminizi giriniz.")
  .min(2, "* Lütfen en az 2 karakter giriniz.");

export const mailValidation = yup
  .string()
  .required("* Lütfen mail adresinizi giriniz.")
  .email("* Lütfen geçerli bir mail adresi giriniz.");
