import { Button, Typography } from "@mui/material";
import Image from "next/image";
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className=" m-5 mb-20 p-5 bg-slate-700 rounded-lg xl:flex">
      <div className="flex justify-center xl:w-[25vw]">
        <div className="pl-6 relative w-1/3 mb-5 aspect-square">
          <Image
            alt={project.title}
            src={project.img}
            fill
            style={{
              objectFit: "cover",
            }}
            className="rounded-full"
          />
        </div>
      </div>
      <section className="">
        <Typography variant="h5" component="h2">
          {project.title}
        </Typography>
        {project.description.map((desc, index) => {
          return (
            <Typography variant="body1" component="p" key={index}>
              {desc}
            </Typography>
          );
        })}
        {project.link.map((link, index) => {
          return (
            <Button
              key={index}
              variant="contained"
              href={link.href}
              target="_blank"
              className="mt-2 mr-2"
            >
              {link.text}
            </Button>
          );
        })}
      </section>
    </article>
  );
};

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    // <main className="w-screen h-screen overflow-scroll">
    <main>
      <Typography variant="h4" component="h2" className="p-5 font-bold mt-10">
        Projects
      </Typography>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </main>
  );
}
