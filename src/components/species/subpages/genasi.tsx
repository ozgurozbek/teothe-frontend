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
export default function GenasiContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Genasi"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/genasi.png"}
              alt={"Humanoid with elemental aptitude."}
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
                title: "The Genasi",
                text: [
                  "They are planetouched humans and technically speaking are not a species but a general classification of humans with a link to an elemental plane, usually by a Genie.",
                  "Each of the four fundamental elements had associated genasi, so the most common genasi were air genasi, earth genasi, fire genasi, and water genasi.",
                  "No two genasi were alike in appearance. Some could pass as normal humans, bearing the marks of their human ethnicity. For others, their elemental nature was impossible to hide. Their heritage was nearly always evident in one or two physical traits, such as skin or hair color or an elemental aura.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Unusual Genasi",
                level: 2,
                text: [
                  "A rare few genasi could control two elemental manifestations simultaneously. These powerful entities were known as elemental tempests.",
                  "Unlike many planetouched species, genasi generally took pride in their unusual features. Furthermore, because of their elemental power, most genasi felt a sense of superiority over other species and even over other genasi.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Genasi and their Craft",
                level: 2,
                text: [
                  "Genasi artisans often saw their craft as a means of obtaining prestige. These individuals desired nothing more than to be in high demand and so worked hard to please their customer base. For this reason, many genasi often substituted actual excellence for customization and individuality and while the average genasi swordsmith might not compare with his dwarven counterpart in terms of quality, the genasi would work much harder to tailor the blade to his or her customer's specific needs and wants. This could go so far as to make genasi-crafted items seem uncomfortable or unwieldy in the hands of those for whom they were not intended.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Genasi in Teothe",
                level: 2,
                text: [
                  "The child of an elemental creature with a human was a half-elemental. The child of a half-elemental and a human was a genasi. The child of a genasi and a human might show planetouched traits or purely human ones. Thus, overtime, the elemental bloodline was diluted until it was no longer obvious in most individuals. However, every few generations, a child might display his or her elemental heritage as a genasi. Para-genasi came about when a half-elemental of one type mated with an elemental creature of another type.",
                  "Para-genasi were genasi who expressed a bloodline of two elements. These included the dust para-genasi, ice para-genasi, magma para-genasi, ooze para-genasi, smoke para-genasi, steam para-genasi, among other possibilities. Para-genasi were even rarer than the four standard genasi.",
                  "Genasi are created with a Magical Forge operated by Gods. Since Gods have left the forge alone, only Fire Genasis are seldomly able to survive the high heat.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
