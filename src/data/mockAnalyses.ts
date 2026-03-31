import type { AnalysisResult, HistoryEntry } from "../types/analysis";

export const mockResults: Record<string, AnalysisResult> = {
  "quote-brakes": {
    id: "quote-brakes",
    date: "Mar 31, 2026",
    type: "quote",
    status: "review",
    title: "Brake service quote review",
    summary: "The quote is close to normal, but labor looks a little high.",
    estimatedRange: "$450 - $550",
    quoteTotal: "$620",
    difference: "+$120 above average",
    badgeLabel: "Review carefully",
    shortSummary:
      "This quote seems a bit above the usual market range. The brake pad work looks normal, but labor time may be more than expected.",
    possibleCauses: [
      {
        title: "Worn brake pads",
        detail: "Brake pad replacement is common when braking feels rough or noisy.",
      },
      {
        title: "Rotor resurfacing",
        detail: "Light scoring on the rotors can lead to resurfacing being suggested.",
      },
      {
        title: "Brake fluid service",
        detail: "A fluid flush may be helpful if maintenance is overdue, but it is not always urgent.",
      },
    ],
    whatSeemsOkay: [
      "Brake pad replacement appears reasonable.",
      "Parts pricing is in line with nearby shops.",
      "The safety-related repair itself makes sense.",
    ],
    reviewItems: [
      "Labor hours seem higher than typical for this kind of brake job.",
      "Rotor resurfacing may not be needed if rotor wear is still within spec.",
      "The quote does not clearly explain why brake fluid service is included today.",
    ],
    questions: [
      "Can you show me why this part needs replacing?",
      "How many labor hours are included, and why?",
      "Is every line item necessary today, or can any part wait?",
      "Would you print a version with parts and labor separated?",
    ],
    nextSteps: [
      "Ask for clarification",
      "Get a second opinion",
      "Accept with peace of mind",
    ],
  },
  "symptom-braking": {
    id: "symptom-braking",
    date: "Mar 31, 2026",
    type: "symptom",
    status: "reasonable",
    title: "Brake vibration symptom review",
    summary: "The symptom sounds like brake wear and is worth checking soon.",
    estimatedRange: "$280 - $520",
    badgeLabel: "Looks reasonable",
    shortSummary:
      "Your description sounds consistent with a common braking issue. It does not automatically suggest a major repair, but it should be checked before it gets worse.",
    possibleCauses: [
      {
        title: "Worn brake pads",
        detail: "Pads can cause vibration or noise when they are near the end of their life.",
      },
      {
        title: "Uneven rotor surface",
        detail: "Rotors that wear unevenly can create vibration, especially at higher speeds.",
      },
      {
        title: "Tire balance issue",
        detail: "Sometimes vibration during braking overlaps with a wheel or tire problem.",
      },
    ],
    whatSeemsOkay: [
      "The issue sounds common and usually has a clear cause.",
      "There is no obvious sign of a catastrophic failure in the description.",
      "This type of inspection is usually straightforward for a workshop.",
    ],
    reviewItems: [
      "Do not ignore it if vibration is getting stronger.",
      "If the car pulls to one side, mention that clearly to the workshop.",
    ],
    questions: [
      "Can you confirm whether it is the pads, rotors, or tires?",
      "Is the repair urgent, or can it be scheduled in a few days?",
      "What would happen if I wait for one week?",
    ],
    nextSteps: [
      "Book an inspection",
      "Monitor changes carefully",
      "Compare one more quote if repair is suggested",
    ],
  },
  "warning-battery": {
    id: "warning-battery",
    date: "Mar 31, 2026",
    type: "warning-light",
    status: "review",
    title: "Battery warning light review",
    summary: "The warning light may point to a charging system issue.",
    estimatedRange: "$120 - $380",
    badgeLabel: "Review carefully",
    shortSummary:
      "This light often means the battery is not being charged correctly. It may be the battery itself, but the alternator or related wiring can also cause it.",
    possibleCauses: [
      {
        title: "Weak battery",
        detail: "An older battery may not hold charge well anymore.",
      },
      {
        title: "Alternator issue",
        detail: "If the alternator is not charging, the car may lose power while driving.",
      },
      {
        title: "Loose connection",
        detail: "Battery cables or grounding points can sometimes be the simple cause.",
      },
    ],
    whatSeemsOkay: [
      "The warning icon is common and usually easy for a shop to test.",
      "A workshop can normally confirm the cause quickly.",
    ],
    reviewItems: [
      "Avoid long trips until the charging system is checked.",
      "If the car struggles to start, treat it as more urgent.",
    ],
    questions: [
      "Can you test the battery and alternator separately?",
      "Is this safe to drive for the next day or two?",
      "Do you see any loose wiring or corrosion?",
    ],
    nextSteps: [
      "Ask for a charging-system test",
      "Compare battery pricing",
      "Arrange repair soon",
    ],
  },
};

export const sampleHistory: HistoryEntry[] = [
  {
    id: "quote-brakes",
    date: "Mar 31, 2026",
    type: "quote",
    status: "review",
    title: "Brake service quote review",
    summary: "The quote is a little above normal mainly because labor seems high.",
  },
  {
    id: "symptom-braking",
    date: "Mar 28, 2026",
    type: "symptom",
    status: "reasonable",
    title: "Brake vibration symptom review",
    summary: "Likely normal brake wear, with no obvious sign of a major fault.",
  },
  {
    id: "warning-battery",
    date: "Mar 24, 2026",
    type: "warning-light",
    status: "review",
    title: "Battery warning light review",
    summary: "Likely charging-system issue that should be checked soon.",
  },
  {
    id: "quote-tires",
    date: "Mar 20, 2026",
    type: "quote",
    status: "expensive",
    title: "Tire replacement quote review",
    summary: "Premium tire pricing and alignment fees look above average.",
  },
];
