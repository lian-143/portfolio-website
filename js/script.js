"use strict";

const FALLBACK_IMAGE = "assets/images/shared/image-fallback.svg";

// ============================================================
// PROFILE PHOTO — HERO + ABOUT
// Put your photo inside assets/images/profile/, then change only `src` below.
// The same file is used in both sections. Adjust each object position if the
// face needs a different crop in the Hero or About frame.
// ============================================================
const profilePhoto = {
  src: "assets/images/profile/profile_2.PNG",
  fallback: "assets/images/profile/profile-photo-placeholder.svg",
  alt: "Profile photo of Leanne Ganado",
  heroObjectPosition: "center center",
  aboutObjectPosition: "center center",
};

// ============================================================
// TOOL LOGO RIBBON
// Replace any placeholder SVG with an official or custom logo image later.
// Keep local image paths here so the portfolio still works offline.
// Add, remove, or reorder tools without editing index.html.
// ============================================================
const toolLogos = [
  { name: "Zapier", image: "assets/images/tools/zapier-placeholder.svg" },
  { name: "n8n", image: "assets/images/tools/n8n-placeholder.svg" },
  { name: "Make.com", image: "assets/images/tools/make-placeholder.svg" },
  {
    name: "GoHighLevel",
    image: "assets/images/tools/gohighlevel-placeholder.svg",
  },
  { name: "OpenAI", image: "assets/images/tools/openai-placeholder.svg" },
  {
    name: "Google Gemini",
    image: "assets/images/tools/gemini-placeholder.svg",
  },
  { name: "WordPress", image: "assets/images/tools/wordpress-placeholder.svg" },
  { name: "Elementor", image: "assets/images/tools/elementor-placeholder.svg" },
  { name: "Python", image: "assets/images/tools/python-placeholder.svg" },
  {
    name: "JavaScript",
    image: "assets/images/tools/javascript-placeholder.svg",
  },
  { name: "PHP", image: "assets/images/tools/php-placeholder.svg" },
  { name: "HTML5", image: "assets/images/tools/html-placeholder.svg" },
  { name: "CSS3", image: "assets/images/tools/css-placeholder.svg" },
  { name: "REST API", image: "assets/images/tools/api-placeholder.svg" },
  { name: "Webhooks", image: "assets/images/tools/webhooks-placeholder.svg" },
  { name: "JSON", image: "assets/images/tools/json-placeholder.svg" },
  { name: "OAuth", image: "assets/images/tools/oauth-placeholder.svg" },
  {
    name: "Google Workspace",
    image: "assets/images/tools/google-workspace-placeholder.svg",
  },
  { name: "Slack", image: "assets/images/tools/slack-placeholder.svg" },
  { name: "Gmail", image: "assets/images/tools/gmail-placeholder.svg" },
  {
    name: "Google Sheets",
    image: "assets/images/tools/google-sheets-placeholder.svg",
  },
  { name: "Git", image: "assets/images/tools/git-placeholder.svg" },
  { name: "GitHub", image: "assets/images/tools/github-placeholder.svg" },
  {
    name: "Visual Studio Code",
    image: "assets/images/tools/vscode-placeholder.svg",
  },
  { name: "Postman", image: "assets/images/tools/postman-placeholder.svg" },
];

// ============================================================
// AUTOMATION PROJECTS
// Replace each title, description, image, tools list, and URL below.
// Keep category values matched to the filter buttons:
// GoHighLevel, n8n, Zapier, or Make.com.
// ============================================================
const automationProjects = [
  {
    id: "gohighlevelCrmWorkflow",
    title: "GoHighLevel CRM Workflow",
    category: "GoHighLevel",
    image: "assets/images/automation/gohighlevel-placeholder.svg",
    description: "A short project overview will be added here.",
    tools: ["GoHighLevel", "CRM", "Automation"],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
    secondaryUrl: "#",
  },
  {
    id: "aiLeadQualification",
    title: "AI Lead Qualification Workflow",
    category: "n8n",
    image: "assets/images/automation/n8n-placeholder.svg",
    description: "Project details will be added soon.",
    tools: ["n8n", "AI", "API"],
    projectUrl: "#",
    secondaryLabel: "View Workflow",
    secondaryUrl: "#",
  },
  {
    id: "applicationIntegration",
    title: "Application Integration Workflow",
    category: "Zapier",
    image: "assets/images/automation/zapier-placeholder.svg",
    description: "A short project overview will be added here.",
    tools: ["Zapier", "Webhooks", "Application"],
    projectUrl: "#",
    secondaryLabel: "View Workflow",
    secondaryUrl: "#",
  },
  {
    id: "multiStepAutomation",
    title: "Multi-Step Business Automation",
    category: "Make.com",
    image: "assets/images/automation/make-placeholder.svg",
    description: "Project details will be added soon.",
    tools: ["Make.com", "API", "Business Tools"],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
    secondaryUrl: "#",
  },
  {
    id: "crmLeadNurturing",
    title: "CRM Lead Nurturing System",
    category: "GoHighLevel",
    image: "assets/images/automation/gohighlevel-placeholder.svg",
    description: "A short project overview will be added here.",
    tools: ["GoHighLevel", "Email Automation", "Pipeline"],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
    secondaryUrl: "#",
  },
  {
    id: "aiOperationsAssistant",
    title: "AI Operations Assistant",
    category: "n8n",
    image: "assets/images/automation/n8n-placeholder.svg",
    description: "Project details will be added soon.",
    tools: ["n8n", "OpenAI", "Google Workspace"],
    projectUrl: "#",
    secondaryLabel: "View Workflow",
    secondaryUrl: "#",
  },
  {
    id: "customerOnboarding",
    title: "Customer Onboarding Automation",
    category: "Zapier",
    image: "assets/images/automation/zapier-placeholder.svg",
    description: "A short project overview will be added here.",
    tools: ["Zapier", "CRM", "Webhooks"],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
    secondaryUrl: "#",
  },
  {
    id: "crossPlatformDataWorkflow",
    title: "Cross-Platform Data Workflow",
    category: "Make.com",
    image: "assets/images/automation/make-placeholder.svg",
    description: "Project details will be added soon.",
    tools: ["Make.com", "JSON", "HTTP Requests"],
    projectUrl: "#",
    secondaryLabel: "View Workflow",
    secondaryUrl: "#",
  },
];

