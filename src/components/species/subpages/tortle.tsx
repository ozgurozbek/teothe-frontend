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
export default function TortleContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Tortle"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/tortle.png"}
              alt={"A humanoid with tortle-like features."}
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
                title: "The Tortle",
                text: [
                  "What many tortles consider a simple life, others might call a life of adventure. They are nomad survivalists eager to explore the wilderness.",
                  "These turtle folk live on many worlds, most often journeying up and down coasts, along waterways, and across the sea. Tortles don't have a unified story of how they were created, but they all have a sense of being mystically connected to the natural world. Carrying their shelter on their backs gives tortles a special feeling of security wherever they go, for even if they visit a far, unknown country, they have a place to lay their heads.",
                  "Tortles exhibit the same range of coloration and patterns found among turtles, and many tortles enjoy adorning their shells in distinctive ways.",
                  "A tortle hatches from a thick-shelled egg and spends the first few weeks of its life crawling on all fours. Its parents, old and near death, spend what little time they have left telling stories to their offspring. Within a year, the young tortle becomes an orphan, though not before it learns to speak and to survive on its own.",
                  "A young tortle and its siblings inherit whatever tools, weapons, and gifts their parents left behind. Each young tortle is expected to fend for itself. It leaves the place of its birth and finds its own corner of the wilderness in which to hunt, catch fish, and get by. With each passing year, a tortle hones its survival skills. It forms friendships with its neighbors while also respecting their privacy. At some point, a tortle feels an almost overwhelming urge to venture far away from home and see more of the world. It gathers up its possessions and heads into the wilderness, returning months or years later with stories of its exploits and new skills.",
                  "Tortles don't have their own pantheon of gods, but they often worship the gods of other species. It's not unusual for a tortle to hear stories or legends related to a god and choose to worship that deity. Tortles are often drawn to the Gods of Good, among the deities, Ehx, Cyaxo, Nmei and Boghradyn relate to tortles most.",
                  "Tortles believe that night and day watch over them and other creatures. The moon is the eye of night that watches over them in darkness, and the sun is the equally vigilant eye of day. Tortles feel most at peace when one or both of these 'eyes' are looking down on them. They become more nervous and uneasy when neither orb is visible in the sky. Tortles tend to be most uncomfortable underground, where neither the sun nor the moon is visible to them.",
                  "Blessed are the days when both the sun and moon are visible in the sky at the same time. Tortles often choose such days to leave their homes and begin a wilderness expedition, or perform some other task they know to be dangerous.",
                  "Tortles have a saying: 'We wear our homes on our backs.' The shells they carry around provide all the shelter they require. Consequently, tortles don't feel the need to root themselves in one place for too long. A tortle settlement is primarily used as a kind of moot, where tortles can socialize with one another, share useful information, and trade with strangers in the safety of greater numbers. Tortles don't regard these settlements as places worth defending with their lives, and they will abandon a settlement when it no longer serves their needs.",
                  "Most tortles like to see how other creatures live and discover new customs and new ways of doing things. The urge to procreate doesn't kick in until the end of a tortle's life, and a tortle can spend decades away from its native land without feeling homesick.",
                  "Tortles embrace a simple view of the world. It is a place of wonder, and tortles see beauty in the ordinary. They live for the chance to hear a soft wind blowing through palm trees, to watch a frog croaking on a lily pad, or to stand in a crowded human marketplace.",
                  "Tortles like to learn new skills. They craft their own tools and weapons, and they are good at building structures and fortifications. They marvel at the works of other civilized creatures, humans in particular, and can lose themselves for years in a city, studying its architectural wonders and learning skills they can put to use when building forts to contain their offspring.",
                  "Although they spend a considerable portion of their lives in isolation, tortles are social creatures that like to form meaningful friendships. They have no inbred animus toward people of other species. In fact, a tortle will often seek out friendships with non-tortles to learn new customs and new points of view.",
                  "Tortles prefer simple, non-gender-specific names that are usually no more than two syllables. Tortles don't have surnames or family names. If a tortle doesn't like its name for whatever reason, it can change it. A tortle might change its name a dozen times in its life. Some examples include Baka, Damu, Gar, Gura, Ini, Jappa, Kinlek, Krull, Lim, Lop, Nortle, Nulka, Olo, Ploqwat, Quee, Queg, Quott, Steram, Sunny, Tibor, Ubo, Uhok, Wabu, Xelbuk, Xopa, Yog",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Tortle in Teothe",
                level: 2,
                text: [
                  "Tortles often adapt their settlement name, or the beach's name they have hatched in as their family name.",
                  "When a tortle nears the end of its natural lifespan, or is guided by the primal call of reproduction, it seeks out the mate and procreates. Male tortles experience an overwhelming urge they are unable to resist for long. In a bittersweet resolve, a sacred and celebrated act, the male Tortle selflessly offers his life to nurture the birth of his offspring. This sacrifice is revered rather than mourned by the Tortle community.",
                  "Tortles lay their eggs (numbering as few as one or as many as a dozen) in a fortified compound enclosed by stone walls that are easily defensible. If no such compound exists, they build one. The female parent spend the remainder of their lives guarding the compound, defending their offspring, and sharing a lifetime of knowledge before they die. When the children are old enough to leave the compound, they pick up whatever weapons and tools their parents left behind and set out on their own.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
