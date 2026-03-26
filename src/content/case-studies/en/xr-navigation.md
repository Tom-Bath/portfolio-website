---
title: XR Navigation
subtitle: Designing spatial navigation for extended reality environments.
heroImage: "/portfolio-website/case-studies/virtualsceneweb.webp"
challenge: "The technology is powerful but invisible - a compelling interactive demo was needed to convert B2B clients."
role: "Concept, UX Design, Unity Development, Intern Mentoring"
duration: ""
---

## Overview

This project centred on designing and developing a concept XR navigation application built to demonstrate a proprietary IMU sensor fusion technology to prospective clients.

The technology combines data from a vehicle-mounted IMU device, a vehicle-mounted GNSS antenna, and an XR headset IMU. Together, the output pose is accurate enough to render virtual objects with high precision in the real world while inside a moving vehicle. This capability has previously been demonstrated through real-car VR racing experiences.

<figure>
  <img src="/portfolio-website/case-studies/cardiagramblue.webp" alt="Diagram of the sensor fusion system inside a vehicle" class="w-full h-auto" />
  <figcaption class="text-sm text-muted-foreground mt-2">Diagram of the sensor fusion system inside a vehicle</figcaption>
</figure>


A navigation app was chosen as the example application, because it could showcase both:

- Visual elements placed in the world at specific longitude-latitude coordinates
- Visual elements placed inside the car in a fixed location on the dashboard

The demo scenario follows a fictional passenger navigating a city - a relatable stand-in for real end-users that gives prospective clients a concrete context to map their own use cases onto.

---

## Research and Problem Definition

### Problem

The company sells both IMU sensors and fusion technology. The tech is powerful but invisible - and raw data alone wasn't enough to convert B2B clients. The business needed a way to prove precision through experience rather than specification.

**The core insight was that I wasn't designing for a driver - I was designing for a client evaluating whether to buy into the technology.** This added complexity to many of the design decisions - the goal wasn't a polished consumer navigation app, it was a demonstration that let clients map their own use cases onto what they were seeing.

To achieve that, I built around a fictional end-user navigating a city - a relatable context that kept the demo grounded while still showcasing both world-fixed and vehicle-fixed spatial anchoring.

---

### Research and Insights

At the start of the project, I analyzed the XR landscape - specifically the shift from static HUDs to conformal AR (graphics that sit accurately on the road).

- Companies like Audi and Mercedes-Benz have launched high-end AR HUDs, but these are hardware-locked to specific vehicle models.

- Mobile AR frameworks like ARKit/ARCore rely heavily on **visual-inertial odometry (VIO)**. In moving environments, they suffer from accumulated drift and high latency in "large-scale dynamic environments" (like a car moving at high speeds) without external sensor fusion. The system I was designing for would mostly avoid this issue but it was still possible to occur.

- Technical Constraints: While AR glasses have improved a lot in recent years - both in field of view and rendering quality - there are still real limits to design around. The narrow FOV means critical UI needs to stay central, and small text or fine detail can be hard to read reliably.

Due to our hardware constraints, it seemed necessary to keep the interface simple and high-contrast - not just as a stylistic choice, but as a requirement for legibility under real-world conditions.

<figure>
  <img src="/portfolio-website/case-studies/audi.png" alt="Audi AR HUD example" class="w-full h-auto" />
  <figcaption class="text-sm text-muted-foreground mt-2">An example of the kind of work being done by Audi</figcaption>
</figure>

---

## Design Process and Solutions

### Design Strategy

Designing for a moving vehicle meant working across three distinct spatial depths at once:

- World-Fixed: Elements pinned to GPS coordinates via ArcGIS (Route guidance, waypoints).
- Vehicle-Fixed: Elements anchored to the car's interior (speedometer, minimap).
- Physical Reality: The actual environment visible through the glass.

Based on research and initial testing, I tried to design with these principles:

- Focus on high-contrast, large-scale shapes and typography. This mitigated the "micro-jitter" common in sensor fusion and reduced motion sickness.
- Positioning all UX within the windshield’s peripheral area. This optimized tracking stability and kept the user’s gaze aligned with the vehicle's direction.
- Designing for a broad range of end-users. Initial testing confirmed that some UI elements obstructed the field of view for shorter users.

**Note:** Due to safety concerns identified during early testing, we pivoted the UX from a driver experience to a passenger experience. This drove every subsequent decision about UI placement and interaction model.

