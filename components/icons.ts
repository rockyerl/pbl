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

import { Route, TrendingUp, Globe, Construction, ShieldCheck, Leaf, Star, Zap, ClipboardCheck, Scale, Handshake, HeartHandshake, Rocket, Lightbulb, House, HardHat } from "lucide-react";

/** Urutan mengikuti `strengths` di lib/data.ts */
export const strengthIcons: LucideIcon[] = [Route, TrendingUp, Network, Globe, Warehouse, Construction];

/** Dipetakan berdasarkan nama nilai di `coreValues` */
export const valueIcons: Record<string, LucideIcon> = {
    "Integrity": ShieldCheck,
    "Sustainable development": Leaf,
    "Advantages": Star,
    "Proactive": Zap,
    "Accountability": ClipboardCheck,
    "Teamwork": Users,
    "Balance": Scale,
    "Commitment": Handshake,
    "CSR": HeartHandshake,
    "Empowerment": Rocket,
    "Innovation": Lightbulb,
    "Sense of belonging": House,
    "Safety": HardHat,
};