import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../services/supabase";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  //Check whether user is already logged in
  useEffect(() => {
    async function getSession() {
      const { data, error } = await supabase.auth.getSession();

      const sessionUser = data.session?.user ?? null;

      if (error) {
        console.error("Error getting session", error);
        setUser(null);
        setIsAuthLoading(false);
        return;
      }

      if (sessionUser) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("fullname")
          .eq("id", sessionUser.id)
          .single();

        setUser({ ...sessionUser, fullname: profile?.fullname || "" });
      } else {
        setUser(null);
      }

      setIsAuthLoading(false);
    }

    getSession();

    //Listen Login/Logout changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        const sessionUser = session?.user ?? null;

        if (sessionUser) {
          const { data: profile } = await supabase
            .from("profiles")
            .select("fullname")
            .eq("id", sessionUser.id)
            .single();

          setUser({ ...sessionUser, fullname: profile?.fullname || "" });
        } else {
          setUser(null);
        }
      }
    );
    return () => listener.subscription.unsubscribe();
  }, []);

  //Signup with email and password
  async function signUp({ email, password, fullname }) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    const userId = data.user?.id;

    if (userId) {
      const { error: profileError } = await supabase
        .from("profiles")
        .insert([{ id: userId, fullname }]);

      if (profileError) throw profileError;
    }

    return data;
  }

  //Log in
  async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return data;
  }

  //Log out
  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthLoading, signUp, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("AuthContext was used outside of AuthProvider");

  return context;
}

export { AuthProvider, useAuth };
