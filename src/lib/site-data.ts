
export const BRAND_IMAGES = {
  greenhouse: "/brand/tech-greenhouse-sensing.jpg",
  drone: "/brand/tech-drone-field.jpg",
  control: "/brand/sylution-control.png",
  training: "/brand/sylution-training.jpg",
  solar: "/brand/tech-solar-controller.jpg",
  lab: "/brand/sylution-lab.jpg",
  irrigation: "/brand/sylution-irrigation.jpg",
  electronics: "/brand/tech-electronics-bench.jpg",
  team: "/brand/sylution-team.jpg",
  harvest: "/brand/sylution-harvest.jpg",
  pcb: "/brand/tech-arduino-prototyping.jpg",
  iotLab: "/brand/tech-sensor-lab.jpg",
  robotics: "/brand/tech-robotics-arm.jpg",
  ai: "/brand/tech-ai-agri-data.jpg",
  techTraining: "/brand/tech-training.jpg",
  device: "/brand/tech-iot-node.jpg",
  city: "/brand/tech-city.jpg",
  sysmart: "/brand/sysmart-agro.png",
  exhibition1: "/brand/exhibition-1.jpg",
  exhibition2: "/brand/exhibition-2.jpg",
  exhibition3: "/brand/exhibition-3.jpg",
  exhibition4: "/brand/exhibition-4.jpg",
  exhibition5: "/brand/exhibition-5.jpg",
};
export const LOGO_SRC = "/brand/sylution-logo.webp";

export const U = (id: string, w = 1600, h = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const CONTACT = {
  company: "SYLUTION LTD",
  legalName: "SYLUTION LTD",
  address: "Technology Incubation Centre (TIC), Farm Centre, Kano, Nigeria",
  email: "officialsylution@gmail.com",
  phones: ["+2349117957946", "+2349063436048"],
  whatsapp: "2349063436048",
  hours: "Monday to Friday, 9:00 to 17:00 WAT",
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61553057467392" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/sylution/" },
    { name: "Instagram", href: "https://www.instagram.com/official_sylution" },
    { name: "TikTok", href: "https://www.tiktok.com/@sylution" },
    { name: "X", href: "https://x.com/sylution_ng" },
    { name: "WhatsApp", href: "https://wa.me/2349063436048" },
  ],
};

export type Solution = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  summary: string;
  capabilities: string[];
  outcomes: { label: string; value: string }[];
};

const STATUS = (status: string) => [
  { label: "Current status", value: status },
  { label: "Engineering", value: "In house, Kano" },
  { label: "Availability", value: "On request" },
];

