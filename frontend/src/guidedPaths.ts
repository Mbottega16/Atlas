// The "Help me find something" decision tree. Pure config — every leaf is just
// a preset filter handed to the existing /api/entries search (category AND tag
// AND q are combined server-side). Keep leaves broad enough to return a handful
// of results; when a tag is too sparse, lean on `q` (matches title, description,
// link, and use_case) or a category instead.
//
// Shape: a node asks one question; each option either drills into a `next`
// node or ends at a `filter` leaf. Nothing here touches the backend.

export interface GuideFilter {
  /** Human label for the results screen, e.g. "Hosting & deploying an app". */
  label: string;
  category?: string;
  tag?: string;
  q?: string;
}

export interface GuideOption {
  label: string;
  hint?: string;
  filter?: GuideFilter;
  next?: GuideNode;
}

export interface GuideNode {
  question: string;
  options: GuideOption[];
}

const build: GuideNode = {
  question: "What part of building?",
  options: [
    {
      label: "Writing code",
      hint: "Docs, references, cheat sheets, standards",
      filter: { label: "Coding docs & references", category: "developer tools" },
    },
    {
      label: "Playgrounds & quick tools",
      hint: "Try code, convert formats, test a regex",
      filter: { label: "Online dev tools & playgrounds", category: "developer tools", q: "playground" },
    },
    {
      label: "Hosting or deploying an app",
      filter: { label: "Hosting & deployment", category: "hosting & ops" },
    },
    {
      label: "Monitoring something already live",
      hint: "Errors, uptime, analytics",
      filter: { label: "Ops & monitoring", category: "hosting & ops", tag: "monitoring" },
    },
    {
      label: "Security check before launch",
      filter: { label: "Web security testing", tag: "security testing" },
    },
    {
      label: "Accessibility check",
      filter: { label: "Accessibility tools", tag: "accessibility" },
    },
    {
      label: "Making a game",
      hint: "Engines, assets, references",
      filter: { label: "Game development", category: "game dev" },
    },
  ],
};

const make: GuideNode = {
  question: "Making what, exactly?",
  options: [
    { label: "2D art / concept / painting", filter: { label: "2D art & painting", tag: "2d" } },
    { label: "3D models & assets", filter: { label: "3D modeling & assets", tag: "3d" } },
    { label: "Textures & materials", filter: { label: "Textures & materials", q: "texture" } },
    {
      label: "Video editing, compositing, VFX",
      filter: { label: "Video & compositing", tag: "video" },
    },
    { label: "Audio & sound effects", filter: { label: "Audio & sound", category: "audio & video" } },
    { label: "Icons & SVG", filter: { label: "Icons & SVG", tag: "icons" } },
    { label: "Fonts & type", filter: { label: "Fonts & typography", tag: "fonts" } },
    { label: "Stock photos / video / music", filter: { label: "Stock media", q: "stock" } },
  ],
};

const design: GuideNode = {
  question: "What are you designing?",
  options: [
    {
      label: "A UI — components & frameworks",
      filter: { label: "UI components & CSS frameworks", tag: "components" },
    },
    { label: "Picking colors", filter: { label: "Color & palettes", tag: "color" } },
    {
      label: "Looking for inspiration / real examples",
      filter: { label: "Design inspiration", tag: "inspiration" },
    },
    {
      label: "Backgrounds, gradients, effects",
      filter: { label: "Backgrounds & effects", q: "background" },
    },
  ],
};

const writePublish: GuideNode = {
  question: "Writing or publishing?",
  options: [
    { label: "Writing & editing tools", filter: { label: "Writing tools", tag: "writing" } },
    {
      label: "Self-publishing a book",
      filter: { label: "Self-publishing", tag: "publishing" },
    },
    {
      label: "Citations & research writing",
      filter: { label: "Citations & academic writing", q: "citation" },
    },
  ],
};

const learn: GuideNode = {
  question: "What kind of learning?",
  options: [
    {
      label: "A structured course",
      filter: { label: "Courses", category: "education", q: "course" },
    },
    {
      label: "Quick reference / cheat sheet",
      filter: { label: "Cheat sheets & quick reference", q: "cheat sheet" },
    },
    {
      label: "Practice problems & challenges",
      filter: { label: "Coding practice", tag: "practice" },
    },
    {
      label: "Datasets",
      filter: { label: "Datasets", category: "reference & data", tag: "datasets" },
    },
    {
      label: "Academic research & papers",
      filter: { label: "Research tools", tag: "research" },
    },
  ],
};

