import { Container, Truck, FileText, Ship, PackageOpen, Plane, Layers, Warehouse, Users, Network, Clock, MapPinned, FileCheck2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "contract-logistic": Warehouse,
  "inland-transportation": Truck,
  "custom-clearance-and-document-services": FileText,
  "sea-freight": Ship,
  "project-cargo": PackageOpen,
  "air-freight": Plane,
};
export const whyIcons: LucideIcon[] = [Layers, Container, Ship, Users, Network, Clock, MapPinned, FileCheck2];