export const SOLUTIONS: Solution[] = [
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    tagline: "Intelligence for agriculture",
    image: BRAND_IMAGES.ai,
    summary:
      "AI systems, agricultural intelligence, computer vision, analytics and intelligent decision support built on data collected in the field.",
    capabilities: [
      "Computer vision for crop and field imagery",
      "Agricultural data intelligence",
      "Predictive analytics and advisory",
      "Anomaly detection on live sensor data",
      "Edge inference on low cost hardware",
    ],
    outcomes: STATUS("Active Development"),
  },
  {
    slug: "iot",
    title: "Internet of Things",
    tagline: "Sensing, connecting, automating",
    image: BRAND_IMAGES.iotLab,
    summary:
      "Sensors, connected devices, embedded systems, smart monitoring, data collection and automation designed for farms and remote sites.",
    capabilities: [
      "Sensor node and controller design",
      "GSM, Wi-Fi and wireless connectivity",
      "Data collection and cloud storage",
      "Offline capable field operation",
      "Realtime dashboards and alerts",
    ],
    outcomes: STATUS("Field Deployment & Testing"),
  },
  {
    slug: "electronics",
    title: "Electronics and Embedded Systems",
    tagline: "Controllers, sensors, firmware",
    image: BRAND_IMAGES.pcb,
    summary:
      "Controllers, sensors, microcontrollers, hardware systems and smart electronic systems designed and assembled in our Kano workspace.",
    capabilities: [
      "Circuit and PCB design",
      "ESP32, STM32 and Arduino platforms",
      "Firmware and low power design",
      "Sensor selection and calibration",
      "System assembly and testing",
    ],
    outcomes: STATUS("In Development"),
  },
  {
    slug: "embedded-systems",
    title: "Embedded Firmware",
    tagline: "Software close to the hardware",
    image: BRAND_IMAGES.electronics,
    summary:
      "Low power firmware and control software for microcontroller class hardware, written for reliability in dust, heat and unstable power.",
    capabilities: [
      "Bare metal and RTOS firmware",
      "Battery and power optimisation",
      "Sensor drivers and protocols",
      "Over the air update support",
      "Hardware in the loop testing",
    ],
    outcomes: STATUS("In Development"),
  },
  {
    slug: "robotics",
    title: "Robotics",
    tagline: "Education, automation, machines",
    image: BRAND_IMAGES.robotics,
    summary:
      "Robotics education, automation and intelligent machines, from teaching kits to experimental agricultural mechanisms.",
    capabilities: [
      "Robotics education and kits",
      "Mechatronic design and actuation",
      "Automation experiments",
      "Sensor guided motion",
      "Practical student projects",
    ],
    outcomes: STATUS("Development"),
  },
  {
    slug: "drone-technology",
    title: "Drone Technology",
    tagline: "Aerial observation and mapping",
    image: BRAND_IMAGES.drone,
    summary:
      "Agricultural observation, mapping, monitoring, data collection and practical drone training for farms and institutions.",
    capabilities: [
      "Farm observation and monitoring",
      "Mapping and imagery collection",
      "Agricultural data capture",
      "Practical demonstrations",
      "Drone technology training",
    ],
    outcomes: STATUS("Development"),
  },
  {
    slug: "solar-technology",
    title: "Solar Technology",
    tagline: "Clean power for connected systems",
    image: BRAND_IMAGES.solar,
    summary:
      "Solar powered technology supporting agricultural and IoT systems where grid power is weak, expensive or unavailable.",
    capabilities: [
      "Solar powered device platforms",
      "Battery and charge management",
      "Pump and motor power support",
      "Energy monitoring",
      "Off grid installation support",
    ],
    outcomes: STATUS("Development"),
  },
  {
    slug: "smart-agriculture",
    title: "Smart Agriculture",
    tagline: "AI and IoT applied to farming",
    image: BRAND_IMAGES.greenhouse,
    summary:
      "Our main application area: sensor driven irrigation, greenhouse monitoring, farm dashboards and AI advisory built on one connected core.",
    capabilities: [
      "Smart irrigation control",
      "Greenhouse monitoring",
      "Soil, weather and tank sensing",
      "AI crop advisory research",
      "Farm records and monitoring",
    ],
    outcomes: STATUS("Active Development & Field Deployment"),
  },
  {
    slug: "precision-agriculture",
    title: "Precision Agriculture",
    tagline: "Right input, right place, right time",
    image: BRAND_IMAGES.drone,
    summary:
      "Field zoning, aerial imagery and data guided operations so every unit of water and input goes where it returns most.",
    capabilities: [
      "Field zoning and sampling maps",
      "Aerial imagery analysis",
      "Data guided input planning",
      "Yield and performance tracking",
      "Input cost analytics",
    ],
    outcomes: STATUS("Active Research"),
  },
  {
    slug: "digital-agriculture",
    title: "Digital Agriculture",
    tagline: "One record for every field",
    image: BRAND_IMAGES.control,
    summary:
      "Farm management records, traceability and digital data that make an operation measurable for farmers, lenders and partners.",
    capabilities: [
      "Farm management records",
      "Input and harvest traceability",
      "Digital farmer registries",
      "Reporting for partners",
      "Offline first mobile use",
    ],
    outcomes: STATUS("Development"),
  },
  {
    slug: "smart-irrigation",
    title: "Smart Irrigation",
    tagline: "Water, delivered by data",
    image: BRAND_IMAGES.irrigation,
    summary:
      "Controllers and sensors that read soil moisture and climate, then deliver the water each block actually needs.",
    capabilities: [
      "Soil moisture sensor networks",
      "Solar capable pump automation",
      "Drip and sprinkler control",
      "Mobile scheduling on weak networks",
      "Dry run and leak protection",
    ],
    outcomes: STATUS("Active Development & Field Deployment"),
  },
  {
    slug: "drip-irrigation",
    title: "Drip Irrigation",
    tagline: "Efficient water delivery",
    image: BRAND_IMAGES.irrigation,
    summary:
      "Efficient irrigation technology that puts water at the root zone, with the option to connect it to sensors and smart control.",
    capabilities: [
      "Drip layout and design support",
      "Filtration and pressure management",
      "Fertigation compatibility",
      "Sensor and controller integration",
      "Installation and maintenance guidance",
    ],
    outcomes: STATUS("Testing"),
  },
  {
    slug: "greenhouse",
    title: "Greenhouse Technology",
    tagline: "Controlled environment farming",
    image: BRAND_IMAGES.greenhouse,
    summary:
      "Modern greenhouse agriculture with technology integration for climate monitoring, irrigation and year round production.",
    capabilities: [
      "Greenhouse setup guidance",
      "Climate and humidity monitoring",
      "Ventilation and cooling control",
      "Irrigation and fertigation integration",
      "Remote monitoring",
    ],
    outcomes: STATUS("Development"),
  },
  {
    slug: "livestock-technology",
    title: "Livestock Technology",
    tagline: "Modern livestock management",
    image: BRAND_IMAGES.harvest,
    summary:
      "Technology assisted livestock monitoring, environment sensing and digital record keeping for modern livestock management.",
    capabilities: [
      "Environment and shelter monitoring",
      "Water and feed monitoring concepts",
      "IoT for livestock research",
      "Digital livestock records",
      "Alerts and reporting",
    ],
    outcomes: STATUS("Research phase"),
  },
  {
    slug: "agricultural-data",
    title: "Agricultural Data",
    tagline: "From readings to decisions",
    image: BRAND_IMAGES.control,
    summary:
      "Data collection, storage and visualisation that turn continuous field readings into dashboards and evidence.",
    capabilities: [
      "Time series data pipelines",
      "Farm and block level dashboards",
      "Data quality and validation",
      "Reporting and exports",
      "Model ready datasets",
    ],
    outcomes: STATUS("Development"),
  },
  {
    slug: "farmer-training",
    title: "Technology Training",
    tagline: "Technology only works when people do",
    image: BRAND_IMAGES.techTraining,
    summary:
      "Practical, hands on training in AI, IoT, modern agriculture, livestock technology, robotics and drone technology.",
    capabilities: [
      "Hands on practical sessions",
      "English, Hausa and French delivery",
      "Youth and women programmes",
      "Student and institution cohorts",
      "Follow up and mentorship",
    ],
    outcomes: STATUS("Ongoing"),
  },
  {
    slug: "research",
    title: "Research and Innovation",
    tagline: "Evidence before deployment",
    image: BRAND_IMAGES.lab,
    summary:
      "Applied research in AI, IoT, electronics, robotics and smart agriculture, moving from problem to system validation in the field.",
    capabilities: [
      "Applied engineering research",
      "Dataset creation and labelling",
      "System development",
      "Bench and field testing",
      "Documentation and reporting",
    ],
    outcomes: STATUS("Ongoing research"),
  },
];

