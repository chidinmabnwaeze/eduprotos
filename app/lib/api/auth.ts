import { supabase } from "../supabaseClient";

export const register = async (formData: {
  name: string;
  email: string;
  department: string;
  password: string;
}) => {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        full_name: formData.name,
        department: formData.department,
      },
    },
  });
  return { authData, authError };
};

//get current user
export const getCurrentUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

export const getUser = async (userId: string) => {
  const { data, error } = await supabase
    .from("profiles")
    .select(`*`)
    .eq("id", userId)
    .single();
  return { data, error };
};
