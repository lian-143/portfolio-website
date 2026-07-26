"use strict";

const FALLBACK_IMAGE = "site-assets-v2/images/shared/image-fallback.svg";

// ============================================================
// PROFILE PHOTO — HERO + ABOUT
// Put your photo inside site-assets-v2/images/profile/, then change only `src` below.
// The same file is used in both sections. Adjust each object position if the
// face needs a different crop in the Hero or About frame.
// ============================================================
const profilePhoto = {
  src: "site-assets-v2/images/profile/profile-2.png",
  fallback: "site-assets-v2/images/profile/profile-photo-placeholder.svg",
  alt: "Leanne Frances Ganado, AI Automation Engineer and CRM Developer",
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
  {
    name: "AI Workflow Automation",
    image: "site-assets-v2/images/tools/ai-workflow-automation-icon.svg",
    alt: "AI workflow automation",
  },
  {
    name: "AI Agents",
    image: "site-assets-v2/images/tools/ai-agents-icon.svg",
    alt: "AI agent development",
  },
  {
    name: "Prompt Engineering",
    image: "site-assets-v2/images/tools/prompt-engineering-icon.svg",
    alt: "Prompt engineering",
  },
  {
    name: "Process Mapping",
    image: "site-assets-v2/images/tools/process-mapping-icon.svg",
    alt: "Business process mapping",
  },
  {
    name: "OpenAI",
    image: "site-assets-v2/images/tools/openai-logo.svg",
    alt: "OpenAI platform",
  },
  {
    name: "Google Gemini",
    image: "site-assets-v2/images/tools/google-gemini-logo.svg",
    alt: "Google Gemini AI platform",
  },
  {
    name: "Claude AI",
    image: "site-assets-v2/images/tools/claude-ai-logo.svg",
    alt: "Claude AI platform",
  },
  {
    name: "OpenRouter",
    image: "site-assets-v2/images/tools/openrouter-logo.svg",
    alt: "OpenRouter AI model gateway",
  },
  {
    name: "n8n",
    image: "site-assets-v2/images/tools/n8n-logo.svg",
    alt: "n8n automation platform",
  },
  {
    name: "Make.com",
    image: "site-assets-v2/images/tools/make-logo.svg",
    alt: "Make.com automation platform",
  },
  {
    name: "Zapier",
    image: "site-assets-v2/images/tools/zapier-logo.png",
    alt: "Zapier automation platform",
  },
  {
    name: "GoHighLevel",
    image: "site-assets-v2/images/tools/high-level.png",
    alt: "GoHighLevel CRM platform",
  },
  {
    name: "Notion",
    image: "site-assets-v2/images/tools/notion-logo.svg",
    alt: "Notion workspace platform",
  },
  {
    name: "Google Workspace",
    image: "site-assets-v2/images/tools/google-workspace-logo.svg",
    alt: "Google Workspace productivity suite",
  },
  {
    name: "Google Sheets",
    image: "site-assets-v2/images/tools/google-sheets-logo.svg",
    alt: "Google Sheets spreadsheet platform",
  },
  {
    name: "Google Docs",
    image: "site-assets-v2/images/tools/google-docs-logo.svg",
    alt: "Google Docs document platform",
  },
  {
    name: "Google Drive",
    image: "site-assets-v2/images/tools/google-drive-logo.svg",
    alt: "Google Drive cloud storage",
  },
  {
    name: "Gmail",
    image: "site-assets-v2/images/tools/gmail-logo.svg",
    alt: "Gmail email platform",
  },
  {
    name: "Airtable",
    image: "site-assets-v2/images/tools/airtable-logo.svg",
    alt: "Airtable database platform",
  },
  {
    name: "Monday.com",
    image: "site-assets-v2/images/tools/monday-logo.svg",
    alt: "Monday.com project management platform",
  },
  {
    name: "Trello",
    image: "site-assets-v2/images/tools/trello-logo.svg",
    alt: "Trello project management platform",
  },
  {
    name: "Asana",
    image: "site-assets-v2/images/tools/asana-logo.svg",
    alt: "Asana project management platform",
  },
  {
    name: "Slack",
    image: "site-assets-v2/images/tools/slack-logo.svg",
    alt: "Slack collaboration platform",
  },
  {
    name: "REST API",
    image: "site-assets-v2/images/tools/rest-api-icon.svg",
    alt: "REST API integration",
  },
  {
    name: "Webhooks",
    image: "site-assets-v2/images/tools/webhooks-icon.png",
    alt: "Webhook integration",
  },
  {
    name: "JSON",
    image: "site-assets-v2/images/tools/json-logo.svg",
    alt: "JSON data format",
  },
  {
    name: "OAuth",
    image: "site-assets-v2/images/tools/oauth-icon.svg",
    alt: "OAuth authorization",
  },
  {
    name: "GraphQL",
    image: "site-assets-v2/images/tools/graphql-logo.svg",
    alt: "GraphQL API technology",
  },
  {
    name: "Python",
    image: "site-assets-v2/images/tools/python-logo.svg",
    alt: "Python programming language",
  },
  {
    name: "JavaScript",
    image: "site-assets-v2/images/tools/javascript-logo.svg",
    alt: "JavaScript programming language",
  },
  {
    name: "PHP",
    image: "site-assets-v2/images/tools/php-logo.svg",
    alt: "PHP programming language",
  },
  {
    name: "HTML5",
    image: "site-assets-v2/images/tools/html5-logo.svg",
    alt: "HTML5 web technology",
  },
  {
    name: "CSS3",
    image: "site-assets-v2/images/tools/css3-logo.svg",
    alt: "CSS3 web styling technology",
  },
  {
    name: "WordPress",
    image: "site-assets-v2/images/tools/wordpress-logo.png",
    alt: "WordPress content management system",
  },
  {
    name: "Elementor",
    image: "site-assets-v2/images/tools/elementor-logo.svg",
    alt: "Elementor WordPress page builder",
  },
  {
    name: "Git",
    image: "site-assets-v2/images/tools/git-logo.svg",
    alt: "Git version control",
  },
  {
    name: "GitHub",
    image: "site-assets-v2/images/tools/github-logo.svg",
    alt: "GitHub development platform",
  },
  {
    name: "Visual Studio Code",
    image: "site-assets-v2/images/tools/visual-studio-code-logo.svg",
    alt: "Visual Studio Code editor",
  },
  {
    name: "Postman",
    image: "site-assets-v2/images/tools/postman-logo.svg",
    alt: "Postman API testing platform",
  },
];