export const IOT_APPLICATIONS: { group: string; items: string[] }[] = [
  {
    group: "Smart Agriculture",
    items: [
      "Smart Agriculture IoT",
      "Smart Irrigation Controllers",
      "Greenhouse Monitoring",
      "Soil and Climate Sensing",
      "Farm Automation",
    ],
  },
  {
    group: "Agricultural Monitoring",
    items: [
      "Weather Monitoring",
      "Water Level and Tank Monitoring",
      "Livestock Monitoring",
      "Environmental Monitoring",
      "Remote Farm Supervision",
    ],
  },
  {
    group: "Energy and Power",
    items: [
      "Solar Powered Devices",
      "Energy Monitoring",
      "Pump and Motor Control",
      "Battery and Power Management",
      "Off Grid Operation",
    ],
  },
  {
    group: "Platform and Intelligence",
    items: [
      "Sensor Networks",
      "Wireless Communication",
      "Cloud Data Collection",
      "Edge Computing",
      "Dashboards and Realtime Monitoring",
    ],
  },
];

export const IOT_STACK: { layer: string; title: string; detail: string }[] = [
  {
    layer: "01",
    title: "Sense",
    detail: "Rugged sensor nodes measure soil, climate, energy, water, motion, location and machine state.",
  },
  {
    layer: "02",
    title: "Connect",
    detail: "LoRaWAN, NB-IoT, GSM and Wi-Fi gateways move data reliably from remote sites with weak coverage.",
  },
  {
    layer: "03",
    title: "Compute",
    detail: "Edge controllers act locally in milliseconds and keep working when the network drops.",
  },
  {
    layer: "04",
    title: "Analyse",
    detail: "Cloud pipelines, machine learning and computer vision turn raw streams into predictions.",
  },
  {
    layer: "05",
    title: "Act",
    detail: "Dashboards, alerts and automated control close the loop on pumps, valves, motors and alarms.",
  },
];

