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
export default function WarforgedContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Warforged"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/warforged.png"}
              alt={"A sentient humanoid with robot-like features."}
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
                title: "The Warforged",
                text: [
                  "Warforged were a rare species of humanoid constructs created through powerful rituals. They average 1.8 meters and weight about 140kg. Extremely powerful and durable, warforged were able fighters. Unlike most constructs, warforged were fully self-aware and maintained mental faculties on par with elves, humans, or similar species. The most important marking for any warforged was their 'truth', a rune distinctive to each warforged which was placed upon their forehead.",
                  "Warforged are formed from a blend of organic and inorganic materials. Root-like cords infused with alchemical fluids serve as their muscles, wrapped around a framework of steel, darkwood, or stone. Armored plates form a protective outer shell and reinforce joints. Warforged share a common facial design, with a hinged jaw and crystal eyes embedded beneath a reinforced brow ridge. Beyond these common elements of warforged design, the precise materials and build of a warforged vary based on the purpose for which it was designed. Although they were manufactured, warforged are living humanoids. Resting, healing magic, and the Medicine skill all provide the same benefits to warforged that they do to other humanoids.",
                  "They are sexless and incapable of reproduction. The warforged's artificial nature also gave the species a unique relationship to pain, which seemed limited to actual injury. This allowed warforged to modify themselves with some ease, giving them a varied appearance in spite of their lack of inherent biological diversity.",
                  "Warforged's artificial nature also meant they did not need to eat, drink, or breathe. Likewise, warforged did not need to sleep but did nonetheless require rest in a fully-aware state for a period of at least four hours.",
                  "Warforged took their name from their original purpose, as soldiers, and many had a dutiful attitude towards life, taking pleasure from fulfilling commands. Warforged as a whole had a strong work ethic and shared an aversion to failure. Warforged were capable of fear, often of death or pain, as much as other species and could come to hate the sources of these fears just as easily. Warforged were also capable of loyalty and joy, particularly in relations to friends and allies and could be driven to anger when their loves or goals were threatened. However, warforged as a whole exhibited a simple-minded and reserved approach to life with straightforward goals and reactionary passions.",
                  "Since warforged were created in a state of physical maturity, many exhibited a childlike perspective that was often mistaken as naïve or emotionally crippled; this was not necessarily true. Some warforged, in fact, developed a particularly sophisticated view of the world, ever curious about its mysteries in part due to the odd nature of their creation. Many wondered where they might go in death and if they even have souls. Some created deeply ordered philosophies to govern themselves or maintained a perpetual list of tasks to occupy themselves with. Others fell in with the religions and mindsets of other species. Some warforged even lived long enough to develop a deep and weathered personality as tempered by time as that of other species.",
                  "Warforged are made from wood and metal, but they can feel pain and emotion. Built as weapons, they must now find a purpose beyond war.",
                  "Many warforged embrace a concrete purpose—such as protecting allies, completing a contract, or exploring a land—and embrace this task as they once did war. However, there are warforged who delight in exploring their feelings, their freedom, and their relationships with others. Most warforged have no interest in religion, but some embrace faith and mysticism, seeking higher purpose and deeper meaning.",
                  "The typical warforged has a sexless body shape. Some warforged ignore the concept of gender entirely, while others adopt a gender identity.",
                  "The more a warforged develops its individuality, the more likely it is to modify its body, seeking out an artificer to customize the look of its face, limbs, and plating.",
                  "Most warforged were assigned numerical designations for use in military service. Many of them adopted nicknames, often given to them by their comrades. As independent individuals, some have chosen new names as a way to express their path in life. A few take on human names, often the name of a fallen friend or mentor.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Warforged in Teothe",
                level: 2,
                text: [
                  "Warforged never tire and rarely allow themselves to become bored. Having no fear of ageing and no need for sleep or food, warforged have an almost unending patience, yet a hard life as constant soldiers has accustomed them to endless toil and so long periods of inactivity can make them anxious. Warforged are not spellscribed.",
                  "Warforged are made in a 'creation forge', a spellcasting station. They don't have souls, but in their eyes, nobody does.",
                  "There is also Psiforged and Faerzforged, one utilising Psionic magic while the other is using Faerzress. Warforged of the Underdark is an extremely rare sight.",
                  "Warforged in Teothe or similar material planes have a more exploration focused creation, as during the war they were not utilized as Humans lacked the knowledge to do so, while needing them. Human nations, now trying to get back after losing the information war, see the Warforged as free labor, ignoring their free will and sense of individualism.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
