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
export default function DwarfContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Dwarf"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/dwarf.png"}
              alt={"Stout looking humanoid warrior."}
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
                title: "The Dwarf",
                text: [
                  "Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs... These common threads unite all dwarves.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Dwarf Society",
                level: 2,
                text: [
                  "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Even though they are short, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.",
                  "Dwarves can live to be more than 400 years old, so the oldest living dwarves often remember a very different world. This longevity grants them a perspective on the world that shorter-lived species such as humans and halflings lack.",
                  "Dwarves are solid and enduring like the mountains they love, weathering the passage of centuries with stoic endurance and little change. They respect the traditions of their clans, tracing their ancestry back to the founding of their most ancient strongholds in the youth of the world, and don't abandon those traditions lightly. Part of those traditions is devotion to the gods of the dwarves, who uphold the dwarven ideals of industrious labor, skill in battle, and devotion to the forge. To be clanless is the worst fate that can befall a dwarf.",
                  "Individual dwarves are determined and loyal, true to their word and decisive in action, sometimes to the point of stubbornness. Many dwarves have a strong sense of justice, and they are slow to forget wrongs they have suffered. A wrong done to one dwarf is a wrong done to the dwarf's entire clan, so what begins as one dwarf's hunt for vengeance can become a full-blown clan feud.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "A Dwarven Attitude",
                level: 2,
                text: [
                  "Dwarven kingdoms stretch deep beneath the mountains where the dwarves mine gems and precious metals and forge items of wonder. They love the beauty and artistry of precious metals and fine jewelry, and in some dwarves this love festers into avarice. Whatever wealth they can't find in their mountains, they gain through trade. They dislike boats, so enterprising humans and halflings frequently handle trade in dwarven goods along water routes. Trustworthy members of other species are welcome in dwarf settlements, though some areas are off limits even to them.",
                  "Dwarves get along passably well with most other species. “The difference between an acquaintance and a friend is about a hundred years,” is a dwarf saying that might be hyperbole, but certainly points to how difficult it can be for a member of a short-lived species like humans to earn a dwarf's trust.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Dwarf in Teothe",
                level: 2,
                text: [
                  "Frostforge steel is mined from icicles and occasionally from top of the mountains where dwarves familiar with their long lost secrets to light cold fire. It is then processed in the said fire. Only Dwarves that can work with it deserve the highest respect in their eyes, par with the most successful clan leaders and kings.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
