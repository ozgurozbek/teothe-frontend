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
export default function BugbearContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Bugbear"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/bugbear.png"}
              alt={"An animalistic humanoid mix of goblins and hobgoblins."}
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
                title: "The Bugbear",
                text: [
                  "Neither bugs nor bears, bugbears are the hulking cousins of goblins and hobgoblins. With roots in the Feywild, early bugbears resided in hidden places, in hard-to-reach and shadowed spaces. Long ago and from out of the corner of your eye, they came to the Material Plane, urged to spread throughout the multiverse. Centuries later, they still bear a fey gift for lurking just out of sight, and many of them have sneaked away from divine's influence.",
                  "They are long of limb and covered in coarse hair, with wedge-shaped ears and pointed teeth. Despite their formidable build, bugbears are quiet skulkers, thanks to a fey magic that allows them to hide in spaces seemingly too small for them.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Outlook of the Bugbear",
                level: 2,
                text: [
                  "Bugbears resembled hairy, feral goblins standing 2.1 meters tall. They took their name from their noses and claws, which were similar to those of bears. Their claws were not long and sharp enough to be used as weapons, so bugbears often armored and armed themselves with a variety of purloined gear, which was normally second-rate and in poor repair.",
                  "Bugbears, like other goblinoids, had a reputation for being dim-witted and brutish. This claim was not unfounded, and like their kin bugbears had easily provoked tempers and were prone to rages. Few bugbears overcame this flaw and their culture's brutal nature. Many bugbears were chaotic evil in alignment, favoring stealth and surprising their opponents. Bugbear heroes, though rare, were heard of and could acquire significant renown if successful. Often the motivation for this change of heart came from the rewards earned from virtue, which in the long term were more pleasing than the short-term pleasures of evil behaviors.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Bugbear Society",
                level: 2,
                text: [
                  "Bugbears were often found in the company of other goblinoids, particularly goblins, since tribes made up mostly of hobgoblins and bugbears tended to be wiped out quickly by other species as a precaution. Some bugbears also operated independently, though tribes ruled by hobgoblins were better organized and less savage. This was in part because bugbears had little patience for diplomacy or negotiation, preferring violent solutions to conflicts unless obviously overpowered.",
                  "Like many goblinoids, bugbears spoke the Goblin language.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Bugbear in Teothe",
                level: 2,
                text: [
                  "Bugbears once had their own pantheon and often decapitated their enemies as a way to honor their god, who was said to do the same. Bugbear deities included the bugbear deity of hunting, senses, stealth, and surprise and local pantheons often included a god of earth, a god of fertility, and a god of death.",
                  "Being fey-touched, bugbears have also taken liking to puzzles and riddles even though they can be bad at solving them. This never angers a bugbear as they are aware they a puzzle is not always to be solved."
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
