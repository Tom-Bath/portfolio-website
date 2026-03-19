---
title: XR Navigation
subtitle: Designing spatial navigation for extended reality environments.
heroImage: "src/content/case-studies/virtualscene.png"
---
> *The hero image is a stylized reimagining to non-disclosure agreements

## Overview

This project centred on designing and developing a concept XR navigation application built to demonstrate a proprietary IMU sensor fusion technology to prospective clients. 

The technology combines data from a vehicle-mounted IMU device, a vehicle-mounted GNSS antenna, and a XR headset IMU. Together, the output pose is accurate enough to render virtual objects with high precision in the real world while inside a moving vehicle. This capability has previously been demonstrated through real-car VR racing experiences.

![Diagram of the sensor fusion system inside a vehicle](src/content/case-studies/cardiagramblue.png)

A navigation app was chosen as the example application, because it could showcase both: 
- Visual elements placed in the world at specific longitude-latitude coordinates
- Visual elements placed inside the car in a fixed location on the dashboard

---

## Problem

The company sells both IMU sensors and fusion technology. The tech is powerful but invisible. To sell it to B2B clients, showing data was good, but to really sell its use to customers we wanted to prove precision through a "ground truth" experience.

The core challenge was that I wasn't really designing for a driver — I was designing for a client evaluating whether to buy into the IMU technology. To make that evaluation easier, **I built around a fictional end-user** - someone navigating a city.

The challenge was creating a functional XR demonstration that showed the capabilities of the IMU and GPS data fusion to customers, but in a context where they can map their own ideas and business needs to the demonstration.

---

## My Role

I was responsible for the project from start to finish — concept, design, and implementation. I had to negotiate with leadership about what features were most important based on what the customers wanted to see from the demonstrations.

My contributions included:

- Coming up with the navigation app concept as a way to demonstrate the technology
- Making all UX decisions across the world-space and in-car interface layers
- Mentoring interns on asset production, giving briefs, reviewing their work, and signing off on quality
- Coordinating how ArcGIS geospatial data was brought into the 3D scene
- Implementing the UI in Unity so it rendered correctly in the XR environment

---

## Research and Insights

To ground the project, I analyzed the 2026 XR landscape—specifically the shift from static HUDs to conformal AR (graphics that sit accurately on the road).Competitive Landscape

- Companies like Audi and Mercedes-Benz have launched high-end AR HUDs, but these are hardware-locked to specific vehicle models.

![Audi AR HUD example](src/content/case-studies/audi.png)
> Image Credit: Motortrend https://www.motortrend.com/features/audi-augmented-reality-best-tech-2026/photos

- Mobile AR frameworks like ARKit/ARCore rely heavily on **visual-inertial odometry (VIO)**. In moving environments, they suffer from accumulated drift and high latency in "large-scale dynamic environments" (like a car moving at high speeds) without external sensor fusion. The system I was designing for would mostly avoid this issue but it was still possible to occur.

- Technical Constraints: While AR glasses have improved a lot in recent years — both in field of view and rendering quality — there are still real limits to design around. The narrow FOV means critical UI needs to stay central, and small text or fine detail can be hard to read reliably, so I kept the interface simple and high-contrast throughout.


---

## Design Process and Solutions

The application presented three distinct spatial layers simultaneously: 

Designing for a moving vehicle required managing three distinct layers of depth.

- World-locked elements placed at real geographic coordinates via ArcGIS (turn indicators, POIs, route overlays)
- Vehicle-fixed elements anchored to the interior regardless of heading (speedometer, minimap)
- The actual physical environment itself

The primary challenge was balancing spatial accuracy (proving the tech works) with situational awareness (keeping the passenger safe).

As part of my design process, I wanted to avoid users experiencing motion sickness caused by sensor jitter. I avoided small, detailed text and opted for **large-scale, high-contrast geometry**. This reduced the need for "sustained gaze" - allowing users to process information via peripheral vision without focusing on micro-stutters in the tracking.

1. 3D World-Locked Assets
I designed these assets to prove that the ArcGIS spatial anchoring remained stable at speed. I used large, bold shapes that are easier to process quickly.

- Arrival Gates: Large, opaque 3D frames placed at car park entrances. Because they were solid and aligned with real-world structures, they felt grounded and stable.
- Waypoints: Semi-transparent markers at intersections. These allowed the user to see through them to spot oncoming traffic or pedestrians.
- Route Overlays: We ultimately cut these. The GPS data wasn't accurate enough to make the lines "hug" the curves of the road perfectly, and a jittery line on the ground felt low-quality.

**Key Finding:** While transparent markers are safer, they can feel "ghostly." Placing markers high in the air keeps the road clear but makes it harder to tell exactly which street the marker is floating over.

2. 2D In-Car Dashboard
While the 3D assets lived "outside," these 2D elements were pinned to the car's interior to show that a digital speedometer and minimap could look as stable as a physical screen.

The Perspective Challenge: We optimized the UI layout for a typical adult height. However, testing revealed that for shorter users, these "oversized" elements blocked too much of the windshield. This reinforced our decision to pivot the app toward a passenger experience rather than a driver-facing one.

Legibility & Contrast: I directed the UI production with a focus on high-contrast fonts and bold weights. Because lighting changed constantly (tunnels, direct sun), a thinner UI would have been unreadable.

Live Data: The minimap was integrated with a live data feed to provide real-time context that matched the 3D world-space.

---

## Reflection

*[INFO NEEDED: Your own take on this would be strongest here. Some prompts:]*
- *What would you do differently if you started this project again?*
- *What were you most satisfied with in the final outcome?*
- *Were there design or technical compromises that frustrated you?*
- *How did directing interns change your approach compared to solo projects?*

> Due to NDA constraints, detailed screenshots and metrics cannot be publicly shared. All sketches contain minor semantic differences to the real UX design. 