---
title: Warehouse Flow Modeling Tool
subtitle: Improving the usability of a logistics simulation interface.
heroImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='system-ui' font-size='36'%3EPlaceholder Image%3C/text%3E%3C/svg%3E"
---

## Overview

This project involved improving the usability of a web-based tool used by logistics **Kaizen experts** to design and evaluate warehouse material flow.

The product combines two modeling environments:

- A **process flow editor** used to define warehouse operations
- A **3D layout editor** used to design the physical warehouse space

Together these models feed into a simulation engine that generates data about asset movement and operational efficiency.

I joined the project midway through development to assist the frontend team with UX decisions and usability improvements across the interface.

Before this tool existed, experts typically relied on a combination of diagram tools like Lucidchart and spreadsheets such as Microsoft Excel to design warehouse processes and analyze performance.

- **Role:** Simulation Engineer supporting frontend UX
- **Duration:** 3 months
- **Tools:** Figma, Lucidboard
- **Platform:** Web (React, React Flow, React Three Fiber)

## Problem

Warehouse planning requires combining **process logic** with **physical layout design**. Traditionally these tasks are handled in separate tools.

Process flows are diagrammed in visual tools, while calculations and planning data live in spreadsheets. This fragmented workflow makes iteration slow and makes it difficult to evaluate how layout changes affect operations.

The product aimed to unify these workflows into a single environment where users could model process flow, design the warehouse layout, and simulate movement through the system.

When I joined the project, the core architecture already separated two modeling environments:

- Process flow modeling
- Physical warehouse layout design

While this matched how Kaizen experts think about logistics systems, switching between the two views could create confusion and cognitive overhead. Improving clarity between these representations became a key focus of my work.

## Goals

- **Improve usability of the existing interface**
  Identify friction points in the current workflows and refine interactions.

- **Support real-world Kaizen workflows**
  Ensure the system reflected how experts naturally analyze logistics systems.

- **Clarify relationships between models**
  Reduce cognitive overhead when switching between process flow editing and spatial layout design.

## Research

Research focused on understanding both the domain workflows and the existing implementation of the tool.

- **Workflow analysis**
  Studying how warehouse specialists currently design systems using diagram tools and spreadsheets.

- **Interface evaluation**
  Reviewing the existing product to identify usability friction and interaction issues.

- **Domain collaboration**
  Working with logistics specialists to understand how process modeling and layout planning interact during warehouse optimization.

<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='system-ui' font-size='36'%3EPlaceholder Image%3C/text%3E%3C/svg%3E" alt="Research artifacts" />

## Key Insights

- **Process modeling usually comes first**
  Experts typically define the logical flow of assets before considering the physical layout of the warehouse.

- **Abstract models reduce complexity**
  Allowing users to design workflows without spatial constraints helped simplify early-stage planning.

- **Context switching creates cognitive load**
  Users had to mentally connect abstract process diagrams with physical warehouse locations when moving between the two editors.

## User Flow

The primary workflow for the tool followed three stages:

1. **Define process flow**
   Users create a node-based flow diagram describing warehouse operations.

2. **Design warehouse layout**
   Users construct a spatial representation of the warehouse environment.

3. **Run simulation**
   The system generates asset movement data to evaluate performance and throughput.

<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='system-ui' font-size='36'%3EPlaceholder Image%3C/text%3E%3C/svg%3E" alt="User flow diagram" />

## Sketches & Wireframes

<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='system-ui' font-size='32'%3EPlaceholder%3C/text%3E%3C/svg%3E" alt="Sketch 1" />
<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='system-ui' font-size='32'%3EPlaceholder%3C/text%3E%3C/svg%3E" alt="Sketch 2" />

## Prototype

<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='system-ui' font-size='36'%3EPlaceholder Image%3C/text%3E%3C/svg%3E" alt="Prototype screens" />

## Final Design

<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='system-ui' font-size='36'%3EPlaceholder Image%3C/text%3E%3C/svg%3E" alt="Final UI" />

## Outcome

The project created a unified workflow for modeling warehouse operations and evaluating performance through simulation. By combining process flow design, spatial layout editing, and simulation results into a single system, the tool enabled faster iteration and clearer evaluation of logistics scenarios.

## Reflection

Working on this project highlighted the challenges of designing interfaces for complex domain tools. Separating abstract process modeling from physical layout editing supported expert workflows, but it also introduced challenges in maintaining a clear mental model when switching contexts.

The experience reinforced the importance of aligning interface structure with how domain experts think about problems, while also reducing friction between different representations of the same system.
