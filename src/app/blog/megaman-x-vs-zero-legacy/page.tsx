
import fs from 'fs';
import path from 'path';
import {Box, Stack } from '@mui/material';
import { Fragment } from 'react';
//TODO: Find a better way to store article content!
export default function Article() {
  const basePath = process.env.BASE_PATH
  return (
    <Fragment>
      {/*
      <Markdown>{header}</Markdown>
      <Box
      component="img"
      sx={{
        width:"100%",
        height:"200",
        flexGrow: 1,
      }}
      alt="Article THumbnail"
      src={basePath + "/images/MegamanXVsZero.png"}
    />
      <Markdown>{firstSection}</Markdown>
      <Box
      component="img"
      sx={{
        width:"50%",
        height:"100",
        flexGrow: 1,
        paddingX: "25%"
      }}
      alt="Central Highway"
      src={basePath + "/assets/blogs/megaman-x-vs-zero/centralhighway.jpg"}
    />
      <Markdown>{secondSection}</Markdown>

      <Box
      component="img"
      sx={{
        width:"50%",
        height:"100",
        flexGrow: 1,
        paddingX: "25%"
      }}
      alt="Megaman Zero Official Art"
      src={basePath + "/assets/blogs/megaman-x-vs-zero/megamanzero_wallpaper.jpg"}
      />


      <Markdown>{thirdSection}</Markdown>

      <Box
      component="img"
      sx={{
        width:"50%",
        height:"100",
        flexGrow: 1,
        paddingX: "25%"
      }}
      alt="Anubis Necromancess"
      src={basePath + "/assets/blogs/megaman-x-vs-zero/AnubisNecromancess.png"}
    />

      <Markdown>{fourthSection}</Markdown>

      

      <Markdown>{fifthSection}</Markdown>
      <Box
      component="img"
      sx={{
        width:"50%",
        height:"100",
        flexGrow: 1,
        paddingX: "25%"
      }}
      alt="Bad Level Design in MMZ"
      src={basePath + "/assets/blogs/megaman-x-vs-zero/badleveldesign.png"}
    />
      <Markdown>{sixthSection}</Markdown>
      <Box
      component="img"
      sx={{
        width:"50%",
        height:"100",
        flexGrow: 1,
        paddingX: "25%"
      }}
      alt="Good Level Design in MMX"
      src={basePath + "/assets/blogs/megaman-x-vs-zero/hotariongoodleveldesign.png"}
    />
    <Markdown>{seventhSection}</Markdown>
      <Box
      component="img"
      sx={{
        width:"50%",
        height:"100",
        flexGrow: 1,
        paddingX: "25%"
      }}
      alt="Bad Level Design in MMZ"
      src={basePath + "/assets/blogs/megaman-x-vs-zero/serges_bossfight.png"}
      />
    <Markdown>{eighthSection}</Markdown>
    */}
    </Fragment>
  )
}

let header = 
`
##### June 10th, 2024 | Written by Uchechukwu Uche-Ike

# From Megaman X to Zero: Leveling Up Yet Falling Short
`

let firstSection = 
`
Spiritual successors in media have an awkward void to fill. Not only is a spiritual successor expected to revolutionize the established formula, but it also lives under constant comparison to its beloved predecessor. This idea is no different in gaming. In this retrospective, I want to explore the Megaman X series, one of my favorite game franchises of all time, and its spiritual successor in Megaman Zero, and see how they measure against one another.

Set a century after the original Megaman series, Megaman X throws the player amid the Maverick Wars: a conflict between Mavericks – robots that have gone rogue against humans – and Maverick Hunters – a police force formed to combat the Maverick uprising. 
`

let secondSection =
`
Formula-wise, the Megaman X games borrow many elements synonymous with the classic Megaman series. The run-and-gun gameplay is all there, you still fight 8 bosses and acquire their special weapons, but what set the Megaman X series apart from its classic series counterpart were the mechanics introduced in the games. The introduction of the "dash" mechanic added so much depth to the movement options of the game, not only giving the player faster ground movement, but also a means of evading attacks, adjusting positioning, ducking under fire, and platforming. This mechanic transformed Megaman from a slow run-and-gun game to a dynamic platformer with an engaging blend of combat and precision platforming.

### The New Kid On The Block
`

let thirdSection =
`
While Megaman X titles left a lasting impression on me, I could only play the same handful of games so many times. I wanted more. Enter Megaman Zero (MMZ): the successor to the X series set several hundred years in the future. The Maverick wars are no more. In the interim, X has established an oppressive regime in Neo Arcadia that oppresses Reploids in favor of humans, and it's up to Zero and the Resistance to topple his dictatorship.

Megaman Zero felt just like Megaman X, but there was so much more. All the core mechanics of the X series are present, but we now could sink our teeth into this story rife with mystery. What happened to X to turn him into a dictator? Is the character we're playing as really Zero? With each series entry, we piece together more and more of what happened in the last several hundred years.
`

