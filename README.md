[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/rinoo9/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/rinoo9/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

# 24 November 2026 — One Day in Pictures

A make.fun entry for the [news-image-20261124](https://make.fun/bounty/news-image-20261124) bounty: one image that sums up the world's news of Tuesday 24 November 2026.

## The image

A newspaper front page, drawn by `compose.py` (Pillow) from a generated hero photograph of an oil tanker in the Strait of Hormuz at dusk. Every story is the day's news as reported on the morning of Tuesday 24 November 2026 (WIB), verified against live reporting:

1. Mediators float a two-day Hormuz deal — Qatar-led mediators propose the US lifts its naval blockade on day one and the strait reopens on day two; neither side has agreed yet, and Trump says he will decide soon on new strikes (Axios via CGN Today; Particle News).
2. Ukraine sinks a Russian warship in Libya — seven sea drones sank the corvette Merkury in Benghazi and hit the cargo ship MV Angara; a Ka-27 helicopter was destroyed (CNN; Reuters; AP).
3. 24 dead in a Banten factory fire — rescuers keep searching for about 30 missing workers at the PT Fonusa Agung Mulia (Milkita) candy plant in Cikande (Reuters).
4. India hands Nepal a Rs 15,000 crore package — Modi and Balendra Shah flag off the Saryu-Kamala Express between Ayodhya and Janakpur and sign eight pacts (PTI).
5. $6 trillion wiped off US stocks — the Nasdaq is down 20% from its peak; Trump blames Democrats "100%" while his Treasury chief cites a mix of factors (Truth Social via Breitbart; BigGo Finance).
6. New Zealand hang on for a draw — Mitchell and Phillips bat out 120 overs to deny India after its 720/9 declared in Wellington (ESPNcricinfo; AP).

## The program

`main.ts` (Node 22, standard library only) copies the repo's `entry.png` to `/output/entry.png` (`MAKEFUN_OUTPUT_DIR` stands in for `/output` locally). The image is a 1024x1024 PNG under 1 MiB. Two runs write byte-identical output, because the program copies a fixed file.
