"""The fixed category list. Every entry's `category` is one of these.

Kept deliberately short (20) so every category holds enough entries to be worth
a click, and so a capture batch can't quietly add a 35th. The batch endpoint
reports anything outside this list instead of rejecting it — a new category is
a decision, so it should be noticed, then added here on purpose.

Tags are free-form, but the batch endpoint reports brand-new tags the same way.
"""

CATEGORIES: list[str] = [
    "ai engineering",
    "ai tools",
    "audio & video",
    "business & marketing",
    "college & career",
    "design & media",
    "developer tools",
    "education",
    "entertainment & social",
    "everyday life",
    "file & web utilities",
    "game dev",
    "hosting & ops",
    "money & markets",
    "productivity",
    "reading & news",
    "reference & data",
    "security & privacy",
    "vfx & 3d",
    "writing & publishing",
]

# The 2026-09-19 consolidation: 34 categories -> 20. Kept so old links such as
# ?category=cooking and old capture notes still resolve to the right place.
CATEGORY_MOVES: dict[str, str] = {
    "web utilities": "file & web utilities",
    "file tools": "file & web utilities",
    "data & research": "reference & data",
    "reference & calculators": "reference & data",
    "books & reading": "reading & news",
    "news & reading": "reading & news",
    "writing": "writing & publishing",
    "publishing": "writing & publishing",
    "college & students": "college & career",
    "financial aid": "college & career",
    "career": "college & career",
    "business & legal": "business & marketing",
    "marketing & growth": "business & marketing",
    "finance": "money & markets",
    "trading & markets": "money & markets",
    "communication": "productivity",
    "entertainment": "entertainment & social",
    "social media": "entertainment & social",
    "health & fitness": "everyday life",
    "cooking": "everyday life",
    "diy & repair": "everyday life",
    "shopping": "everyday life",
    "maps & travel": "everyday life",
}
