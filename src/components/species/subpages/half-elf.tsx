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
export default function HalfElfContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Half-Elf"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/half-Elf.png"}
              alt={"A blend of human and elf."}
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
                title: "The Half-Elf",
                text: [
                  "Half-elves inherit a blend of of physical traits from their human and elven ancestors, and they are typically good-looking. Elves consider half-elves to resemble humans and sometimes call them ''half-humans'', while humans consider them to resemble elves. Male half-elves are distinguished from their elven ancestors by the ability to grow facial hair. Half-elves can inherit facial features and hair, eye and skin color of either parent, though it is common for them to inherit their eyes from the elven parent.",
                  "Half-elves are uncommon in most worlds, where humans and elves tend to live apart. Half-elves prefer the company of half-elves, but typically integrate into human societies and have no distinct kingdoms of their own. Many half-elves take up life as a wanderer, feeling that they do not truly fit into either human or elven culture, and often outliving human companions.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Half-Elf in Teothe",
                level: 2,
                text: [
                  "In the year 271 DC, a figure named Virimelle emerged, believed to be either a debated avatar of the Elven deity Yr''snn or a brainwashed avatar of Guulagh. Their purpose was to preserve and purify elven blood, leading to a violent quest that involved the killing of half-elves and occasionally humans.",
                  "Rumors spread regarding Virimelle's fate. Some claim they ascended to a higher state, while others believe they were banished to Teothe's Alean's Grave. There are even whispers that Virimelle emerged victorious in their conquest against the Divine and now poses a threat to all half-elves. Mentioning the name Virimelle alongside half-elves is a sensitive topic to be avoided.",
                  "During this tumultuous period, there were fanatical elves who supported Virimelle's mission, further adding to the complexity of the situation. A half-elf summarizes this as a dark chapter in history marked by the rise of Virimelle, their violent crusade against half-elves and humans, and the uncertainty surrounding their ultimate fate and the implications for the half-elf community.",
                  "The image is of a younger half-elf's.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
