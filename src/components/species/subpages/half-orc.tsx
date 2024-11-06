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
export default function HalfOrcContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Half-Orc"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/half-orc.png"}
              alt={"Prone to violence, battleborn humanoid."}
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
                title: "The Half-Orc",
                text: [
                  "Whether united under the leadership of a mighty warlock or having fought to a standstill after years of conflict, orc and human tribes sometimes form alliances, joining forces into a larger horde to the terror of civilized lands nearby. When these alliances are sealed by marriages, half-orcs are born. Half-orcs' grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see.",
                  "Half-orcs most often live among orcs. Of the other species, humans are most likely to accept half-orcs, and half-orcs almost always live in human lands when not living among orc tribes.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Half-Orc in Teothe",
                level: 2,
                text: [
                  "The dark-red goddess Fexyiaf created the orcs, and even those orcs who turn away from her worship can't fully escape her influence. The same is true of half-orcs, though their human blood moderates the impact of their orcish heritage. Some half-orcs hear the whispers of Fexyiaf in their dreams, calling them to unleash the rage that simmers within them.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
