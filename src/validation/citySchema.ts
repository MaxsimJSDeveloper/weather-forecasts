import * as yup from 'yup'

export const citySchema = yup.object({
  city: yup
    .string()
    .required('City name is required')
    .matches(/^[A-Za-z\s-]+$/, 'City name can only contain letters, spaces, and hyphens')
    .max(20, 'City name is too long')
    .min(4, 'City name is too short'),
})
