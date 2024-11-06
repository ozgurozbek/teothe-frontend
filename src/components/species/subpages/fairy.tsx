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
export default function FairyContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Fairy"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/fairy.png"}
              alt={
                "Ethereal creature from the fairytales with otherworldly features."
              }
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
                title: "The Fairy",
                text: [
                  "The Feywild is home to many fantastic peoples, including fairies. Fairies are a wee folk, but not nearly as much so as their pixie and sprite friends. The first fairies spoke Elvish, Goblin, or Sylvan, and encounters with human visitors prompted many of them to learn Common as well.",
                  "Infused with the magic of the Feywild, most fairies look like small elves with insectile wings, but each fairy has a special physical characteristic that sets the fairy apart. Fairies share a few commonalities with one another but can differ widely in appearance, behavior, and attitude.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Fairy in Teothe",
                level: 2,
                text: [
                  "They are awfully joyful, having a personal characteristic that resembles a young halfling with more bravery towards the unknown. They are perfect companions for any joyful task.",
                  "Hailing from the Feywild, the wondrous and mystical plane of existence, the Fairy exude an ethereal allure and possess an inherent affinity for the arcane arts. They love illusions and glamours, allowing them to manipulate perception and create mesmerizing visual displays.",
                  "As tricksters, they are often associated with a mischievous streak, delighting in pranks and tricks.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