// ============================================================
// AUTOMATION PROJECT POPUP DETAILS — EDIT CONTENT HERE
// Each key matches the `id` inside automationProjects above.
// The popup intentionally contains ONLY these four detail sections:
// Project Overview, Challenge, Solution and Workflow, and
// Error Handling and Testing.
// Replace the lorem ipsum text and placeholder image paths per project.
// ============================================================
const automationProjectDetails = {
  gohighlevelCrmWorkflow: {
    eyebrow: "Case Study Placeholder",
    title: "Lorem Ipsum Dolor Sit Amet",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coverImage: "assets/images/project-details/project-cover-placeholder.svg",
    coverAlt: "Placeholder image for the project cover",

    // Keep these four sections in this order.
    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Lorem Ipsum Dolor Sit",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, mauris sed consequat posuere, augue justo tincidunt lorem, sed facilisis lectus neque vitae arcu.",
          "Praesent non velit vitae lorem tempor luctus. Curabitur feugiat, sem vel feugiat faucibus, neque justo luctus nibh, vitae consequat sapien erat nec lacus.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore.",
          "Ut enim ad minim veniam, quis nostrud exercitation.",
        ],
        image: "assets/images/project-details/project-cover-placeholder.svg",
        imageAlt: "Placeholder image for the project overview",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Consectetur Adipiscing Elit",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur.",
          "Ut enim ad minim veniam, quis nostrud.",
          "Excepteur sint occaecat cupidatat non proident.",
        ],
        image: "assets/images/project-details/project-process-placeholder.svg",
        imageAlt: "Placeholder image for the project challenge",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Sed Do Eiusmod Tempor",
        paragraphs: [
          "Praesent non velit vitae lorem tempor luctus. Curabitur feugiat, sem vel feugiat faucibus, neque justo luctus nibh, vitae consequat sapien erat nec lacus.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, mauris sed consequat posuere, augue justo tincidunt lorem.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet → consectetur adipiscing elit.",
          "Sed do eiusmod tempor → incididunt ut labore.",
          "Ut enim ad minim veniam → quis nostrud exercitation.",
        ],
        image: "assets/images/project-details/project-process-placeholder.svg",
        imageAlt: "Placeholder image for the solution and workflow",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Ut Labore Et Dolore Magna",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet retry placeholder.",
          "Consectetur adipiscing elit validation placeholder.",
          "Sed do eiusmod tempor notification placeholder.",
        ],
        image: "assets/images/project-details/project-result-placeholder.svg",
        imageAlt: "Placeholder image for testing and error handling",
      },
    ],
  },
  aiLeadQualification: {
    eyebrow: "Workflow Placeholder",
    title: "Lorem Ipsum Dolor Sit Amet",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coverImage: "assets/images/project-details/project-cover-placeholder.svg",
    coverAlt: "Placeholder image for the project cover",

    // Keep these four sections in this order.
    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Lorem Ipsum Dolor Sit",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, mauris sed consequat posuere, augue justo tincidunt lorem, sed facilisis lectus neque vitae arcu.",
          "Praesent non velit vitae lorem tempor luctus. Curabitur feugiat, sem vel feugiat faucibus, neque justo luctus nibh, vitae consequat sapien erat nec lacus.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore.",
          "Ut enim ad minim veniam, quis nostrud exercitation.",
        ],
        image: "assets/images/project-details/project-cover-placeholder.svg",
        imageAlt: "Placeholder image for the project overview",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Consectetur Adipiscing Elit",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur.",
          "Ut enim ad minim veniam, quis nostrud.",
          "Excepteur sint occaecat cupidatat non proident.",
        ],
        image: "assets/images/project-details/project-process-placeholder.svg",
        imageAlt: "Placeholder image for the project challenge",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Sed Do Eiusmod Tempor",
        paragraphs: [
          "Praesent non velit vitae lorem tempor luctus. Curabitur feugiat, sem vel feugiat faucibus, neque justo luctus nibh, vitae consequat sapien erat nec lacus.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, mauris sed consequat posuere, augue justo tincidunt lorem.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet → consectetur adipiscing elit.",
          "Sed do eiusmod tempor → incididunt ut labore.",
          "Ut enim ad minim veniam → quis nostrud exercitation.",
        ],
        image: "assets/images/project-details/project-process-placeholder.svg",
        imageAlt: "Placeholder image for the solution and workflow",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Ut Labore Et Dolore Magna",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet retry placeholder.",
          "Consectetur adipiscing elit validation placeholder.",
          "Sed do eiusmod tempor notification placeholder.",
        ],
        image: "assets/images/project-details/project-result-placeholder.svg",
        imageAlt: "Placeholder image for testing and error handling",
      },
    ],
  },
  applicationIntegration: {
    eyebrow: "Workflow Placeholder",
    title: "Lorem Ipsum Dolor Sit Amet",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coverImage: "assets/images/project-details/project-cover-placeholder.svg",
    coverAlt: "Placeholder image for the project cover",

    // Keep these four sections in this order.
    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Lorem Ipsum Dolor Sit",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, mauris sed consequat posuere, augue justo tincidunt lorem, sed facilisis lectus neque vitae arcu.",
          "Praesent non velit vitae lorem tempor luctus. Curabitur feugiat, sem vel feugiat faucibus, neque justo luctus nibh, vitae consequat sapien erat nec lacus.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore.",
          "Ut enim ad minim veniam, quis nostrud exercitation.",
        ],
        image: "assets/images/project-details/project-cover-placeholder.svg",
        imageAlt: "Placeholder image for the project overview",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Consectetur Adipiscing Elit",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur.",
          "Ut enim ad minim veniam, quis nostrud.",
          "Excepteur sint occaecat cupidatat non proident.",
        ],
        image: "assets/images/project-details/project-process-placeholder.svg",
        imageAlt: "Placeholder image for the project challenge",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Sed Do Eiusmod Tempor",
        paragraphs: [
          "Praesent non velit vitae lorem tempor luctus. Curabitur feugiat, sem vel feugiat faucibus, neque justo luctus nibh, vitae consequat sapien erat nec lacus.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, mauris sed consequat posuere, augue justo tincidunt lorem.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet → consectetur adipiscing elit.",
          "Sed do eiusmod tempor → incididunt ut labore.",
          "Ut enim ad minim veniam → quis nostrud exercitation.",
        ],
        image: "assets/images/project-details/project-process-placeholder.svg",
        imageAlt: "Placeholder image for the solution and workflow",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Ut Labore Et Dolore Magna",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet retry placeholder.",
          "Consectetur adipiscing elit validation placeholder.",
          "Sed do eiusmod tempor notification placeholder.",
        ],
        image: "assets/images/project-details/project-result-placeholder.svg",
        imageAlt: "Placeholder image for testing and error handling",
      },
    ],
  },
  multiStepAutomation: {
    eyebrow: "Case Study Placeholder",
    title: "Lorem Ipsum Dolor Sit Amet",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coverImage: "assets/images/project-details/project-cover-placeholder.svg",
    coverAlt: "Placeholder image for the project cover",

    // Keep these four sections in this order.
    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Lorem Ipsum Dolor Sit",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, mauris sed consequat posuere, augue justo tincidunt lorem, sed facilisis lectus neque vitae arcu.",
          "Praesent non velit vitae lorem tempor luctus. Curabitur feugiat, sem vel feugiat faucibus, neque justo luctus nibh, vitae consequat sapien erat nec lacus.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore.",
          "Ut enim ad minim veniam, quis nostrud exercitation.",
        ],
        image: "assets/images/project-details/project-cover-placeholder.svg",
        imageAlt: "Placeholder image for the project overview",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Consectetur Adipiscing Elit",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur.",
          "Ut enim ad minim veniam, quis nostrud.",
          "Excepteur sint occaecat cupidatat non proident.",
        ],
        image: "assets/images/project-details/project-process-placeholder.svg",
        imageAlt: "Placeholder image for the project challenge",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Sed Do Eiusmod Tempor",
        paragraphs: [
          "Praesent non velit vitae lorem tempor luctus. Curabitur feugiat, sem vel feugiat faucibus, neque justo luctus nibh, vitae consequat sapien erat nec lacus.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, mauris sed consequat posuere, augue justo tincidunt lorem.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet → consectetur adipiscing elit.",
          "Sed do eiusmod tempor → incididunt ut labore.",
          "Ut enim ad minim veniam → quis nostrud exercitation.",
        ],
        image: "assets/images/project-details/project-process-placeholder.svg",
        imageAlt: "Placeholder image for the solution and workflow",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Ut Labore Et Dolore Magna",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet retry placeholder.",
          "Consectetur adipiscing elit validation placeholder.",
          "Sed do eiusmod tempor notification placeholder.",
        ],
        image: "assets/images/project-details/project-result-placeholder.svg",
        imageAlt: "Placeholder image for testing and error handling",
      },
    ],
  },
  crmLeadNurturing: {
    eyebrow: "Case Study Placeholder",
    title: "Lorem Ipsum Dolor Sit Amet",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coverImage: "assets/images/project-details/project-cover-placeholder.svg",
    coverAlt: "Placeholder image for the project cover",

    // Keep these four sections in this order.
    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Lorem Ipsum Dolor Sit",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, mauris sed consequat posuere, augue justo tincidunt lorem, sed facilisis lectus neque vitae arcu.",
          "Praesent non velit vitae lorem tempor luctus. Curabitur feugiat, sem vel feugiat faucibus, neque justo luctus nibh, vitae consequat sapien erat nec lacus.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore.",
          "Ut enim ad minim veniam, quis nostrud exercitation.",
        ],
        image: "assets/images/project-details/project-cover-placeholder.svg",
        imageAlt: "Placeholder image for the project overview",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Consectetur Adipiscing Elit",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur.",
          "Ut enim ad minim veniam, quis nostrud.",
          "Excepteur sint occaecat cupidatat non proident.",
        ],
        image: "assets/images/project-details/project-process-placeholder.svg",
        imageAlt: "Placeholder image for the project challenge",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Sed Do Eiusmod Tempor",
        paragraphs: [
          "Praesent non velit vitae lorem tempor luctus. Curabitur feugiat, sem vel feugiat faucibus, neque justo luctus nibh, vitae consequat sapien erat nec lacus.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, mauris sed consequat posuere, augue justo tincidunt lorem.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet → consectetur adipiscing elit.",
          "Sed do eiusmod tempor → incididunt ut labore.",
          "Ut enim ad minim veniam → quis nostrud exercitation.",
        ],
        image: "assets/images/project-details/project-process-placeholder.svg",
        imageAlt: "Placeholder image for the solution and workflow",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Ut Labore Et Dolore Magna",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet retry placeholder.",
          "Consectetur adipiscing elit validation placeholder.",
          "Sed do eiusmod tempor notification placeholder.",
        ],
        image: "assets/images/project-details/project-result-placeholder.svg",
        imageAlt: "Placeholder image for testing and error handling",
      },
    ],
  },
  aiOperationsAssistant: {
    eyebrow: "Workflow Placeholder",
    title: "Lorem Ipsum Dolor Sit Amet",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coverImage: "assets/images/project-details/project-cover-placeholder.svg",
    coverAlt: "Placeholder image for the project cover",

    // Keep these four sections in this order.
    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Lorem Ipsum Dolor Sit",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, mauris sed consequat posuere, augue justo tincidunt lorem, sed facilisis lectus neque vitae arcu.",
          "Praesent non velit vitae lorem tempor luctus. Curabitur feugiat, sem vel feugiat faucibus, neque justo luctus nibh, vitae consequat sapien erat nec lacus.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore.",
          "Ut enim ad minim veniam, quis nostrud exercitation.",
        ],
        image: "assets/images/project-details/project-cover-placeholder.svg",
        imageAlt: "Placeholder image for the project overview",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Consectetur Adipiscing Elit",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur.",
          "Ut enim ad minim veniam, quis nostrud.",
          "Excepteur sint occaecat cupidatat non proident.",
        ],
        image: "assets/images/project-details/project-process-placeholder.svg",
        imageAlt: "Placeholder image for the project challenge",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Sed Do Eiusmod Tempor",
        paragraphs: [
          "Praesent non velit vitae lorem tempor luctus. Curabitur feugiat, sem vel feugiat faucibus, neque justo luctus nibh, vitae consequat sapien erat nec lacus.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, mauris sed consequat posuere, augue justo tincidunt lorem.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet → consectetur adipiscing elit.",
          "Sed do eiusmod tempor → incididunt ut labore.",
          "Ut enim ad minim veniam → quis nostrud exercitation.",
        ],
        image: "assets/images/project-details/project-process-placeholder.svg",
        imageAlt: "Placeholder image for the solution and workflow",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Ut Labore Et Dolore Magna",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet retry placeholder.",
          "Consectetur adipiscing elit validation placeholder.",
          "Sed do eiusmod tempor notification placeholder.",
        ],
        image: "assets/images/project-details/project-result-placeholder.svg",
        imageAlt: "Placeholder image for testing and error handling",
      },
    ],
  },
  customerOnboarding: {
    eyebrow: "Case Study Placeholder",
    title: "Lorem Ipsum Dolor Sit Amet",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coverImage: "assets/images/project-details/project-cover-placeholder.svg",
    coverAlt: "Placeholder image for the project cover",

    // Keep these four sections in this order.
    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Lorem Ipsum Dolor Sit",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, mauris sed consequat posuere, augue justo tincidunt lorem, sed facilisis lectus neque vitae arcu.",
          "Praesent non velit vitae lorem tempor luctus. Curabitur feugiat, sem vel feugiat faucibus, neque justo luctus nibh, vitae consequat sapien erat nec lacus.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore.",
          "Ut enim ad minim veniam, quis nostrud exercitation.",
        ],
        image: "assets/images/project-details/project-cover-placeholder.svg",
        imageAlt: "Placeholder image for the project overview",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Consectetur Adipiscing Elit",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur.",
          "Ut enim ad minim veniam, quis nostrud.",
          "Excepteur sint occaecat cupidatat non proident.",
        ],
        image: "assets/images/project-details/project-process-placeholder.svg",
        imageAlt: "Placeholder image for the project challenge",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Sed Do Eiusmod Tempor",
        paragraphs: [
          "Praesent non velit vitae lorem tempor luctus. Curabitur feugiat, sem vel feugiat faucibus, neque justo luctus nibh, vitae consequat sapien erat nec lacus.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, mauris sed consequat posuere, augue justo tincidunt lorem.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet → consectetur adipiscing elit.",
          "Sed do eiusmod tempor → incididunt ut labore.",
          "Ut enim ad minim veniam → quis nostrud exercitation.",
        ],
        image: "assets/images/project-details/project-process-placeholder.svg",
        imageAlt: "Placeholder image for the solution and workflow",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Ut Labore Et Dolore Magna",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet retry placeholder.",
          "Consectetur adipiscing elit validation placeholder.",
          "Sed do eiusmod tempor notification placeholder.",
        ],
        image: "assets/images/project-details/project-result-placeholder.svg",
        imageAlt: "Placeholder image for testing and error handling",
      },
    ],
  },
  crossPlatformDataWorkflow: {
    eyebrow: "Workflow Placeholder",
    title: "Lorem Ipsum Dolor Sit Amet",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coverImage: "assets/images/project-details/project-cover-placeholder.svg",
    coverAlt: "Placeholder image for the project cover",

    // Keep these four sections in this order.
    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Lorem Ipsum Dolor Sit",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, mauris sed consequat posuere, augue justo tincidunt lorem, sed facilisis lectus neque vitae arcu.",
          "Praesent non velit vitae lorem tempor luctus. Curabitur feugiat, sem vel feugiat faucibus, neque justo luctus nibh, vitae consequat sapien erat nec lacus.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore.",
          "Ut enim ad minim veniam, quis nostrud exercitation.",
        ],
        image: "assets/images/project-details/project-cover-placeholder.svg",
        imageAlt: "Placeholder image for the project overview",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Consectetur Adipiscing Elit",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur.",
          "Ut enim ad minim veniam, quis nostrud.",
          "Excepteur sint occaecat cupidatat non proident.",
        ],
        image: "assets/images/project-details/project-process-placeholder.svg",
        imageAlt: "Placeholder image for the project challenge",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Sed Do Eiusmod Tempor",
        paragraphs: [
          "Praesent non velit vitae lorem tempor luctus. Curabitur feugiat, sem vel feugiat faucibus, neque justo luctus nibh, vitae consequat sapien erat nec lacus.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, mauris sed consequat posuere, augue justo tincidunt lorem.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet → consectetur adipiscing elit.",
          "Sed do eiusmod tempor → incididunt ut labore.",
          "Ut enim ad minim veniam → quis nostrud exercitation.",
        ],
        image: "assets/images/project-details/project-process-placeholder.svg",
        imageAlt: "Placeholder image for the solution and workflow",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Ut Labore Et Dolore Magna",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
        ],
        bullets: [
          "Lorem ipsum dolor sit amet retry placeholder.",
          "Consectetur adipiscing elit validation placeholder.",
          "Sed do eiusmod tempor notification placeholder.",
        ],
        image: "assets/images/project-details/project-result-placeholder.svg",
        imageAlt: "Placeholder image for testing and error handling",
      },
    ],
  },
};
const webProjects = [
  {
    title: "Calculator",
    image: "assets/images/web/calculator-placeholder.svg",
    description:
      "A browser-based calculator created with HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lian-143.github.io/calculator/",
    githubUrl: "",
  },
  {
    title: "Rock, Paper and Scissors",
    image: "assets/images/web/rock-paper-scissors-placeholder.svg",
    description:
      "A browser game based on the classic rock, paper, and scissors rules.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lian-143.github.io/rock-paper-scissor/",
    githubUrl: "",
  },
  {
    title: "Etch A Sketch",
    image: "assets/images/web/etch-a-sketch-placeholder.svg",
    description:
      "An interactive browser drawing grid built with front-end web technologies.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lian-143.github.io/Etch-a-Sketch/",
    githubUrl: "",
  },
  {
    title: "To-Do List",
    image: "assets/images/web/todo-list-placeholder.svg",
    description:
      "A browser-based project for organizing and managing to-do items.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lian-143.github.io/odin-toDoList/",
    githubUrl: "",
  },
  {
    title: "Tic-Tac-Toe",
    image: "assets/images/web/tic-tac-toe-placeholder.svg",
    description:
      "A browser implementation of the classic two-player tic-tac-toe game.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lian-143.github.io/tic-tac-toe/",
    githubUrl: "",
  },
  {
    title: "Restaurant Website",
    image: "assets/images/web/restaurant-placeholder.svg",
    description:
      "A responsive restaurant-themed website built with HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lian-143.github.io/odin-restaurant/",
    githubUrl: "",
  },
  {
    title: "Admin Dashboard",
    image: "assets/images/web/admin-dashboard-placeholder.svg",
    description:
      "An admin dashboard interface focused on layout, structure, and responsive styling.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lian-143.github.io/Admin-Dashboard/",
    githubUrl: "",
  },
];

