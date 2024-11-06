"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";
import { Card, Button, Row, Col, Image } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";

/**
 * Generates Species content with image, text and homebrew.
 * @param SpeciesPic
 * @param DescriptionText
 * @returns Row(antd)
 */
export default function GoliathContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Goliath"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/goliath.png"}
              alt={"Physically well developed descendants of giant-folk."}
              rootClassName="w-full"
            />
            <Button href="/species" className="w-full">
              <span>
                See All Species <DoubleRightOutlined />
              </span>
            </Button>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={18}
            xl={18}
            xxl={18}
            className="p-4 h-[60vh] overflow-y-scroll no-scrollbar"
          >
            <SimpleContent
              contentProps={{
                title: "The Goliath",
                text: [
                  "It's unclear how old the goliath species was or where they originally came from, but it was commonly believed that they were somehow related to stone giants or earth genasi.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Goliath's Appearance",
                level: 2,
                text: [
                  "Goliaths were massive. They averaged between 2 to 2.5 meters, making them even taller than dragonborn and half-orcs. Goliath eyes were often a bright blue or green and sometimes glowed a little with an unusual supraorbital ridges. Their skin is often gray or brown and though, resembling stone, with black and vertically symmetrical patches covering their whole body. They believe that these markings somehow explain their fate or destiny. For this reason Goliaths never tattoo themselves.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Characteristics of Goliath",
                level: 2,
                text: [
                  "Goliaths' most notable characteristic was their competitiveness. They kept track of their accomplishments and saw everything as a challenge. Those not familiar with goliath psychology would often get annoyed when goliaths constantly reminded them how many times a certain thing had happened, thinking them arrogant or self-centered. To them, score keeping is a natural part of life. Beating their own records was the most satisfying victory for a goliath. They were also competitive with their companions and other goliaths, but were never arrogant or cocky. Goliaths had little time for cheaters, gloaters, and sore losers.",
                  "It was rare for goliath adventurers to retire or live to an old age, as they often died trying to surpass their previous achievements. Permanently injured or aging goliaths often sought death in battle rather than succumb to an existence where they could not excel. This tradition of honor and trust meant that goliaths tended to be good overall. This combined with their competitive nature often led goliaths to valorous heroics. Goliaths were also notably daring and fearless. Feats of physical strength and agility, like jumping chasms or climbing cliffs, held no fear for goliaths.",
                  "Complacency was a trait that goliaths loathed and as a result they never took anything for granted. Even goliaths with magical advantages would continue to train their physical prowess in case they ever lost their power. Goliath tribes only went to war as a final option, preferring to move away from unsafe lands. They did not do this out of fear or cowardice, instead they were aware that loss of life in their tribe was undesirable and had long-term consequences.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Goliath at War",
                level: 2,
                text: [
                  "Goliaths often employed guerrilla tactics in battle, owing to their upbringing as hunters. Fair-play was also integral to goliath fights. As long as they were fairly sure they could still win, goliaths would even handicap themselves to give their opponents a fair chance. For example, if a goliath disarmed their opponent, they would throw aside their own weapon and continue the fight with their fists.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Goliath Tribes",
                level: 2,
                text: [
                  "Goliaths lived in small tribes that numbered between forty and sixty goliaths. This was usually made up of three to five extended families. Most goliaths lived in the same tribe their entire life. On rare occasions, a tribe that got too large would split into smaller tribes or smaller tribes would merge together. Their tribes have roles such as: Chieftain, Captain, Skywatcher, Dawncaller, Adjudicator, Tent-mother, Lamentor.",
                  "Tribe chieftains only maintained power as long as they could prove they were suitable for that role. As a result, leadership constantly changed. New leaders were chosen by contests. Any goliath could challenge the chieftain in an attempt to replace them. If this happened, the chieftain and the challenger competed in three tasks. The challenger had to win all three to become the new chieftain. The old chieftain would then leave the tribe permanently. Their camps are usually located on the mountains.",
                  "Although goliaths had no written laws or codes, there were a number of unspoken rules that were commonly followed by most goliath tribes, discouraging theft and cheating. The greatest rule was obedience to the chieftain and captains. Those were usually punished by beating, shunning or even exiling.",
                  "Goliaths had little empathy or pity for adults who couldn't take care of themselves but they would treat and take care of the injured and sick. Permanently injured goliaths were still expected to contribute in every way that they could. Arts and crafting in goliath culture were limited by the resources they had at hand in the mountains. As a result, goliaths were skilled in crafts like flintknapping, tanning, stitching, creating simple pottery, bone-carving, and painting. Art was one of the few things that goliaths understood to be non-competitive, they fully appreciated that art couldn't have a winner. Considering their competitive nature, it's not surprising that sports were often played by goliaths to improve their physical skills and pass time. Simple games included climbing, sprinting, and wrestling.",
                  "They spoke Gol-Kaa and it was around for over a toushand years. Gol-Kaa was spoken in the active voice almost exclusively. It was grammatically torturous to use passive voice. Over time, many Goliaths learned to speak Giant and Common.",
                  "Most goliath tribes revered nature and the primal forces. Goliath shamans were known as 'skywatchers' or 'sunspeakers'. Despite this some goliaths did worship or honor gods.",
                  "Goliaths were friendly to anyone who didn't threaten their tribe, but wouldn't wait around for travelers who couldn't keep up with them. Goliaths were particularly fond of dwarves and had great respect for dwarven blacksmiths. Some goliaths would even venture into mountain tunnels to seek out dwarves. Human rangers or druids were known to sometimes work together with goliath tribes in hunts. Both the humans and goliaths could mutually benefit from these temporary alliances. Goliaths often referred to earth genasi as their 'cousins'. The two species maintained a friendly rivalry. Elves were somewhat intimidating to goliaths, owing to their long lifespans. Goliaths often struggled with the idea that creatures existed that were old enough to have known their great-grandparents and ancestors. Although they had no particular hatred of goblins, orcs, or half-orcs, goliaths were wary of them. This was mostly due to the stories that they heard from passing travelers about the trouble they caused. Attitudes towards giants varied.",
                  "Goliaths who ventured out of their tribes would often find issue with the class divisions found in other societies. Goliaths struggled with the idea that an incompetent king could rule over hard-working peasants. These opinions were often shared and goliaths would openly mock incapable leaders or rich nobleman who relied on social structures to maintain their power.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Goliath in Teothe",
                level: 2,
                text: [
                  "Goliaths of Teothe often lived in the colder regions, where lands mixed of Dwarves and Humans provided grounds for settlements. They were lead in by Pyraq, a goliath shaman. Pyraq had a shrine in Chapion that is lost to the plague in the northernmost lands. It was a stone niche enshrining an idol of Pyraq. Pyraq also embarked on a quest to help Goliaths escape their roots of tribal nature, which they failed. Many Goliaths still live in the 'dead-zone' area up north, and they long for their beloved shaman's shrine as Pyraq was known as Teothe's Sunspeaker.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
