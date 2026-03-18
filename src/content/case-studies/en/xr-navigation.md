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
- World-locked elements placed at real geographic coordinates via ArcGIS (turn indicators, POIs, route overlays)
- Vehicle-fixed elements anchored to the interior regardless of heading (speedometer, minimap)
- The actual physical environment itself

Designing across these 3 layers meant managing depth, visual weight, and occlusion in a context where most existing UI conventions do not apply. Additionally, the UI would effectively be limiting the field of view for the user which could impact safety while driving. 
> The app was only ever used for passengers in the end due to this safety concern.

While desiging, I always had to consider ways to mitigate motion sickness caused by sensor drift or jitter. I focused on large UI elements which minimized sustained gaze and would reduce the impact of jitter.

### Designing 3D World-Locked Assets

The geographically positioned UI assets could demonstrate demonstrate both the accuracy of the spatial anchoring (via ArcGIS) and the visual quality achievable while moving.

I considered the following concepts:
- **Route Overlays:** Digital paths mapped directly onto the road surface.
- **Lane Assists:** Visual cues to help with positioning and turns.
- **Waypoints:** Clear markers for specific geographic points of interest.
- **Arrival Gates:** 3D "finish lines" or virtual barriers that a user drives through to signal reaching a destination.
- **Hazard Markers:** Stable, persistent icons for landmarks or road obstacles.
- **Text prompts:** In-space text guidance for directions

[Add images]

Design decisions here focused on **legibility at distance and in motion**: 

To test which elements worked best, I (with the help of my team) designed and modelled various elements in different scales, opacities, and colour contrasts. 

The final application consisted of:
- **Opaque, large physical arrival gates**
- **Transparent waypoint markers at intersections** 

The gates were placed at fixed locations in a car park, and the waypoints were placed along the road. While I found in testing that transparent objects were always better for usability (being able to always see the world around is better than blocking line of sight), having exclusively transparent objects meant the clients could not easily see the high quality precision of geographically-placed assets. The use of large, physical gates at the carpark entrance meant that the gate functionally did not obscure so much visual information - there was already some real-world gate in the same position!

Transparent waypoint markers...

### 2D In-Car Dashboard Assets

<!-- [todo] -->

---

## Reflection

<!-- [todo] -->

> Due to NDA constraints, detailed screenshots and metrics cannot be publicly shared. All sketches contain minor semantic differences to the real UX design. 