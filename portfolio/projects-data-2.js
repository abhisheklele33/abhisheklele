/* ============================================================
   PROJECT DATA — part 2 of 2  (projects 05–08)
   ============================================================ */

window.PROJECTS.push(

/* ---------- 05 · TMS Neuromodulation Cap ---------- */
{
  id: "tms",
  num: "05",
  title: "TMS Neuromodulation Cap",
  fullTitle: "TMS Neuromodulation Cap — Motor Symptom Management in Parkinson's Disease",
  tagline: "A wearable transcranial magnetic stimulation cap for non-invasive, targeted relief of Parkinsonian motor symptoms — designed for repeatable home use.",
  dates: "Sep 2025 – Dec 2025",
  context: "PCCM · UC San Diego",
  role: "Concept, device design & analysis",
  categories: ["Medical Devices", "Wearables"],
  tags: ["TMS", "Neuromodulation", "Parkinson's", "Coil Design", "Non-invasive", "Wearable"],
  hero: { src: "images/tms/cap-design.png", cap: "Cap concept — stimulating coil positioned over motor cortex (two views)" },
  aim: "Bring targeted transcranial magnetic stimulation <span class='hl'>out of the clinic</span> — a comfortable, repeatable cap that delivers focused neuromodulation for Parkinsonian motor symptoms.",
  background: [
    "Parkinson's disease produces motor symptoms — tremor, rigidity, bradykinesia, and stooped posture — that progressively limit daily function. Repetitive TMS has shown promise in modulating motor-cortex excitability to relieve them.",
    "Clinical TMS systems are bulky and fixed, requiring trained operators to position the coil each session. A <strong>wearable cap</strong> that fixes coil geometry could make targeting repeatable and bring therapy into the home."
  ],
  methodsTitle: "Concept & Approach",
  methods: [
    { h: "Targeted coil placement", p: "A stimulating coil is positioned over the primary motor cortex (M1); the cap fixes its geometry relative to the head so targeting is consistent session to session.", chips: ["M1 targeting", "Fixed geometry"] },
    { h: "Non-invasive magnetic stimulation", p: "A rapidly changing magnetic field induces electric currents in cortical tissue by electromagnetic induction — modulating motor-circuit activity without surgery or electrodes.", chips: ["Faraday induction", "Non-invasive"] },
    { h: "Wearable, repeatable form factor", p: "The cap prioritizes comfort and consistent placement so the same cortical target is stimulated reliably across home-use sessions.", chips: ["Comfort", "Home use"] },
    { h: "Symptom-focused design", p: "Design intent is centered on the dominant motor symptoms of Parkinson's — tremor, rigidity, bradykinesia, and postural change." }
  ],
  architecture: {
    nodes: [
      { tag: "Drive", h: "Pulse generator", p: "Biphasic current pulse", accent: "" },
      { tag: "Couple", h: "Coil over M1", p: "Rapidly changing B-field", accent: "cyan" },
      { tag: "Induce", h: "Cortical E-field", p: "E ∝ −dB/dt", accent: "" },
      { tag: "Modulate", h: "Motor circuit", p: "Altered excitability", accent: "coral" }
    ]
  },
  results: {
    title: "Design Concept",
    intro: "A device concept and analysis targeting repeatable, wearable neuromodulation.",
    metrics: [
      { big: "M1", unit: "", label: "Cortical target", desc: "Primary motor cortex." },
      { big: "0", unit: "incision", label: "Non-invasive", desc: "Induced fields, no surgery." },
      { big: "Home", unit: "", label: "Use setting", desc: "Repeatable placement." },
      { big: "4", unit: "", label: "Symptoms addressed", desc: "Tremor · rigidity · bradykinesia · posture." }
    ],
    chart: {
      type: "scatter", line: true, noPoints: true,
      title: "Stimulating waveform", subtitle: "Idealized biphasic TMS pulse",
      x: { min: 0, max: 1, label: "Time (ms)", ticks: [0, 0.25, 0.5, 0.75, 1] },
      y: { log: false, min: -1.1, max: 1.1, label: "Induced field (norm.)", ticks: [-1, 0, 1] },
      points: [
        { x: 0, y: 0 }, { x: 0.05, y: 0.55 }, { x: 0.1, y: 0.95 }, { x: 0.15, y: 1.0 },
        { x: 0.2, y: 0.75 }, { x: 0.25, y: 0.2 }, { x: 0.3, y: -0.45 }, { x: 0.35, y: -0.85 },
        { x: 0.4, y: -1.0 }, { x: 0.45, y: -0.8 }, { x: 0.5, y: -0.45 }, { x: 0.55, y: -0.12 },
        { x: 0.6, y: 0.12 }, { x: 0.65, y: 0.25 }, { x: 0.7, y: 0.22 }, { x: 0.8, y: 0.08 },
        { x: 0.9, y: 0.02 }, { x: 1.0, y: 0 }
      ]
    }
  },
  equations: [
    { tex: "\\mathcal{E} = -\\frac{d\\Phi_B}{dt} \\quad\\Rightarrow\\quad \\vec{E}_{\\text{cortex}} \\propto -\\frac{d\\vec{B}}{dt}", caption: "Faraday's law: the rapidly changing coil field induces an electric field in cortical tissue, the basis of non-invasive stimulation." }
  ],
  gallery: [
    { src: "images/tms/cap-design.png", span: "g-wide", cap: "Cap concept — coil over motor cortex" },
    { src: "images/tms/waveform.png", span: "g-third", cap: "Stimulation response (reference)" },
    { src: "images/tms/symptoms.png", span: "g-third", cap: "Reference: Parkinsonian motor symptoms" },
    { src: "images/tms/posture.png", span: "g-third", cap: "Reference: postural change" }
  ],
  downloads: [
    { kind: "PPTX", name: "PCCM Presentation — TMS Cap", desc: "Concept, rationale, and design analysis", label: "Slides", href: "files/TMS_PCCM_Presentation.pptx" }
  ]
},

/* ---------- 06 · SmoothOperator ---------- */
{
  id: "smoothoperator",
  num: "06",
  title: "SmoothOperator",
  fullTitle: "SmoothOperator — Teleoperated Surgical Manipulator with Haptic Feedback",
  tagline: "A wearable master-controller glove that replicates a surgeon's hand on a teleoperated slave manipulator — with fingertip haptics closing the loop.",
  dates: "Jul 2024 – Dec 2024",
  context: "Wearable Robotics · Capstone",
  role: "Sensor fusion, embedded & Unity",
  categories: ["Wearables", "Haptics", "Medical Devices"],
  tags: ["FSR", "Flex Sensors", "IMU", "Unity", "Haptics", "Teleoperation", "Embedded"],
  hero: { src: "images/smoothoperator/glove.jpg", cap: "Master-controller glove — FSR, flex sensors and wrist IMU on the instrumented exo-glove" },
  aim: "Build the surgeon-side of a Da Vinci–style teleoperated system: a glove that captures hand kinematics and <span class='hl'>feels</span> what the remote manipulator touches.",
  background: [
    "Teleoperated surgical systems decouple the surgeon's hands from the patient, improving precision and reach — but most provide little or no haptic feedback, so the surgeon loses the sense of touch.",
    "SmoothOperator prototypes a low-cost <strong>master-controller glove</strong> with a closed haptic loop: capture the surgeon's gesture, drive a slave manipulator, and feed contact forces back to the fingertips."
  ],
  methodsTitle: "System & Approach",
  methods: [
    { h: "Master-controller glove", p: "Force-sensitive resistors, flex sensors, and a wrist-mounted IMU capture hand kinematics — grip, finger flexion, and wrist pose — replicating the surgeon-side input interface of a Da Vinci–style teleoperated surgical system.", chips: ["FSR", "Flex", "Wrist IMU"] },
    { h: "Bidirectional control loop → slave manipulator", p: "Hand pose and grip data are transmitted over a bidirectional control loop to drive a slave manipulator in a real-time Unity virtual environment, enabling surgical-gesture replication including grasping, retraction, and tissue-manipulation analogues.", chips: ["Unity", "Real-time", "Gesture replication"] },
    { h: "Fingertip vibrotactile haptics", p: "Vibrotactile feedback at the fingertips is rendered proportional to slave-side contact forces, closing the sensorimotor loop and giving the operator real-time tactile situational awareness — at under 100 ms virtual mapping latency and under 150 ms end-to-end haptic latency.", chips: ["<100 ms map", "<150 ms haptic"] }
  ],
  architecture: {
    loop: true,
    returnLabel: "Contact forces return as fingertip haptics — sensorimotor loop closed",
    nodes: [
      { tag: "Capture", h: "Master glove", p: "FSR + flex + IMU hand kinematics", accent: "" },
      { tag: "Transmit", h: "Pose + grip", p: "Bidirectional control loop", accent: "cyan" },
      { tag: "Drive", h: "Slave manipulator", p: "Unity virtual environment", accent: "" },
      { tag: "Feel", h: "Fingertip haptics", p: "Proportional to contact force", accent: "coral" }
    ]
  },
  results: {
    title: "Performance",
    intro: "A working bidirectional teleoperation loop with proportional haptic feedback.",
    metrics: [
      { big: "<100", unit: "ms", label: "Mapping latency", desc: "Hand pose → virtual manipulator." },
      { big: "<150", unit: "ms", label: "Haptic latency", desc: "End-to-end, contact → fingertip." },
      { big: "3", unit: "", label: "Sensor modalities", desc: "FSR · flex · IMU, fused." },
      { big: "2", unit: "way", label: "Bidirectional", desc: "Track and render in one device." }
    ],
    text: "Grasping, retraction, and tissue-manipulation analogues were replicated on the slave side, with fingertip feedback scaled to contact force — letting the operator sense remote interaction in real time."
  },
  gallery: [
    { src: "images/smoothoperator/glove.jpg", span: "g-half", cap: "Instrumented master-controller glove" },
    { src: "images/smoothoperator/manipulator.jpg", span: "g-half", cap: "Slave manipulator — shoulder, elbow & end-effector mapping" },
    { src: "images/smoothoperator/hand-tracking.jpg", span: "g-wide", cap: "Hand-tracking & sensor-fusion architecture" }
  ],
  downloads: [
    { kind: "PDF", name: "Capstone Project — SmoothOperator", desc: "System design, teleoperation loop, and results", label: "Report", href: "files/SmoothOperator_TeleGlove_Report.pdf" }
  ]
},

/* ---------- 07 · SoleSense ---------- */
{
  id: "solesense",
  num: "07",
  title: "SoleSense",
  fullTitle: "SoleSense — Smart Insole for Foot Pressure Mapping & Orientation Analysis",
  tagline: "A smart insole with custom pressure sensors and an IMU that brings clinical gait assessment out of the lab — 80% orientation accuracy vs. dynamic walkways.",
  dates: "Jan 2024 – May 2024",
  status: "Published", statusKind: "pub",
  context: "Biomechanics · MIT-WPU",
  role: "Sensor fabrication, fPCB & analysis",
  categories: ["Wearables", "Biomechanics"],
  tags: ["fPCB", "ADXL345 IMU", "FSR", "Processing", "Gait Analysis", "Publication"],
  hero: { src: "images/solesense/insole-fsr.jpg", cap: "Instrumented insole — FSR placement at fore-foot, mid-foot, and heel" },
  aim: "Move gait assessment from the motion-capture lab onto the foot — a smart insole that maps plantar pressure and foot orientation during <span class='hl'>natural, out-of-lab</span> walking.",
  background: [
    "Clinical gait analysis traditionally needs instrumented walkways or motion-capture labs, limiting how much real-world, ambulatory data can be collected.",
    "SoleSense is a low-cost <strong>instrumented insole</strong> that captures plantar pressure distribution and foot orientation during everyday walking — validated in clinical patient evaluations and published."
  ],
  methodsTitle: "System & Approach",
  methods: [
    { h: "Custom-fabricated pressure sensors", p: "Force-sensitive resistors positioned at the fore-foot, mid-foot, and heel capture plantar pressure distribution through stance and toe-off.", chips: ["FSR array", "Fore · Mid · Heel"] },
    { h: "Inertial orientation (ADXL345)", p: "An onboard accelerometer/IMU adds foot orientation and supports gait-stage detection, complementing the pressure data.", chips: ["ADXL345", "Gait staging"] },
    { h: "Flexible PCB + acquisition", p: "A flexible PCB conforms to the insole, integrating the sensing front-end and streaming data for analysis.", chips: ["fPCB", "Data stream"] },
    { h: "Real-time Processing visualization", p: "A Processing application renders live plantar-pressure maps and orientation, turning raw streams into an interpretable picture of gait.", chips: ["Processing", "Live maps"] },
    { h: "Clinical validation", p: "Evaluated in patient trials against dynamic walkways, the system reached 80% accuracy in foot-orientation tracking — establishing it as a viable out-of-lab tool." }
  ],
  architecture: {
    nodes: [
      { tag: "Sense", h: "FSR + ADXL345", p: "Plantar pressure + orientation", accent: "" },
      { tag: "Acquire", h: "fPCB + MCU", p: "Conditioning & streaming", accent: "cyan" },
      { tag: "Visualize", h: "Processing", p: "Pressure map + gait stage", accent: "" },
      { tag: "Validate", h: "vs. walkway", p: "Clinical patient trials", accent: "coral" }
    ]
  },
  results: {
    title: "Results & Validation",
    intro: "Validated against clinical dynamic walkways in patient evaluations.",
    metrics: [
      { big: "80", unit: "%", label: "Orientation accuracy", desc: "Foot-orientation tracking vs. walkway." },
      { big: "3", unit: "", label: "Pressure regions", desc: "Fore-foot · mid-foot · heel." },
      { big: "1", unit: "pub", label: "Publication", desc: "Smart-insole mock-up (FSR + ADXL345)." },
      { big: "RT", unit: "", label: "Visualization", desc: "Real-time Processing maps." }
    ],
    text: "Real-time plantar-pressure maps and orientation tracking matched clinical walkway references closely enough to support out-of-lab gait assessment — the basis of the published mock-up study."
  },
  equations: [
    { tex: "\\theta = \\arctan\\!\\left(\\dfrac{a_x}{\\sqrt{a_y^{2}+a_z^{2}}}\\right)", caption: "Foot tilt (orientation) estimated from the ADXL345 acceleration components during stance." }
  ],
  gallery: [
    { src: "images/solesense/insole-fsr.jpg", span: "g-half", cap: "Instrumented insole — FSR layout" },
    { src: "images/solesense/system-diagram.jpg", span: "g-half", cap: "System architecture — MCU, FSRs, ADXL345" },
    { src: "images/solesense/gait-phases.jpg", span: "g-half", cap: "Gait phases — heel strike → toe-off" },
    { src: "images/solesense/design-flow.jpg", span: "g-half", cap: "Design & development flow" }
  ],
  links: [
    { label: "Publication (DOI) ↗", href: "https://doi.org/10.20944/preprints202404.1680.v2" }
  ],
  downloads: [
    { kind: "PDF", name: "Manuscript — Smart Insole (FSR + ADXL345)", desc: "Published mock-up study", label: "Manuscript", href: "files/SoleSense_Manuscript.pdf" }
  ]
},

/* ---------- 08 · SpeedShifter ---------- */
{
  id: "speedshifter",
  num: "08",
  title: "SpeedShifter",
  fullTitle: "SpeedShifter — Two-Stage Helical-Spur Speed Reduction Gearbox",
  tagline: "A from-scratch two-stage helical-spur gearbox: gear sizing, shaft and bearing design, FEA, and tolerance stacking for a target reduction ratio.",
  dates: "Sep 2023 – Dec 2023",
  context: "Mechanical Design · MIT-WPU",
  role: "Full mechanical design & analysis",
  categories: ["Mechanical"],
  tags: ["SolidWorks", "FEA", "Gear Design", "Shaft Design", "Bearing Selection", "GD&T"],
  hero: { src: "images/speedshifter/assembly.jpg", cap: "Full gearbox assembly — two-stage helical-spur reduction" },
  aim: "Design a complete <span class='hl'>two-stage speed-reduction gearbox</span> end to end — from gear-tooth sizing to shafts, bearings, housing, and tolerance stacks — to hit a defined reduction ratio.",
  background: [
    "Speed reducers are foundational power-transmission components, converting high-speed, low-torque input into low-speed, high-torque output.",
    "This project applies first-principles machine design — Lewis/AGMA gear stress, shaft fatigue, and bearing life — to size and validate a manufacturable two-stage helical-spur train from scratch."
  ],
  methodsTitle: "Design & Analysis",
  methods: [
    { h: "Gear sizing (Lewis / AGMA)", p: "Module, tooth counts, and face widths were sized for bending and contact stress across both stages to deliver the target reduction ratio with adequate factors of safety.", chips: ["Module + Z", "Bending + contact"] },
    { h: "Shaft design", p: "Input, intermediate, and output shaft diameters were derived from combined bending and torsion with fatigue stress-concentration factors.", chips: ["Combined loading", "Fatigue FoS"] },
    { h: "Bearing selection", p: "Rolling-element bearings were selected for rated life (L10) under the computed radial and axial loads from the helical gear meshes.", chips: ["L10 life", "Radial + axial"] },
    { h: "FEA validation", p: "Finite-element stress analysis on critical gears and shafts confirmed the analytical sizing under load.", chips: ["FEA", "Stress check"] },
    { h: "Tolerance stacking & GD&T", p: "Fits and tolerance stack-ups were defined for the shaft–bearing–housing interfaces to ensure assembly and manufacturability." }
  ],
  architecture: {
    nodes: [
      { tag: "Input", h: "Drive shaft", p: "High speed, low torque", accent: "" },
      { tag: "Stage 1", h: "Pinion → gear", p: "First reduction", accent: "cyan" },
      { tag: "Stage 2", h: "Pinion → gear", p: "Second reduction", accent: "cyan" },
      { tag: "Output", h: "Output shaft", p: "Low speed, high torque", accent: "coral" }
    ]
  },
  results: {
    title: "Design Outcome",
    intro: "A fully analyzed, FEA-validated, manufacturable gearbox design.",
    metrics: [
      { big: "2", unit: "stage", label: "Reduction stages", desc: "Compounded gear train." },
      { big: "Helical", unit: "", label: "Gear type", desc: "Helical-spur meshes." },
      { big: "FEA", unit: "", label: "Validation", desc: "Stress-checked gears & shafts." },
      { big: "GD&T", unit: "", label: "Tolerancing", desc: "Stack-up for manufacturability." }
    ],
    text: "Analytical sizing of gears, shafts, and bearings was confirmed by FEA, and the assembly was fully detailed with fits and tolerances for manufacture."
  },
  equations: [
    { tex: "i_{\\text{total}} = \\frac{N_2}{N_1}\\cdot\\frac{N_4}{N_3}", caption: "Overall reduction ratio of the compounded two-stage gear train (Nᵢ = tooth counts)." },
    { tex: "\\sigma_b = \\dfrac{F_t}{b\\,m\\,Y}", caption: "Lewis bending stress at the gear tooth root — tangential load Fₜ, face width b, module m, Lewis form factor Y." },
    { tex: "d = \\left[\\dfrac{16}{\\pi\\,\\tau_{\\text{allow}}}\\sqrt{M^{2}+T^{2}}\\right]^{1/3}", caption: "Shaft diameter from the maximum-shear theory under combined bending moment M and torque T." }
  ],
  gallery: [
    { src: "images/speedshifter/assembly.jpg", span: "g-wide", cap: "Full two-stage gearbox assembly" },
    { src: "images/speedshifter/gear-01.jpg", span: "g-third", cap: "Helical gear — CAD" },
    { src: "images/speedshifter/gear-02.jpg", span: "g-third", cap: "Spur gear — CAD" },
    { src: "images/speedshifter/gear-geometry.png", span: "g-third", cap: "Gear tooth geometry" },
    { src: "images/speedshifter/shaft-01.jpg", span: "g-third", cap: "Shaft — CAD" },
    { src: "images/speedshifter/housing-01.jpg", span: "g-third", cap: "Housing — section" },
    { src: "images/speedshifter/housing-02.jpg", span: "g-third", cap: "Housing — assembly view" },
    { src: "images/speedshifter/drawing.png", span: "g-third", cap: "Engineering drawing" }
  ],
  downloads: [
    { kind: "DOCX", name: "Design Report — Two-Stage Gearbox", desc: "Full calculations, sizing, FEA and drawings", label: "Report", href: "files/SpeedShifter_Design_Report.docx" }
  ]
}

);
