import { Project } from "@/lib/constants";
import { getProjectKk } from "@/lib/i18n/content.kk";
import { t } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locale";
import MediaSlot from "@/components/ui/MediaSlot";

export default function ProjectFeatured({ project, locale = "ru" }: { project: Project; locale?: Locale }) {
  const dict = t(locale);
  const kk = getProjectKk(project.id);
  const name = locale === "kk" ? kk?.name ?? project.name : project.name;
  const location = locale === "kk" ? kk?.location ?? project.location : project.location;

  return (
    <div className="group relative overflow-hidden">
      <MediaSlot
        src={project.imagePath}
        alt={name}
        variant="dark"
        aspect="aspect-[16/9]"
        fit="cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent transition-opacity duration-300 group-hover:from-navy/95" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
        <p className="eyebrow">{dict.projects.featured}</p>
        <h3 className="mt-2 max-w-lg font-display text-2xl font-bold leading-tight text-white md:text-3xl">
          {name}
        </h3>
        <p className="mt-2 text-sm text-cloud">{location}</p>
      </div>
    </div>
  );
}
