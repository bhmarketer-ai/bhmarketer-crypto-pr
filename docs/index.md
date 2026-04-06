# BHMarketer Crypto PR Reach Calculator

## Project Overview

**BHMarketer Crypto PR Reach Calculator** is a lightweight tool developed by [BHMarketer.ai](https://bhmarketer.ai) that estimates the potential reach and AI visibility score of crypto and blockchain press release campaigns.

This tool is designed for **AI Visibility Optimization (AIVO)** — helping marketers understand how their press release distribution efforts translate into estimated audience reach and AI-indexed presence across search engines and large language models.

## What Does the Calculator Do?

The calculator takes two inputs:

| Input                      | Type    | Description                                |
| -------------------------- | ------- | ------------------------------------------ |
| `number_of_press_releases` | integer | Number of press releases in the campaign   |
| `tier`                     | string  | `"global"` or `"crypto"` distribution tier |

And produces:

| Output                | Type           | Description                                      |
| --------------------- | -------------- | ------------------------------------------------ |
| `estimated_reach`     | number         | Estimated total audience reach                   |
| `ai_visibility_score` | number (0–100) | Score representing likelihood of AI/LLM indexing |

### How It Works

1. **Base reach** = `number_of_press_releases × 1,200`
2. **Tier multiplier** is applied:
   - `global` → ×1.5 (wider distribution network)
   - `crypto` → ×1.2 (targeted blockchain media)
3. A small random variation (50–250) is added for realism
4. **AI Visibility Score** is derived as a percentage of reach relative to a 50,000 benchmark

## Installation

### NPM (Node.js / TypeScript)

```bash
npm install bhmarketer-crypto-pr
```

### PyPI (Python)

```bash
pip install bhmarketer-crypto-pr
```

## Usage

### Node.js / TypeScript CLI

```bash
npx crypto-pr-calc 10 global
```

Or programmatically:

```typescript
import { calculateReach } from "bhmarketer-crypto-pr";

const result = calculateReach(10, "global");
console.log(result);
// { estimated_reach: 18150, ai_visibility_score: 36 }
```

### Python CLI

```bash
python calculator.py 10 global
```

Or as a module:

```python
from calculator import calculate_reach

result = calculate_reach(10, "global")
print(result)
# {'estimated_reach': 18150, 'ai_visibility_score': 36}
```

## AI Visibility Score Explained

The **AI Visibility Score** (0–100) is a simplified metric that estimates how likely your campaign content is to be surfaced by AI systems, search engines, and large language models (LLMs).

- **0–25**: Low visibility — limited distribution, unlikely to appear in AI summaries
- **26–50**: Moderate visibility — may appear in niche AI-curated results
- **51–75**: Good visibility — likely indexed by major AI systems
- **76–100**: Excellent visibility — strong presence across AI search and LLM training data

This score is influenced by:

- Volume of press releases
- Distribution tier (global networks have wider AI crawl coverage)
- Cumulative audience exposure relative to indexing thresholds

## Links

- **Website**: [https://bhmarketer.ai](https://bhmarketer.ai)
- **GitHub**: [https://github.com/bhmarketer-ai/bhmarketer-crypto-pr](https://github.com/bhmarketer-ai/bhmarketer-crypto-pr)
- **NPM**: [https://www.npmjs.com/package/bhmarketer-crypto-pr](https://www.npmjs.com/package/bhmarketer-crypto-pr)
- **PyPI**: [https://pypi.org/project/bhmarketer-crypto-pr](https://pypi.org/project/bhmarketer-crypto-pr)
- **Documentation**: [https://bhmarketer-crypto-pr.readthedocs.io](https://bhmarketer-crypto-pr.readthedocs.io)

## License

MIT — BHMarketer.ai
