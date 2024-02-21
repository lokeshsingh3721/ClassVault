async function signupHandler({
  userType,
  name,
  email,
  college,
  collegeRollNo,
  course,
  semester,
  subject,
  password,
}: SignUp) {
  try {
    if (userType?.toLowerCase() === "student") {
      const id = await fetch(
        `api/getId?college=${college.toLowerCase()}&course=${course.toLowerCase()}&semester=${semester.toLowerCase()}}`
      );

      // got all the id
      const allId = await id.json();

      const collegeId: string = allId?.data[0]._id;
      const semesterId: string = allId?.data[1]._id;
      const courseId: string = allId?.data[2]._id;

      const data = {
        userType,
        name: name,
        username: email,
        college: collegeId,
        semester: semesterId,
        rollNo: collegeRollNo,
        course: courseId,
        password: password,
      };

      const res = await fetch(`/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const studentDetails = await res.json();

      // set the state
    }

    if (userType?.toLowerCase() === "teacher") {
      const ans = subject?.toLowerCase().split(" ").join("_");
      console.log(ans);
      const id = await fetch(
        `api/getId?college=${college.toLowerCase()}&course=${course.toLowerCase()}&semester=${semester.toLowerCase()}&subject=${subject
          ?.toLowerCase()
          .split(" ")
          .join("_")}`
      );

      // got all the id
      const allId = await id.json();

      const collegeId: string = allId?.data[0]._id;
      const semesterId: string = allId?.data[1]._id;
      const courseId: string = allId?.data[2]._id;
      const SubjectId: string = allId?.data[3]._id;

      const data = {
        userType,
        name: name,
        username: email,
        college: collegeId,
        semester: semesterId,
        subject: SubjectId,
        course: courseId,
        password: password,
      };

      const res = await fetch(`/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return res.json();
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
}

export default signupHandler;
