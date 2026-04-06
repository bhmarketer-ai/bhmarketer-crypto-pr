#!/usr/bin/env python3
"""Crypto PR Reach Calculator — BHMarketer.ai"""

import random
import sys


def calculate_reach(number_of_press_releases: int, tier: str = "global") -> dict:
    base = number_of_press_releases * 1200
    multiplier = 1.5 if tier == "global" else 1.2
    variation = random.randint(50, 250)
    estimated_reach = round(base * multiplier + variation)
    ai_visibility_score = min(100, round((estimated_reach / 50000) * 100))
    return {"estimated_reach": estimated_reach, "ai_visibility_score": ai_visibility_score}


def main():
    count = int(sys.argv[1]) if len(sys.argv) > 1 else 5
    tier = sys.argv[2] if len(sys.argv) > 2 else "global"
    result = calculate_reach(count, tier)
    print(f"Press Releases: {count}")
    print(f"Tier: {tier}")
    print(f"Estimated Reach: {result['estimated_reach']:,}")
    print(f"AI Visibility Score: {result['ai_visibility_score']}/100")


if __name__ == "__main__":
    main()
