import { Typography } from "@mui/material";
export default function AboutMe() {
  return (
    <main className="p-5 ">
      <Typography variant="h4" component="h2" className="p-5 font-bold">
        About Me
      </Typography>
      <section className="flex justify-between  xl:mr-52 xl:mt-10 xl:ml-52">
        <div className="h-[60vh] w-4 grid justify-between bg-slate-950 relative ">
          <div className="h-10 w-10 rounded-full relative  -left-3 bg-purple-700"></div>
          <div className="h-10 w-10 rounded-full relative  -left-3 bg-purple-700"></div>
          <div className="h-10 w-10 rounded-full relative  -left-3 bg-purple-700"></div>
          <div className="h-10 w-10 rounded-full relative  -left-3 bg-purple-700"></div>
        </div>
        <div className="grid ml-10">
          <div>
            <strong>2019:</strong> Graduated from high school with 94%
          </div>
          <div>
            <strong>2021:</strong> Enrolled in Graphic Era Hill University
          </div>
          <div>
            <strong>2022:</strong> Created 4+ play store apps with 10000+ users
          </div>
          <div>
            <strong>2023:</strong> Currently in the 3rd year of college with a
            Cumulative Grade Point Average (CGPA) of 8.9
          </div>
        </div>
      </section>
    </main>
  );
}
