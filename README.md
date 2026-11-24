[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/rinoo9/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/rinoo9/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

# 24 November 2026 — One Day in Pictures

A make.fun entry for the [news-image-20261124](https://make.fun/bounty/news-image-20261124) bounty: one image that sums up the world's news of Tuesday 24 November 2026.

## The image

A newspaper front page, drawn by `compose.py` (Pillow) from a generated hero photograph of an oil tanker in the Strait of Hormuz at dusk. Every story is the day's news as reported on Tuesday 24 November 2026 (WIB), verified against live reporting:

1. Four tankers burn in Hormuz — Iran says a fourth tanker hit a naval mine and caught fire on Tuesday, a day after three burned; Tehran vows the strait stays shut until its demands are met (IRGC Navy via Tasnim/IRIB; Reuters; AP).
2. UN warns Libya must not become a battleground — Ukrainian strikes hit Russian warships off Libya; a drone-debris fire burns in Kyiv.
3. 26 dead in a Banten factory fire — eight still missing at the PT Fonusa Agung Mulia (Milkita) candy plant in Cikande; most victims died on the second floor trying to reach the emergency exit (AP; Xinhua).
4. COP31 talks falter in Türkiye — climate negotiations stall over fossil fuels as Saudi Arabia's role draws blame.
5. SK Hynix jumps as Huang returns to Nvidia — shares rise 20% after Jensen Huang is reinstated as chief; US lawmakers push China chip rules.
6. Trump's 28-point plan for Ukraine peace — European leaders gather in Stockholm for the Crimea Platform summit.

## Late edition (revision, 25 November 2026 ~03:00 WIB)

The afternoon edition was updated overnight with the evening's verified developments: a fourth tanker struck a mine in Hormuz early Tuesday (the lead was three), and the Banten factory death toll rose from 24 to 26 with eight still missing (down from ~30). The lead summary was tightened to two lines and the spacing between stories slightly reduced so the page still ends cleanly above the ticker (stories end y = 938 of 952). `main.ts` gained a PNG dimension check: it reads the 1024x1024 size from the image header and refuses anything else.

## The program

`main.ts` (Node 22, standard library only) copies the repo's `entry.png` to `/output/entry.png` (`MAKEFUN_OUTPUT_DIR` stands in for `/output` locally). The image is a 1024x1024 PNG under 1 MiB. Two runs write byte-identical output, because the program copies a fixed file. The program also creates the output directory if needed, checks the file is really a PNG, verifies it is exactly 1024x1024 from the PNG header, and refuses images over the 1 MiB limit.
