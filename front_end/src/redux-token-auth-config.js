import { generateAuthActions } from "redux-token-auth"
import Settings from "./config/application"

// authUrl,
const config = {
  authUrl: Settings.AUTH_URL,
  userAttributes: {
    name: "name",
    image: "image",
  },
  userRegistrationAttributes: {
    name: "name",
  },
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export { registerUser, signInUser, signOutUser, verifyCredentials }
