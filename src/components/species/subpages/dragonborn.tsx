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
export default function DragonbornContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Dragonborn"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/dragonborn.png"}
              alt={"Colourful and scaly reptilian humanoid."}
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
                title: "The Dragonborn",
                text: [
                  "They were one of the species native to an Elemental Plane, which then moved to Inner Planes.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Dragonborn Features",
                level: 2,
                text: [
                  "Dragonborn exhibited many draconic features, including a scaly hide, a large muscular body, the capacity to use a breath weapon, and resistance to the same elemental energy they can breathe, thanks to their draconic heritage. Because of thousands of years of interbreeding, the scales a dragonborn wore were scarlet, gold, rust, ochre, bronze, or brown in hue, though a few dragonborn with an stronger draconic heritage had scales resembling those of true dragons. Like dragons, dragonborn were often mistaken for reptiles, but were in fact warm-blooded draconic creatures.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Dragonborn in Teothe",
                level: 2,
                text: [
                  "Unknown in heritage, they were either created by Ehx to serve other dragons or created from Ehx's spilled blood when it fell in the battle between gods. Many dragonborns believe in Ehx.",
                  "Dragonborns live to be around 80, therefore end up forming friendships with Humans more often than other exotic species, even though they are considered to be one. Amongst them, rare few individuals were born with tails, but this was seen as a deformity by the dragonborn. These individuals are mostly shunned and even exiled from their dragonborn community.",
                  "They hatch from eggs and breed with other Dragonborns.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
