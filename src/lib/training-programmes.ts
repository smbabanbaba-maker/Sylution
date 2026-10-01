export type ProgrammeCategory = "Engineering & AI" | "Smart agriculture" | "Professional";

export type TrainingProgramme = {
  slug: string;
  title: string;
  category: ProgrammeCategory;
  fee: number | null;
  summary: string;
  overview: string;
  level: string;
  duration: string;
  format: string | null;
  image: string;
  modules: string[];
  practicalWork: string;
  audience: string;
  outcome: string;
  certificateNote?: string;
};

export const PROGRAMME_CATEGORIES: ProgrammeCategory[] = [
  "Engineering & AI",
  "Smart agriculture",
  "Professional",
];

export const TRAINING_PROGRAMMES: TrainingProgramme[] = [
  {
    slug: "robotics-arduino-fundamentals",
    title: "Robotics & Arduino Fundamentals",
    category: "Engineering & AI",
    fee: 65000,
    summary: "Start with electronics and Arduino, then build and demonstrate a working robot.",
    overview:
      "A guided route from basic electronics and Arduino programming to a complete sensor-led robotic system.",
    level: "Foundational",
    duration: "4 weeks",
    format: "Physical sessions with hands-on lab practice",
    image: "/brand/tech-robotics-arm.jpg",
    modules: [
      "Electronics and robotics foundations: voltage, current, components, breadboards, multimeters and safety.",
      "Arduino programming: the IDE, inputs and outputs, variables, conditions and loops.",
      "Sensors and actuators: ultrasonic, IR and temperature sensors; servos, DC motors and motor drivers.",
      "Robotics systems: movement, obstacle detection, control logic and debugging.",
      "Capstone: build and demonstrate an Arduino-based robotic system, individually or in a team.",
    ],
    practicalWork:
      "Wire circuits, connect sensors and motors, then build and demonstrate an Arduino robot.",
    audience: "Beginners, students, young innovators and aspiring engineers.",
    outcome:
      "Practise wiring circuits, programming Arduino, integrating sensors and motors, troubleshooting and building a working prototype.",
  },
  {
    slug: "electronics-embedded-systems",
    title: "Electronics & Embedded Systems",
    category: "Engineering & AI",
    fee: 70000,
    summary: "Move from circuit fundamentals to a programmed and tested embedded device.",
    overview:
      "Learn how electronic circuits, microcontrollers and embedded software fit together in a device that can be tested and improved.",
    level: "Foundational to intermediate",
    duration: "4 weeks",
    format: "Physical laboratory sessions",
    image: "/brand/tech-electronics-bench.jpg",
    modules: [
      "Electronics fundamentals and safe use of lab tools.",
      "Circuit design and reading simple circuit diagrams.",
      "Soldering, assembly and prototyping.",
      "Microcontrollers and input/output interfaces.",
      "Sensors and device interfaces.",
      "Embedded programming fundamentals.",
      "Testing, debugging and iteration.",
      "Final practical: assemble, programme and test a basic embedded device.",
    ],
    practicalWork:
      "Prototype and test a basic embedded electronic device using a microcontroller and interfaces.",
    audience: "Learners who want to progress from basic circuits to building embedded devices.",
    outcome: "Design, assemble, programme and test basic embedded electronic systems.",
  },
  {
    slug: "iot-smart-systems",
    title: "IoT & Smart Systems",
    category: "Engineering & AI",
    fee: 85000,
    summary: "Connect sensors, an ESP32, a network and a dashboard into a practical IoT system.",
    overview:
      "Follow the complete path from sensing a real-world condition to sending data, showing it on a dashboard and triggering an action.",
    level: "Intermediate",
    duration: "4 weeks",
    format: "Physical or hybrid sessions with lab practice",
    image: "/brand/tech-sensor-lab.jpg",
    modules: [
      "IoT architecture and connected-system fundamentals.",
      "ESP32 setup and controller programming.",
      "Sensors and data acquisition.",
      "Wi-Fi and connectivity concepts.",
      "Cloud and database fundamentals.",
      "Dashboards and remote monitoring.",
      "Automation logic and device control.",
      "Security fundamentals for connected devices.",
      "System integration, testing and debugging.",
      "Capstone: build a connected monitoring or automation device.",
    ],
    practicalWork:
      "Build and test a connected device that gathers sensor data and can be monitored remotely.",
    audience: "Learners with basic technology familiarity who want to build connected systems.",
    outcome: "Understand the sensor → device → network → data → dashboard → action workflow.",
  },
  {
    slug: "ai-fundamentals-applications",
    title: "Artificial Intelligence Fundamentals & Applications",
    category: "Engineering & AI",
    fee: 60000,
    summary:
      "Understand AI concepts and practise applying tools to real tasks—not only prompting a chatbot.",
    overview:
      "A practical introduction to artificial intelligence, data and machine-learning ideas, useful tools and responsible application.",
    level: "Foundational",
    duration: "4 weeks",
    format: "Hybrid or physical computer-lab sessions",
    image: "/brand/tech-ai-agri-data.jpg",
    modules: [
      "Artificial-intelligence fundamentals and everyday applications.",
      "Data, algorithms and machine-learning concepts.",
      "Generative AI: capabilities, limits and practical use.",
      "Prompt design and evaluating AI outputs.",
      "Practical AI tools and workflows.",
      "Introduction to computer vision.",
      "Introduction to AI APIs and simple workflows.",
      "Responsible AI, privacy and safe use.",
      "Final practical: design a small AI-assisted solution to a real problem.",
    ],
    practicalWork:
      "Apply AI tools and basic workflows to a practical problem and explain the limits of the result.",
    audience: "Beginners, students and professionals seeking a practical introduction to AI.",
    outcome:
      "Understand the AI ecosystem and how to use AI thoughtfully to solve practical problems.",
  },
  {
    slug: "ai-iot-intelligent-systems",
    title: "AI + IoT Intelligent Systems",
    category: "Engineering & AI",
    fee: 120000,
    summary:
      "Combine connected sensors and data analysis to create a system that can inform useful actions.",
    overview:
      "Bring IoT data collection and AI or software logic together, from a sensor reading through to an informed decision or action.",
    level: "Intermediate",
    duration: "6 weeks",
    format: "Physical or hybrid sessions",
    image: "/brand/tech-iot-node.jpg",
    modules: [
      "IoT foundations and system architecture.",
      "Sensing and device setup.",
      "Connectivity and reliable data transfer.",
      "Data collection and preparation.",
      "AI and data-analysis concepts.",
      "Decision logic and useful alerts.",
      "Automation and control.",
      "Dashboards and monitoring.",
      "System integration, testing and refinement.",
      "Capstone: demonstrate a connected device using software or AI logic to produce a useful decision or action.",
    ],
    practicalWork:
      "Plan and demonstrate a connected system that collects real-world data and uses logic to guide an action.",
    audience: "Learners with technology foundations who want to combine IoT and AI concepts.",
    outcome:
      "Understand how sensing, connectivity, data and intelligent logic work together in one system.",
  },
  {
    slug: "smart-agriculture-digital-farming",
    title: "Smart Agriculture & Digital Farming",
    category: "Smart agriculture",
    fee: 100000,
    summary:
      "Explore farm sensing, smart irrigation, greenhouse systems and practical digital-farming tools.",
    overview:
      "An applied introduction to modern agriculture and the technologies that can support farm monitoring, irrigation and day-to-day decisions.",
    level: "Foundational to intermediate",
    duration: "4 weeks",
    format: "Hybrid sessions with intensive farm practicals",
    image: "/brand/tech-greenhouse-sensing.jpg",
    modules: [
      "Modern agriculture and AgriTech foundations.",
      "Soil, crop and environmental monitoring.",
      "Smart-irrigation principles.",
      "Drip-irrigation systems.",
      "Farm sensors and IoT.",
      "Greenhouse technology.",
      "Solar-supported agricultural systems.",
      "Agricultural automation.",
      "Introduction to drone applications and digital farming.",
      "Practical farm-technology project.",
    ],
    practicalWork:
      "Plan a practical farm-technology project that connects monitoring, irrigation or digital tools to a farming need.",
    audience: "Farmers, students, technicians and people exploring digital agriculture.",
    outcome:
      "Understand how sensing, irrigation, IoT, solar and automation can work together in modern farm operations.",
  },
  {
    slug: "smart-irrigation-farm-automation",
    title: "Smart Irrigation & Farm Automation",
    category: "Smart agriculture",
    fee: 90000,
    summary:
      "Learn how sensors, pumps, valves and controllers can form an automated irrigation system.",
    overview:
      "Study irrigation control from soil-moisture sensing and pump/valve operation through to monitoring, testing and installation basics.",
    level: "Intermediate",
    duration: "3 weeks",
    format: "Physical sessions with farm practicals",
    image: "/brand/sylution-irrigation.jpg",
    modules: [
      "Irrigation fundamentals and system planning.",
      "Soil-moisture sensing and thresholds.",
      "Pumps, valves and water delivery.",
      "Controllers, relays and electrical safety.",
      "Automatic-irrigation logic.",
      "Tank and water-level monitoring.",
      "IoT monitoring concepts.",
      "Solar integration concepts.",
      "Troubleshooting and system checks.",
      "Capstone: assemble or configure a basic sensor-controlled irrigation system.",
    ],
    practicalWork:
      "Build or configure a basic automated irrigation system using sensor readings and a controller.",
    audience: "Learners with an interest in irrigation, farm technology or basic automation.",
    outcome: "Understand how to install and configure a basic sensor-controlled irrigation system.",
  },
  {
    slug: "drip-irrigation-systems",
    title: "Drip Irrigation Systems",
    category: "Smart agriculture",
    fee: 50000,
    summary:
      "Plan and install a basic drip layout, then learn how to maintain and troubleshoot it.",
    overview:
      "A field-focused course on drip-irrigation components, layout, installation and practical system checks.",
    level: "Foundational",
    duration: "2 weeks",
    format: "Physical sessions with field practicals",
    image: "/brand/sylution-irrigation.jpg",
    modules: [
      "Water and irrigation fundamentals.",
      "Drip-system components and how they connect.",
      "Filtration and system protection.",
      "Pressure and flow basics.",
      "Layout and simple design considerations.",
      "Pipes, laterals and emitters.",
      "Installation practice.",
      "Routine maintenance.",
      "Troubleshooting common system issues.",
      "Practical field installation of a basic drip system.",
    ],
    practicalWork: "Plan and install a basic drip-irrigation layout during field practice.",
    audience: "Beginners, farmers and technicians interested in practical water delivery.",
    outcome: "Build understanding needed to plan and install a basic drip-irrigation system.",
  },
  {
    slug: "greenhouse-technology-automation",
    title: "Greenhouse Technology & Automation",
    category: "Smart agriculture",
    fee: 90000,
    summary:
      "Learn greenhouse operation and how sensors can support climate monitoring and control.",
    overview:
      "Connect greenhouse structures and crop environments with irrigation, sensing and introductory automation concepts.",
    level: "Intermediate",
    duration: "3 weeks",
    format: null,
    image: "/brand/tech-greenhouse-sensing.jpg",
    modules: [
      "Greenhouse fundamentals, structures and materials.",
      "Crop environments and climate needs.",
      "Introduction to irrigation and fertigation.",
      "Temperature and humidity monitoring.",
      "Sensor selection and use.",
      "Ventilation and control concepts.",
      "IoT monitoring.",
      "Automation principles.",
      "System design considerations.",
      "Practical greenhouse monitoring and control plan.",
    ],
    practicalWork:
      "Prepare a practical greenhouse-monitoring and control design based on crop and environment needs.",
    audience: "Learners interested in controlled-environment farming and farm technology.",
    outcome:
      "Understand conventional greenhouse operation and technology-enabled monitoring and control.",
  },
  {
    slug: "farm-sensors-agricultural-iot",
    title: "Farm Sensors & Agricultural IoT",
    category: "Smart agriculture",
    fee: 100000,
    summary: "Build a connected monitoring node for soil, water or farm-climate readings.",
    overview:
      "Learn how to select, calibrate and connect farm sensors, then send readings to a dashboard or alert workflow.",
    level: "Intermediate",
    duration: "3 weeks",
    format: null,
    image: "/brand/tech-sensor-lab.jpg",
    modules: [
      "Sensor fundamentals and measurement choices.",
      "Soil-moisture sensing.",
      "Temperature and humidity sensing.",
      "Water-level sensing.",
      "Calibration and reading checks.",
      "ESP32 or controller setup.",
      "Connectivity and telemetry.",
      "Data display and dashboards.",
      "Alerts and threshold concepts.",
      "Integration with farm-automation workflows.",
      "Capstone: build a connected farm-monitoring node.",
    ],
    practicalWork:
      "Build and test a connected node that collects selected farm readings for monitoring.",
    audience: "Learners with basic technology familiarity who want to apply IoT to agriculture.",
    outcome: "Understand how to connect farm sensors, controllers and monitoring workflows.",
  },
  {
    slug: "solar-systems-fundamentals",
    title: "Solar Systems Fundamentals",
    category: "Smart agriculture",
    fee: 80000,
    summary: "Learn system components, sizing, wiring, protection and basic installation checks.",
    overview:
      "A practical introduction to small solar systems, from panels and batteries to load calculations, wiring and maintenance.",
    level: "Foundational",
    duration: "3 weeks",
    format: null,
    image: "/brand/tech-solar-controller.jpg",
    modules: [
      "Electricity fundamentals and safety.",
      "Solar panels and basic ratings.",
      "Charge controllers.",
      "Battery types and storage.",
      "Inverters and loads.",
      "Load calculation and energy use.",
      "System sizing principles.",
      "Wiring, connections and protection.",
      "Installation practice and testing.",
      "Maintenance and troubleshooting.",
      "Solar applications for farms and IoT.",
      "Capstone: design and assemble a small working solar system.",
    ],
    practicalWork:
      "Design and assemble a small solar system and practise basic testing and protection checks.",
    audience:
      "Beginners, technicians and learners exploring solar power for devices or farm systems.",
    outcome: "Understand basic solar-system components, sizing, installation and maintenance.",
  },
  {
    slug: "agricultural-drone-technology-operations",
    title: "Agricultural Drone Technology & Operations",
    category: "Smart agriculture",
    fee: 250000,
    summary:
      "A premium practical course on safe drone operations and supervised agricultural field missions.",
    overview:
      "Introduction to drone systems, safe flight operations and agricultural uses such as farm observation, data collection and mapping concepts.",
    level: "Intermediate",
    duration: "2 weeks",
    format: "Classroom, simulator and intensive supervised field-flight practicals",
    image: "/brand/tech-drone-field.jpg",
    modules: [
      "Drone systems: components, multirotor principles, batteries, controllers, payloads, GPS/GNSS and maintenance.",
      "Flight safety: pre-flight inspection, site assessment, weather, safety procedures and emergency response.",
      "Practical piloting: take-off, landing, orientation, manoeuvres, simulator work and supervised field flights.",
      "Agricultural applications: crop scouting, observation, inspection, mapping concepts and use cases.",
      "Mapping and data: flight planning, imagery, geotagged data, orthomosaic concepts and introduction to NDVI/remote sensing.",
      "Field mission: plan a farm mission, conduct a supervised operation, collect data and present findings.",
    ],
    practicalWork:
      "Plan and carry out a supervised agricultural drone field mission, then present the collected observations.",
    audience:
      "Intermediate learners interested in safe drone operations and agricultural applications.",
    outcome:
      "Understand safe operation, plan basic agricultural missions, practise supervised flight and recognise agricultural data workflows.",
    certificateNote:
      "Certificate: SYLUTION Certificate of Completion only. This course does not confer an NCAA pilot licence, DJI credential or internationally accredited drone qualification.",
  },
  {
    slug: "sysmart-agro-systems-training",
    title: "SYSMART AGRO Systems Training",
    category: "Smart agriculture",
    fee: 100000,
    summary:
      "Learn the sensors, controls, connectivity and irrigation workflow behind SYSMART AGRO.",
    overview:
      "A practical introduction to the architecture and operation of SYSMART AGRO, SYLUTION's smart-agriculture project. Training is not a promise that the developing product is commercially available.",
    level: "Intermediate",
    duration: "2 weeks",
    format: null,
    image: "/brand/sysmart-agro.png",
    modules: [
      "Smart-agriculture system architecture.",
      "Field sensors and soil/climate monitoring.",
      "Controllers and device setup.",
      "IoT connectivity concepts.",
      "Irrigation monitoring and control.",
      "Dashboards and agricultural data.",
      "Solar-support concepts.",
      "Installation and configuration practice.",
      "Troubleshooting and system checks.",
      "Field deployment considerations.",
      "Capstone: set up or configure a SYSMART AGRO training system for learning purposes.",
    ],
    practicalWork:
      "Set up or configure a SYSMART AGRO training system and practise its monitoring workflow.",
    audience: "Intermediate learners interested in smart farming systems and connected irrigation.",
    outcome:
      "Understand how field sensing, connected control, monitoring and irrigation management fit together.",
  },
  {
    slug: "complete-agritech-professional-programme",
    title: "Complete AgriTech Professional Programme",
    category: "Professional",
    fee: 250000,
    summary:
      "An eight-week pathway spanning smart irrigation, sensors, greenhouses, solar, AI and a capstone.",
    overview:
      "A broad, practical AgriTech programme that brings farm systems, digital tools and engineering together around a real agricultural problem.",
    level: "Professional",
    duration: "8 weeks",
    format: "Hybrid sessions, lab work and farm practicals",
    image: "/brand/sylution-agri-training-banner-v2.jpg",
    modules: [
      "Foundations of modern agriculture and AgriTech.",
      "Smart-irrigation systems.",
      "Drip-irrigation design and installation.",
      "Farm sensors and IoT.",
      "Agricultural data and digital farming.",
      "Greenhouse technology and automation.",
      "Solar-powered agricultural systems.",
      "AI applications in agriculture.",
      "Introduction to agricultural drone applications; this is not the full drone-operations course.",
      "SYSMART AGRO systems.",
      "AgriTech business and deployment considerations.",
      "Capstone: identify a real agricultural problem, design and demonstrate a technology solution, then present implementation considerations.",
    ],
    practicalWork:
      "Develop and demonstrate a technology response to a real agricultural problem as a final capstone.",
    audience:
      "Professionals and learners seeking a broad, applied pathway across agricultural technology.",
    outcome:
      "Connect agricultural operations, engineering and digital tools in a scoped technology solution.",
    certificateNote:
      "Certificate: SYLUTION Professional Certificate in AgriTech, issued by SYLUTION as a training certificate; it is not an external professional licence.",
  },
  {
    slug: "corporate-institutional-technology-training",
    title: "Corporate & Institutional Technology Training",
    category: "Professional",
    fee: null,
    summary:
      "A tailored training plan for organisations, based on participants, scope and equipment needs.",
    overview:
      "Custom training for institutions and organisations that need a specific technology topic, audience, delivery format or cohort size.",
    level: "Set to the organisation's needs",
    duration: "1 day to 8 weeks",
    format: "Onsite at your venue, at SYLUTION in Kano or hybrid",
    image: "/brand/sylution-training.jpg",
    modules: [
      "Artificial intelligence and practical AI tools.",
      "Internet of Things and connected devices.",
      "Robotics and automation.",
      "Electronics and embedded systems.",
      "Smart agriculture and SYSMART AGRO.",
      "Smart irrigation and farm automation.",
      "Drone technology and agricultural applications.",
      "Solar systems and energy for connected equipment.",
      "A cohort plan scoped around participant level and equipment access.",
      "Training objectives and any practical project are agreed with the organisation before delivery.",
    ],
    practicalWork:
      "The topic, practical project and delivery plan are agreed after a scope conversation.",
    audience:
      "Government agencies, NGOs, universities, schools, agribusinesses, companies and development organisations.",
    outcome:
      "A scoped programme designed around the organisation's participants, objectives, equipment and delivery setting.",
  },
];

export function getTrainingProgramme(slug: string) {
  return TRAINING_PROGRAMMES.find((programme) => programme.slug === slug);
}

export function formatProgrammeFee(fee: number | null) {
  return fee === null ? "Custom quote" : `₦${fee.toLocaleString("en-NG")}`;
}
