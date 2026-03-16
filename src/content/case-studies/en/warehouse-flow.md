---
title: Warehouse Flow Modeling Tool
subtitle: Improving the usability of a logistics simulation interface.
heroImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='system-ui' font-size='36'%3EPlaceholder Image%3C/text%3E%3C/svg%3E"
---

## Overview

This project focused on improving the usability of a web-based logistics simulation tool used by warehouse **Kaizen specialists** to design and evaluate material flow systems.

The platform combines two modeling environments:

- **A process flow editor** describing warehouse operations  
- **A 2D layout editor** representing the physical warehouse  

These models feed into a simulation engine that models system behaviour such as:

- Worker movement and actions
- Truck arrivals and departures
- Material flow through the warehouse

I joined the project midway through development as a Simulation Engineer. However, as a member of the project team I was able to support the frontend team with UX improvements to the modeling interface.

**Role:** Simulation Engineer contributing UX and interaction improvements  
**Duration:** 6+ months  
**Tech:** Figma, Unity, React, React Flow, React Three Fiber

---

## Problem

As the system grew more complex, usability issues began to emerge.

Users struggled to understand relationships between the process model and the physical warehouse layout, and complex diagrams became difficult to manage.

These problems made it difficult for users to build complex warehouse simulations without guidance from engineers.

User testing and internal feedback revealed several patterns:

### Process logic and physical space were mentally disconnected

Users had difficulty understanding how nodes in the process diagram corresponded to physical elements in the warehouse layout. This was particularly problematic with the use of **Link** blocks, which were originally used to act as the link between the two views.

### Real warehouse flows were too large to model quickly

Practical models often contained dozens of nodes and connections, which exposed weaknesses in the diagram interaction design. Moving and editing multiple blocks was problematic. 

### Small interaction problems created large cognitive load

Weak selection states and unclear connection wires made it difficult for users to track what they were editing.

---

## Design Improvements

The team’s UX improvements focused on reducing friction in the modeling workflow.

[Add Images here!]

Areas where I made major contributions included:

### Design and Development of Validation Feedback Tab

To support frontend developers, I created a validation system in Unity which would read configuration files for errors and warnings. This info was fed back to the frontend automatically.

I was given the freedom to design and implement the entire tab, so I explored various ideas for how to show the errors. I sketched some wireframes and went through with the UX team on potential benefits or painpoints for each idea, as well as the frontend team on which designs would be the easiest to implement.

The final design was a variation of the dropdown design, where items were displayed in 'Priority' order - fixing issues near the top of the list would often indirectly also fix latter issues. The use of symbols was limited as the perception of having lots of error or warning icons was intimidating to users (both developers and real users)

### Improving node readability

Nodes were redesigned with clearer iconography and labeling to help distinguish the physical and process views. By using full-colour, isometric graphics for the physical view, and flat icons for the process view, helped to differentiate between tangible things and theoretical representations. 

### Process View refinement

In the earlier versions of this view, all elemnts had very similar deisgn, and there was a lot of complexity with how many blocks and connections there were. 

I advocated for removing the "Link" block entirely, and helped design the latter design included a small tab to show the connections instead. 

User tests showed that people wanted to move multiple nodes simultaneously, allowing larger diagrams to be reorganized more easily. I helped to add multi-select logic, and worked with UX to agree on how to modify the mouse and keyboard imputs. Holding the left mouse down felt natural to most tech-literate users.

---

## Process

Because the product was already in development, improvements were introduced incrementally alongside ongoing feature work.

Rather than a separate prototyping phase, the team relied on regular user testing sessions and internal feedback to identify friction points in the interface.

Design changes were implemented and evaluated through repeated testing with domain experts.

This approach allowed the team to improve existing workflows while development continued on new functionality.

One trade-off of this approach was that feedback often came from a small number of users, which introduced some risk of overfitting solutions to specific workflows. However, it enabled the team to rapidly address usability problems as they appeared.

---

## Reflection

Designing tools for specialized industrial workflows requires balancing flexibility with clarity.

Even small usability issues can significantly slow down expert users working with complex systems.

This project demonstrated how incremental UX improvements and close collaboration with domain specialists can significantly improve the usability of an already complex product.

> Due to NDA constraints, detailed screenshots and metrics cannot be publicly shared. All sketches contain minor semantic differences to the real UX design. 