let fourthSection = 
`
Safeguarding X's regime is the Mutos Reploids – this game's version of robot masters. The Mutos reploids' are based upon mythological creatures, and series artist Toru Nakayama brilliantly executes their illustration. The Mutos Reploids and the overworld exude such a foreboding and ominous presence that the X series could only dream of having. I remember genuinely getting intimidated when fighting Anubis Necromancess at the desert level for the first time.
`

let fifthSection = 
`
Megaman Zero's triumphs go beyond story and aesthetics, as the installment revolutionizes the Megaman formula by abandoning the special weapons acquired from defeating each boss in favor of an arsenal of weapons that Zero slowly accumulates throughout the game's run. I had never been a fan of the special weapons in the X series - seldom using them except for grabbing a weapon upgrade or sub-tank. Unlike the special weapons of the X series, Zero's weapons are versatile, and I found myself switching between Zero's arsenal to adapt to different situations. For example, one may opt for the Z-Saber for raw damage output, favor the Triple Rod to attack enemies from multiple vantage points or use the Shield Boomerang to protect against a barrage of enemy fire. At its pinnacle, combat in Megaman Zero reaches heights well above the Megaman X series.

### Dropping The Ball

To compensate for the enhanced combat capabilities, the Zero series is noticeably more challenging than the X series. Bosses have more health and dangerous movement patterns and attacks, which players should be able to make short work of with intelligent positioning and attacks.

Where my grievances lie is in Megaman Zero's level design. MMZ takes a noticeable nose-dive in the quality of level design. It is a stark contrast from the X series' thoughtful level design that teaches the player about mechanics in a safe environment before throwing the player into the deep end. Megaman Zero often abandons these principles, choosing instead to frustrate the player with insta-kill spikes and other beginner traps. Nowhere is this issue more blatant than in the "Disposal Center" level, where the player has to anticipate these Carryarms that appear right outside the player's view. Or the "Protect Factory" stage, where the player jumps between these moving platforms and often has to make leaps of faith. This design fault is further exacerbated by the game's tiny POV, making anticipating incoming threats all the more difficult. 
`

let sixthSection =
`
These oversights mean that for every one of MMZ's euphoric hack and slack platforming delights, there's a juncture where the player has to crawl through the level to avoid death, slowing the game's pace to a crawl. 

Some may argue this is just a part of the game's difficulty, but the X games seldom relied on these schemes to inflate difficulty. Take the Spark Mandrill's level in Megaman X1. This stage features many seemingly problematic elements in Megaman Zero but tweaks them to create an engaging platforming segment. The section features these chasms the player has to traverse through and an enemy, Hotarion, that zooms across the screen and can easily hit the player into the void. So how does Megaman X1 succeed where Megaman Zero fails?
`

let seventhSection=
`
Megaman X1 introduces the player to the Hotarion in a safe environment, where getting hit by a Hotarion does not result in death. This safety net is gone for subsequent jumps, but at that point, the player is more than familiar with the task ahead of them. The section becomes a puzzle of positing yourself and timing shots correctly to protect yourself from the Hotarions. The factor of level design structure makes the difference between an infuriating level design and an engaging one.

Beyond the changes in level design, one difference between the two series I was disappointed to see was the subtle de-emphasis on precision platforming. As I stated before, the quality I loved most about the X series was its unique blend of platforming, combat, and movements; no boss fight exemplifies this more than the Serges boss in Megaman X2. 
`

let eighthSection =
`
The player has to defeat Serges while managing their height between several platforms, switching between platforms to dodge attacks and firing off shots to keep the pressure on. It's daunting, it's frustrating, but it's such a satisfying puzzle to unravel.

In contrast, boss encounters in Megaman Zero are fought on a more 1-dimensional plane where the player is closer to the boss on average. This restructuring has merit: it forces the player to become more intimate with the boss' attack patterns. Rather than retreating to a platform or a wall, the player is forced to dash under or jump over an enemy, which is an interesting puzzle in its own right. I wouldn't put one combat style over the other, but I wish Megaman Zero leaned more toward the X series in this respect.

All in all, Megaman Zero is a worthy successor to the X series. Megaman Zero retains the core mechanics of the Megaman X series while introducing a rich narrative and a much-appreciated overhaul to combat. Though it fails to emulate the design genius of its predecessor, the Megaman Zero series solidifies a unique identity among the Megaman spinoff games that allows it to stand on its own.
`