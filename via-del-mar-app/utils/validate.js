import * as yup from 'yup'; 

const recoveryValidationSchema = yup.object().shape({

    email: yup
      .string("Ingresa tu Email")
      .required("*Campo requerido")
      .email("Ingresa un Email válido"),
   
  });