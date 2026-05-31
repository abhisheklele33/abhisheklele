/* ============================================================
   PROJECT DATA — part 1 of 2  (projects 01–04)
   Single source of truth. To edit a project, edit its object.
   Images live in /images/<id>/. Reports in /files/.
   ============================================================ */

window.PROJECTS = [

/* ---------- 01 · ContinuEar ---------- */
{
  id: "continuear",
  num: "01",
  title: "ContinuEar",
  fullTitle: "ContinuEar — PPG & BCG-Based Continuous Blood Pressure Monitoring Earbud",
  tagline: "A cuffless in-ear wearable that estimates blood pressure continuously by fusing optical (PPG) and ballistic (BCG) pulse signals from the ear canal.",
  dates: "2026 · Current",
  status: "In Progress", statusKind: "current",
  context: "Graduate Research · UC San Diego",
  role: "Sensor integration, firmware & signal processing",
  categories: ["Medical Devices", "Wearables"],
  tags: ["PPG", "BCG", "PTT", "MAX30102", "MLX90614", "Arduino Nano 33 BLE Sense", "Cuffless BP", "Signal Processing"],
  hero: { logo: {
    name: "Continu", accent: "Ear",
    tag: "Cuffless · Continuous · In-Ear BP",
    mark: "<svg viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M64 24 a30 30 0 1 1 -3 50' stroke='#2bb6e8' stroke-width='5.5' stroke-linecap='round'/><path d='M61 40 a15 15 0 1 1 -2 26' stroke='#2bb6e8' stroke-width='5' stroke-linecap='round' opacity='0.5'/><path d='M10 56 H33 l5 -17 l8 31 l6 -20 h11' stroke='#34e27a' stroke-width='4.5' stroke-linecap='round' stroke-linejoin='round'/><circle cx='62' cy='57' r='4.5' fill='#ec6a43'/></svg>"
  } },
  aim: "Make blood pressure something you can measure <span class='hl'>continuously and cufflessly</span> — from the ear — so hypertension can be tracked through daily life and sleep, not just in a clinic.",
  background: [
    "Blood pressure is one of the strongest predictors of cardiovascular events, yet conventional measurement relies on disruptive cuff inflation that makes ambulatory and sleep monitoring impractical.",
    "The ear canal is an optically and mechanically favourable site — well-perfused, motion-resistant, and close to the carotid artery. ContinuEar exploits this to capture two complementary cardiac signals at once, deriving <strong>pulse transit time (PTT)</strong> as the feature for cuffless blood-pressure estimation."
  ],
  methodsTitle: "System & Approach",
  methodsIntro: "A single in-ear form factor fuses three sensing modalities and processes them in real time on-device.",
  methods: [
    { h: "In-ear multimodal sensing", p: "A MAX30102 photoplethysmography sensor (IR channel, 880 nm) captures the pulse waveform, while a GY-906 MLX90614 non-contact tympanic thermometer tracks temperature for thermoregulatory context — all housed in a custom PLA ear enclosure.", chips: ["MAX30102 · 880 nm", "MLX90614 IR temp", "Custom PLA shell"] },
    { h: "Ballistocardiogram from the ear", p: "The inbuilt IMU of an Arduino Nano 33 BLE Sense captures ballistocardiogram (BCG) waveforms — the micro-accelerations of each cardiac ejection — directly from the ear canal, providing a timing reference without additional electrodes.", chips: ["IMU-derived BCG", "No electrodes"] },
    { h: "Signal fusion → PTT", p: "Fusing BCG and PPG yields pulse transit time. Fiducial points are identified across both waveforms — BCG (J, H, F, K, N, M waves) and PPG (systolic peak, dicrotic notch, diastolic peak) — to compute PTT continuously.", chips: ["6 BCG fiducials", "3 PPG fiducials"] },
    { h: "Real-time on-device processing", p: "Signal acquisition, fiducial detection, and PTT computation run on the Arduino platform, enabling continuous hemodynamic monitoring and a calibration-based blood-pressure estimate without a cuff." }
  ],
  architecture: {
    nodes: [
      { tag: "Sense", h: "Ear canal", p: "PPG (880 nm) + IMU BCG + temperature", accent: "" },
      { tag: "Acquire", h: "Nano 33 BLE Sense", p: "Fiducial detection on PPG & BCG", accent: "cyan" },
      { tag: "Compute", h: "PTT", p: "BCG J-wave → PPG pulse foot interval", accent: "" },
      { tag: "Estimate", h: "Blood pressure", p: "Calibrated PTT model", accent: "coral" }
    ]
  },
  results: {
    title: "Design Targets",
    intro: "The system is in active development — hardware and firmware are being built and validated. Current design parameters:",
    metrics: [
      { big: "880", unit: "nm", label: "PPG wavelength", desc: "MAX30102 IR channel." },
      { big: "3", unit: "", label: "Sensing modalities", desc: "PPG · BCG · temperature." },
      { big: "9", unit: "", label: "Fiducial points", desc: "6 BCG + 3 PPG, fused for PTT." },
      { big: "0", unit: "cuff", label: "Cuffless", desc: "Continuous, ambulatory." }
    ],
    text: "Early-stage signal acquisition and the BCG–PPG fusion pipeline are in progress; calibration against reference BP and on-ear validation are the next milestones."
  },
  equations: [
    { tex: "\\mathrm{PTT} = t_{\\text{PPG, foot}} - t_{\\text{BCG, J}}", caption: "Pulse transit time: the interval from the BCG J-wave (aortic ejection) to the foot of the PPG pulse at the ear." },
    { tex: "\\mathrm{BP} = \\frac{a}{\\mathrm{PTT}^{2}} + b", caption: "Calibrated inverse-square relation linking PTT to blood pressure (a, b from per-user calibration)." }
  ],
  gallery: [
    { src: "images/continuear/ear.jpg", span: "g-third", cap: "In-ear sensing site" },
    { src: "images/continuear/max30102.jpg", span: "g-third", cap: "MAX30102 PPG sensor (IR, 880 nm)" },
    { src: "images/continuear/mlx90614.jpg", span: "g-third", cap: "MLX90614 non-contact tympanic thermometer" },
    { src: "images/continuear/nano33.jpg", span: "g-half", cap: "Arduino Nano 33 BLE Sense — IMU-derived BCG" },
    { src: "images/continuear/ppg-waveform.jpg", span: "g-half", cap: "PPG waveform — systolic peak, dicrotic notch, diastolic point" }
  ],
  downloads: [
    { kind: "PDF", name: "ContinuEar — Project Report", desc: "System design, sensing & PTT-based BP estimation", label: "Report", href: "files/ContinuEar_Report.pdf" }
  ]
},

/* ---------- 02 · Orthon ---------- */
{
  id: "orthon",
  num: "02",
  title: "Orthon",
  fullTitle: "Orthon — Closed-Loop Plantar Pressure Offloading System",
  tagline: "A sensing-and-actuation insole that detects dangerous plantar pressure and actively offloads it — in real time — to reduce diabetic foot-ulcer risk.",
  dates: "Jan 2026 – May 2026",
  context: "Graduate Capstone · UC San Diego",
  role: "Mechatronics, CAD & closed-loop control",
  categories: ["Medical Devices", "Wearables", "Biomechanics"],
  tags: ["Closed-Loop Control", "Pressure Sensing", "Active Actuation", "Embedded", "fPCB", "SolidWorks"],
  hero: { src: "images/orthon/insole-exploded.jpg", cap: "Exploded view — sensing array, actuator cells, and control PCB" },
  aim: "Diabetic foot ulcers begin where pressure concentrates. Orthon closes the loop: <span class='hl'>sense</span> peak plantar pressure, then <strong>actively offload</strong> it before tissue damage starts.",
  background: [
    "Diabetic peripheral neuropathy blunts the protective sensation of pain — so patients cannot feel when plantar pressure rises to ulcer-forming levels. Untreated, these pressure points progress to ulcers and, in severe cases, amputation.",
    "Conventional offloading insoles are <strong>passive</strong>: fixed geometries that cannot adapt to where pressure actually peaks. Orthon makes offloading <strong>active and adaptive</strong> — continuously sensing the pressure map and mechanically redistributing load in real time."
  ],
  methodsTitle: "System & Approach",
  methods: [
    { h: "Distributed plantar pressure sensing", p: "An array of pressure sensors spanning the fore-foot, mid-foot, and heel resolves localized peak pressures across the sole during stance and push-off.", chips: ["Fore · Mid · Heel", "Pressure map"] },
    { h: "Active offloading actuation", p: "Mechanically actuated cells beneath high-pressure zones retract to redistribute load away from at-risk tissue — converting a passive insole into a controllable surface.", chips: ["Actuator cells", "Load redistribution"] },
    { h: "Closed-loop controller", p: "An embedded controller reads the pressure map, compares against a safe threshold, and drives the actuators to keep peak pressure bounded — then re-measures, closing the loop continuously.", chips: ["Threshold control", "Real-time"] },
    { h: "fPCB + embedded electronics", p: "A flexible PCB integrates the sensing front-end and microcontroller into a conformable insole platform." }
  ],
  architecture: {
    loop: true,
    returnLabel: "Re-measured pressure feeds back — continuous closed loop",
    nodes: [
      { tag: "Sense", h: "Plantar pressure", p: "Sensor array across the sole", accent: "" },
      { tag: "Decide", h: "Controller", p: "Pressure map vs. safe threshold", accent: "cyan" },
      { tag: "Act", h: "Offload", p: "Actuator cells retract under peaks", accent: "coral" }
    ]
  },
  results: {
    title: "System Capabilities",
    intro: "A working sensing-and-actuation platform demonstrating adaptive offloading.",
    metrics: [
      { big: "3", unit: "", label: "Sensing regions", desc: "Fore-foot · mid-foot · heel." },
      { big: "↻", unit: "", label: "Closed-loop", desc: "Sense → offload → re-measure." },
      { big: "Active", unit: "", label: "Offloading", desc: "Mechanical, not passive." },
      { big: "fPCB", unit: "", label: "Platform", desc: "Conformable insole electronics." }
    ],
    text: "Plantar-pressure heatmaps drive the actuator array to flatten localized peaks, redistributing load away from at-risk tissue — the core mechanism for ulcer-risk reduction."
  },
  equations: [
    { tex: "P_i = \\dfrac{F_i}{A_i} \\qquad \\text{control goal:}\\;\\; \\max_i P_i \\le P_{\\text{thresh}}", caption: "Each zone's contact pressure is force over area; the controller actuates to keep the peak zone pressure below a safe threshold." }
  ],
  gallery: [
    { src: "images/orthon/insole-exploded.jpg", span: "g-wide", cap: "Exploded assembly — sensing + actuation + PCB" },
    { src: "images/orthon/block-diagram.jpg", span: "g-third", cap: "Closed-loop control architecture" },
    { src: "images/orthon/actuator.jpg", span: "g-third", cap: "Offloading actuator element" },
    { src: "images/orthon/mechanism-01.jpg", span: "g-third", cap: "Actuation mechanism — section" },
    { src: "images/orthon/heatmap-01.jpg", span: "g-third", cap: "Plantar pressure heatmap" },
    { src: "images/orthon/heatmap-02.jpg", span: "g-third", cap: "Pressure redistribution under load" },
    { src: "images/orthon/test-rig.jpg", span: "g-third", cap: "Bench test rig" },
    { src: "images/orthon/foot-pressure.jpg", span: "g-third", cap: "Target pressure region" }
  ],
  downloads: [
    { kind: "PDF", name: "Orthon — Capstone Poster", desc: "System design, mechanism, and results", label: "Poster", href: "files/Orthon_Poster.pdf" }
  ]
},

/* ---------- 03 · AccuSense Cath ---------- */
{
  id: "accusense",
  num: "03",
  title: "AccuSense Cath",
  fullTitle: "AccuSense Cath — Soft-Tip Cardiac Catheter with Contact-Force Haptic Feedback",
  tagline: "A 6 Fr ablation catheter with a CNT-doped piezoresistive soft tip that senses tissue contact force and renders it as fingertip haptics — in real time.",
  dates: "Sep 2025 – Dec 2025",
  context: "Graduate Project · UC San Diego",
  role: "Mechanical design, sensing & haptics",
  categories: ["Medical Devices", "Haptics"],
  tags: ["SolidWorks", "ANSYS", "CNT Piezoresistive", "Arduino", "MATLAB", "SLA 3D Print", "Haptics"],
  hero: { src: "images/accusense/fea-deformation.png", cap: "ANSYS total-deformation study — soft distal tip bending under increasing contact load (10.4 → 50.9 mm max)" },
  aim: "In cardiac ablation, too little contact wastes energy and too much perforates tissue. AccuSense gives the operator a <span class='hl'>felt sense</span> of tip-to-tissue force — closing the loop between catheter and hand.",
  background: [
    "Radiofrequency ablation depends on controlled tip-to-tissue contact force: too little produces ineffective lesions, too much risks perforation. Commercial force-sensing catheters exist but are costly and proprietary.",
    "AccuSense explores a <strong>low-cost CNT-doped piezoresistive</strong> approach — a soft, 3D-printed sensing tip paired with real-time force estimation and vibrotactile feedback, so the operator perceives contact force directly."
  ],
  methodsTitle: "System & Approach",
  methods: [
    { h: "Soft-tip catheter design", p: "A 6 Fr catheter carries an elastic, SLA-printed distal tip engineered to deform predictably under contact — the mechanical basis for mapping force to a measurable signal.", chips: ["6 Fr", "SLA elastic tip"] },
    { h: "CNT-doped piezoresistive sensing", p: "A self-standing carbon-nanotube film is chemically doped to set its baseline resistance; under contact pressure its resistance changes across several orders of magnitude, encoding force.", chips: ["CNT film", "Doped baseline"] },
    { h: "FEA-validated compliance", p: "ANSYS finite-element analysis characterizes tip deformation and stress under physiological loads, ensuring force maps cleanly and repeatably onto deflection and resistance.", chips: ["ANSYS", "Stress / deflection"] },
    { h: "Real-time force estimation + haptics", p: "An Arduino reads tip resistance; a MATLAB pipeline converts it to contact force and drives a vibrotactile actuator with proportional feedback at under 50 ms latency.", chips: ["Arduino", "MATLAB", "<50 ms"] }
  ],
  architecture: {
    loop: true,
    returnLabel: "Operator feels contact force — sensorimotor loop closed",
    nodes: [
      { tag: "Contact", h: "Soft tip", p: "Tissue contact deforms the CNT tip", accent: "" },
      { tag: "Transduce", h: "ΔResistance", p: "Piezoresistive response", accent: "cyan" },
      { tag: "Estimate", h: "Force model", p: "Arduino + MATLAB", accent: "" },
      { tag: "Render", h: "Haptics", p: "Proportional vibrotactile cue", accent: "coral" }
    ]
  },
  results: {
    title: "Results & Validation",
    intro: "Bench characterization of the piezoresistive tip and the closed-loop haptic response.",
    metrics: [
      { big: "0.02–0.4", unit: "N", label: "Sensing range", desc: "Detectable contact-force window." },
      { big: "<50", unit: "ms", label: "Feedback latency", desc: "Contact to haptic response." },
      { big: "6", unit: "Fr", label: "Catheter size", desc: "French gauge of the shaft." },
      { big: "10⁸", unit: "Ω", label: "Resistance span", desc: "Across the pressure range." }
    ],
    chart: {
      type: "scatter", line: true, r: 2.5,
      title: "Piezoresistive characterization",
      subtitle: "CNT-doped tip · resistance vs. applied pressure",
      x: { min: 0, max: 2, label: "Pressure (MPa)", ticks: [0, 0.5, 1, 1.5, 2] },
      y: { log: true, min: 1, max: 1e9, label: "Resistance (Ω)", ticks: [1, 1e2, 1e4, 1e6, 1e8] },
      points: [
        { x: 0.0, y: 2e8 }, { x: 0.05, y: 5e7 }, { x: 0.1, y: 3e6 }, { x: 0.15, y: 1.5e6 },
        { x: 0.2, y: 9e5 }, { x: 0.3, y: 5e5 }, { x: 0.4, y: 3e5 }, { x: 0.5, y: 2e5 },
        { x: 0.6, y: 1.2e5 }, { x: 0.7, y: 7e4 }, { x: 0.8, y: 4e4 }, { x: 0.9, y: 2.5e4 },
        { x: 1.0, y: 1.2e4 }, { x: 1.1, y: 7e3 }, { x: 1.2, y: 4e3 }, { x: 1.3, y: 2e3 },
        { x: 1.4, y: 1e3 }, { x: 1.5, y: 5e2 }, { x: 1.6, y: 2.5e2 }, { x: 1.7, y: 1e2 },
        { x: 1.8, y: 5e1 }, { x: 1.9, y: 2.2e1 }, { x: 2.0, y: 1.2e1 }
      ]
    },
    text: "Resistance falls monotonically by roughly seven orders of magnitude across the working pressure range, giving a high-sensitivity, calibratable mapping from contact pressure to force."
  },
  equations: [
    { tex: "R(F) = R_0\\,e^{-kF} \\;\\;\\Longrightarrow\\;\\; F = \\frac{1}{k}\\,\\ln\\!\\frac{R_0}{R}", caption: "Contact force is recovered from the calibrated piezoresistive response (R₀ unloaded resistance, k sensitivity)." },
    { tex: "P_{\\text{contact}} = \\dfrac{F}{A_{\\text{tip}}}", caption: "Tip contact pressure relates estimated force to the contact area of the distal tip." }
  ],
  gallery: [
    { src: "images/accusense/fea-deformation.png", span: "g-wide", cap: "ANSYS total-deformation — tip compliance under increasing load" },
    { src: "images/accusense/soft-tip.jpg", span: "g-third", cap: "SLA-printed soft distal tip" },
    { src: "images/accusense/tip-macro.jpg", span: "g-third", cap: "Sensing tip — macro" },
    { src: "images/accusense/tip-microscopy.jpg", span: "g-third", cap: "CNT film — microscopy" },
    { src: "images/accusense/test-setup.jpg", span: "g-half", cap: "Bench test — tip contact against instrumented fixture" },
    { src: "images/accusense/cnt-process.jpg", span: "g-half", cap: "CNT film doping process" },
    { src: "images/accusense/block-diagram.jpg", span: "g-third", cap: "System block diagram" },
    { src: "images/accusense/schematic.jpg", span: "g-third", cap: "Contact-force sensing concept — nitinol frame & PEEK tube" },
    { src: "images/accusense/design-annotated.jpg", span: "g-third", cap: "Force-sensing tip concept — electrode, reflector, optical fiber" },
    { src: "images/accusense/pcb.jpg", span: "g-half", cap: "Acquisition electronics" },
    { src: "images/accusense/ablation-diagram.jpg", span: "g-half", cap: "Reference: catheter ablation in the heart" }
  ],
  downloads: [
    { kind: "PDF", name: "Cardiac Ablation Catheters — Project Report", desc: "Design, sensing characterization, and haptic feedback", label: "Report", href: "files/AccuSense_Cardiac_Ablation_Catheter.pdf" }
  ]
},

/* ---------- 04 · VisionX ---------- */
{
  id: "visionx",
  num: "04",
  title: "VisionX",
  fullTitle: "VisionX — Multimodal Wearable Haptic Navigation System for Assistive Spatial Awareness",
  tagline: "A wireless two-module wearable that turns the space ahead into directional heat and vibration — spatial awareness without sight or sound.",
  dates: "Jan 2026 – Mar 2026",
  context: "MAE 219 · UC San Diego",
  role: "Hardware, firmware & PCB · with Rehan Ahmedabadi",
  categories: ["Wearables", "Haptics", "Medical Devices"],
  tags: ["BLE", "VL53L5CX ToF", "Peltier", "VCA", "Arduino Nano 33 BLE", "SEEED XIAO", "KiCad", "Assistive Tech"],
  hero: { src: "images/visionx/wearing-crop.jpg", cap: "VisionX worn — spectacle ToF sensing unit and forearm thermal/vibrotactile feedback module" },
  aim: "Give visually impaired users an intuitive sense of nearby obstacles by translating distance and direction into <span class='hl'>thermal and vibrotactile</span> cues — feedback that never competes with hearing.",
  background: [
    "Most navigation aids rely on audio, which masks the ambient sound cues blind users depend on, or on vision they cannot use. Touch is an underused, high-bandwidth channel.",
    "VisionX pairs <strong>thermal</strong> feedback (carrying direction) with <strong>vibrotactile</strong> feedback (carrying urgency), letting a user parse two dimensions of spatial information at once — without confusion between modalities."
  ],
  methodsTitle: "System & Approach",
  methods: [
    { h: "Spectacle sensing module", p: "A VL53L5CX Time-of-Flight sensor on the spectacle frame continuously measures distance to objects ahead; a SEEED XIAO nRF52840 acquires and transmits it over BLE at under 50 ms latency.", chips: ["VL53L5CX ToF", "SEEED XIAO", "BLE <50 ms"] },
    { h: "Forearm actuation module", p: "An Arduino Nano 33 BLE drives three Peltier elements (left / center / right) for directional thermal feedback via a 4-channel MOSFET driver, plus a Voice Coil Actuator for critical proximity alerts.", chips: ["3× Peltier", "VCA", "MOSFET driver"] },
    { h: "Distance → sensation mapping", p: "Objects beyond 100 cm give no feedback; 50–100 cm applies low thermal (36–39 °C) to the matching direction; 20–50 cm medium (39–42 °C); below 20 cm fires the VCA. PWM creates smooth thermal gradients.", chips: ["Piecewise map", "PWM gradient"] },
    { h: "Closed-loop thermal safety", p: "A DHT11 monitors actuator surface temperature and enforces a hard safety constraint (T ≤ 42 °C). A custom driver PCB was laid out in KiCad.", chips: ["DHT11", "T ≤ 42 °C", "KiCad PCB"] }
  ],
  architecture: {
    nodes: [
      { tag: "Sense", h: "ToF (spectacles)", p: "VL53L5CX distance field", accent: "" },
      { tag: "Link", h: "BLE", p: "SEEED XIAO → forearm, <50 ms", accent: "cyan" },
      { tag: "Map", h: "Arduino logic", p: "Distance + direction → cue", accent: "" },
      { tag: "Render", h: "Peltier ×3 + VCA", p: "Directional heat + proximity buzz", accent: "coral" }
    ]
  },
  results: {
    title: "Pilot Study Results",
    intro: "A 5-participant blindfolded pilot study evaluated usability, feedback clarity, and ergonomics — participants located obstacle direction and proximity from haptics alone.",
    metrics: [
      { big: "20–120", unit: "cm", label: "Sensing range", desc: "Mapped to feedback intensity." },
      { big: "36–42", unit: "°C", label: "Thermal band", desc: "Closed-loop, safety-capped." },
      { big: "<50", unit: "ms", label: "BLE latency", desc: "Sensor to actuation." },
      { big: "~1.5", unit: "s", label: "Response time", desc: "Avg. participant reaction." }
    ],
    chart: {
      type: "bar", max: 5, unit: "", yLabel: "Rating (/5)",
      title: "Pilot study ratings", subtitle: "Blindfolded users, n = 5",
      bars: [
        { label: "Usability", value: 4.2 },
        { label: "Feedback clarity", value: 4.4 },
        { label: "Ergonomics", value: 3.8 }
      ]
    },
    text: "Combining thermal (directional) and vibrotactile (urgency) cues let users reliably parse two dimensions of spatial information simultaneously — a clear advantage over single-modality aids."
  },
  equations: [
    { tex: "f(d)=\\begin{cases}\\text{none} & d>100\\\\[2pt] \\text{thermal }36\\!-\\!39^\\circ\\!C & 50<d\\le100\\\\[2pt] \\text{thermal }39\\!-\\!42^\\circ\\!C & 20<d\\le50\\\\[2pt] \\text{VCA vibration} & d\\le20\\end{cases}", caption: "Feedback mapping from obstacle distance d (cm) to haptic modality and intensity." }
  ],
  gallery: [
    { src: "images/visionx/wearing.jpg", span: "g-wide", cap: "VisionX worn — spectacle + forearm modules" },
    { src: "", span: "g-third", label: "Spectacle unit", note: "ToF + XIAO", cap: "Sensing module" },
    { src: "", span: "g-third", label: "Forearm module", note: "Peltier + VCA", cap: "Feedback module" },
    { src: "", span: "g-third", label: "Driver PCB", note: "KiCad", cap: "Custom driver board" },
    { src: "", span: "g-third", label: "Pilot study", note: "n=5", cap: "Blindfolded trial" }
  ],
  downloads: [
    { kind: "PDF", name: "MAE 219 Final Report — VisionX", desc: "System design, methods, pilot study & discussion", label: "Report", href: "files/VisionX_MAE219_Final_Report.pdf" }
  ]
}

];
