export function validateForm(data) {
  const errors = {};

  if (!data.email) {
    errors.email = 'El email es requerido';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'El email no es válido';
  } else if (data.email.length > 35) {
    errors.email = 'El email no puede tener más de 35 caracteres';
  }

  if (!data.password) {
    errors.password = 'La contraseña es requerida';
  } else if (!/\d/.test(data.password)) {
    errors.password = 'La contraseña debe contener al menos un número';
  } else if (data.password.length < 6 || data.password.length > 10) {
    errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
  }

  return errors;
}