export const AI_CAPABILITIES = [
  { title: "Agricultural AI", detail: "Crop stress detection, irrigation advisory and yield insight research." },
  { title: "Computer Vision", detail: "Detection and counting from camera and drone imagery." },
  { title: "Machine Learning", detail: "Models trained on locally collected, domain specific data." },
  { title: "Predictive Analytics", detail: "Forecasting water need, failure risk and crop performance." },
  { title: "AI Automation", detail: "Closed loop control driven by model output rather than manual checks." },
  { title: "AI Assistants", detail: "Voice and chat advisory in English, Hausa and French." },
  { title: "Decision Support", detail: "Ranked recommendations with the evidence behind them." },
  { title: "Agricultural Data", detail: "Clean, structured farm records that models and people can both use." },
];

export const ELECTRONICS_CAPABILITIES = [
  { title: "PCB Design", detail: "Multilayer layout, signal integrity and design for manufacture." },
  { title: "Circuit Design", detail: "Analogue, digital and power electronics from concept to schematic." },
  { title: "Embedded Hardware", detail: "ESP32, STM32, Arduino and Raspberry Pi based platforms." },
  { title: "Sensors", detail: "Selection, calibration and conditioning for harsh environments." },
  { title: "Product Design", detail: "Enclosures, thermal design and ingress protection." },
  { title: "Device Manufacturing", detail: "Assembly, programming and batch production." },
  { title: "Testing Laboratory", detail: "Functional, thermal, power and endurance testing." },
  { title: "Firmware Development", detail: "Reliable low power firmware with secure updates." },
];

export const LABS = [
  { name: "IoT workbench", detail: "Device bring up, sensor testing and connectivity checks.", image: BRAND_IMAGES.iotLab },
  { name: "AI and data work", detail: "Dataset preparation, model experiments and evaluation.", image: BRAND_IMAGES.ai },
  { name: "Electronics bench", detail: "Schematic, soldering, measurement and board level debugging.", image: BRAND_IMAGES.pcb },
  { name: "Robotics and automation", detail: "Mechatronics, actuation and control experiments.", image: BRAND_IMAGES.robotics },
  { name: "System assembly", detail: "Enclosures, mechanical fabrication and assembly of test units.", image: BRAND_IMAGES.electronics },
  { name: "Field testing", detail: "Validation of systems under real farm conditions.", image: BRAND_IMAGES.irrigation },
];

export const PRODUCTS = [
  { name: "Sysmart Agro controller", detail: "Smart agriculture controller for sensing, irrigation control and monitoring.", image: BRAND_IMAGES.sysmart, status: "Active Project" },
  { name: "Smart sensors", detail: "Soil moisture, temperature, humidity and water level sensor nodes.", image: BRAND_IMAGES.iotLab, status: "Testing" },
  { name: "Smart irrigation unit", detail: "Solar capable scheduling and control for irrigation blocks.", image: BRAND_IMAGES.irrigation, status: "Testing" },
  { name: "Drip irrigation technology", detail: "Efficient water delivery systems for farms and greenhouses.", image: BRAND_IMAGES.irrigation, status: "Testing" },
  { name: "Greenhouse technology", detail: "Modern greenhouse agriculture with technology integration.", image: BRAND_IMAGES.greenhouse, status: "Development" },
  { name: "Agricultural drone technology", detail: "Farm observation, mapping and monitoring applications.", image: BRAND_IMAGES.drone, status: "Development" },
  { name: "Educational robotics kit", detail: "Teaching kit covering microcontrollers, sensors and actuation.", image: BRAND_IMAGES.robotics, status: "Development" },
  { name: "Solar powered technology", detail: "Solar support for IoT devices and agricultural systems.", image: BRAND_IMAGES.solar, status: "Development" },
];

