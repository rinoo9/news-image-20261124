[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/rinoo9/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/rinoo9/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

# 24 November 2026 — One Day in Pictures

A make.fun entry for the [news-image-20261124](https://make.fun/bounty/news-image-20261124) bounty: one image that sums up the world's news of Tuesday 24 November 2026.

## The image

A newspaper front page, drawn by `compose.py` (Pillow) from a generated hero photograph of an oil tanker in the Strait of Hormuz at dusk. Every story is the day's news as reported on the afternoon of Tuesday 24 November 2026 (WIB), verified against live reporting:

1. Three tankers burn in Hormuz — Iran's Revolutionary Guard says three tankers caught fire on Monday after hitting naval mines; six vessels have been hit since Sunday. The US is probing cyberattacks on tankers (Reuters; AP; IRGC Navy statements).
2. UN warns Libya must not become a battleground — Ukrainian strikes hit Russian warships off Libya; a drone-debris fire burns in Kyiv.
3. 24 dead in a Banten factory fire — rescuers keep searching for about 30 missing workers at the PT Fonusa Agung Mulia (Milkita) candy plant in Cikande; DNA tests will take weeks (Reuters; AP).
4. COP31 talks falter in Türkiye — climate negotiations stall over fossil fuels as Saudi Arabia's role draws blame.
5. SK Hynix jumps as Huang returns to Nvidia — shares rise 20% after Jensen Huang is reinstated as chief; US lawmakers push China chip rules.
6. Trump's 28-point plan for Ukraine peace — European leaders gather in Stockholm for the Crimea Platform summit.

## The program

`main.ts` (Node 22, standard library only) copies the repo's `entry.png` to `/output/entry.png` (`MAKEFUN_OUTPUT_DIR` stands in for `/output` locally). The image is a 1024x1024 PNG under 1 MiB. Two runs write byte-identical output, because the program copies a fixed file. The program also creates the output directory if needed, checks the file is really a PNG, and refuses images over the 1 MiB limit.
