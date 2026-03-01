import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const signUpUser = createAsyncThunk(
  "auth.signup",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      console.log(user);
      await delay(1000);
      return { uid: user.uid, email: user.email };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth.login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      console.log(user);
      await delay(1000);
      return { uid: user.uid, email: user.email };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const loginwithGoogle = createAsyncThunk(
  "auth.loginWithGoogle",
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      await delay(1000);
      return { uid: user.uid, email: user.email };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const signInGuest = createAsyncThunk(
  "auth.signInGuest",
  async (_, { rejectWithValue }) => {
    try {
      const userCredential = await signInAnonymously(auth);
      const user = userCredential.user;
      console.log(user);
      await delay(1000);
      return { uid: user.uid, email: null };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logOutUser = createAsyncThunk("auth.LogOut", async () => {
  try {
    await auth.signOut();
    return null;
  } catch (error) {
    return error.message;
  }
});

export const resetPassword = createAsyncThunk(
  "auth.resetPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      console.log('email is being sent to reset password function:', email);
      await sendPasswordResetEmail(auth, email);
      console.log('Password reset email sent successfully');
      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginwithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginwithGoogle.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginwithGoogle.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signInGuest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInGuest.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signInGuest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logOutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default AuthSlice.reducer;