export const INDUSTRIES = [
  { name: "Agriculture", detail: "Smart, precision and digital agriculture technology.", image: BRAND_IMAGES.greenhouse },
  { name: "Irrigation and water", detail: "Sensor driven irrigation, drip systems and water efficiency.", image: BRAND_IMAGES.irrigation },
  { name: "Livestock", detail: "Technology assisted livestock monitoring and digital records.", image: BRAND_IMAGES.harvest },
  { name: "Greenhouse farming", detail: "Controlled environment agriculture and technology integration.", image: BRAND_IMAGES.greenhouse },
  { name: "Education and training", detail: "Practical AI, IoT, robotics and AgriTech capacity building.", image: BRAND_IMAGES.techTraining },
  { name: "Research institutions", detail: "Instrumentation, datasets and joint applied research.", image: BRAND_IMAGES.lab },
  { name: "Solar and energy", detail: "Solar powered technology supporting agricultural and IoT systems.", image: BRAND_IMAGES.solar },
  { name: "Agribusiness and cooperatives", detail: "Farm data, monitoring and technology adoption support.", image: BRAND_IMAGES.control },
];

export const EXHIBITION_IMAGES: { src: string; caption: string }[] = [
  { src: BRAND_IMAGES.exhibition1, caption: "Presenting the Sysmart Agro system to visitors at an agricultural technology exhibition" },
  { src: BRAND_IMAGES.exhibition2, caption: "Demonstrating live sensor readings from the Sysmart Agro controller" },
  { src: BRAND_IMAGES.exhibition3, caption: "Officials and guests visiting the SYLUTION exhibition stand" },
  { src: BRAND_IMAGES.exhibition4, caption: "Discussing smart agriculture technology with stakeholders on site" },
  { src: BRAND_IMAGES.exhibition5, caption: "SYLUTION team attending a technology and innovation conference" },
];

export const GALLERY: { src: string; category: string; caption: string }[] = [
  { src: BRAND_IMAGES.sysmart, category: "Sysmart Agro", caption: "Sysmart Agro field deployment and monitoring" },
  ...EXHIBITION_IMAGES.map((e) => ({ src: e.src, category: "Exhibitions", caption: e.caption })),
  { src: BRAND_IMAGES.iotLab, category: "IoT", caption: "Soil, climate and environmental sensor node work" },
  { src: BRAND_IMAGES.pcb, category: "Electronics", caption: "Arduino-style controller prototyping and embedded electronics" },
  { src: BRAND_IMAGES.ai, category: "AI", caption: "Agricultural data and model review" },
  { src: BRAND_IMAGES.robotics, category: "Robotics", caption: "Robotics and automation development" },
  { src: BRAND_IMAGES.device, category: "Products", caption: "Connected IoT node and agricultural sensor systems" },
  { src: BRAND_IMAGES.drone, category: "Drone", caption: "Agricultural drone technology for farm observation" },
  { src: BRAND_IMAGES.techTraining, category: "Training", caption: "Practical IoT and electronics training session" },
  { src: BRAND_IMAGES.training, category: "Training", caption: "Youth and women technology training" },
  { src: BRAND_IMAGES.solar, category: "Solar", caption: "Solar power supporting agricultural technology" },
  { src: BRAND_IMAGES.greenhouse, category: "Greenhouse", caption: "Greenhouse technology for controlled environment farming" },
  { src: BRAND_IMAGES.irrigation, category: "Irrigation", caption: "Drip and smart irrigation technology" },
  { src: BRAND_IMAGES.harvest, category: "Agriculture", caption: "Field and harvest activities" },
  { src: BRAND_IMAGES.lab, category: "Research", caption: "Research, testing and validation work" },
];

export const GALLERY_CATEGORIES = [
  "All",
  "Exhibitions",
  "Sysmart Agro",
  "IoT",
  "Electronics",
  "AI",
  "Robotics",
  "Products",
  "Drone",
  "Training",
  "Solar",
  "Greenhouse",
  "Irrigation",
  "Agriculture",
  "Research",
];

