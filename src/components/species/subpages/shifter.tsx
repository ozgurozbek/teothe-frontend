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
export default function ShifterContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Shifter"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/shifter.png"}
              alt={"A male Shifter adventurer."}
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
                title: "The Shifter",
                text: [
                  "Shifters are sometimes called weretouched, as they are descendants of people who contracted full or partial lycanthropy. Humanoids with a bestial aspect, shifters can't fully change shape, but they can temporarily enhance their animalistic features by entering a state they call shifting.",
                  "Shifters are similar to humans in height and build but are typically more lithe and flexible. Their facial features have a bestial cast, often with large eyes and pointed ears. Most shifters also have prominent canine teeth. They grow fur-like hair on nearly every part of their bodies. Shifters resembled humans, their close brethren, but with distinctively bestial features such as sharp teeth, claws, pointed ears, or fur. However, to a human's eye, the resemblance was less obvious than the differences. Unlike humans, shifters had flat, animal-like noses, larger than usual eyes that allowed them to see better in low light, heavy eyebrows, pointed ears, skin that was often of a brownish shade, and much more hair, also commonly brown, than was typical for the common human.",
                  "Shifters lived to about as long humans did on average. Shifters were commonly self-reliant and free-spirited. However, they were restrained in their actions by a fear that they might become lost in the savagery that dwelled in their blood. However, this feral predatory nature could be to the shifter's advantage, and they made excellent rangers or druids.",
                  "Most shifters resemble a particular kind of lycanthrope. Therefore, Shifters were often feared wherever they went, much like their lycanthrope ancestors. This was due to a common misconception that all lycanthropes were invariably and irreversibly evil, including shifters. While a shifter's appearance might remind an onlooker of an animal, they remain clearly identifiable as shifters even when at their most feral.",
                  "Instead, shifters preferred either a nomadic lifestyle or living close to the edges of society, supporting it as fishers, trackers, hunters, guides, or scouts.",
                  "Shifters favored gods of nature, the moon, and primal strength. Just like lycanthropes, shifters could be found scattered throughout, but only a few gathered in larger communities.",
                  "While they form powerful bonds to friends and kin, shifters place great value on self-reliance and freedom. It's a shifter proverb to 'always be prepared for the journey yet to come' and most shifters strive to be ready for change or opportunity. Shifters have a natural inclination toward classes with a primal connection. A shifter barbarian draws their rage from the beast within. A shifter ranger indulges their urge to wander and hunt. A shifter rogue harnesses their own predatory instincts. But shifters can pursue any path or faith.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Shifter in Teothe",
                level: 2,
                text: [
                  "Shifters, sometimes called weretouched, are not native to Teothe or similar material planes. Their nomadic nature led them to many other places, but most of the time they don't have a place to call home. They fill this gap with religion or arcane studies.",
                  "Shifters, with exceptions, feel strong hatred towards smears as they are not reliable nor spirited to the Shifter's eyes.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
