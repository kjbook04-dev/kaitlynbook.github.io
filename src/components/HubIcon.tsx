import {
  Briefcase,
  FolderHeart,
  Mail,
  PenLine,
  Sparkles,
  User
} from "lucide-react";

const iconMap = {
  user: User,
  briefcase: Briefcase,
  sparkles: Sparkles,
  "pen-line": PenLine,
  "folder-heart": FolderHeart,
  mail: Mail
};

export type HubIconName = keyof typeof iconMap;

interface HubIconProps {
  name: HubIconName;
  className?: string;
}

export function HubIcon({ name, className }: HubIconProps) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon className={className} />;
}
