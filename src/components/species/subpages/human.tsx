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
export default function HumanContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Human"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/human.png"}
              alt={"A male human adventurer."}
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
                title: "The Human",
                text: [
                  "Humans are widespread, could be found in most regions and, in general, are fierce and disagreeable, which could sometimes lead certain other species to view them with contempt. They were renowned for their diversity and ambition, and although they lacked specialization, they could excel in many areas.",
                  "While there were no natural human subspecies there was great ethnic diversity between humans in different regions. Moreover, Humans bred outside their species many times, resulting in the various half-human species like half-elves and half-orcs.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Human in Teothe",
                level: 2,
                text: [
                  "Humans are really adaptable and ambitious among the common species. Whatever drives them, they are the innovators, the achievers, and the pioneers. They are also a bit sour since they lost the information war regarding Jeikhan. Human traditions have evolved to include more lessons from older generations too, more ambitious but less celebratory ones. A militaristic attitude have grown inside the new generation.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
