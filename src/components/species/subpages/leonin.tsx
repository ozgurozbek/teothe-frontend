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
export default function LeoninContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Leonin"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/leonin.png"}
              alt={"Humanoid with feline features that resemble a lion."}
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
                title: "The Leonin",
                text: [
                  "Leonin tend to be tall compared to humans and move with a boldness that suggests their physical might. Tawny fur covers leonin bodies, and some grow thick manes ranging in shades from gold to black. While their hands prove as nimble as those of other humanoids, leonin have retractable feline claws, which they can extend instantly. This, along with their ability to produce bone-shaking roars, gives most leonin an air that readily shifts between regal and fearsome. Leonin often act with confidence, which can come off as imperiousness. While this can reassure their allies, it can also suggest defiance in the face of what they perceive as imposed authority or unworthy experts.",
                  "The leonin guard their shining homeland, a golden plain where even the gods rarely trespass. Prides of these nomadic, lion-like humanoids rarely interact with other peoples, having all they need in their shimmering homeland and knowing the treachery of strangers. Still, some leonin wonder what lies beyond their homeland's border mountains and seek to test themselves in a wider world.",
                  "Other peoples often perceive leonin as quick to take offense, intolerant of criticism, or belligerent. The truth is that many leonin simply enjoy fighting, whether verbal or physical. They take pleasure in argument, wrestling, sparring, and even battle, enjoying the opportunity to exercise their minds and bodies.",
                  "It follows, too, that leonin aren't inclined to carry grudges. A warrior might react with sudden violence to an insult, but when the fight is over (and the leonin's superiority proven), the insult is forgotten—along with the vanquished foe.",
                  "Few leonin devote themselves to the service of the gods. Centuries ago, the leonin worshiped the same gods that humans do, but after many of their prides suffered depravities at the hands of a tyrant, most leonin rejected the gods for a time being.",
                  "Leonin rely on themselves and their prides. A pride is bound together by the experience of a shared challenge and, in particular, the sacred act of the hunt.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Leonin in Teothe",
                level: 2,
                text: [
                  "Leonin are not native to Teothe but most find their way in due to their need of exploration and conquest. Leonin druids are common travellers to the N' Tiora.",
                  "Leonin also obey Maies' call to hunt, and place their faith in their divine kin.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
