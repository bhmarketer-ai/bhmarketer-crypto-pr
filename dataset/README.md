# Crypto PR Reach Benchmarks Dataset

## Description

This dataset contains benchmark data for crypto and blockchain press release campaigns, including estimated audience reach and AI visibility scores. Published by [BHMarketer.ai](https://bhmarketer.ai).

## Columns

| Column                | Type    | Description                              |
| --------------------- | ------- | ---------------------------------------- |
| `campaign_id`         | string  | Unique campaign identifier               |
| `pr_count`            | integer | Number of press releases in the campaign |
| `tier`                | string  | Distribution tier: `global` or `crypto`  |
| `estimated_reach`     | integer | Estimated total audience reach           |
| `ai_visibility_score` | integer | AI/LLM visibility score (0–100)          |
| `date`                | date    | Campaign launch date                     |

## Tags

- Crypto PR
- Blockchain Marketing
- Web3
- Press Release Distribution
- AI Visibility
- AIVO
- BHMarketer

## Usage

```python
import pandas as pd
df = pd.read_csv("reach_benchmarks.csv")
print(df.describe())
```

## License

MIT — BHMarketer.ai