export const NEWS = [
  {
    slug: "sysmart-agro-active-development",
    title: "Sysmart Agro advances through active field development",
    date: "2026-06-18",
    category: "Projects",
    image: BRAND_IMAGES.sysmart,
    excerpt:
      "Our smart agriculture system is being actively developed and deployed with soil and climate sensing, smart irrigation control and live monitoring capabilities.",
  },
  {
    slug: "iot-sensor-development",
    title: "New IoT sensor node under development",
    date: "2026-05-02",
    category: "Technology",
    image: BRAND_IMAGES.iotLab,
    excerpt:
      "Work continues on a low power node for soil, temperature, humidity and water level measurement in Nigerian farm conditions.",
  },
  {
    slug: "agritech-training-sessions",
    title: "AgriTech and technology training sessions continue",
    date: "2026-03-27",
    category: "Training",
    image: BRAND_IMAGES.techTraining,
    excerpt:
      "Practical sessions in IoT, AI, modern agriculture and drone technology for youth, women, farmers and students.",
  },
  {
    slug: "computer-vision-research",
    title: "Computer vision research for crop stress detection",
    date: "2026-02-11",
    category: "Research",
    image: BRAND_IMAGES.ai,
    excerpt:
      "An early research effort on image based detection of crop stress, intended to run on low cost edge hardware.",
  },
  {
    slug: "drone-technology-programme",
    title: "Agricultural drone technology programme progresses",
    date: "2026-01-15",
    category: "Projects",
    image: BRAND_IMAGES.drone,
    excerpt:
      "Farm observation, mapping and monitoring workflows are being developed alongside practical training demonstrations.",
  },
  {
    slug: "greenhouse-and-drip-irrigation",
    title: "Greenhouse and drip irrigation technology work",
    date: "2025-12-04",
    category: "AgriTech",
    image: BRAND_IMAGES.greenhouse,
    excerpt:
      "Controlled environment agriculture and efficient irrigation remain active areas of our technology development.",
  },
];

export const STATS = [
  { value: "AI", label: "Artificial intelligence foundation" },
  { value: "IoT", label: "Connected devices and sensing" },
  { value: "AgriTech", label: "Our main application area" },
  { value: "Kano", label: "Based at TIC, Farm Centre" },
];

export const TRAINING_AREAS: { group: string; items: string[] }[] = [
  {
    group: "Artificial Intelligence",
    items: ["Artificial Intelligence", "AI applications in agriculture", "AI tools", "Agricultural data intelligence"],
  },
  {
    group: "Internet of Things",
    items: [
      "IoT fundamentals",
      "Sensors",
      "ESP32 and Arduino",
      "Connected devices",
      "Smart agriculture",
      "Monitoring systems",
    ],
  },
  {
    group: "Modern Agriculture",
    items: ["Smart farming", "Precision agriculture", "Digital agriculture", "Modern farming practices"],
  },
  {
    group: "Livestock Technology",
    items: [
      "Modern livestock management",
      "Technology assisted monitoring",
      "IoT for livestock",
      "Digital livestock records",
    ],
  },
  {
    group: "Robotics",
    items: ["Robotics", "Sensors", "Automation", "Practical robotics projects"],
  },
  {
    group: "Drone Technology",
    items: [
      "Agricultural drone technology",
      "Farm observation",
      "Mapping",
      "Monitoring",
      "Practical demonstrations",
    ],
  },
];

export const TRAINING_PROGRAMMES = [
  { title: "Artificial Intelligence", detail: "AI foundations, AI tools and agricultural data intelligence.", image: BRAND_IMAGES.ai },
  { title: "Internet of Things", detail: "Sensors, connected devices, monitoring systems and smart agriculture.", image: BRAND_IMAGES.iotLab },
  { title: "ESP32 and Arduino", detail: "Hands on microcontroller and sensor projects from zero to working system.", image: BRAND_IMAGES.electronics },
  { title: "Modern Agriculture", detail: "Smart farming, precision agriculture and digital agriculture practices.", image: BRAND_IMAGES.greenhouse },
  { title: "Livestock Technology", detail: "Modern livestock management, monitoring and digital records.", image: BRAND_IMAGES.harvest },
  { title: "Robotics and Automation", detail: "Robotics, sensors, automation and practical projects.", image: BRAND_IMAGES.robotics },
  { title: "Drone Technology", detail: "Farm observation, mapping, monitoring and practical demonstrations.", image: BRAND_IMAGES.drone },
  { title: "Smart Irrigation", detail: "Sensor based irrigation, drip systems and water efficiency.", image: BRAND_IMAGES.irrigation },
  { title: "Youth and Women Empowerment", detail: "Dedicated sessions, equipment access and mentorship.", image: BRAND_IMAGES.training },
];

