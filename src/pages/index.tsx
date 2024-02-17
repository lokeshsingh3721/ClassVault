import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-28">
      {/* Hero section */}
      <section className="flex flex-col justify-center items-center mb-10 ">
        <div className="w-4/5 h-auto flex justify-center  ">
          <Image
            src={"/images/logo.png"}
            alt="logo "
            width={400}
            height={200}
            quality={100}
            priority={true}
          />
        </div>

        <p className=" text-2xl text-center pt-3 px-3 italic  font-medium ">
          Better workflow for the students and the teachers!
        </p>
      </section>
      {/* syllabus section  */}
      <section className="flex flex-col  justify-center items-center mb-10 ">
        <div className="w-4/5 h-auto relative">
          <Image
            src={"/images/syllabus.png"}
            alt="syllabus image"
            width={400}
            height={200}
            quality={100}
            priority={true}
            className="w-full"
          />
        </div>

        <h2 className="text-xl py-2 text-primaryDark text-center ">
          Get your syllabus{" "}
          <Link
            href={"/syllabus"}
            className="underline cursor-pointer text-accentDark italic "
          >
            right here!
          </Link>
        </h2>
        <p className="text-center font-light px-3 italic ">
          Discover Your Entire Syllabus Effortlessly in One Centralized Hub for
          Seamless Academic Planning!
        </p>
      </section>
      {/*  notes section  */}
      <section className="flex flex-col  justify-center items-center mb-10 ">
        <div className="w-4/5 h-auto ">
          <Image
            src={"/images/notes.png"}
            alt="notes image"
            width={400}
            height={200}
            className="w-full"
            quality={100}
            priority={true}
          />
        </div>

        <h2 className="text-xl py-2 text-primaryDark text-center ">
          Want &nbsp;
          <Link
            href={"/notes"}
            className="underline cursor-pointer text-accentDark italic "
          >
            Notes?
          </Link>
        </h2>
        <p className="text-center font-light px-3 italic ">
          Simplify note downloads with ClassVault, making it easy for students
          and teachers to access essential materials effortlessly.
        </p>
      </section>
      {/* assignment section */}
      <section className="flex flex-col  justify-center items-center mb-10 ">
        <div className="w-4/5 h-auto flex justify-center  ">
          <Image
            src={"/images/assignment.png"}
            alt="assignment image"
            width={250}
            height={200}
            quality={100}
            priority={true}
            className=""
          />
        </div>

        <h2 className="text-xl py-2 text-primaryDark text-center ">
          Get Assignments &nbsp;
          <Link
            href={"/assignment"}
            className="underline cursor-pointer text-accentDark italic "
          >
            Here!
          </Link>
        </h2>
        <p className="text-center font-light px-3 italic ">
          Download assignments effortlessly with ClassVault: the ultimate tool
          for seamless access to course materials, empowering both students and
          teachers alike.
        </p>
      </section>
    </div>
  );
}
