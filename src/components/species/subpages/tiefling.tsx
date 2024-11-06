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
export default function TieflingContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Tiefling"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/tiefling.png"}
              alt={"Impish spawn clad in red."}
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
                title: "The Tiefling",
                text: [
                  "Tieflings were human-based planetouched, native outsiders that were infused with the touch of the fiendish planes, most often through descent from fiends, demons, Yugoloths, devils, evil deities, and others who had bred with humans. Although their evil ancestors could be many generations removed, the taint lingered. The celestial counterparts of tieflings were called aasimar.",
                  "Tieflings tended to have an unsettling air about them, and most people were uncomfortable around them, whether they were aware of the tiefling's unsavory ancestry or not. While some looked like normal humans, most retained physical characteristics derived from their ancestor, with the most common such features being horns, prehensile tails, and pointed teeth. Some tieflings also had eyes that were solid orbs of black, red, white, silver, or gold, while others had eyes more similar to those of humans. Tieflings who had strikingly inhuman features were often killed at birth by their horrified parents or others.",
                  "Most tieflings were aware from an early age that they were different from others around them, and were given to strange urges and desires because of their unusual ancestry. Few tieflings were raised with the love a normal human child might expect to receive and this shaped most of the species into bitter individuals who expected eventual rejection from all whom they meet. While some would follow this path towards evil, others rejected it wholeheartedly and sought to make a good impact on the world around them, sometimes becoming the most heroic characters of all. Few could maintain this discipline however, and most tieflings fell somewhere between both extremes. Because tieflings were generally distrusted throughout the world, owing to their fiendish heritage, many were themselves distrusting and self-reliant.",
                  "Tieflings were talented warriors. In melee combat they were agile and quick on their feet. They preferred to use weapons that combined sharpness with speed. Those tieflings who sought power through arcane magic were most often warlocks.",
                  "Like other species that were the result of the breeding of two or more others, tieflings had no true culture they could call their own. Regardless of their motivations, tieflings often distrusted one another, sometimes even casting the same preconceptions on one another that others did on them. In spite of this, many secretly desired to have another tiefling nearby, if only to experience some small kind of kinship.",
                  "Animosity that tieflings had for others was taken to its extreme in the case of aasimar, whom tieflings instinctively feared or loathed.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Tiefling in Teothe",
                level: 2,
                text: [
                  "Some tieflings were not descended from mere fiends at all, but from powerful gods. These tieflings often had their own physical characteristics that set them apart. Many centuries ago, Tieflings sired by Uke, for instance, often had antlers instead of horns and pale, white hair.",
                  "Tiefling arcane spellcasters of all kinds, felt a draw towards the fiendish energies of the planes and tiefling wizards commonly specialized as diviners for the purposes of seeking knowledge of the Lower Planes or as conjurers so that they might summon the dark spirits whom they called kin. Those tieflings who were religious were a varied lot, since no god held more sway over tieflings than any other, though Pwazo, as the lord over the fiendish species of devils, may come close. Tieflings also have a divine that is their kin, Eve, and will do anything to keep them fed as having a channel to place trust within them without expectance is a foreign but a warm concept. All tieflings, no matter how bitter, find solace in her radiance.",
                  "Tieflings were not strictly carnivores, but they mostly consumed blood, blubber, bone, gristle and meat. They even roasted insects and considered raw bone marrow a delicacy.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
