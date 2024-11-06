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
export default function AasimarContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Aasimar"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/aasimar.png"}
              alt={"Heavenly individual with almost glowing skin."}
              rootClassName="w-full"
            />
            <Button href="/species" className="w-full">
              <span>
                See All Species <DoubleRightOutlined />
              </span>
            </Button>
          </Col>
          <Col xs={24} sm={24} md={12} lg={18} xl={18} xxl={18} className="p-4 h-[60vh] overflow-y-scroll no-scrollbar">
            <SimpleContent
              contentProps={{
                title: "The Aasimar",
                text: [
                  "Whether descended from a celestial being or infused with heavenly power, aasimar are mortals who carry a spark of the Upper Planes, the realm of many lawful good deities, within their souls. They can fan that spark to bring light, ease wounds, and unleash the fury of the heavens.",
                  "Aasimar can arise among any population of mortals. Aasimar are born to serve as champions of the gods, their births hailed as blessed events. They are a people of otherworldly visages, with luminous features that reveal their celestial heritage.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Aasimar within the Society",
                level: 2,
                text: [
                  "They live for up to 160 years and often have features that hint at their celestial heritage. These often begin subtle and become more obvious when the aasimar gains the ability to reveal their full celestial nature.",
                  "Aasimar are placed in the world to serve as guardians of law and good. Their patrons expect them to strike at evil, lead by example, and further the cause of justice. From an early age, an aasimar receives visions and guidance from celestial entities via dreams. These dreams help shape an aasimar, granting a sense of destiny and a desire for righteousness.",
                ],
              }}
            />
            <SimpleContent
            contentProps={{
              title: "Characteristics of the Aasimar",
              level: 2,
              text: [
                "Each aasimar can count a specific celestial agent of the gods as a guide. This entity is typically a deva, an angel who acts as a messenger to the mortal world.",
                "While aasimar are strident foes of evil, they typically prefer to keep a low profile. An aasimar inevitably draws the attention of evil cultists, fiends, and other enemies of good, all of whom would be eager to strike down a celestial champion if they had the chance.",
                "When traveling, aasimar prefer hoods, closed helms, and other gear that allows them to conceal their identities. They nevertheless have no compunction about striking openly at evil. The secrecy they desire is never worth endangering the innocent.",
              ],
            }}
          />
          <SimpleContent
            contentProps={{
              title: "Origins of the Aasimar",
              level: 2,
              text: [
                "An aasimar, except for one who has turned to evil, has a link to an angelic being. That being 'usually a deva' provides guidance to the aasimar, though this connection functions only in dreams. As such, the guidance is not a direct command or a simple spoken word. Instead, the aasimar receives visions, prophecies, and feelings.",
                "The angelic being is far from omniscient. Its guidance is based on its understanding of the tenets of law and good, and it might have insight into combating especially powerful evils that it knows about.",
                "Despite its celestial origin, an aasimar is mortal and possesses free will. Most aasimar follow their ordained path, but some grow to see their abilities as a curse. These disaffected aasimar are typically content to turn away from the world, but a few become agents of evil. In their minds, their exposure to celestial powers amounted to little more than brainwashing.",
                "Evil aasimar make deadly foes. The radiant power they once commanded becomes corrupted into a horrid, draining magic. And their angelic guides abandon them.",
                "Even aasimar wholly dedicated to good sometimes feel torn between two worlds. The angels that guide them see the world from a distant perch. An aasimar who wishes to stop and help a town recover from a drought might be told by an angelic guide to push forward on a greater quest. To a distant angel, saving a few commoners might pale in comparison to defeating a cult. An aasimar's guide is wise but not infallible.",
                "Most aasimar are born from human parents, and they use the same naming conventions as their native culture.",
              ],
            }}
          />
          <SimpleContent
            contentProps={{
              title: "Aasimar in Teothe",
              level: 2,
              text: [
                "They appear as glorious humans with lustrous hair, flawless skin and piercing eyes. They often attempt to pass as humans. Aasimars are celestial to humans as the opposite of tieflings as fiends to humans.",
                "Early aasimars, now long gone, have become either demigods or lost to time. Now, Aasimars only reproduce with humans and birth aasimars.",
              ],
            }}
          />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