export const TRAINING_AUDIENCES = ["Youth", "Women", "Farmers", "Students", "Agripreneurs"];

export const FAQS = [
  {
    q: "What does SYLUTION do?",
    a: "SYLUTION LTD is a Nigerian technology innovation company applying Artificial Intelligence, Internet of Things, electronics, robotics, drone technology and smart technologies to modern agriculture and real world problems. AgriTech is our main application area.",
  },
  {
    q: "Where is SYLUTION based?",
    a: "Our base is the Technology Incubation Centre (TIC), Farm Centre, Kano State, Nigeria.",
  },
  {
    q: "Do you build hardware or only software?",
    a: "Both. We design circuits and sensor systems, write firmware, build systems and develop the dashboards and software that sit on top of them.",
  },
  {
    q: "What is Sysmart Agro?",
    a: "Sysmart Agro is our flagship AI and IoT powered smart agriculture project, combining field sensors, a smart controller, data collection, AI analysis and a monitoring dashboard. It is currently in active development and field deployment.",
  },
  {
    q: "Are your products commercially available?",
    a: "Our projects are in active development, testing, or field deployment stages. We label the status of every project honestly and provide updates as they advance through our engineering pipeline.",
  },
  {
    q: "Who can join your training programmes?",
    a: "Youth, women, farmers, students and agripreneurs. Training covers AI, IoT, modern agriculture, livestock technology, robotics and drone technology.",
  },
  {
    q: "How do I start a project or partnership with SYLUTION?",
    a: "Contact us with a short description of your organisation and objective. We respond and usually begin with a technical discussion.",
  },
];

export const CAREERS = [
  { role: "Embedded Systems Engineer", type: "Full-time", location: "Kano, Nigeria", team: "Electronics" },
  { role: "IoT Solutions Engineer", type: "Full-time", location: "Kano, Nigeria", team: "IoT" },
  { role: "Machine Learning Engineer", type: "Hybrid", location: "Abuja / Remote", team: "AI Research" },
  { role: "PCB Design Engineer", type: "Full-time", location: "Kano, Nigeria", team: "Hardware" },
  { role: "Automation and Controls Engineer", type: "Full-time", location: "Field-based", team: "Industrial" },
  { role: "Full Stack Software Engineer", type: "Hybrid", location: "Remote", team: "Platform" },
  { role: "Drone Pilot and Instructor", type: "Full-time", location: "Kano, Nigeria", team: "Academy" },
  { role: "Partnerships Manager", type: "Full-time", location: "Kano, Nigeria", team: "Growth" },
];


export type ProjectStatus = "Active Project" | "Under development" | "Research phase" | "Pilot testing" | "Coming soon" | "Testing";

export const PROJECTS: {
  slug: string;
  name: string;
  category: string;
  status: ProjectStatus;
  image: string;
  summary: string;
}[] = [
  {
    slug: "sysmart-agro",
    name: "Sysmart Agro",
    category: "Flagship project",
    status: "Active Project",
    image: BRAND_IMAGES.sysmart,
    summary:
      "An IoT powered smart agriculture platform combining a field controller, soil and climate sensing and remote irrigation control.",
  },
  {
    slug: "smart-irrigation-controller",
    name: "Smart irrigation controller",
    category: "Hardware",
    status: "Testing",
    image: BRAND_IMAGES.irrigation,
    summary: "Solar powered controller that automates pumps and valves from soil moisture thresholds.",
  },
  {
    slug: "environmental-monitoring-node",
    name: "Environmental monitoring node",
    category: "IoT research",
    status: "Research phase",
    image: BRAND_IMAGES.iotLab,
    summary: "Low power node for temperature, humidity, air quality and water level measurement.",
  },
  {
    slug: "energy-monitoring-unit",
    name: "Energy monitoring unit",
    category: "Electronics",
    status: "Under development",
    image: BRAND_IMAGES.solar,
    summary: "Metering board for solar, grid and generator systems with remote reporting.",
  },
  {
    slug: "educational-robotics-kit",
    name: "Educational robotics kit",
    category: "Academy",
    status: "Under development",
    image: BRAND_IMAGES.robotics,
    summary: "Teaching kit for schools and universities covering microcontrollers, sensors and actuation.",
  },
  {
    slug: "computer-vision-crop-inspection",
    name: "Computer vision crop inspection",
    category: "AI research",
    status: "Research phase",
    image: BRAND_IMAGES.ai,
    summary: "Image based detection of crop stress, running on edge hardware without internet.",
  },
];

