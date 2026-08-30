---
title: "Your Electric Bill Went Up. In Most of the Country, AI Data Centers Aren't Why."
original_headline: "AI Data Centers Are Driving Up Electric Bills. Who Pays?"
original_outlet: "Forbes"
date: 2026-08-27
slug: "ai-datacenter-electricity-bills"
image: "/images/ai-datacenter-electricity-bills.svg"
image_alt: "Illustration of a data center, a transmission tower, and a house receiving an electric bill"
sources:
  - "https://newsletter.semianalysis.com/p/are-ai-datacenters-increasing-electric"
  - "https://fortune.com/2026/07/26/data-centers-electricity-costs-cheaper-7billion-buildout-ai-demand/"
  - "https://www.cnbc.com/2026/03/13/ai-data-centers-electricity-prices-backlash-ratepayer-protection.html"
---

The story usually opens with an anecdote like the Virginia homeowner whose bill jumped from about
$100 to $281 in a single month, followed by a line connecting that spike directly to AI data
centers and a warning that the same thing is coming for the rest of the country. The bill increase
is real. The nationwide framing skips over exactly how localized and mechanism-specific the actual
cause is.

## Where the spike is real, and why

The clearest documented case is PJM, the grid operator covering roughly 13 mid-Atlantic and
Midwest states plus Washington, D.C. PJM's own Independent Market Monitor ran the counterfactual:
strip every data center — planned and operational — out of its capacity forecasts, and capacity
payments would have been about 64% lower. Strip out only the *future* data centers not yet built,
keeping the ones already running, and payments would still be roughly 53% lower. That translates
to an estimated $25–30 more per household per month than two years ago. That part of the story
checks out, and it's a real burden on PJM ratepayers.

## The part the headline skips: it's a market-design problem, not just a load problem

Here's the detail that changes the framing: PJM's forward wholesale energy prices — the actual
cost of generating and delivering the electricity — rose only 12–20% over the same period. The
capacity auction, a separate and more opaque mechanism that prices in projected *future* demand,
spiked more than 9-fold. That gap matters. If data center electricity consumption alone were
driving the cost, the energy price and the capacity price should have moved together. They didn't,
which points to the auction mechanism itself — built on demand forecasts that PJM has since had to
revise downward twice — amplifying the sticker shock well beyond what the underlying physical
demand justifies.

The clean comparison is ERCOT, the grid operator for most of Texas. ERCOT saw data center growth
of a similar scale over the same period. Its forward prices rose 11–17% — in the range of PJM's
*energy* price increase, with none of PJM's capacity-market blowup. Same load growth, different
market design, a very different outcome for ratepayers. That's hard to explain if "AI data centers"
alone is the causal story; it's easy to explain if market structure is doing most of the work.

## Data centers have also been quietly lowering some bills

The Forbes framing of "data centers vs. ratepayers" also leaves out the other side of the ledger.
In several regions, the capital that data center operators are putting into new transmission
lines and generation capacity is being cost-shared in ways that have, so far, modestly *lowered*
near-term bills for other customers who benefit from grid upgrades they didn't have to fully pay
for themselves. That dynamic isn't guaranteed to last — if AI investment cools before those
buildouts are paid off, the fixed costs could shift back onto a smaller base of ratepayers — but
it complicates a headline that treats the relationship as one-directional.

## The honest version of this story

More than 30 states have introduced over 300 data-center-related bills in 2026, New York enacted a
moratorium on large permits in July, and New Jersey passed ratepayer-protection legislation in
June — real, serious policy responses to a real problem. But the problem those laws are responding
to is concentrated in specific markets with specific auction designs, not a uniform, nationwide
"AI is why your bill went up" phenomenon. A PJM ratepayer and an ERCOT ratepayer experienced the
same load growth and very different outcomes — which means the fix is at least as much about how
grid operators price capacity as it is about how many GPUs are plugged in.
