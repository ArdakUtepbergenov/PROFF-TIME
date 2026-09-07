import { Project } from "@/lib/constants";
import MediaSlot from "@/components/ui/MediaSlot";

export default function ProjectSecondary({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden">
      <MediaSlot
        src={project.imagePath}
        alt={project.imageLabel}
        variant="dark"
        aspect="aspect-[4/3]"
        fit="cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <h3 className="font-display text-lg font-bold leading-tight text-white md:text-xl">
          {project.name}
        </h3>
        <p className="mt-1 text-xs text-cloud">{project.location}</p>
      </div>
    </div>
  );
}
