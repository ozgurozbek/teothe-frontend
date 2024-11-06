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
export default function ElfContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Elf"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/elf.png"}
              alt={"Lady with pointy ears and fine features."}
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
                title: "The Elf",
                text: [
                  "Elves can live well over 700 years, giving them a broad perspective on events that might trouble the shorter-lived species more deeply. They are more often amused than excited, and more likely to be curious than greedy. They tend to remain aloof and unfazed by petty happenstance. When pursuing a goal, however, whether adventuring on a mission or learning a new skill or art, elves can be focused and relentless. They are slow to make friends and enemies, and even slower to forget them. They reply to petty insults with disdain and to serious insults with vengeance.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Elven approach to life",
                level: 2,
                text: [
                  "Most elves dwell in small forest villages hidden among the trees. Elves hunt game, gather food, and grow vegetables, and their skill and magic allow them to support themselves without the need for clearing and plowing land. They are talented artisans, crafting finely worked clothes and art objects. Their contact with outsiders is usually limited.",
                  "Elves take up adventuring out of wanderlust. Since they are so long-lived, they can enjoy centuries of exploration and discovery. They dislike the pace of human society, which is regimented from day to day but constantly changing over decades, so they find careers that let them travel freely and set their own pace.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Elf in Teothe",
                level: 2,
                text: [
                  "With unearthly grace and fine features, elves appear hauntingly beautiful to humans and members of many other species. They are slightly shorter than humans on average. Elves also do not enjoy consuming smears, and have taken a more secluded stance. Some elven communities have turned vegan.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
