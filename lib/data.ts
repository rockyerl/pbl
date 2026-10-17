export const company = {
  name: "Panca Budi Logistindo",
  email: "info@pbl.co.id",
  phones: ["(021) 552 4626", "(021) 5573 0590", "(021) 5573 0591"],
  founded: "June 2008",
  social: [
    ["LinkedIn", "https://www.linkedin.com/in/pbl-indonesia/"],
    ["Instagram", "https://www.instagram.com/pancabudilogistindo/"],
    ["Facebook", "https://facebook.com/pancabudilogistindo"],
    ["YouTube", "https://www.youtube.com/results?search_query=panca+budi+logistindo"],
  ] as const,
  careerUrl: "https://www.pancabudi.com/Karir-Panca-Budi-Eng.aspx",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126935.53842240192!2d106.59098140248709!3d-6.166154428270116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x2e69f8ec291cab9b%3A0x7335a32f5ce06018!2spanca+budi+logistindo!3m2!1d-6.1661589999999995!2d106.66102199999999!5e0!3m2!1sen!2sid!4v1508140176164",
};

export const nav = [
  ["Services", "/services"],
  ["About", "/about"],
  ["Why PBL", "/why-pbl"],
  ["News", "/news"],
  ["Career", "/career"],
] as const;

export type Service = {
  slug: string; name: string; summary: string; intro: string;
  details: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "contract-logistic",
    name: "Contract logistics",
    summary: "One partner for planning, execution and control of your supply chain.",
    intro:
      "PBL works as your contract logistics partner for complex supply chains. Our integrated services cover every part of logistics: planning, execution and control. We design solutions that turn logistics challenges into a competitive advantage.",
    details: [
      { title: "Planning", text: "Logistics solutions designed around your operation." },
      { title: "Execution", text: "Warehousing, handling and distribution run by our team." },
      { title: "Control", text: "Monitoring across the whole chain, supported by our information systems." },
    ],
  },
  {
    slug: "inland-transportation",
    name: "Inland transportation",
    summary: "Domestic trucking (3PL) across Indonesia, with 1x24 hour delivery.",
    intro:
      "We run a mixed fleet to serve customers throughout Indonesia, including electronics, chemicals, food and beverage, and automotive. Delivery and operational logistics are available 1x24 hours.",
    details: [
      { title: "Container trucks", text: "20 and 40 foot container trucks." },
      { title: "Box and wing box", text: "Wing box trucks, box trucks and open tub trucks." },
      { title: "Fleet models", text: "Head trailer, tronton, Fuso, CDD, CDE and minivan." },
    ],
  },
  {
    slug: "custom-clearance-and-document-services",
    name: "Customs clearance and documents",
    summary: "Import-export and clearance handled by a professional customs team.",
    intro:
      "Long dwell times and incomplete or incorrect documents delay goods and disrupt the supply chain. PBL's import-export and clearance services are integrated with our operational systems, and our customs team handles your needs while keeping you compliant with current regulations.",
    details: [
      { title: "Shorter dwell time", text: "Documents prepared completely so cargo isn't held at the port." },
      { title: "Compliance", text: "Handling in line with applicable rules, including in-house regulations." },
      { title: "One system", text: "Clearance connected to the rest of your shipment's operation." },
    ],
  },
  {
    slug: "sea-freight",
    name: "Sea freight",
    summary: "LCL, FCL and break bulk, with one point of contact.",
    intro:
      "PBL offers professional sea freight through our One Door Service program. One call or email to customer service is enough, and we keep you informed at every step.",
    details: [
      { title: "LCL", text: "For shipments smaller than a full container, port to port, worldwide." },
      { title: "FCL", text: "Full container loads, integrated with your own operations." },
      { title: "Break bulk", text: "General cargo loaded piece by piece, outside containers and bulk." },
    ],
  },
  {
    slug: "project-cargo",
    name: "Project cargo",
    summary: "Complex moves, including remote areas with no regular shippers.",
    intro:
      "We have the expertise to handle difficult geography and operating conditions, including delivery to remote areas where no regular shippers operate.",
    details: [
      { title: "Remote areas", text: "Experience reaching locations with demanding geography." },
      { title: "Constrained conditions", text: "Operations managed within the limits of each site." },
      { title: "Project mobilization", text: "A wide network to support project moves." },
    ],
  },
  {
    slug: "air-freight",
    name: "Air freight",
    summary: "Air logistics with visibility and monitoring through our IT systems.",
    intro:
      "PBL provides air logistics solutions with efficient monitoring through our IT infrastructure. Each year we handle thousands of tons of goods in national and international markets, including remote places across the archipelago.",
    details: [
      { title: "Domestic and international", text: "Air cargo to national and overseas destinations." },
      { title: "Visibility", text: "Shipment monitoring supported by our IT infrastructure." },
      { title: "Remote reach", text: "Delivery to places across the archipelago." },
    ],
  },
];

export const strengths = [
  "Intelligent transport management system",
  "Proven track record in traditional and modern market distribution",
  "Wide network for inland transportation",
  "Export and import handling expertise",
  "Warehouse experience backed by capable people and up-to-date information systems",
  "Wide network for project mobilization",
];

export const whyPoints = [
  "One-stop logistics service (supply chain management)",
  "Warehouse management",
  "Freight forwarding service",
  "Experienced people",
  "Integrated WMS and TMS",
  "Traditional and modern market support, 24 hours",
  "Live tracking system",
  "Paperless POP and POD",
];

