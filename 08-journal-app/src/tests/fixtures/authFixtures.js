export const initialState = {
  status: "checking",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const savingState = {
  status: "checking",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
  isSaving: true,
};

export const authenticatedState = {
  status: "authenticated",
  uid: "123ABC",
  email: "demo@google.com",
  displayName: "demo user",
  photoURL: "https://demo.jpg",
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: "not-authenticated",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
  uid: "ABC123",
  email: "demo@google.com",
  displayName: "demo user",
  photoURL: "https://demo.jpg",
};