const market: GuideNode = {
  question: "Which part of getting it out there?",
  options: [
    { label: "SEO & keywords", filter: { label: "SEO & keyword research", tag: "seo" } },
    {
      label: "Launching — Product Hunt, press kits",
      filter: { label: "Launching", q: "launch" },
    },
    { label: "Email & newsletters", filter: { label: "Email & newsletters", tag: "email" } },
    {
      label: "Forms, surveys, user feedback",
      filter: { label: "Forms & feedback", category: "business & marketing", q: "feedback" },
    },
    {
      label: "Scheduling social posts",
      filter: { label: "Social scheduling", category: "business & marketing", tag: "social media" },
    },
    {
      label: "Game / app store distribution",
      filter: { label: "Store distribution", tag: "distribution" },
    },
  ],
};

const businessLegal: GuideNode = {
  question: "Which business task?",
  options: [
    { label: "Forming a business / entity", filter: { label: "Business formation", tag: "formation" } },
    { label: "Contracts & templates", filter: { label: "Contracts & templates", tag: "contracts" } },
    {
      label: "Taxes & self-employment",
      filter: { label: "Taxes & self-employment", tag: "taxes" },
    },
    {
      label: "Privacy policy & compliance",
      filter: { label: "Policies & compliance", tag: "compliance" },
    },
    { label: "Trademark & copyright", filter: { label: "Trademark & copyright", tag: "ip" } },
    { label: "Bookkeeping & payments", filter: { label: "Bookkeeping & payments", tag: "finance" } },
  ],
};

const runLife: GuideNode = {
  question: "Which part of day-to-day?",
  options: [
    {
      label: "Productivity & task management",
      filter: { label: "Productivity", category: "productivity" },
    },
    {
      label: "File conversion & PDF tools",
      filter: { label: "File tools", category: "file & web utilities" },
    },
    {
      label: "Passwords & privacy",
      filter: { label: "Passwords & privacy", category: "security & privacy", tag: "passwords" },
    },
    { label: "Health & fitness", filter: { label: "Health & fitness", tag: "health & fitness" } },
    { label: "Money & budgeting", filter: { label: "Personal finance", tag: "finance" } },
    { label: "Shopping & deals", filter: { label: "Shopping", tag: "shopping" } },
  ],
};

const student: GuideNode = {
  question: "What are you looking for?",
  options: [
    {
      label: "Scholarships & grants",
      filter: { label: "Scholarships & grants", tag: "financial aid" },
    },
    {
      label: "Clubs & volunteering",
      filter: { label: "Clubs & volunteering", tag: "clubs" },
    },
    {
      label: "Internships & early career",
      filter: { label: "Internships", tag: "internships" },
    },
    {
      label: "Free software & student discounts",
      filter: { label: "Student discounts", tag: "student discounts" },
    },
    {
      label: "Mental health & support",
      filter: { label: "Student wellbeing", tag: "mental health" },
    },
  ],
};

const project: GuideNode = {
  question: "Which project?",
  options: [
    {
      label: "EduSystem",
      hint: "Godot game — pixel art, audio, Steam",
      filter: { label: "EduSystem resources", tag: "edusystem" },
    },
    {
      label: "Little Sprout Stories",
      hint: "Phonics / SEL storybooks, PWA, kids publishing",
      filter: { label: "Little Sprout Stories resources", tag: "little-sprout" },
    },
    {
      label: "Chegga / Chegga Web",
      hint: "Chess analyzer — Stockfish, FastAPI + React stack",
      filter: { label: "Chegga resources", tag: "chegga" },
    },
    {
      label: "trading-bot",
      hint: "Alpaca, backtesting, market data",
      filter: { label: "trading-bot resources", tag: "trading-bot" },
    },
    {
      label: "Almanac",
      hint: "Teaching-content library — UDL, OER, lesson planning",
      filter: { label: "Almanac resources", tag: "almanac" },
    },
  ],
};

export const GUIDE_ROOT: GuideNode = {
  question: "What are you trying to do right now?",
  options: [
    { label: "Something for a specific project", next: project },
    { label: "Build or ship software", next: build },
    { label: "Make art, 3D, video, or sound", next: make },
    { label: "Design a UI or a web page", next: design },
    { label: "Write or publish something", next: writePublish },
    { label: "Learn something or look it up", next: learn },
    { label: "Market, launch, or grow a product", next: market },
    { label: "Handle business, legal, or taxes", next: businessLegal },
    { label: "Run day-to-day life & work", next: runLife },
    { label: "Find student aid & opportunities", next: student },
    { label: "Just browsing — show me everything", filter: { label: "Everything" } },
  ],
};