export const coreValues = [
  "Integrity", "Sustainable development", "Advantages", "Proactive", "Accountability",
  "Teamwork", "Balance", "Commitment", "CSR", "Empowerment", "Innovation", "Sense of belonging", "Safety",
];

export const vision =
  "To be the provider of integrated and leading logistics solutions in the world, with a commitment to provide the best service and quality to all our customers.";
export const mission =
  "Improving the quality of supply chain management services through solid information systems and technology, with competent and experienced human resources.";

const logo = (id: string, ext = "webp") => `https://www.pbl.co.id/img/client/${id}.${ext}`;
export const clients: [string, string][] = [
  ["Chandra Asri", logo("1610011623")], ["Mi Won", logo("1610011632")],
  ["Lotte Chemical", logo("1610013142")], ["Thyssenkrupp", logo("1610012388")],
  ["Chemco", logo("1610013153")], ["Sriboga", logo("1610012399")],
  ["Indah Kiat", logo("1610012414")], ["Kobe", logo("1610012429")],
  ["OT", logo("1610012437")], ["Jakarta Cereal", logo("1610013163")],
  ["GS Battery", logo("1610012697")], ["Bukaka", logo("1610012710")],
  ["Gandum Mas Kencana", logo("1610012735")], ["Dana Paint", logo("1610012724")],
  ["Dua Kelinci", logo("1610013175")], ["Julong Group", logo("1610013187")],
  ["Austasia", logo("1610013197")], ["Arena Argon Andalan", logo("1610013206")],
  ["Polytech", logo("1610013217")], ["Winokoyo Group", logo("1610013264")],
  ["Yoshinoya", logo("1610012683")], ["Panca Budi Pratama", logo("1610954039")],
  ["PT Panca Budi", logo("1610958913")], ["Polypack Indo Meyer", logo("1610959393")],
  ["Reka Mega Inti Pratama", logo("1610960112")], ["Global Digital Niaga", logo("1635748592")],
  ["Asian Paints Indonesia", logo("1640679560", "png")],
];

export const certifications = ["1610013555", "1610013596", "1610013599", "1610013603"].map(
  (id) => `https://www.pbl.co.id/img/Home/${id}.webp`,
);

export const news = [
  {
    id: 161, date: "16 Sep 2021",
    title: "Pharmaceutical imports up 66.76 percent in July 2021, mostly vaccines",
    summary: "Statistics Indonesia (BPS) reported total imports fell 12.22 percent from June, yet pharmaceutical imports rose sharply.",
    href: "https://pbl.co.id/news/detail/161/Pharmaceutical-Imports-Increase-66.76-Percent-in-July-2021--Most-for-Vaccines",
  },
  {
    id: 160, date: "5 Jun 2021",
    title: "Logistics railroad to Tanjung Perak harbor comes to life",
    summary: "KAI integrates rail with the port, launching a 10-wagon, 20 TEU service between Tanjung Perak, Surabaya and Pasoso Station, Jakarta.",
    href: "https://pbl.co.id/news/detail/160/Logistics-Railroad-to-Tanjung-Perak-Harbor-Comes-to-Life",
  },
  {
    id: 159, date: "15 Apr 2021",
    title: "Entering Ramadan and Lebaran, Bulog Madiun ensures safe rice stocks",
    summary: "Bulog Madiun says rice supply is more than sufficient to meet demand over Ramadan and Lebaran 2021.",
    href: "https://pbl.co.id/news/detail/159/Entering-Ramadan-and-Lebaran--Bulog-Madiun-Ensures-Safe-Rice-Stocks",
  },
  {
    id: 157, date: "7 Apr 2021",
    title: "Ship stuck in the Suez Canal: is Asia-Europe logistics disrupted?",
    summary: "The Ever Given ran aground in March 2021 and blocked the canal, raising questions for Asia-Europe shipping.",
    href: "https://pbl.co.id/news/detail/157/Clamped-Ship-on-the-Suez-Canal--Logistics-Asia-Europe-Disrupted-",
  },
  {
    id: 156, date: "5 Apr 2021",
    title: "Ministry of Transportation optimizes weigh bridges to curb overloaded trucks",
    summary: "The minister inspected the Tanjung weigh bridge in Brebes as part of efforts against overloaded trucks.",
    href: "https://pbl.co.id/news/detail/156/Eradicating-Overloaded-Trucks--Ministry-of-Transportation-Optimizes-Weigh-Bridges",
  },
];

export const offices = {
  head: { name: "Head office", address: "Jl. KH. Agus Salim No 15 RT 002/05, Kel. Poris Plawad, Kec. Cipondoh, Tangerang 15141" },
  branches: [
    { region: "Tangerang", items: ["Jl. Industri Raya III Blok AH, Kp. Pasir Awi RT.001/002, Desa Pasir Jaya, Cikupa, Tangerang"] },
    { region: "West Java", items: ["Kp. Kedep RT.001/RW.017, Tlajung Udik, Gunung Putri, Bogor", "Jl. Raya Bogor KM 31 RT.001/RW.005 No 62, Cisalak, Sukmajaya, Depok"] },
    { region: "Central Java", items: ["Jl. Raya Solo Tawangmangu KM 9 No 6, Dusun V, Karanganyar", "Jl. Widoro Kandang, Ngringo, Jaten, Karanganyar", "Jl. Siliwangi 424 Ruko B Lantai 2, Kalibanteng Kulon, Semarang Barat (024 7643 5885)"] },
    { region: "East Java", items: ["Jl. Erlangga No 7-9, Kuthuk, Sidokare, Sidoarjo"] },
  ],
};