export const COMING_SOON = [
  { name: "Marketplace", detail: "Order SYLUTION devices, kits and agricultural technology online." },
  { name: "Agricultural financing", detail: "A financing pathway to help farmers adopt smart technology." },
  { name: "Future AI products", detail: "New agricultural intelligence tools under research and development." },
  { name: "Future IoT products", detail: "New sensors, controllers and monitoring devices under development." },
];

export const SYSMART_FLOW = [
  { step: "Sensors", detail: "Soil moisture, temperature, humidity and water level sensing in the field." },
  { step: "IoT controller", detail: "A solar capable controller reads the sensors and drives pumps and valves." },
  { step: "Connectivity", detail: "GSM and wireless links move readings out of the farm." },
  { step: "Data collection", detail: "Readings are timestamped and queued, including when the network drops." },
  { step: "Cloud database", detail: "Field data is stored as a continuous record per farm and per block." },
  { step: "AI analysis", detail: "Models study the readings to flag stress, waste and irrigation needs." },
  { step: "Dashboard", detail: "The farmer and our team see live status, history and alerts." },
  { step: "Smart decision", detail: "Irrigation and control actions run automatically or on approval." },
];

export const RND_PROCESS = [
  { step: "Problem", detail: "We start from a real farm or field problem, described by the people facing it." },
  { step: "Research", detail: "Desk research, sensor selection and technical study of the possible approach." },
  { step: "Engineering", detail: "Circuits, firmware, enclosures and software built into a working unit." },
  { step: "Testing", detail: "Bench and laboratory testing for accuracy, power use and reliability." },
  { step: "Field validation", detail: "Supervised testing under real dust, heat, water and power conditions." },
  { step: "Product development", detail: "Refinement, documentation and preparation for wider use." },
];

export const RND_FOCUS = [
  "Artificial Intelligence",
  "Internet of Things",
  "Electronics",
  "Embedded Systems",
  "Robotics",
  "Smart Agriculture",
  "Agricultural Data",
  "Automation",
  "Prototyping",
  "Testing",
];

export const TECH_PILLARS = [
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    detail: "AI systems, agricultural intelligence, computer vision, analytics and intelligent decision support.",
  },
  {
    slug: "iot",
    title: "Internet of Things",
    detail: "Sensors, connected devices, embedded systems, smart monitoring, data collection and automation.",
  },
  {
    slug: "electronics",
    title: "Electronics and Embedded Systems",
    detail: "Controllers, sensors, microcontrollers, hardware systems and smart electronic systems.",
  },
  {
    slug: "robotics",
    title: "Robotics",
    detail: "Robotics education, automation and intelligent machines.",
  },
  {
    slug: "drone-technology",
    title: "Drone Technology",
    detail: "Agricultural observation, mapping, monitoring, data collection and training.",
  },
  {
    slug: "solar-technology",
    title: "Solar Technology",
    detail: "Solar powered technology supporting agricultural and IoT systems.",
  },
];

export const AGRITECH_AREAS = [
  "Smart Agriculture",
  "Precision Agriculture",
  "Digital Agriculture",
  "Smart Irrigation",
  "Greenhouse Technology",
  "Drip Irrigation",
  "Agricultural Monitoring",
  "Livestock Technology",
  "Farm Automation",
  "Agricultural Data",
  "Modern Farming",
];

export const PARTNER_AREAS = [
  "AgriTech",
  "Artificial Intelligence",
  "Internet of Things",
  "Technology development",
  "Research",
  "Training",
  "Youth empowerment",
  "Women empowerment",
  "Smart agriculture",
  "Agricultural innovation",
  "Product development",
];