// ============================================================
// CERTIFICATIONS
// Replace the placeholder image, certificate title, issuer, date,
// and credential URL with verified information only.
// ============================================================
const certifications = [
  {
    title: "WordPress Certificate",
    issuer: "Issuing Organization",
    date: "Completion Date",
    image: "assets/images/certificates/wordpress-placeholder.svg",
    credentialUrl: "#",
  },
  {
    title: "GoHighLevel Certificate",
    issuer: "Issuing Organization",
    date: "Completion Date",
    image: "assets/images/certificates/gohighlevel-placeholder.svg",
    credentialUrl: "#",
  },
  {
    title: "Prompt Engineering Certificate",
    issuer: "Issuing Organization",
    date: "Completion Date",
    image: "assets/images/certificates/prompt-engineering-placeholder.svg",
    credentialUrl: "#",
  },
  {
    title: "n8n Certificate",
    issuer: "Issuing Organization",
    date: "Completion Date",
    image: "assets/images/certificates/n8n-placeholder.svg",
    credentialUrl: "#",
  },
  {
    title: "Make.com Certificate",
    issuer: "Issuing Organization",
    date: "Completion Date",
    image: "assets/images/certificates/make-placeholder.svg",
    credentialUrl: "#",
  },
  {
    title: "Zapier Certificate",
    issuer: "Issuing Organization",
    date: "Completion Date",
    image: "assets/images/certificates/zapier-placeholder.svg",
    credentialUrl: "#",
  },
];

