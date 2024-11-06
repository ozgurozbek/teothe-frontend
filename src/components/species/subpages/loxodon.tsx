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
export default function LoxodonContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Loxodon"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/loxodon.png"}
              alt={"Humanoid with strong elephant-like features."}
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
                title: "The Loxodon",
                text: [
                  "Loxodons are a species of elephant humanoids. They are known as formidable warriors - they're tough as tanks, surprisingly quick on their feet, and tireless in battle. Loxodons' beliefs are straightforward, earnest and, above all, unswerving.",
                  "The world is a simple place to a loxodon. They speak in casual absolutes - right and wrong, virtue and depravity - leading some to wonder whether the loxodon mind can even perceive subtle shades of grey. Debate with a loxodon therefore borders on uselessness: their minds are made up quickly, and no amount of discussion will alter their path; and they will bring their full bulk and prowess in combat to uphold even a newly formed opinion. Matters of loxodon rules and religion, known collectively as the Modest Truth, are passed from generation to generation, and accepted with seemingly little deliberation.",
                  "Loxodons are naturally confident, almost naively so; they regard any challenge as an opportunity to test themselves, prevail, and prove their personal skill. Their inbuilt armament and natural ability with weapons gives them good odds against any threat, and leads to an almost unbreakable resolve toward challenges in general. Their plans and strategies toward these challenges can be simplistic at times; as they can't (or choose not to) see the intricacies and details of a problem that some other species perceive, loxodons tend to favor a head-on, even brute-force approach to succeed in any situation. Many loxodons go out of their way to seek out difficulty and strife, believing that any chance to test their will and virtue is a gift.",
                  "Despite their unwavering reliability, loxodons have elaborate measures of punishment for those who break the rules. First a ranking soldier or cleric dispenses a physical assault, overwhelming the violator with bodily pain; then a cleric or confessor hears the penitent's admission of guilt. This process works well among loxodons, ensuring a strict form of justice and guaranteeing consent on the Modest Truth, but other species often consider it barbaric or cruel.",
                  "Loxodons resolve most problems with physical might, but when the need for spellcraft arises, their magic is direct, unambiguous, and crushingly forceful. Their wizards and clerics dispense justice unapologetically and with overwhelming power, scouring the plane of any who are deemed evil, summoning enormous avatars of law and retribution, resurrecting entire armies from the dead. What loxodons lack in trickery, they make up for in raw strength.",
                  "The elephantine loxodons are tough as tanks, tireless as machines, and headstrong as boulders. They are irrepressibly confident, seeing almost every event in their lives either as positive or as a challenging opportunity to prove their mettle. The loxodons believe punishment comes in two steps: pain and atonement. They carry a weapon for each. Elder mystics take their vow of silence so seriously that they impose it on any who enter their presence.             ",],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Loxodon in Teothe",
                level: 2,
                text: [
                  "Loxodons are often oasis of calm in Teothe. They hum or chant in sonorous tones and move slowly or sit in perfect stillness. As they say, 'There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man.'",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
