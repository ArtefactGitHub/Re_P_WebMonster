import { generateAuthActions } from "redux-token-auth"
import Settings from "./application"

const config = {
  authUrl: Settings.AUTH_URL,
  userAttributes: {
    name: "name",
    image: "image",
  },
  userRegistrationAttributes: {
    name: "name",
  },
  storage: {
    flushGetRequests: false,
  },
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export { registerUser, signInUser, signOutUser, verifyCredentials }
