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
export default function SvirfneblinContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Svirfneblin"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/svirfneblin.png"}
              alt={"Grumpy underground gnome."}
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
                title: "The Svirfneblin",
                text: [
                  "Deep gnomes, or svirfneblin, are natives of the Underdark and are suffused with that subterranean realm's magic. They can supernaturally camouflage themselves, and their svirfneblin magic renders them difficult to locate. These abilities have enabled them to survive for generations among the perils of the Underdark. Guarded, and suspicious of outsiders, svirfneblin are cunning and taciturn, but can be just as kind-hearted, loyal, and compassionate as their surface cousins.",
                  "Svirfneblin seem more like creatures of stone than flesh. Their leathery skin is usually a gray, brown, or dun hue that acts as a natural camouflage with the rock around them. Their bodies are gnarled with hard muscle or fat, and they are heavier than their small stature suggests; svirfneblin often weigh 100 pounds or more but rarely stand much more than 3 feet tall.",
                  "Male svirfneblin are bald from early childhood, although adults can grow stiff beards or mustaches. Females have full heads of hair, and they usually tie their hair back in braids or cut it short to keep it from getting in their way as they work.",
                  "Svirfneblin are well adapted for their subterranean existence. They have excellent darkvision, and many of them have magical talents that rival the innate spellcasting of the drow and duergar. They are surprisingly strong for their size, enduring toil and danger that would overwhelm most other people.",
                  "Despite their guarded natures, svirfneblin aren't joyless. They admire skillful work and delicate craftsmanship, just like any other gnome. Svirfneblin love gemstones of all kinds, and they boldly seek out precious stones in the deepest and darkest tunnels. They are also expert gemcutters and miners, and they prize rubies above all other gemstones.",
                  "Svirfneblin are known as deep gnomes because they choose to live far below the earth's surface. Most svirfneblin never see the light of day. Their homes are well-hidden strongholds concealed by mazelike passages and clever illusions. Vast networks of mine tunnels ring most svirfneblin settlements, guarded by deadly traps and concealed sentries. Once a traveler passes through the outer defenses, the tunnels open up into marvelous cavern-towns carved from the surrounding rock with exquisite care. The svirfneblin are austere in their comforts compared to their surface cousins, but they take great pride in their stonework.",
                  "Deep gnomes do their best to remain hidden. Even if surface travelers succeed in locating a svirfneblin community, winning their trust can be even more difficult. Those rare travelers who do succeed in befriending deep gnomes find that they are loyal and courageous allies against any foe.",
                  "Because of this, the svirfneblin that dwell here are much more distrusting and wary than their kin on other worlds. Rarely do they allow strangers within their midst, and those that they must deal with are kept at arms length. If one is lucky enough to be trusted by the deep gnomes, they are a friend for life. For the svirfneblin of the Underdark, genuine trust is a commodity far more valuable than gold.",
                  "By comparison to the surface dwelling gnomes, most svirfneblin possess very little wanderlust and rarely travel far from home. They see the surface world as a bewildering place without boundaries and filled with unknown dangers. Nevertheless, a few svirfneblin understand that it is necessary to know something about what is happening on the surface near their hidden refuges. As a result, some svirfneblin become scouts, spies, or messengers who venture abroad, doing their best to avoid attention. These travelers are notoriously close-mouthed about where they come from and what they are up to, but a few eventually learn to trust good-hearted people of the surface world.",
                  "A few svirfneblin become merchants who deal with other species both above and below ground. Drow, duergar, and other peoples know that svirfneblin are usually neutral in outlook and typically honest in their dealings. Serving as middlemen between species too hostile to deal with each other directly can be lucrative, and it serves an important defensive function; svirfneblin middlemen tend to know more about rumors and threats between rival merchants than anybody else.",
                  "Like other gnomes, deep gnomes can live for centuries, up to 500 years.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Svirfneblin in Teothe",
                level: 2,
                text: [
                  "Their most prized city in the Underdark of Teothe is called Gnormandy. Famous amongst svirfneblin for their strawberry drinks.",
                  "Deep gnomes take pride in their inpenetrable forts and often hide in plain sight to watch third parties fail finding an entrance.",
                  "They normally have a fatty face with a tall forehead, and often look very bland and pale.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