### 3D World-Locked Assets

World-locked assets are virtual objects anchored to specific GPS coordinates - they appear to sit in the physical environment and stay in place as the vehicle moves around them. In order to show to clients the power of the IMU fusion technology, the priority was showing that these objects remained precisely positioned at speed, without drifting or snapping.

- Arrival Gates: Large, opaque 3D frames placed at car park entrances. Because they were solid and aligned with real-world structures, they felt grounded and stable.

- Waypoints: Semi-transparent markers at intersections. These allowed the user to see through them to spot oncoming traffic or pedestrians. The arrows had to be tilted up slightly towards the user so they could be seen while approaching, but not block the users view of the road entirely.

<figure>
  <img src="/portfolio-website/scans/scan-3d-ui.webp" alt="Sketches exploring shapes for world-locked elements" class="w-full h-auto" />
  <figcaption class="text-sm text-muted-foreground mt-2">Sketches exploring different shapes for each world-locked element; pros and cons of each approach are annotated on the image</figcaption>
</figure>

> **Route Overlays** and **Overhead Text** were dropped from the final solution. Initially testing showed these features had potential, but the ArcGIS route data wasn't high-fidelity enough to make the lines "hug" the curves of the road perfectly; a jittery line on the ground felt low-quality. Additionally, sizing the overhead text was challenging as they either took up too much visual space, or the fonts were too small to read.

**Key Finding:** With the world outside the car having a lot of visual information already, it very much felt "Less is More" in terms of UX. Early versions of the app felt overwhelming with visual cues and information, so the final result had a limited number of waypoints and gates.

### 2D In-Car Dashboard

These elements sit inside the car rather than out in the world - pinned to the vehicle's interior regardless of where it's driving. The goal was to show that a virtual speedometer and minimap could feel as stable and readable as a physical screen, even with constant vehicle movement.

<figure>
  <img src="/portfolio-website/scans/scan-dashboard-frames.webp" alt="Conceptual sketches of 2D dashboard shapes" class="w-full h-auto" />
  <figcaption class="text-sm text-muted-foreground mt-2">Early conceptual sketches of 2D shapes with no fixed function assigned, exploring how they could be used in the dashboard</figcaption>
</figure>

- Legibility & Contrast: I directed the UI production with a focus on high-contrast fonts and bold weights. Because lighting changed constantly (tunnels, direct sun), a thinner UI would have been unreadable.

- Speedometer: To ensure readability at a glance, the speedometer utilized oversized numerical text and a clean, sans-serif typeface. This allowed the user to verify the digital-to-analog sync without having to "hunt" for the data.

- De-Cluttered Minimap: The minimap was designed as a high-contrast, simplified vector map. We stripped away all text labels and street names, relying on pure geometry to show the vehicle’s position relative to the upcoming 3D waypoints.

- Live Data: The minimap was integrated with a live data feed to provide real-time context that matched the 3D world-space.

**Key Finding:** While the UI placement was effective for a passenger-side experience, the design does not translate directly to a driver end-user. The "oversized" scale required for legibility and stability would have obscured critical physical controls such as the steering wheel; highlighting a fundamental UX conflict between AR visibility and operational safety.

---

## Reflection

Ultimately, the project succeeded in its primary goal: making invisible technology visible. Translating raw IMU data into a functional user experience gave clients something concrete to map their own use cases onto. The demo was successfully shown to a prospective business who became a key client.

In retrospect, I would prioritize showing off the buyer-specific data visualizations more (like low-latency data precision) to more directly encourage business sales. While the app concept is relatable, the high precision of objects outside the car wasn't so clear to end users.

Testing showed the dashboard elements were functional, but with further user testing I believe they could have been made smaller to make room for additional UX components like interactive media controls.

Leading this project end-to-end taught me that ownership requires a different kind of communication. Writing clear success criteria for interns and giving structured feedback were skills I had to develop deliberately. I learned that ambiguity in a brief costs more time than it saves, and that clear constraints give junior contributors more creative confidence, not less.

<figure>
  <img src="/portfolio-website/scans/scan-dashboard.webp" alt="Dashboard UI sketches" class="w-full h-auto" />
  <figcaption class="text-sm text-muted-foreground mt-2">Dashboard UI sketches</figcaption>
</figure>

> Diagrams and sketches shown are illustrative and not representative of the final product.
