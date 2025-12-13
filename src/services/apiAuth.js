import supabase, { supabaseUrl } from "./supabase";

//SIGN UP
export async function signup({ fullname, email, password, phone }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullname,
        phone,
        avatar: "",
        address: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

//LOGIN
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data, error;
}

//GET CURRENT USER WITH SESSION [Session creates when email verification is on]
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  //No Session -> so user
  if (!session.session) return null;

  //Fetch user
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data.user;
}

//LOGOUT
export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({
  password,
  fullname,
  avatar,
  phone,
  address,
}) {
  //1. Update password or fullname

  let updateData;
  if (password) updateData = { password };
  if (fullname || phone || address)
    updateData = { data: { fullname, phone, address } };
  // if (phone) updateData = { data: { phone } };
  // if (address) updateData = { data: { address } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  //2.Upload the avatar image

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  //3. Update avatar in the user

  const { data: updateUser, error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error.message);

  return updateUser;
}
