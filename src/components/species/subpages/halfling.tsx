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
export default function HalflingContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Halfling"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/halfling.png"}
              alt={"Cheery, shorter looking humanoid."}
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
                title: "The Halfling",
                text: [
                  "Known as Hin amongst themselves or the ''good folk'', the ''quick folk'' and the ''sly folk'' amongst other species were humanoid creatures similar in shape to humans -whom halflings called the ''Big Folk'', or ''Manyhanded'' - but around half their size. Halflings got along well with most of the other species and were known for their curiosity and tendency to collect things.",
                  "Standing somewhere around 81-100 cm tall and weighing on average between 15kg, halflings are small compared to most other species. Most halflings had dark hair and eyes and nearly all male halflings were incapable of growing true beards, though many had long sideburns.",
                  "Halflings were by nature joyful and friendly in their dealings with others. Halflings appeared deceptively harmless, meaning they were often beyond the notice of enemies that might otherwise pose a threat to them. The halfling mind was practical and halflings concerned themselves with their immediate surroundings. They took pleasure in simple things, with few aspiring to greatness in the same manner as humans.",
                  "While many halflings did not have the ambition for adventure that some species did, most preferred trouble to boredom. Unfortunately, the small size of halflings have an effect on their abilities. Halflings were, for instance, incapable of wielding larger weapons like greatswords or halberds.",
                  "Halfling communities were tightly knit groups found around the world, usually near the settlements of other species. Most halflings didn't recognize the claims of kings or nobles as sovereign rulers but instead looked primarily to their family elders to guide them. Halflings also valued a sense of community; halflings naming each other ''halfling'' was a salute of brotherhood. Most halflings, didn't live in communities of their own but instead regions dominated by other species. This was particularly true in human societies, which attracted halflings because of the comparative rapidity with which they changed. It should be noted that halflings usually found insults directed at them to be amusing rather than insulting.",
                  "Halfling culture had a fondness for stories and legends and was rich in the oral tradition. So much care was put into the retelling of traditional stories and their preservation that halflings often unwittingly had access to lore about ancient and long-gone cultures or empires that others had long since forgotten about.",
                  "The halfling species had many traditional homelands, though as a whole the species was typically nomadic. Over time, Halflings became more displaced than before, though as a result they also came together in unity even more tightly than they were before. Though formerly met with prejudice, halflings earned acceptance through their skill as merchants and business partners even though they were around as the same time as dwarves, elves, and giants.",
                  "The hin generally avoided realms where slavery was prevalent or those where exploitation of their kind was socially acceptable.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