const toolsMarqueeTrack = document.querySelector("#tools-marquee-track");
const toolsMarqueeTrackReverse = document.querySelector(
  "#tools-marquee-track-reverse",
);
const automationGrid = document.querySelector("#automation-project-grid");
const webGrid = document.querySelector("#web-project-grid");
const certificationGrid = document.querySelector("#certification-grid");
const filterButtons = document.querySelectorAll(".filter-button");
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const navLinks = document.querySelectorAll(".nav-link");
const themeToggle = document.querySelector(".theme-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const typedRole = document.querySelector("#typed-role");
let projectModal = null;
let projectModalContent = null;
let projectModalCloseButton = null;
let lastModalTrigger = null;
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

// Include each article in the animated phrase so both “a” and “an” are typed.
const roleTitles = [
  "an AI Automation Specialist",
  "a CRM Developer",
  "an AI Agent Builder",
  "Front-End Developer",
];

function applyProfilePhoto() {
  const profileImages = document.querySelectorAll("[data-profile-photo]");

  profileImages.forEach((image) => {
    const placement = image.dataset.profilePhoto;
    image.alt = profilePhoto.alt;
    image.dataset.fallback = profilePhoto.fallback;
    image.style.objectPosition =
      placement === "about"
        ? profilePhoto.aboutObjectPosition
        : profilePhoto.heroObjectPosition;
  });

  attachImageFallbacks(document);
  profileImages.forEach((image) => {
    image.src = profilePhoto.src;
  });
}

function renderToolTrack(track, items) {
  if (!track) return;

  const createToolItems = (hidden = false) => `
    <div class="tools-marquee-group" role="list"${hidden ? ' aria-hidden="true"' : ""}>
      ${items
        .map(
          (tool) => `
        <div class="tool-logo-card" role="listitem" title="${tool.name}">
          <span class="tool-logo-image-wrap" aria-hidden="true">
            <img
              class="tool-logo-image"
              src="${tool.image}"
              alt=""
              width="44"
              height="44"
              loading="eager"
              decoding="async"
              data-fallback="${FALLBACK_IMAGE}"
            >
          </span>
          <span class="tool-logo-name">${tool.name}</span>
        </div>
      `,
        )
        .join("")}
    </div>
  `;

  track.innerHTML = createToolItems() + createToolItems(true);
  attachImageFallbacks(track);
}

function renderToolRibbon() {
  const midpoint = Math.ceil(toolLogos.length / 2);
  renderToolTrack(toolsMarqueeTrack, toolLogos.slice(0, midpoint));
  renderToolTrack(toolsMarqueeTrackReverse, toolLogos.slice(midpoint));
}

function applyTheme(theme, persist = true) {
  const normalizedTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = normalizedTheme;
  themeToggle?.setAttribute("aria-pressed", String(normalizedTheme === "dark"));
  themeToggle?.setAttribute(
    "aria-label",
    normalizedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode",
  );
  if (themeMeta)
    themeMeta.content = normalizedTheme === "dark" ? "#0d0f12" : "#f3f0e8";

  if (persist) {
    try {
      localStorage.setItem("leanne-portfolio-theme", normalizedTheme);
    } catch (error) {
      // Theme still works when storage is unavailable.
    }
  }
}

function initializeTheme() {
  applyTheme(document.documentElement.dataset.theme || "light", false);

  themeToggle?.addEventListener("click", () => {
    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

function initializeTypingRoles() {
  if (!typedRole || reducedMotion) {
    if (typedRole) typedRole.textContent = roleTitles[0];
    return;
  }

  let roleIndex = 0;
  let characterIndex = roleTitles[0].length;
  let deleting = true;

  const tick = () => {
    const currentRole = roleTitles[roleIndex];
    typedRole.textContent = currentRole.slice(0, characterIndex);

    if (!deleting && characterIndex === currentRole.length) {
      deleting = true;
      window.setTimeout(tick, 1450);
      return;
    }

    if (deleting && characterIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roleTitles.length;
      window.setTimeout(tick, 260);
      return;
    }

    characterIndex += deleting ? -1 : 1;
    window.setTimeout(tick, deleting ? 34 : 72);
  };

  window.setTimeout(tick, 1150);
}

function isPlaceholderUrl(url) {
  return !url || url.trim() === "#";
}

function createTags(items) {
  return items.map((item) => `<span>${item}</span>`).join("");
}

function createProjectLink(label, url, secondary = false) {
  if (isPlaceholderUrl(url)) {
    return `<span class="button ${secondary ? "button-secondary " : ""}disabled-link" aria-disabled="true" title="Link will be added later">${label}</span>`;
  }

  return `<a class="button ${secondary ? "button-secondary" : ""}" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
}

function createProjectDetailsButton(label, projectId) {
  return `<button class="button button-secondary project-details-button" type="button" data-project-details="${projectId}" aria-haspopup="dialog">${label}</button>`;
}

function attachImageFallbacks(scope = document) {
  scope.querySelectorAll("img[data-fallback]").forEach((image) => {
    image.addEventListener("error", () => {
      if (image.dataset.fallbackApplied === "true") return;
      image.dataset.fallbackApplied = "true";
      image.src = image.dataset.fallback || FALLBACK_IMAGE;
    });
  });
}

function renderAutomationProjects(filter = "All") {
  if (!automationGrid) return;

  const filteredProjects =
    filter === "All"
      ? automationProjects
      : automationProjects.filter((project) => project.category === filter);

  automationGrid.innerHTML = filteredProjects
    .map(
      (project) => `
    <article class="project-card is-entering">
      <div class="project-image-wrapper">
        <img
          class="project-image"
          src="${project.image}"
          alt="Placeholder preview for ${project.title}"
          loading="lazy"
          decoding="async"
          data-fallback="${FALLBACK_IMAGE}"
        >
      </div>
      <div class="project-card-body">
        <span class="project-category">${project.category}</span>
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <div class="tag-list" aria-label="Tools used">${createTags(project.tools)}</div>
        <div class="project-actions">
          ${createProjectLink("View Project", project.projectUrl)}
          ${createProjectDetailsButton(project.secondaryLabel || "View Case Study", project.id)}
        </div>
      </div>
    </article>
  `,
    )
    .join("");

  attachImageFallbacks(automationGrid);

  requestAnimationFrame(() => {
    automationGrid.querySelectorAll(".project-card").forEach((card, index) => {
      const delay = reducedMotion ? 0 : index * 35;
      window.setTimeout(() => card.classList.remove("is-entering"), delay);
    });
  });
}

function createProjectModal() {
  const modal = document.createElement("div");
  modal.className = "project-modal";
  modal.id = "project-details-modal";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="project-modal-backdrop" data-modal-close aria-hidden="true"></div>
    <div class="project-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" tabindex="-1">
      <div class="project-modal-toolbar">
        <span>Project details</span>
        <button class="project-modal-close" type="button" data-modal-close aria-label="Close project details">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="project-modal-scroll">
        <div id="project-modal-content"></div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  projectModal = modal;
  projectModalContent = modal.querySelector("#project-modal-content");
  projectModalCloseButton = modal.querySelector(".project-modal-close");

  modal.addEventListener("click", (event) => {
    if (event.target.closest("[data-modal-close]")) closeProjectModal();
  });
}

function renderProjectModalContent(project, details) {
  // The modal is intentionally limited to the first four project-detail sections.
  const sections = (details.sections || [])
    .slice(0, 4)
    .map((section, index) => {
      const bullets = (section.bullets || []).length
        ? `<ul class="project-detail-list">${section.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>`
        : "";

      return `
      <section class="project-detail-row${index % 2 ? " project-detail-row-reverse" : ""}">
        <div class="project-detail-copy">
          <span class="project-detail-number">${section.number}</span>
          ${section.label ? `<p class="project-detail-label">${section.label}</p>` : ""}
          <h3>${section.title}</h3>
          ${(section.paragraphs || []).map((paragraph) => `<p>${paragraph}</p>`).join("")}
          ${bullets}
        </div>
        <figure class="project-detail-visual">
          <img src="${section.image}" alt="${section.imageAlt}" loading="lazy" decoding="async" data-fallback="${FALLBACK_IMAGE}">
        </figure>
      </section>
    `;
    })
    .join("");

  projectModalContent.innerHTML = `
    <article class="project-modal-article">
      <header class="project-modal-hero">
        <div class="project-modal-hero-copy">
          <p class="section-label">${details.eyebrow}</p>
          <h2 id="project-modal-title">${details.title}</h2>
          <p class="project-modal-intro">${details.intro}</p>
          <p class="project-modal-tools-label">Tools used</p>
          <div class="tag-list" aria-label="Project tools">${createTags(project.tools)}</div>
        </div>
        <figure class="project-modal-cover">
          <img src="${details.coverImage}" alt="${details.coverAlt}" decoding="async" data-fallback="${FALLBACK_IMAGE}">
        </figure>
      </header>

      ${sections ? `<div class="project-detail-sections">${sections}</div>` : ""}
    </article>
  `;

  attachImageFallbacks(projectModalContent);
}

function openProjectModal(projectId, trigger) {
  const project = automationProjects.find((item) => item.id === projectId);
  const details = automationProjectDetails[projectId];
  if (!project || !details) return;

  if (!projectModal) createProjectModal();
  lastModalTrigger = trigger || document.activeElement;
  renderProjectModalContent(project, details);
  projectModal.hidden = false;
  document.body.classList.add("modal-open");

  const modalScroll = projectModal.querySelector(".project-modal-scroll");
  if (modalScroll) modalScroll.scrollTop = 0;

  requestAnimationFrame(() => {
    projectModal.classList.add("is-open");
    projectModalCloseButton?.focus();
  });
}

function closeProjectModal() {
  if (!projectModal || projectModal.hidden) return;

  projectModal.classList.remove("is-open");
  document.body.classList.remove("modal-open");

  window.setTimeout(
    () => {
      projectModal.hidden = true;
      projectModalContent.innerHTML = "";
      lastModalTrigger?.focus?.();
      lastModalTrigger = null;
    },
    reducedMotion ? 0 : 190,
  );
}

function trapProjectModalFocus(event) {
  if (!projectModal || projectModal.hidden || event.key !== "Tab") return;

  const focusable = [
    ...projectModal.querySelectorAll(
      'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ].filter((element) => !element.hidden && element.offsetParent !== null);

  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function initializeProjectModal() {
  createProjectModal();

  automationGrid?.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-project-details]");
    if (!trigger) return;
    openProjectModal(trigger.dataset.projectDetails, trigger);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && projectModal && !projectModal.hidden) {
      closeProjectModal();
      return;
    }
    trapProjectModalFocus(event);
  });
}

function renderWebProjects() {
  if (!webGrid) return;

  webGrid.innerHTML = webProjects
    .map(
      (project) => `
    <article class="project-card reveal">
      <div class="project-image-wrapper">
        <img
          class="project-image"
          src="${project.image}"
          alt="Placeholder screenshot for ${project.title}"
          loading="lazy"
          decoding="async"
          data-fallback="${FALLBACK_IMAGE}"
        >
      </div>
      <div class="project-card-body">
        <span class="project-category">Web Project</span>
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <div class="tag-list" aria-label="Technologies used">${createTags(project.technologies)}</div>
        <div class="project-actions">
          ${createProjectLink("View Live Project", project.liveUrl)}
          ${createProjectLink("View GitHub", project.githubUrl, true)}
        </div>
      </div>
    </article>
  `,
    )
    .join("");

  attachImageFallbacks(webGrid);
}

function renderCertifications() {
  if (!certificationGrid) return;

  certificationGrid.innerHTML = certifications
    .map(
      (certificate) => `
    <article class="certification-card reveal">
      <div class="certificate-image-wrapper">
        <img
          class="certificate-image"
          src="${certificate.image}"
          alt="Placeholder image for ${certificate.title}"
          loading="lazy"
          decoding="async"
          data-fallback="${FALLBACK_IMAGE}"
        >
      </div>
      <div class="certification-card-body">
        <h3>${certificate.title}</h3>
        <div class="certification-meta">
          <span>${certificate.issuer}</span>
          <span>${certificate.date}</span>
        </div>
        ${createProjectLink("View Credential", certificate.credentialUrl, true)}
      </div>
    </article>
  `,
    )
    .join("");

  attachImageFallbacks(certificationGrid);
}

function initializeFilters() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });

      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      renderAutomationProjects(button.dataset.filter || "All");
    });
  });
}

function setNavigation(open) {
  navToggle?.setAttribute("aria-expanded", String(open));
  navToggle?.setAttribute(
    "aria-label",
    open ? "Close navigation menu" : "Open navigation menu",
  );
  primaryNav?.classList.toggle("open", open);
  document.body.classList.toggle("nav-open", open);
}

function initializeNavigation() {
  navToggle?.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setNavigation(!isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setNavigation(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setNavigation(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080) setNavigation(false);
  });
}

function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const targetSelector = link.getAttribute("href");
    if (!targetSelector || targetSelector === "#") return;

    link.addEventListener("click", (event) => {
      const target = document.querySelector(targetSelector);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });

      if (window.location.hash !== targetSelector) {
        window.history.pushState(null, "", targetSelector);
      }
    });
  });
}

function initializeActiveNavigation() {
  const sections = [...document.querySelectorAll("main section[id]")];

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      const currentId = visible.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${currentId}`,
        );
      });
    },
    {
      rootMargin: "-20% 0px -65% 0px",
      threshold: [0, 0.1, 0.25],
    },
  );

  sections.forEach((section) => observer.observe(section));
}

function initializeScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, revealObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    },
  );

  revealElements.forEach((element) => observer.observe(element));
}

function setCurrentYear() {
  const currentYear = document.querySelector("#current-year");
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());
}

applyProfilePhoto();
initializeTheme();
initializeTypingRoles();
renderToolRibbon();
renderAutomationProjects();
initializeProjectModal();
renderWebProjects();
renderCertifications();
initializeFilters();
initializeNavigation();
initializeSmoothScrolling();
initializeActiveNavigation();
initializeScrollReveal();
setCurrentYear();
