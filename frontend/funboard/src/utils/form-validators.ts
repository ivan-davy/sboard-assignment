export function validateRegisterForm({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  if (!name.trim()) {
    return 'Username required';
  }
  if (!email) {
    return 'Email required';
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    return 'Email address is invalid';
  }
  if (!password) {
    return 'Password is required';
  } else if (password.length < 3) {
    return 'Password needs to be 3 characters or more';
  }
  return null;
}

export function validateLoginForm({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  if (!email) {
    return 'Email required';
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    return 'Email address is invalid';
  }
  if (!password) {
    return 'Password is required';
  } else if (password.length < 3) {
    return 'Password needs to be 3 characters or more';
  }
  return null;
}
