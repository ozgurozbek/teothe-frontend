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
export default function AarakocraContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Aarakocra"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/aarakocra.png"}
              alt={"Fantasy bird-like humanoid."}
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
                title: "The Aarakocra",
                text: [
                  "From below, aarakocra look much like large birds. Only when they descend to roost on a branch or walk across the ground does their humanoid appearance reveal itself. Feathers cover their bodies. Their plumage typically denotes membership in a tribe. Males are brightly colored, with feathers of red, orange, or yellow. Females have more subdued colors, usually brown or gray. Their heads complete the avian appearance, being something like a parrot or eagle with distinct tribal variations.",
                  "Nowhere are the aarakocra more comfortable than in the sky. They can spend hours in the air, and some go as long as days, locking their wings in place and letting the thermals hold them aloft. In battle, they prove dynamic and acrobatic fliers, moving with remarkable speed and grace, diving to lash opponents with weapons or talons before turning and flying away.",
                  "Once airborne, an aarakocra leaves the sky with reluctance. On their native plane, they can fly for days or months, landing only to lay their eggs and feed their young before launching themselves back into the air. Those that make it to a world in the Material Plane find it a strange place. They sometimes forget or ignore vertical distances, and they have nothing but pity for those earthbound people forced to live and toil on the ground.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Aarakocra Characteristics in Society",
                level: 2,
                text: [
                  "Aarakocra enjoy peace and solitude. Most of them have little interest in dealing with other peoples and less interest in spending time on the ground. For this reason, it takes an exceptional circumstance for an aarakocra to leave his or her tribe and undertake the adventurer's life.",
                  "Aarakocra names have two to four syllables, punctuated with whistles, trills, and clicks that are difficult for non-aarakocra to pronounce. When dealing with non-aarakocra, they sometimes shorten their names, or use nicknames others give them.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Aarakocra in Teothe",
                level: 2,
                text: [
                  "They come from the Elemental Plane of Air and breed on a mating season with their species. An egg take about eight months to hatch and are incubated by females. This is the most major exception that motivates them to land.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
