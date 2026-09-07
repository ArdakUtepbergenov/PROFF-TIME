import { Project } from "@/lib/constants";
import MediaSlot from "@/components/ui/MediaSlot";

export default function ProjectFeatured({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden">
      <MediaSlot
        src={project.imagePath}
        alt={project.imageLabel}
        variant="dark"
        aspect="aspect-[16/9]"
        fit="cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent transition-opacity duration-300 group-hover:from-navy/95" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
        <p className="eyebrow">Главный объект</p>
        <h3 className="mt-2 max-w-lg font-display text-2xl font-bold leading-tight text-white md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-cloud">{project.location}</p>
      </div>
    </div>
  );
}
