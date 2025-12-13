import supabase from "./supabase";

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
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

//without phone number
// export async function signup({ fullname, email, password }) {
//   const { data, error } = await supabase.auth.signUp({
//     email,
//     password,
//     options: {
//       data: {
//         fullname,
//         avatar: "",
//       },
//     },
//   });

//   if (error) throw new Error(error.message);

//   return data;
// }

// const user = data.user;
//   await supabase.auth.signInWithPassword({ email, password });

//   const { error: profileError } = await supabase.from("profiles").upsert(
//     {
//       id: user.id,
//       fullname,
//       phonenumber: phone,
//       avatar: "",
//     },
//     { onConflict: "id" }
//   );

//   if (profileError) {
//     console.error("Profile insertion error:", profileError);
//     throw new Error("Signup succeeded but profile creation failed.");
//   }

//LOGIN
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

//GET CURRENT USER (When SESSION is not creating)
export async function getCurrentUserNoSession() {
  //Fetch user
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) return null;

  if (error) {
    return null;
  }

  return user;
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

//UPDATE CURRENT USER
export async function updateCurrentUser({ fullname, password }) {
  //1. Update password or fullname
  const {
    data: { user },
    error: getUserError,
  } = await supabase.auth.getUser();

  if (getUserError) throw new Error(getUserError.message);

  const updateData = {};
  if (password) {
    updateData.password = password;
  }

  if (fullname) {
    updateData.data = { fullname };
  }

  //Update User
  // if(Object.keys(updateData).length > 0)
  const { error: userError } = await supabase.auth.updateUser(updateData);
  if (userError) throw new Error(userError.message);

  //Update Profile
  if (fullname) {
    const { error: profileError } = await supabase
      .from("profiles")
      .update({ fullname })
      .eq("id", user.id);

    if (profileError) throw new Error(profileError.message);
  }

  return { success: true };
}

//If profile is not created, create it
export async function createProfileIfMissing() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile) {
    console.log("Creating profile for verified user...");

    const { error } = await supabase.from("profiles").insert({
      id: user.id,
      fullname: user.user_metadata.fullname,
      phonenumber: user.user_metadata.phone,
      avatar: "",
    });

    if (error) console.error("Profile creation failed:", error);
  }
}

// export async function updateCurrentUser({ password }) {
//   //1. Update password or fullname

//   let updateData;
//   if (password) updateData = { password };
//   if (fullname) updateData = { data: { fullname } };

//   const { data, error } = await supabase.auth.updateUser(updateData);

//   if (error) throw new Error(error.message);
//   if (!avatar) return data;

//   //2.Upload the avatar image

//   const fileName = `avatar-${data.user.id}-${Math.random()}`;

//   const { error: storageError } = await supabase.storage
//     .from("avatars")
//     .upload(fileName, avatar);

//   if (storageError) throw new Error(storageError.message);

//   //3. Update avatar in the user

//   const { data: updateUser, error2 } = await supabase.auth.updateUser({
//     data: {
//       avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
//     },
//   });

//   if (error2) throw new Error(error.message);

//   return updateUser;
// }
