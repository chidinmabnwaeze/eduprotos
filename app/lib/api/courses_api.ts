import { supabase } from "../supabaseClient";

//get courses api
export const getCourses = async () => {
  const { data, error } = await supabase.from("courses").select(`
      *,
      lecturer:lecturer_id(full_name)
    `)
    .eq("lecturer_id", 'f88a42ba-adbc-4140-a897-8bd2dde5aa77');
  return { data, error };
};


export const getLecturers = async () => {
  const { data, error } = await supabase.from("profiles").select(`
      *
    `);
  return { data, error };
};

export const getLecturerById = async (lecturer_id: number | string) => {
  const { data, error } = await supabase
    .from("profiles")
    .select(`*`)
    .eq("id", lecturer_id)
    .maybeSingle();  
  return { data, error };
}


export const getCourseById = async (courseId: number) => {
  const { data, error } = await supabase
    .from("courses")
    .select(`*, lecturer:lecturer_id(full_name)`)
    .eq("id", courseId)
    .single();  
  return { data, error };
}

//post course api
// export const postCourse = async (course: { title: string }) => {
//   const { data, error } = await supabase.from("courses").insert([
//     {
//       title: course.title,
//     },
//   ]);
//   return { data, error };
// };

export const postCourse = async (course: {
  title: string;
  code: string;
  lecturer_id?: string;
}) => {
  const {data, error} = await supabase.from("courses").insert([
    {
      course_title: course.title,
      course_code: course.code,
      lecturer_id: course.lecturer_id,
      // name: course.profiles?.full_name,
    },
  ]);
  return {data, error};
};

//delete course api
export const deleteCourse = async (courseId: number) => {
  const { data, error } = await supabase
    .from("courses")
    .delete()
    .eq("id", courseId);
  return { data, error };
};