// ============================================================
// AUTOMATION PROJECTS
// Replace each title, description, image, tags list, and URL below.
// Keep category values matched to the filter buttons:
// GoHighLevel, n8n, Zapier, or Make.com.
// ============================================================
const automationProjects = [
  {
    id: "gohighlevelCrmWorkflow",
    title: "Membership Access Automation",
    category: "GoHighLevel",
    image: "site-assets-v2/images/automation/go-high-level/03-1-paid.jpg",
    description:
      "Built a GoHighLevel membership system that organizes onboarding, renewal reminders, status changes, and internal contact updates.",
    tags: [
      "Membership Onboarding",
      "Access Tagging",
      "Contact Updates",
      "Renewal Tracking",
      "Status Management",
      "Internal Notifications",
    ],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
    secondaryUrl: "#",
  },
  {
    id: "aiAgentAutomation",
    title: "Facebook Page AI Agent",
    category: "n8n",
    image: "site-assets-v2/images/automation/n8n/ai-agent.jpg",
    description:
      "Built an AI agent that receives Facebook Page messages, retrieves relevant context, and prepares structured responses.",
    tags: [
      "Facebook Messenger",
      "Webhook Validation",
      "Document Retrieval",
      "Gemini AI",
      "Conversation Memory",
      "API Responses",
    ],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
    secondaryUrl: "#",
  },
  {
    id: "crmLeadNurturing",
    title: "Membership Renewal Email Reminders Automation",
    category: "GoHighLevel",
    image:
      "site-assets-v2/images/automation/go-high-level/4-email-reminders.jpg",
    description:
      "Automated membership renewal reminders before and after renewal dates to create a more reliable follow-up process.",
    tags: [
      "Renewal Tracking",
      "Date-Based Triggers",
      "Email Sequences",
      "Member Segmentation",
      "Wait Conditions",
      "Opportunity Updates",
    ],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
    secondaryUrl: "#",
  },
  {
    id: "aiJobApplicationAssistant",
    title: "AI Job Application Assistant",
    category: "n8n",
    image:
      "site-assets-v2/images/automation/n8n/ai-jobs-scraper-resume-optimizer.jpg",
    description:
      "Built an AI workflow that finds matching job listings, tailors resume content, drafts applications, and records each result.",
    tags: [
      "Slack Trigger",
      "Job Search API",
      "Query Validation",
      "OpenRouter AI",
      "Structured Output",
      "Google Docs",
      "Gmail Drafts",
      "Slack Notifications",
    ],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
    secondaryUrl: "#",
  },
  {
    id: "prospectNurturing",
    title: "Lead Nurture",
    category: "GoHighLevel",
    image:
      "site-assets-v2/images/automation/go-high-level/8-prospect-nurture-workflow.jpg",
    description:
      "Automated prospect follow-up when leads enter a new pipeline stage, helping keep outreach consistent and organized.",
    tags: [
      "Pipeline Triggers",
      "Lead Nurturing",
      "Email Sequences",
      "Timed Follow-Ups",
      "Opportunity Tracking",
    ],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
    secondaryUrl: "#",
  },
  {
    id: "spamCallDndAutomation",
    title: "Spam Call DND Automation",
    category: "GoHighLevel",
    image:
      "site-assets-v2/images/automation/go-high-level/auto-enable-inbound-dnd-calls-for-spam-labeled-contacts.jpg",
    description:
      "Automatically applied inbound call restrictions to contacts identified as spam, reducing manual CRM cleanup.",
    tags: [
      "Call Dispositions",
      "Spam Detection",
      "Inbound DND",
      "Contact Protection",
    ],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
    secondaryUrl: "#",
  },
  {
    id: "aiAssistantChatbot",
    title: "AI Assistant Chatbot",
    category: "GoHighLevel",
    image: "site-assets-v2/images/automation/go-high-level/chatbot.jpg",
    description:
      "Configured an AI assistant chatbot with defined conversation rules, knowledge guidance, and response boundaries.",
    tags: [
      "Conversational AI",
      "Prompt Design",
      "Bot Goals",
      "Response Guidelines",
      "Customer Support",
      "Bot Testing",
    ],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
    secondaryUrl: "#",
  },
  {
    id: "voiceAppointmentScheduler",
    title: "Voice Appointment Scheduling System",
    category: "n8n",
    image: "site-assets-v2/images/automation/n8n/ai-receptionist.jpg",
    description:
      "Built a voice appointment scheduling system that checks availability, manages bookings, and records structured call details.",
    tags: [
      "Vapi Voice Agent",
      "OpenAI Assistant Logic",
      "Google Calendar",
      "Airtable Records",
      "Tool Argument Extraction",
      "Conditional Routing",
      "Time Zone Conversion",
      "Appointment Status Tracking",
    ],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
    secondaryUrl: "#",
  },
  {
    id: "aiVideoContentRepurposing",
    title: "AI Video Content Repurposing",
    category: "Zapier",
    image: "site-assets-v2/images/automation/zapier/ai-content-repurposing.jpg",
    description:
      "Built a content workflow that transcribes new videos, generates blog drafts, and routes approved social content.",
    tags: [
      "Google Drive File Trigger",
      "Video File Filtering",
      "AI Transcription",
      "Blog Post Generation",
      "Conditional Path Routing",
      "Facebook Page Publishing",
      "LinkedIn Share Updates",
    ],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
    secondaryUrl: "#",
  },
  {
    id: "aiClientOnboardingWorkspace",
    title: "AI Client Onboarding Workspace",
    category: "Zapier",
    image:
      "site-assets-v2/images/automation/zapier/ai-intake-processing-and-workspace-automation.jpg",
    description:
      "Processes intake data with Claude, creates Monday.com workspaces, assigns onboarding tasks, and sends internal completion updates.",
    tags: [
      "Typeform Intake",
      "Google Sheets Logging",
      "Claude AI Content Generation",
      "Conditional Path Routing",
      "Monday.com GraphQL",
      "JavaScript Data Parsing",
      "HTML Document Import",
      "Email Notifications",
    ],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
    secondaryUrl: "#",
  },
  {
    id: "asanaLeadEngagement",
    title: "Asana Lead Engagement",
    category: "Zapier",
    image:
      "site-assets-v2/images/automation/zapier/asana-crm-lead-engagement.jpg",
    description:
      "Connects Asana lead stages with folder creation, follow-up emails, welcome messages, and service recommendations.",
    tags: [
      "Asana Task Updates",
      "Lead Stage Routing",
      "Google Drive Folders",
      "Gmail Follow-Ups",
      "Scheduled Delays",
      "Email Response Checks",
      "AI Email Personalization",
      "Service Recommendations",
    ],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
    secondaryUrl: "#",
  },
  {
    id: "leadEnrichmentPriorityRouting",
    title: "Lead Enrichment and Priority Routing",
    category: "Zapier",
    image:
      "site-assets-v2/images/automation/zapier/automate-leads-enrichment.jpg",
    description:
      "Enriches incoming leads, routes them by priority, records key details, and prepares personalized outreach.",
    tags: [
      "Webhook Intake",
      "Apollo Enrichment",
      "Company URL Extraction",
      "Lead Priority Routing",
      "Google Sheets Storage",
      "Slack Alerts",
      "AI Email Drafting",
      "Gmail Notifications",
    ],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
    secondaryUrl: "#",
  },
  {
    id: "metaAdsKpiReporting",
    title: "Meta Ads KPI Reporting",
    category: "Zapier",
    image: "site-assets-v2/images/automation/zapier/daily-kpi-dashboard.jpg",
    description:
      "Collects Meta Ads data, calculates daily and monthly KPIs, and updates Google Sheets reporting dashboards.",
    tags: [
      "Scheduled Reporting",
      "Meta Ads API",
      "Webhook Data Collection",
      "JavaScript Aggregation",
      "Duplicate Prevention",
      "Google Sheets Reporting",
      "Daily KPI Calculations",
      "Monthly Dashboard Updates",
    ],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
    secondaryUrl: "#",
  },
  {
    id: "xeroTransactionCsvExport",
    title: "Xero Transaction CSV Export",
    category: "Make.com",
    image:
      "site-assets-v2/images/automation/make/export-xero-transactions-and-upload-to-asana.jpg",
    description:
      "Exports Xero transactions, creates a CSV report, and attaches it to completed Asana tasks.",
    tags: [
      "Asana Task Trigger",
      "Xero API Request",
      "Transaction Data Export",
      "Router Logic",
      "Iterator Processing",
      "Google Sheets Staging",
      "CSV File Generation",
      "Attachment Upload",
    ],
    projectUrl: "#",
    secondaryLabel: "View Case Study",
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
    eyebrow: "Case Study",
    title: "Membership Access Automation",
    intro: "Automated onboarding, renewal reminders, and membership tracking.",
    coverImage:
      "site-assets-v2/images/automation/go-high-level/01-membership-access-automation.jpg",
    coverAlt: "Placeholder image for the project cover",

    // Keep these four sections in this order.
    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Workflow Automation",
        paragraphs: [
          "I helped build and organize workflows based on the requirements provided by the project team.",
          "The automation handled contact updates, internal notifications, follow-ups, and other recurring CRM tasks.",
        ],
        bullets: [
          "Configured workflow triggers and actions.",
          "Updated contact fields, tags, and statuses.",
          "Connected related automation sequences.",
        ],
        image:
          "site-assets-v2/images/automation/go-high-level/02-new-member.jpg",
        imageAlt: "GoHighLevel membership access automation workflow",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Managing Multiple Workflow Paths",
        paragraphs: [
          "The workflows included several conditions, delays, and branches that needed to run in the correct order.",
          "The main challenge was keeping each automation organized, reliable, and easy to review.",
        ],
        bullets: [
          "Handled multiple contact paths.",
          "Reduced repetitive manual tasks.",
          "Maintained consistent CRM records.",
        ],
        image: "site-assets-v2/images/automation/go-high-level/03-1-paid.jpg",
        imageAlt: "Workflow conditions and automation branches",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Structured Automation Setup",
        paragraphs: [
          "I configured the required triggers, conditions, internal notifications, math operation, and  actions inside GoHighLevel.",
          "Each workflow was divided into clear stages to make testing, updates, and maintenance easier.",
        ],
        bullets: [
          "Trigger → evaluate the contact details.",
          "Condition → select the correct workflow path.",
          "Action → update records or continue automation.",
        ],
        image: "site-assets-v2/images/automation/go-high-level/03-2-paid.jpg",
        imageAlt: "Structured CRM automation workflow",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Reliable Workflow Execution",
        paragraphs: [
          "I reviewed each workflow path to confirm that contacts entered the correct branch and actions ran as expected.",
          "Fallback paths and validation checks were used to prevent incomplete records from continuing through the automation.",
        ],
        bullets: [
          "Tested triggers, conditions, and delays.",
          "Verified field, tag, and status updates.",
          "Checked fallback paths and notifications.",
        ],
        image:
          "site-assets-v2/images/automation/go-high-level/03-email-notifications.jpg",
        imageAlt: "Workflow testing and validation process",
      },
    ],
  },
  aiAgentAutomation: {
    eyebrow: "Automation Case Study",
    title: "Facebook Page AI Agent",
    intro:
      "An n8n automation that processes Facebook Page messages and generates contextual AI responses.",

    coverImage: "site-assets-v2/images/automation/n8n/ai-agent.jpg",
    coverAlt: "n8n Facebook Page AI agent workflow",

    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Automated Facebook Responses",
        paragraphs: [
          "I built an AI agent that receives customer messages from a Facebook Page through a webhook.",
          "It uses reference content and conversation memory to generate relevant replies.",
        ],
        bullets: [
          "Received Facebook Page messages.",
          "Generated contextual AI replies.",
          "Maintained conversation history.",
        ],
        image: "site-assets-v2/images/automation/n8n/ai-agent.jpg",
        imageAlt: "Facebook Page AI messaging workflow",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Handling Page Messages",
        paragraphs: [
          "Incoming messages needed to be validated and processed before reaching the AI agent.",
          "The system also needed context to provide consistent responses.",
        ],
        bullets: [
          "Validated webhook requests.",
          "Filtered incoming message data.",
          "Maintained response context.",
        ],
        image: "site-assets-v2/images/automation/n8n/ai-agent.jpg",
        imageAlt: "Facebook webhook and message filtering",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "AI-Powered Message Processing",
        paragraphs: [
          "I connected Facebook webhooks, document retrieval, an AI model, memory, and an API request.",
          "The generated response is sent back to the Facebook Page through the Messenger API.",
        ],
        bullets: [
          "Facebook webhook → receive message.",
          "AI agent → generate reply.",
          "Messenger API → send response.",
        ],
        image: "site-assets-v2/images/automation/n8n/ai-agent.jpg",
        imageAlt: "Facebook Messenger AI agent workflow",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Reliable Message Delivery",
        paragraphs: [
          "I tested webhook verification, incoming messages, AI responses, and the final API request.",
          "Conditional paths prevented invalid requests from continuing.",
        ],
        bullets: [
          "Tested webhook verification.",
          "Checked AI response output.",
          "Verified Messenger API delivery.",
        ],
        image: "site-assets-v2/images/automation/n8n/ai-agent.jpg",
        imageAlt: "Facebook AI agent testing",
      },
    ],
  },
  aiJobApplicationAssistant: {
    eyebrow: "Automation Case Study",
    title: "AI Job Application Assistant",
    intro:
      "I built this workflow to validate job-search requests, collect listings, tailor resume content, and prepare application outputs.",

    coverImage:
      "site-assets-v2/images/automation/n8n/ai-jobs-scraper-resume-optimizer.jpg",
    coverAlt:
      "n8n workflow connecting Slack, job search processing, AI resume optimization, Google Docs, Gmail, and notifications",

    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Automated Job Application Preparation",
        paragraphs: [
          "I built a workflow that starts from a Slack request and validates whether the message relates to a job search.",
          "Valid requests retrieve job listings, process each result, tailor resume content with AI, and prepare document and application outputs.",
        ],
        bullets: [
          "Slack starts the workflow.",
          "Job listings are processed individually.",
          "Documents, drafts, and summaries are produced.",
        ],
        image: "site-assets-v2/images/automation/n8n/slack.jpg",
        imageAlt:
          "Overview of the job search and resume optimization workflow in n8n",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Managing Multiple Application Paths",
        paragraphs: [
          "The process required separating invalid requests, empty search results, and valid job listings before resume generation could begin.",
          "Each listing also needed consistent resume sections, proposal content, email fields, document updates, and final notifications.",
        ],
        bullets: [
          "Invalid search requests required early routing.",
          "Multiple listings needed controlled iteration.",
          "Application outputs required consistent formatting.",
        ],
        image: "site-assets-v2/images/automation/n8n/resume-template.jpg",
        imageAlt:
          "Conditional routing and loop structure for job application processing",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Connected Resume and Outreach Flow",
        paragraphs: [
          "I configured split and loop steps to process each job while reading the source resume from Google Docs.",
          "An OpenRouter chat model and structured output parser generate tailored content before the workflow copies, updates, and distributes the results.",
        ],
        bullets: [
          "Slack request → validate the job-search query.",
          "Job results → loop through listings and generate structured content.",
          "Updated document → create an email draft and send a Slack summary.",
        ],
        image: "site-assets-v2/images/automation/n8n/resume.jpg",
        imageAlt:
          "Connected n8n nodes for AI resume generation, document updates, email drafts, and Slack reporting",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Validation and Output Checks",
        paragraphs: [
          "Visible conditions check query relevance, search results, and document availability before later actions continue.",
          "Recommended validation should also confirm structured AI output, required job fields, successful document updates, and delivery of final messages.",
        ],
        bullets: [
          "Reject unrelated or incomplete search requests.",
          "Verify AI output matches the required JSON structure.",
          "Confirm document, email, and Slack actions complete.",
        ],
        image:
          "site-assets-v2/images/automation/n8n/ai-jobs-scraper-resume-optimizer.jpg",
        imageAlt:
          "Workflow validation gates for queries, job results, documents, and application outputs",
      },
    ],
  },
  aiVideoContentRepurposing: {
    eyebrow: "Automation Case Study",
    title: "AI Video Content Repurposing",
    intro:
      "A  file-driven automation that turns new video uploads into AI-generated blog content and social posts.",

    coverImage:
      "site-assets-v2/images/automation/zapier/ai-content-repurposing.jpg",
    coverAlt:
      "Zapier workflow connecting Google Drive, AI content generation, conditional paths, Facebook Pages, and LinkedIn",

    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Video-to-Social Content Flow",
        paragraphs: [
          "I built this  workflow to monitor a google drive folder for new video files on a scheduled interval.",
          "Accepted files are transcribed, converted into blog content, and routed into Facebook Page and LinkedIn publishing actions.",
        ],
        bullets: [
          "Google Drive supplies new source files.",
          "AI produces transcription and blog copy.",
          "Two paths deliver social media outputs.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/ai-content-repurposing-google-drive.jpg",
        imageAlt:
          "Complete Zapier workflow for processing video files and publishing generated social content",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Reliable Input and Routing Control",
        paragraphs: [
          "The automation needed to prevent unsuitable files from reaching the AI processing steps. The trigger configuration also excludes deleted items.",
          "Generated content had to follow separate branch conditions without requiring repeated manual publishing work.",
        ],
        bullets: [
          "Validate incoming file criteria.",
          "Control scheduled folder polling.",
          "Keep branch-specific publishing consistent.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/ai-content-repurposing-google-drive-filter.jpg",
        imageAlt:
          "Google Drive trigger configuration for monitoring a selected video folder on a scheduled interval",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Connected Repurposing Pipeline",
        paragraphs: [
          "I configured a linear sequence for intake, filtering, transcription, and blog generation. A path splitter then separates the publishing logic.",
          "Both branches apply their own conditions before creating a Facebook Page post and LinkedIn share update.",
        ],
        bullets: [
          "Google Drive → detect a new file in the selected folder.",
          "Filter and AI → validate, transcribe, and generate blog content.",
          "Paths → publish approved copy to Facebook Pages and LinkedIn.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/ai-content-repurposing-ai.jpg",
        imageAlt:
          "Zapier pipeline showing file filtering, AI transcription, blog generation, and conditional social publishing",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Validation and Output Review",
        paragraphs: [
          "Visible filters and path conditions provide checkpoints before content reaches the publishing steps. Dedicated retry or error branches are not shown.",
          "Recommended checks would confirm file access, complete AI text, and readable final post formatting across both destinations.",
        ],
        bullets: [
          "Reject files that fail the initial filter.",
          "Confirm each path receives usable generated text.",
          "Review final posts for completeness and formatting.",
        ],
        image: "site-assets-v2/images/automation/zapier/fb-post.jpg",
        imageAlt:
          "Generated Facebook Page post used to review automated content structure and final formatting",
      },
    ],
  },
  prospectNurturing: {
    eyebrow: "Automation Case Study",
    title: "Lead Nurture Email Automation",
    intro:
      "A workflow that sends a timed email sequence to nurture prospects and maintain consistent follow-ups.",

    coverImage:
      "site-assets-v2/images/automation/go-high-level/8-prospect-nurture-workflow.jpg",
    coverAlt: "GoHighLevel prospect nurture email workflow",

    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Automated Prospect Follow-Ups",
        paragraphs: [
          "I built a workflow that automatically follows up with prospects after they enter a selected pipeline stage.",
          "The sequence sends multiple emails with scheduled delays between each message.",
        ],
        bullets: [
          "Triggered by a pipeline-stage update.",
          "Sent a structured email sequence.",
          "Reduced repetitive follow-up tasks.",
        ],
        image:
          "site-assets-v2/images/automation/go-high-level/8-prospect-nurture-workflow.jpg",
        imageAlt: "Prospect nurture workflow overview",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Maintaining Consistent Follow-Ups",
        paragraphs: [
          "Prospects needed to receive timely messages without requiring manual follow-up from the team.",
          "Each email also needed to be delivered in the correct order and at the intended interval.",
        ],
        bullets: [
          "Managed multiple follow-up emails.",
          "Maintained consistent timing.",
          "Prevented missed communications.",
        ],
        image:
          "site-assets-v2/images/automation/go-high-level/8-prospect-nurture-workflow.jpg",
        imageAlt: "Prospect follow-up automation sequence",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Timed Email Sequence",
        paragraphs: [
          "I configured a pipeline trigger followed by email actions and wait steps inside GoHighLevel.",
          "The workflow continues automatically until the complete nurture sequence has been delivered.",
        ],
        bullets: [
          "Pipeline update → start workflow.",
          "Email action → send follow-up.",
          "Wait step → continue the sequence.",
        ],
        image:
          "site-assets-v2/images/automation/go-high-level/8-1-prospect-nurture-workflow.jpg",
        imageAlt: "Timed prospect nurture email sequence",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Reliable Workflow Execution",
        paragraphs: [
          "I tested the trigger, wait periods, and email actions to confirm that the sequence ran in the correct order.",
          "The workflow was reviewed to prevent duplicate enrollment and unintended follow-ups.",
        ],
        bullets: [
          "Tested the pipeline trigger.",
          "Verified email and delay order.",
          "Checked workflow completion.",
        ],
        image:
          "site-assets-v2/images/automation/go-high-level/8-1-prospect-nurture-workflow.jpg",
        imageAlt: "Prospect nurture workflow testing",
      },
    ],
  },
  crmLeadNurturing: {
    eyebrow: "Automation Case Study",
    title: "Membership Renewal Email Reminders",
    intro:
      "A workflow that sends scheduled email reminders based on membership renewal dates.",

    coverImage:
      "site-assets-v2/images/automation/go-high-level/4-email-reminders.jpg",
    coverAlt: "GoHighLevel membership renewal email workflow",

    // Keep these four sections in this order.
    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Automated Renewal Reminders",
        paragraphs: [
          "I built a workflow that automatically sends reminder emails before and after a membership renewal date.",
          "The automation uses contact dates and membership types to deliver the appropriate email sequence.",
        ],
        bullets: [
          "Triggered by renewal-date updates.",
          "Supported multiple membership types.",
          "Sent reminders at scheduled intervals.",
        ],
        image:
          "site-assets-v2/images/automation/go-high-level/4-email-reminders.jpg",
        imageAlt: "Membership renewal reminder workflow overview",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Managing Reminder Schedules",
        paragraphs: [
          "The workflow required several date-based delays and reminder emails to run in the correct order.",
          "Each contact also needed to enter the appropriate path based on their membership type.",
        ],
        bullets: [
          "Managed multiple reminder dates.",
          "Separated membership paths.",
          "Prevented incorrect workflow routing.",
        ],
        image:
          "site-assets-v2/images/automation/go-high-level/4-1-email-reminders.jpg",
        imageAlt: "Date-based email reminder workflow",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Date-Based Email Sequence",
        paragraphs: [
          "I configured triggers, conditions, wait steps, and email actions using the provided workflow requirements.",
          "The sequence continues through scheduled reminders until the renewal follow-up process is complete.",
        ],
        bullets: [
          "Renewal date → start workflow.",
          "Membership type → select email path.",
          "Wait step → send scheduled reminder.",
        ],
        image:
          "site-assets-v2/images/automation/go-high-level/4-1-email-reminders.jpg",
        imageAlt: "Extended membership reminder email sequence",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Reliable Email Delivery",
        paragraphs: [
          "I tested each workflow path to confirm that reminders were sent at the intended times.",
          "Fallback conditions were included to stop contacts that did not match the required criteria.",
        ],
        bullets: [
          "Tested triggers and date delays.",
          "Verified each email sequence.",
          "Checked conditions and fallback paths.",
        ],
        image:
          "site-assets-v2/images/automation/go-high-level/4-1-email-reminders.jpg",
        imageAlt: "Membership email automation testing",
      },
    ],
  },
  voiceAppointmentScheduler: {
    eyebrow: "Automation Case Study",
    title: "AI Voice Assistant Appointment Scheduling System",
    intro:
      "I built a voice-driven scheduling workflow that processes appointment requests, manages calendar events, and stores structured call outcomes.",

    coverImage: "site-assets-v2/images/automation/n8n/ai-receptionist.jpg",
    coverAlt:
      "n8n workflow with separate branches for appointment availability, booking, rescheduling, cancellation, and call results",

    // Keep these four sections in this order.
    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Voice Appointment Management",
        paragraphs: [
          "The automation receives scheduling requests from a configured voice agent and passes each tool call into the workflow.",
          "It checks availability, manages calendar events, returns a spoken result, and stores appointment or call records.",
        ],
        bullets: [
          "Voice-agent tool call trigger.",
          "Four appointment management operations.",
          "Calendar and record-storage outputs.",
        ],
        image: "site-assets-v2/images/automation/n8n/vapi-1.jpg",
        imageAlt:
          "Voice assistant configuration for handling appointment scheduling conversations and connected tool requests",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Consistent Multi-Tool Requests",
        paragraphs: [
          "Conversational requests had to be converted into reliable fields for availability, booking, rescheduling, and cancellation actions.",
          "Nested arguments, required parameters, time zones, and status values also needed consistent handling across every path.",
        ],
        bullets: [
          "Nested voice-tool arguments.",
          "Different fields for each action.",
          "Consistent dates and booking states.",
        ],
        image: "site-assets-v2/images/automation/n8n/vapi-2.jpg",
        imageAlt:
          "Vapi settings for calendar tools and structured appointment parameters",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Routed Calendar Operations",
        paragraphs: [
          "I configured separate branches that extract tool arguments, map appointment fields, and route requests to the correct calendar action.",
          "The resulting data is formatted for the voice response and written to connected records for later reference.",
        ],
        bullets: [
          "Voice tool call → extract and normalize arguments.",
          "Request condition → route to the matching calendar action.",
          "Calendar result → respond and store structured records.",
        ],
        image: "site-assets-v2/images/automation/n8n/airtable-1.jpg",
        imageAlt: "Airtable Call Recording",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Validated Scheduling Outputs",
        paragraphs: [
          "The workflow uses conditions, fallback branches, safe argument remapping, and JSON escaping before processing calendar requests.",
          "Recommended checks include missing fields, invalid times, unavailable slots, and accurate status updates in the final records.",
        ],
        bullets: [
          "Validate required tool parameters.",
          "Check unavailable-slot fallback responses.",
          "Confirm booking status and linked records.",
        ],
        image: "site-assets-v2/images/automation/n8n/airtable-2.jpg",
        imageAlt:
          "Appointment records showing confirmed, cancelled, and rescheduled status outputs for workflow validation",
      },
    ],
  },
  aiClientOnboardingWorkspace: {
    eyebrow: "Automation Case Study",
    title: "AI Client Onboarding",
    intro:
      "I built a workflow that processes form data, creates AI content, sets up Monday.com resources, and sends an internal update.",

    coverImage:
      "site-assets-v2/images/automation/zapier/ai-intake-processing-and-workspace-automation.jpg",
    coverAlt:
      "Zapier workflow for form intake, AI content, Monday.com setup, and email notifications",
    // Keep these four sections in this order.
    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Automated Onboarding Setup",
        paragraphs: [
          "The workflow starts when a new form is submitted. The form answers are also saved in Google Sheets.",
          "Claude creates useful content from the answers. Zapier then creates Monday.com resources and sends an internal email.",
        ],
        bullets: [
          "A Typeform submission starts the process.",
          "Claude creates profiles, summaries, and headlines.",
          "Monday.com and email actions finish the setup.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/ai-intake-processing-and-workspace-automation-trigger.jpg",
        imageAlt:
          "Zapier workflow showing form intake, AI processing, workspace setup, and email delivery",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Handling Many Connected Steps",
        paragraphs: [
          "The same form data was needed for documents, board setup, assignments, and notifications.",
          "Each new folder, board, group, and item created its own ID. These IDs had to move correctly between steps.",
        ],
        bullets: [
          "Many actions depended on earlier results.",
          "AI text needed clean formatting.",
          "Board IDs and folder IDs needed careful mapping.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/ai-intake-processing-and-workspace-automation-conditional-paths.jpg",
        imageAlt:
          "Zapier workflow with connected steps, generated IDs, and formatted AI content",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Two Clear Processing Paths",
        paragraphs: [
          "I configured one path to create the Monday.com folder, board, group, and information document.",
          "The second path cleans the AI headlines, creates a board item, adds an owner and date, and posts the headlines.",
        ],
        bullets: [
          "Typeform → save answers and send them to Claude.",
          "Workspace path → create folders, boards, groups, and documents.",
          "Headline path → format content, create an item, and add an update.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/ai-intake-processing-and-workspace-automation-subfolder.jpg",
        imageAlt:
          "Zapier workflow with separate workspace creation and headline processing paths",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Checking Important Outputs",
        paragraphs: [
          "The workflow checks that form responses exist before starting the main paths. Code steps also clean IDs, text, and HTML.",
          "Recommended checks include reviewing created resources, document formatting, assignments, dates, headlines, and email delivery.",
        ],
        bullets: [
          "Check that every required form field is present.",
          "Confirm that all Monday.com IDs are returned.",
          "Review the final document, board item, and email.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/ai-intake-processing-and-workspace-automation-internal-notif.jpg",
        imageAlt:
          "Zapier workflow checks for form data, Monday.com IDs, document output, and email delivery",
      },
    ],
  },
  asanaLeadEngagement: {
    eyebrow: "Automation Case Study",
    title: "Asana Lead Engagement",
    intro:
      "I built a lead management workflow that responds to Asana stage changes with folders, tasks, follow-ups, and personalized emails.",

    coverImage:
      "site-assets-v2/images/automation/zapier/asana-crm-lead-engagement.jpg",
    coverAlt:
      "Zapier workflow connecting Asana lead stages with Google Drive, Gmail, delays, filters, and AI email writing",

    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Stage-Based Lead Actions",
        paragraphs: [
          "The workflow starts when a task is updated in Asana. Zapier checks the lead stage and sends it to the correct path.",
          "Each path creates the required folder, task, follow-up, welcome email, or service recommendation.",
        ],
        bullets: [
          "Asana task updates start the workflow.",
          "Five paths cover different lead stages.",
          "Google Drive, Gmail, and AI complete the actions.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/asana-crm-lead-engagement.jpg",
        imageAlt:
          "Zapier overview showing five automation paths based on Asana lead stages",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Keeping Leads Moving",
        paragraphs: [
          "Different lead stages required different actions and messages. Handling these steps manually could cause missed follow-ups or inconsistent communication.",
          "Some paths also needed delays, response checks, files, and personalized email content before continuing.",
        ],
        bullets: [
          "Each stage required a separate action.",
          "Follow-ups needed controlled timing.",
          "Emails needed the correct lead information.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/asana-crm-lead-engagement.jpg",
        imageAlt:
          "Zapier workflow showing separate lead stages, delayed follow-ups, and personalized communication",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Five Connected Paths",
        paragraphs: [
          "I configured Zapier Paths to route updated Asana tasks by their current lead stage.",
          "The paths use Google Drive, Asana, Gmail, filters, delays, and AI writing steps to complete each process.",
        ],
        bullets: [
          "Ready to Start → create a Drive folder and an Asana content task.",
          "No Response or Quoted → send follow-ups, wait, and check for replies.",
          "Approved or Closed → prepare personalized welcome or recommendation emails.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/asana-crm-lead-engagement.jpg",
        imageAlt:
          "Zapier solution connecting Asana stages to folders, follow-ups, welcome emails, and recommendations",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Checking Routes and Replies",
        paragraphs: [
          "Path conditions prevent actions from running for the wrong lead stage. Filters also check email activity before later follow-ups are sent.",
          "Recommended checks should confirm folder creation, task details, delay timing, file retrieval, and final email content.",
        ],
        bullets: [
          "Confirm every Asana stage enters the correct path.",
          "Check reply filters before sending another follow-up.",
          "Review folders, files, tasks, and outgoing emails.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/asana-crm-lead-engagement.jpg",
        imageAlt:
          "Zapier validation steps covering path conditions, email filters, files, tasks, and final messages",
      },
    ],
  },
  spamCallDndAutomation: {
    eyebrow: "Automation Case Study",
    title: "Spam Call DND Automation",
    intro:
      "A GoHighLevel workflow that automatically enables inbound call restrictions for contacts marked as spam.",

    coverImage:
      "site-assets-v2/images/automation/go-high-level/auto-enable-inbound-dnd-calls-for-spam-labeled-contacts.jpg",
    coverAlt: "GoHighLevel spam call DND automation workflow",

    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Automated Spam Call Control",
        paragraphs: [
          "I built a workflow that detects contacts marked with a spam-related call result.",
          "The automation then enables call restrictions without requiring a manual CRM update.",
        ],
        bullets: [
          "Triggered by call details.",
          "Detected spam-labeled contacts.",
          "Updated communication settings.",
        ],
        image:
          "site-assets-v2/images/automation/go-high-level/auto-enable-inbound-dnd-calls-for-spam-labeled-contacts.jpg",
        imageAlt: "Spam call control automation overview",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Reducing Unwanted Calls",
        paragraphs: [
          "Spam contacts needed to be restricted quickly to prevent repeated unwanted calls.",
          "Manually updating each contact would be repetitive and could lead to missed records.",
        ],
        bullets: [
          "Identified spam call results.",
          "Reduced manual contact updates.",
          "Prevented repeated call activity.",
        ],
        image:
          "site-assets-v2/images/automation/go-high-level/auto-enable-inbound-dnd-calls-for-spam-labeled-contacts.jpg",
        imageAlt: "Spam contact identification workflow",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Call-Based DND Update",
        paragraphs: [
          "I configured a call-details trigger that checks for the required disposition.",
          "When the condition is matched, the workflow automatically enables the contact’s call DND setting.",
        ],
        bullets: [
          "Call completed → check disposition.",
          "Spam detected → start automation.",
          "Contact matched → enable call DND.",
        ],
        image:
          "site-assets-v2/images/automation/go-high-level/auto-enable-inbound-dnd-calls-for-spam-labeled-contacts.jpg",
        imageAlt: "Call-triggered DND workflow",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Accurate Contact Updates",
        paragraphs: [
          "I tested the trigger and action to ensure only matching contacts received the DND update.",
          "Non-matching call results were left unchanged to avoid restricting valid contacts.",
        ],
        bullets: [
          "Tested the call trigger.",
          "Verified disposition matching.",
          "Confirmed the DND update.",
        ],
        image:
          "site-assets-v2/images/automation/go-high-level/auto-enable-inbound-dnd-calls-for-spam-labeled-contacts.jpg",
        imageAlt: "Call DND workflow testing",
      },
    ],
  },
  aiAssistantChatbot: {
    eyebrow: "AI Automation Case Study",
    title: "AI Assistant Chatbot",
    intro:
      "An AI chatbot configured to provide helpful, consistent, and professional responses to customer questions.",

    coverImage: "site-assets-v2/images/automation/go-high-level/chatbot.jpg",
    coverAlt: "AI assistant chatbot configuration dashboard",

    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Customer Support Chatbot",
        paragraphs: [
          "I configured an AI chatbot to assist customers with common questions and basic support requests.",
          "The chatbot follows defined personality, communication, and response guidelines.",
        ],
        bullets: [
          "Configured the chatbot personality.",
          "Defined its primary support goal.",
          "Added conversation guidelines.",
        ],
        image: "site-assets-v2/images/automation/go-high-level/chatbot.jpg",
        imageAlt: "AI customer support chatbot setup",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Creating Consistent Responses",
        paragraphs: [
          "The chatbot needed to provide useful answers while maintaining a clear and professional tone.",
          "It also needed instructions for handling questions without producing confusing or unrelated responses.",
        ],
        bullets: [
          "Maintained a consistent tone.",
          "Kept responses clear and concise.",
          "Defined appropriate bot behavior.",
        ],
        image: "site-assets-v2/images/automation/go-high-level/chatbot.jpg",
        imageAlt: "AI chatbot response settings",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Structured Prompt Setup",
        paragraphs: [
          "I created structured instructions covering the chatbot’s personality, goal, and conversation rules.",
          "These guidelines help the assistant understand how to respond during customer interactions.",
        ],
        bullets: [
          "Personality → set communication style.",
          "Goal → define the chatbot’s purpose.",
          "Guidelines → control response behavior.",
        ],
        image: "site-assets-v2/images/automation/go-high-level/chatbot.jpg",
        imageAlt: "Structured AI chatbot prompt",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Conversation Testing",
        paragraphs: [
          "I tested the chatbot using different questions to review its tone, clarity, and response quality.",
          "The instructions were refined to improve consistency and reduce unclear answers.",
        ],
        bullets: [
          "Tested common user questions.",
          "Reviewed response accuracy.",
          "Refined conversation instructions.",
        ],
        image: "site-assets-v2/images/automation/go-high-level/chatbot.jpg",
        imageAlt: "AI chatbot conversation testing",
      },
    ],
  },
  leadEnrichmentPriorityRouting: {
    eyebrow: "Automation Case Study",
    title: "Lead Enrichment and Priority Routing",
    intro:
      "I built a workflow that enriches incoming leads, checks their priority, and sends the correct sales notification.",

    coverImage:
      "site-assets-v2/images/automation/zapier/automate-leads-enrichment.jpg",
    coverAlt:
      "Zapier workflow for lead enrichment, priority routing, data storage, sales alerts, and AI email drafting",

    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Automated Lead Processing",
        paragraphs: [
          "The workflow starts when new lead information arrives through a webhook. It extracts the company website and enriches the lead through an external service.",
          "Zapier then sends the lead through a high-priority or low-priority path. Each path completes the correct storage and communication actions.",
        ],
        bullets: [
          "A webhook receives new lead details.",
          "Apollo adds company information.",
          "Priority rules select the final actions.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/automate-leads-enrichment.jpg",
        imageAlt:
          "Zapier lead processing workflow with webhook intake, company enrichment, and two priority paths",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Sorting Leads Quickly",
        paragraphs: [
          "Incoming lead data needed more company information before the sales team could review it. The workflow also needed to separate important leads from lower-priority leads.",
          "Each path required different actions without mixing records or sending the wrong notification.",
        ],
        bullets: [
          "Lead details arrived with limited company data.",
          "Priority decisions needed clear conditions.",
          "Sales messages needed the correct lead information.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/automate-leads-enrichment.jpg",
        imageAlt:
          "Zapier workflow showing lead enrichment requirements and separate high-priority and low-priority routes",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Two Priority Paths",
        paragraphs: [
          "I connected the webhook to a Formatter step that prepares the company URL. A second webhook sends the company data to Apollo for enrichment.",
          "High-priority leads are saved and shared with the sales team. The workflow also uses AI to prepare personalized email content.",
        ],
        bullets: [
          "Webhook → receive lead data and prepare the company URL.",
          "Apollo enrichment → add company details and check priority.",
          "Priority path → store the lead and send the correct notification.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/automate-leads-enrichment.jpg",
        imageAlt:
          "Zapier solution connecting webhook intake, Apollo enrichment, Google Sheets, Slack, AI, and Gmail",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Checking Lead Outputs",
        paragraphs: [
          "The visible path conditions help prevent leads from entering the wrong route. Each route runs only when its priority rules are met.",
          "Recommended checks should confirm required webhook fields, enrichment responses, priority results, saved records, and outgoing messages.",
        ],
        bullets: [
          "Check that required lead fields are present.",
          "Confirm enrichment returns usable company data.",
          "Review routing, storage, alerts, and email content.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/automate-leads-enrichment.jpg",
        imageAlt:
          "Zapier workflow validation checks for lead fields, enrichment results, routing, storage, and notifications",
      },
    ],
  },
  metaAdsKpiReporting: {
    eyebrow: "Automation Case Study",
    title: "Meta Ads KPI Reporting",
    intro:
      "I built a scheduled reporting workflow that collects Meta Ads data, calculates KPIs, and updates a Google Sheets dashboard.",

    coverImage:
      "site-assets-v2/images/automation/zapier/daily-kpi-dashboard.jpg",
    coverAlt:
      "Zapier workflow for collecting Meta Ads data and updating daily and monthly KPI reports",

    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Automated KPI Updates",
        paragraphs: [
          "The workflow runs on a schedule and collects performance data from the Meta Ads API.",
          "It organizes the data, calculates daily and monthly KPIs, and updates the reporting dashboard in Google Sheets.",
        ],
        bullets: [
          "A scheduled trigger starts the report.",
          "JavaScript cleans and calculates the data.",
          "Google Sheets stores the final KPI results.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/daily-kpi-dashboard-1.jpg",
        imageAlt:
          "Zapier reporting workflow with scheduled data collection, calculations, and Google Sheets updates",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Keeping Reports Accurate",
        paragraphs: [
          "Raw advertising data can contain repeated records and different conversion actions. This can create incorrect totals.",
          "Daily and monthly reports also need the same campaign names, dates, and calculation rules.",
        ],
        bullets: [
          "Duplicate records could affect totals.",
          "Conversion actions needed careful filtering.",
          "Daily and monthly reports needed consistent data.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/daily-kpi-dashboard-2.jpg",
        imageAlt:
          "Zapier workflow showing data collection, record matching, KPI calculations, and reporting steps",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Connected Reporting Steps",
        paragraphs: [
          "I configured webhook and JavaScript steps to collect, clean, group, and calculate the advertising data.",
          "The workflow saves daily results, prepares monthly totals, creates a monthly sheet, and updates the dashboard row.",
        ],
        bullets: [
          "Schedule → request current Meta Ads performance data.",
          "JavaScript → clean records and calculate daily and monthly KPIs.",
          "Google Sheets → save results and update the reporting dashboard.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/daily-kpi-dashboard-3.jpg",
        imageAlt:
          "Zapier solution connecting Meta Ads API data, JavaScript calculations, and Google Sheets reporting",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Checking Data Quality",
        paragraphs: [
          "Matching-record and record-count steps help check the available data before calculations continue.",
          "Recommended checks should compare totals with Meta Ads Manager and confirm that each unique reporting record appears only once.",
        ],
        bullets: [
          "Check the API response and access token.",
          "Confirm there are no duplicate unique keys.",
          "Review spend, conversions, and calculated cost metrics.",
        ],
        image:
          "site-assets-v2/images/automation/zapier/daily-kpi-dashboard-4.jpg",
        imageAlt:
          "Zapier validation steps for API responses, duplicate records, KPI totals, and dashboard updates",
      },
    ],
  },
  xeroTransactionCsvExport: {
    eyebrow: "Automation Case Study",
    title: "Xero Transaction CSV Export",
    intro:
      "I built a workflow that exports accounting transactions, formats them as a CSV report, and attaches the file to Asana.",

    coverImage:
      "site-assets-v2/images/automation/make/export-xero-transactions-and-upload-to-asana.jpg",
    coverAlt:
      "Make.com workflow connecting Asana, Xero, Google Sheets, data tools, and file attachment actions",

    sections: [
      {
        number: "01",
        label: "Project Overview",
        title: "Automatic Report Delivery",
        paragraphs: [
          "The workflow starts when an Asana task is marked complete. It then requests transaction data from Xero.",
          "The records are prepared as a CSV report. The finished file is attached to the completed Asana task.",
        ],
        bullets: [
          "Completed Asana task starts the process.",
          "Xero provides the transaction records.",
          "Asana receives the finished CSV file.",
        ],
        image:
          "site-assets-v2/images/automation/make/export-xero-transactions-and-upload-to-asana.jpg",
        imageAlt:
          "Make.com scenario for exporting Xero transactions and uploading a CSV file to Asana",
      },
      {
        number: "02",
        label: "Challenge",
        title: "Preparing Report-Ready Data",
        paragraphs: [
          "The Xero data needed to match the structure of a manually downloaded transaction report.",
          "Multiple transaction records also needed to be collected, organized, and combined into one file.",
        ],
        bullets: [
          "API data needed consistent columns.",
          "Many transactions required repeated processing.",
          "The final file needed the correct Asana task.",
        ],
        image:
          "site-assets-v2/images/automation/make/export-xero-transactions-and-upload-to-asana.jpg",
        imageAlt:
          "Project requirements for exporting Xero transaction data and attaching the report to Asana",
      },
      {
        number: "03",
        label: "Solution and Workflow",
        title: "Connected Export Process",
        paragraphs: [
          "I connected the Asana trigger to a Xero API request and used a router to separate record processing from file creation.",
          "Google Sheets temporarily stores the rows before a text aggregator prepares the final report for upload.",
        ],
        bullets: [
          "Asana completion → request transaction data from Xero.",
          "Iterator → add each transaction row to Google Sheets.",
          "Text aggregator → build and upload the CSV attachment.",
        ],
        image:
          "site-assets-v2/images/automation/make/export-xero-transactions-and-upload-to-asana.jpg",
        imageAlt:
          "Make.com workflow showing Xero data retrieval, routing, iteration, aggregation, and Asana upload",
      },
      {
        number: "04",
        label: "Error Handling and Testing",
        title: "Checking the Final Export",
        paragraphs: [
          "The router, iterator, and delay help control the order of data processing. Temporary Google Sheets values are cleared after the file is uploaded.",
          "Recommended checks should confirm the Xero response, transaction row count, CSV structure, and Asana attachment.",
        ],
        bullets: [
          "Confirm the completed task starts the scenario.",
          "Check that every transaction becomes one row.",
          "Open the CSV and verify the attachment.",
        ],
        image:
          "site-assets-v2/images/automation/make/export-xero-transactions-and-upload-to-asana.jpg",
        imageAlt:
          "Make.com workflow checks for transaction rows, CSV formatting, temporary data cleanup, and Asana attachment",
      },
    ],
  },
};
const webProjects = [
  {
    title: "Calculator",
    image: "site-assets-v2/images/web/calculator.jpg",
    description:
      "A browser-based calculator built with HTML, CSS, and JavaScript for clear everyday calculations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lian-143.github.io/calculator/",
    githubUrl: "https://github.com/lian-143/calculator",
  },
  {
    title: "Rock, Paper and Scissors",
    image: "site-assets-v2/images/web/rock-paper-and-scissor.jpg",
    description:
      "An interactive browser game implementing the classic rock, paper, and scissors rules with JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lian-143.github.io/rock-paper-scissor/",
    githubUrl: "https://github.com/lian-143/rock-paper-scissor",
  },
  {
    title: "Etch A Sketch",
    image: "site-assets-v2/images/web/etch-a-sketch.jpg",
    description:
      "An interactive drawing grid demonstrating dynamic DOM updates and responsive front-end behavior.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lian-143.github.io/Etch-a-Sketch/",
    githubUrl: "https://github.com/lian-143/Etch-a-Sketch",
  },
  {
    title: "To-Do List",
    image: "site-assets-v2/images/web/to-do-list.jpg",
    description:
      "A browser-based task organizer for creating, tracking, and managing to-do items.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lian-143.github.io/odin-toDoList/",
    githubUrl: "https://github.com/lian-143/odin-toDoList",
  },
  {
    title: "Tic-Tac-Toe",
    image: "site-assets-v2/images/web/tic-tac-toe.jpg",
    description:
      "A browser implementation of the classic two-player tic-tac-toe game using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lian-143.github.io/tic-tac-toe/",
    githubUrl: "https://github.com/lian-143/tic-tac-toe",
  },
  {
    title: "Restaurant Website",
    image: "site-assets-v2/images/web/restaurant-page.jpg",
    description:
      "A responsive restaurant website demonstrating structured content, modern CSS, and JavaScript interactions.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lian-143.github.io/odin-restaurant/",
    githubUrl: "https://github.com/lian-143/odin-restaurant",
  },
  {
    title: "Admin Dashboard",
    image: "site-assets-v2/images/web/admin-dashboard.jpg",
    description:
      "A responsive admin dashboard interface focused on organized information, reusable layout patterns, and clear visual hierarchy.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lian-143.github.io/Admin-Dashboard/",
    githubUrl: "https://github.com/lian-143/Admin-Dashboard",
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
    issuer: "Udemy",
    date: "June 21, 2026",
    image: "site-assets-v2/images/certificates/wordpress.jpg",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-9d97e410-a933-44e5-9d9c-5f05bed4a2f4/",
  },
  {
    title: "GoHighLevel Certificate",
    issuer: "Tara AI Community+",
    date: "July 13, 2026",
    image:
      "site-assets-v2/images/certificates/leanne-frances-ganado-highlevel.jpg",
    credentialUrl:
      "https://my-certificates.com/certificates/6a53d29281683ab6396b999f",
  },
  {
    title: "Prompt Engineering Certificate",
    issuer: "Tara AI Community+",
    date: "July 6, 2026",
    image:
      "site-assets-v2/images/certificates/leanne-frances-ganado-prompt-engineering.jpg",
    credentialUrl:
      "https://my-certificates.com/certificates/6a4b11b181683ab6396558bf",
  },
  {
    title: "n8n Certificate",
    issuer: "Tara AI Community+",
    date: "June 28, 2026",
    image: "site-assets-v2/images/certificates/leanne-frances-ganado-n8n.jpg",
    credentialUrl:
      "https://my-certificates.com/certificates/6a4138108ca737db37390d0a",
  },
  {
    title: "Make.com Certificate",
    issuer: "Tara AI Community+",
    date: "January 8, 2026",
    image:
      "site-assets-v2/images/certificates/leanne-frances-ganado-make-com.jpg",
    credentialUrl:
      "https://my-certificates.com/certificates/695fb0b4d99ce93dffb50b9f",
  },
  {
    title: "Zapier Certificate",
    issuer: "Tara AI Community+",
    date: "January 2, 2026",
    image:
      "site-assets-v2/images/certificates/leanne-frances-ganado-zapier.png",
    credentialUrl:
      "https://my-certificates.com/certificates/6957b866b625eda4c08daafd",
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
let projectImageViewer = null;
let projectImageViewerImage = null;
let projectImageViewerCaption = null;
let projectImageViewerCloseButton = null;
let lastImageViewerTrigger = null;
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

// Include each article in the animated phrase so both “a” and “an” are typed.
const roleTitles = [
  "an AI Automation Engineer",
  "a CRM Developer",
  "an AI Agent Developer",
  "a WordPress Developer",
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
          <span class="tool-logo-image-wrap">
            <img
              class="tool-logo-image"
              src="${tool.image}"
              alt="${tool.alt}"
              width="44"
              height="44"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              data-fallback="${FALLBACK_IMAGE}"
            >
          </span>
          <span class="tool-logo-name" aria-hidden="true">${tool.name}</span>
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
  return `<button class="button project-details-button" type="button" data-project-details="${projectId}" aria-haspopup="dialog">${label}</button>`;
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
          alt="${project.title} workflow screenshot"
          width="1280"
          height="800"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          data-fallback="${FALLBACK_IMAGE}"
        >
      </div>
      <div class="project-card-body">
        <span class="project-category">${project.category}</span>
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <div class="tag-list" aria-label="Project tags">${createTags(project.tags)}</div>
        <div class="project-actions">
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

function createProjectImageViewer() {
  const viewer = document.createElement("div");
  viewer.className = "project-image-viewer";
  viewer.id = "project-image-viewer";
  viewer.hidden = true;
  viewer.innerHTML = `
    <div class="project-image-viewer-backdrop" data-image-viewer-close aria-hidden="true"></div>
    <div class="project-image-viewer-dialog" role="dialog" aria-modal="true" aria-labelledby="project-image-viewer-caption" tabindex="-1">
      <button class="project-image-viewer-close" type="button" data-image-viewer-close aria-label="Close full project image">
        <span aria-hidden="true">×</span>
      </button>
      <div class="project-image-viewer-stage">
        <img
          class="project-image-viewer-image"
          src="${FALLBACK_IMAGE}"
          alt=""
          decoding="async"
          data-fallback="${FALLBACK_IMAGE}"
        >
      </div>
      <p class="project-image-viewer-caption" id="project-image-viewer-caption"></p>
    </div>
  `;

  document.body.appendChild(viewer);
  projectImageViewer = viewer;
  projectImageViewerImage = viewer.querySelector(".project-image-viewer-image");
  projectImageViewerCaption = viewer.querySelector(
    ".project-image-viewer-caption",
  );
  projectImageViewerCloseButton = viewer.querySelector(
    ".project-image-viewer-close",
  );
  attachImageFallbacks(viewer);

  viewer.addEventListener("click", (event) => {
    if (event.target.closest("[data-image-viewer-close]")) {
      closeProjectImageViewer();
    }
  });
}

function createProjectImageButton(image, alt, loading = "lazy") {
  const encodedImage = encodeURIComponent(image || FALLBACK_IMAGE);
  const encodedAlt = encodeURIComponent(alt || "Project image");

  return `
    <button
      class="project-image-trigger"
      type="button"
      data-full-image="${encodedImage}"
      data-full-image-alt="${encodedAlt}"
      aria-label="Open full image: ${alt || "Project image"}"
    >
      <img
        src="${image || FALLBACK_IMAGE}"
        alt="${alt || "Project image"}"
        loading="${loading}"
        decoding="async"
        fetchpriority="${loading === "eager" ? "high" : "low"}"
        width="1600"
        height="1000"
        data-fallback="${FALLBACK_IMAGE}"
      >
      <span class="project-image-trigger-label" aria-hidden="true">View full image</span>
    </button>
  `;
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
          ${createProjectImageButton(section.image, section.imageAlt)}
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
          <p class="project-modal-tools-label">Tags</p>
          <div class="tag-list" aria-label="Project tags">${createTags(project.tags)}</div>
        </div>
        <figure class="project-modal-cover">
          ${createProjectImageButton(details.coverImage, details.coverAlt, "eager")}
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
  if (!projectImageViewer) createProjectImageViewer();
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

  if (projectImageViewer && !projectImageViewer.hidden) {
    closeProjectImageViewer(false);
  }

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

function openProjectImageViewer(imageSrc, imageAlt, trigger) {
  if (!projectImageViewer) createProjectImageViewer();

  lastImageViewerTrigger = trigger || document.activeElement;
  projectImageViewerImage.dataset.fallbackApplied = "false";
  projectImageViewerImage.src = imageSrc || FALLBACK_IMAGE;
  projectImageViewerImage.alt = imageAlt || "Full project image";
  projectImageViewerCaption.textContent = imageAlt || "Full project image";
  projectImageViewer.hidden = false;

  requestAnimationFrame(() => {
    projectImageViewer.classList.add("is-open");
    projectImageViewerCloseButton?.focus();
  });
}

function closeProjectImageViewer(restoreFocus = true) {
  if (!projectImageViewer || projectImageViewer.hidden) return;

  projectImageViewer.classList.remove("is-open");

  window.setTimeout(
    () => {
      projectImageViewer.hidden = true;
      projectImageViewerImage.src = FALLBACK_IMAGE;
      projectImageViewerImage.alt = "";
      projectImageViewerCaption.textContent = "";

      if (restoreFocus) lastImageViewerTrigger?.focus?.();
      lastImageViewerTrigger = null;
    },
    reducedMotion ? 0 : 160,
  );
}

function trapFocusInside(container, event) {
  if (!container || container.hidden || event.key !== "Tab") return;

  const focusable = [
    ...container.querySelectorAll(
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
  createProjectImageViewer();

  automationGrid?.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-project-details]");
    if (!trigger) return;
    openProjectModal(trigger.dataset.projectDetails, trigger);
  });

  projectModal?.addEventListener("click", (event) => {
    const imageTrigger = event.target.closest("[data-full-image]");
    if (!imageTrigger) return;

    const imageSrc = decodeURIComponent(imageTrigger.dataset.fullImage || "");
    const imageAlt = decodeURIComponent(
      imageTrigger.dataset.fullImageAlt || "",
    );
    openProjectImageViewer(imageSrc, imageAlt, imageTrigger);
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      projectImageViewer &&
      !projectImageViewer.hidden
    ) {
      closeProjectImageViewer();
      return;
    }

    if (event.key === "Escape" && projectModal && !projectModal.hidden) {
      closeProjectModal();
      return;
    }

    if (projectImageViewer && !projectImageViewer.hidden) {
      trapFocusInside(projectImageViewer, event);
      return;
    }

    trapFocusInside(projectModal, event);
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
          alt="${project.title} interface screenshot"
          width="1280"
          height="800"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
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
          alt="${certificate.title} certificate"
          width="1280"
          height="800"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
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
    if (window.innerWidth > 1120) setNavigation(false);
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
