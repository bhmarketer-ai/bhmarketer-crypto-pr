#!/usr/bin/env node

interface PRResult {
  estimated_reach: number;
  ai_visibility_score: number;
}

function calculateReach(numberOfPressReleases: number, tier: "global" | "crypto"): PRResult {
  const base = numberOfPressReleases * 1200;
  const multiplier = tier === "global" ? 1.5 : 1.2;
  const variation = Math.floor(Math.random() * 200) + 50;
  const estimatedReach = Math.round(base * multiplier + variation);
  const aiVisibilityScore = Math.min(100, Math.round((estimatedReach / 50000) * 100));
  return { estimated_reach: estimatedReach, ai_visibility_score: aiVisibilityScore };
}

// CLI entry
const args = process.argv.slice(2);
const count = parseInt(args[0] || "5", 10);
const tier = (args[1] || "global") as "global" | "crypto";

const result = calculateReach(count, tier);
console.log(`Press Releases: ${count}`);
console.log(`Tier: ${tier}`);
console.log(`Estimated Reach: ${result.estimated_reach.toLocaleString()}`);
console.log(`AI Visibility Score: ${result.ai_visibility_score}/100`);

export { calculateReach };
