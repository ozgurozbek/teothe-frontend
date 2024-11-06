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
export default function AokinContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Aokin"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/aokin.png"}
              alt={"Alien like species having frog-like skin with blue tones."}
              rootClassName="w-full"
            />
            <Button href="/species" className="w-full">
              <span>
                See All Species <DoubleRightOutlined />
              </span>
            </Button>
          </Col>
          <Col xs={24} sm={24} md={12} lg={18} xl={18} xxl={18} className="p-4 h-[60vh] overflow-y-scroll no-scrollbar">
            <SimpleContent
              contentProps={{
                title: "The Aokin",
                text: [
                  "Nestled within ancient mountains and fertile valleys, Aoradon is a fantastical realm where the Aokin people follow the spiritual belief system of Natuva. This unique ideology revolves around nature worship, ancestral connection, and a deep reverence for the cycle of life and death. The landscape is viewed as sacred, with ancient groves and natural landmarks serving as intersections of the physical and spiritual realms.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Aokin Culture",
                level: 2,
                text: [
                  "Traditional elements manifest in the celebration of folk traditions, ornate craftsmanship, and a commitment to hospitality. Traditional dances, music, and stories during communal festivals connect the present generation with their cultural heritage. Craftsmanship, inspired by intricate beadwork, produces ceremonial garments and artifacts integral to their rituals.",
                  "Natuva influences are evident in the Aokin people's aesthetic practices, incorporating ash as body paint symbolizing their connection to the earth. They believe in the divine presence in all aspects of life, even the seemingly impure elements of nature. Meditation is central to their lifestyle, seeking to transcend physical boundaries in secluded natural settings, contemplating life and death as interconnected aspects.",
                  "The Aokin people have renounced materialism, leading a simple and communal life focused on spiritual connection with nature. Communion with spirits through rituals, unique beliefs in the spirits of the land, and unconventional practices challenge social norms and promote spiritual growth.",
                  "Some elements add another layer to Aoradon's uniqueness. Their toad-like reproduction involves releasing ethereal seeds into sacred pools during celestial events, marking Lunar Wells as gateways to the spirit world. There are no traditional biological parents; instead, the entire community becomes the collective family. Aokin names reflect celestial events during birth, symbolizing each individual's cosmic connection.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Aokin Reproduction Cycle",
                level: 2,
                text: [
                  "Their reproduction is done via parasites. Multiple individuals are selected to be the hosts, and their stomachs are removed and consumed by the other Aokin. The selected individuals are then bathed in the lunar wells with the virus. Virus enters their bodies and crawls under their skin and then lays eggs. These eggs grow rapidly in the lunar wells, and the bathed individual is sacrificed. Their body is consumed to give room for the 'silverfish-like bugs' to roam free. A handful of them survive to develop skin tissue, and grow up to be Aokin.",
                  "As individuals mature, they embark on pilgrimages to ancient celestial sites, seeking wisdom from cosmic forces. Conflict resolution involves elders and celestial signs, fostering harmony in the community.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Evolution of Aokin in Aoradon",
                level: 2,
                text: [
                  "Yet, Aoradon faces significant threats. The Draconic Convergence brings natural peril with magical surges, turbulent skies, and unleashed dragons during rare celestial events. The Veil-Eaters, formidable beings from their sky islands, challenge Aokin unity and resource management by manipulating the magic that keeps their island afloat. Protecting their cultural identity becomes vital for survival against external threats.",
                  "The Aokin people's timeline is marked by a fascinating evolution and adaptation. Initially, an ancestor species with toad-like reproduction emerged, evolving bipedal forms to avoid parasitic pools. Establishing themselves on a sky island, they faced challenges of limited resources and a static moon called the white eye.",
                  "Generations later, Natuva, their unique spiritual belief system, was formed, centered on the veneration of land spirits and a deep connection to nature. Influences from distant lands introduced ancient religious practices, merging with Natuva and fostering unconventional beliefs.",
                  "The unification of Aoradon under a single banner emphasized collective family and communal upbringing. The discovery of the Well of Secrets unveiled a mystical dimension to their magic, made from dragon eggs, inadvertently shifting their islands across inner-planes.",
                  "Exploration in Teothe revealed new dimensions and knowledge, prompting the Aokin people to distance themselves for fear of overwhelming numbers. The encounter with the Maggot Eater tested their resilience and unity, resulting in the loss of a generation of children.",
                  "Innovation in communication saw the Aokin people revolutionize their postal service using gill-gates, intricate pipe systems that read waves data. First visitors brought a peaceful exchange of information, leading to the celebration of Pole Day.",
                  "The clash between the Underworld and Overworld, known as the 'Corrosion of Rods', broke the 'Divine Curtain', reshaping the world and rendering scholarly work obsolete. A volcano eruption from the Seimon Volcano caused climate change and landscape alterations, adding further complexity to the Aokin people's journey.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
