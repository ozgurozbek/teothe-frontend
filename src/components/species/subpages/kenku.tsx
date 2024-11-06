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
export default function KenkuContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Kenku"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/kenku.png"}
              alt={"A cloaked raven-like humanoid with a beak."}
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
                title: "The Kenku",
                text: [
                  "Haunted by an ancient crime that robbed them of their wings, the kenku wander the world as vagabonds and burglars who live at the edge of human society. Feathered folk who resemble ravens, kenku are blessed with keen observation and supernaturally accurate memories. None of them can remember the origin of the first kenku, however, and they often joke that there are as many kenku origin stories as there are kenku. Some of them paint their genesis as a curse, being a flightless bird people doomed to mimic other people's creations. Other kenku recite cryptic but beautiful poems about their advent being a blessed event in which they were sent into the multiverse to observe and catalog its many wonders. Kenku are most often found in the Shadowfell and the Material Plane, and they tend to have the coloration typical of ravens.                  ",
                  "Above all else, kenku wish to regain their ability to fly. Every kenku is born with a desire to take to the air, and those who learn spellcasting do so in hope of mastering spells that will allow them to fly. Rumors of magic items such as flying carpets, brooms capable of flight, and similar objects provoke a great desire for the kenku to acquire the items for themselves.                  ",
                  "Despite their lack of wings, kenku love dwelling in towers and other tall structures. They seek out ruins that reach to the sky, though they lack the motivation and creativity to make repairs or fortify such places. Even so, their light weight and size allow them to dwell in rickety structures that would collapse beneath a human or an orc.                  ",
                  "Although unable to speak in their own voices, kenku can perfectly mimic any sound they hear, from a halfling's voice to the noise of rocks clattering down a hillside. However, kenku cannot create new sounds and can communicate only by using sounds they have heard. Most kenku use a combination of overheard phrases and sound effects to convey their ideas and thoughts.                  ",
                  "As a result of their lack of creativity, kenku function comfortably as minions of a powerful master. Kenku gather in groups called flocks. A flock is led by the oldest and most experienced kenku with the widest store of knowledge to draw on, often called Master. Flock leaders enforce discipline and minimize conflicts, but they fail at effective planning or crafting longterm schemes.                  ",
                  "By the same token, kenku have no ability to invent new ideas or create new things. Kenku can copy existing items with exceptional skill, allowing them to become excellent artisans and scribes. They can copy books, make replicas of objects, and otherwise thrive in situations where they can produce large numbers of identical items. Few kenku find this work satisfying, since their quest for the freedom of flight makes them ill-suited to settle into a routine.                  ",
                  "Although kenku can't create new things, they have a talent for learning and memorizing details. Thus, ambitious kenku can excel as superb spies and scouts. A kenku who learns of clever schemes and plans devised by other creatures can put them to use. The kenku lack the talent to improvise or alter a plan, but a wise Master sets multiple plans in motion at once, confident that underlings can follow orders to the letter.                  ",
                  "For this reason, many kenku make an easy living serving as messengers, spies, and lookouts for thieves' guilds, bandits, and other criminal cartels. A network of kenku can relay a bird call or similar noise across the city, alerting their allies to the approach of a guard patrol or signaling a prime opportunity for a robbery. Some thieves' guilds use kenku as lookouts and messengers. The kenku dwell in the tallest buildings and towers the guild controls, allowing them to lurk in the highest levels and to keep watch on the city below.                  ",
                  "Since kenku can precisely reproduce any sound, the messages they carry rarely suffer degradation or shifts in meaning. Human messengers might switch words or phrases and garble a message inadvertently, but the kenku produce perfect copies of whatever they hear.                  ",
                  "Kenku adventurers are usually the survivors of a flock that has sustained heavy losses, or a rare kenku who has grown weary of a life of crime. These kenku are more ambitious and daring than their fellows. Others strike out on their own in search of the secrets of flight, to master magic, or to uncover the secret of their curse and find a method to break it. These Kenku adventurers, despite their relative independence, still have a tendency to seek out a companion to emulate and follow. A kenku loves to mimic the voice and words of its chosen companion.                  ",
                  "Given that kenku can duplicate any sound, their names are drawn from a staggering variety of noises and phrases. Kenku names tend to break down into three categories that make no distinction between male and female names.                  ",
                  "Kenku thugs, warriors, and toughs adopt noises made by weapons, such as the clang of a mace against armor or the sound made by a breaking bone. Non-kenku refer to the kenku by describing this noise. Examples of this type of name include Smasher, Clanger, Slicer, and Basher.                  ",
                  "Kenku thieves, con artists, and burglars adopt animal noises, typically those common in urban settings. In this manner, kenku can call out to each other while those who overhear them mistake them for common animals. Non-kenku use names that refer to the sound made or the animal a kenku mimics, such as Rat Scratch, Whistler, Mouser, and Growler.                  ",
                  "Some kenku turn their back on crime to pursue legitimate trades. These kenku adopt noises made as part of their craft. A sailor duplicates the sound of a fluttering sail, while a smith mimics the clanging of a hammer on metal. Non-kenku describe these folk by their trade sounds, such as Sail Snap, Hammerer, and Cutter.                  ",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Kenku in Teothe",
                level: 2,
                text: [
                  "Kenku form lifelong bonds with their chosen partners, cherishing the time they share together. The arrival of their offspring holds great importance, but it is in the presence of their special one that Kenku find true joy. Among the most delightful sights for a Kenku is the playful act of intertwining their legs and rolling about in mirth. To a Kenku, this intimate connection surpasses the exhilaration of flight, filling their hearts with a bliss unmatched by any other experience.",
                  "They reproduce as large birds did, with the females laying clutches of two to four eggs that hatched after a period of two months. After hatching from their eggs, kenku remained in their home-nests with their families. Once they reached adulthood at age nine, they left their nests forever. At this point, they began to learn their disguise, thieving, and battle skills. Unwilling to travel alone, most soon banded together with other young adult kenku of similar habits for mutual protection and profit, forming new flocks. A few made their way on their own or formed partnerships with other creatures who needed their services. Kenku had had an omnivorous diet and could be active day and night.",
                  "Kenku that are in Shadowfell are usually hired as spies, assassins, or enforcers, carrying out the will of dark beings or sinister organizations that operate within the plane. Their natural affinity for thievery and mimicry make them adept infiltrators and information gatherers within the Shadowfell. They are also drawn to the Shadowfell in their pursuit of arcane secrets and forbidden lore. Kenku delve into ancient libraries in order to research dark magic.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
