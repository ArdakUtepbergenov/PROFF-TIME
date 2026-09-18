import { Project } from "@/lib/constants";
import { getProjectKk } from "@/lib/i18n/content.kk";
import type { Locale } from "@/lib/i18n/locale";
import MediaSlot from "@/components/ui/MediaSlot";

export default function ProjectSecondary({ project, locale = "ru" }: { project: Project; locale?: Locale }) {
  const kk = getProjectKk(project.id);
  const name = locale === "kk" ? kk?.name ?? project.name : project.name;
  const location = locale === "kk" ? kk?.location ?? project.location : project.location;

  return (
    <div className="group relative overflow-hidden">
      <MediaSlot
        src={project.imagePath}
        alt={name}
        variant="dark"
        aspect="aspect-[4/3]"
        fit="cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <h3 className="font-display text-lg font-bold leading-tight text-white md:text-xl">
          {name}
        </h3>
        <p className="mt-1 text-xs text-cloud">{location}</p>
      </div>
    </div>
  );
}
