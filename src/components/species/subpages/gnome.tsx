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
export default function GnomeContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Gnome"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/gnome.png"}
              alt={
                "Delightful artisan humanoid with a shorter frame and pointy features."
              }
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
                title: "The Gnome",
                text: [
                  "Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play. A gnome's energy and enthusiasm for living shines through every inch of his or her tiny body. Gnomes average slightly over 120cm tall and weigh 20kgs. Their tan or brown faces are usually adorned with broad smiles, beneath their prodigious noses, and their bright eyes shine with excitement. Their fair hair has a tendency to stick out in every direction, as if expressing the gnome's insatiable interest in everything around. As far as gnomes are concerned, being alive is a wonderful thing, and they squeeze every ounce of enjoyment out of their three to five centuries of life.",
                  "Though gnomes love jokes of all kinds, particularly puns and pranks, they're just as dedicated to the more serious tasks they undertake. Many gnomes are skilled engineers, alchemists, tinkers, and inventors. They're willing to make mistakes and laugh at themselves in the process of perfecting what they do. Gnomes speak as if they can't get the thoughts out of their heads fast enough. Even as they offer ideas and opinions on a range of subjects, they still manage to listen carefully to others, adding the appropriate exclamations of surprise and appreciation along the way.",
                  "Gnomes make their homes in hilly, wooded lands. They live underground but get more fresh air than dwarves do, enjoying the natural, living world on the surface whenever they can. Their homes are well hidden by both clever construction and simple illusions. Gnomes who settle in human lands are commonly gemcutters, engineers, sages, or tinkers. Some human families retain gnome tutors, ensuring that their pupils enjoy a mix of serious learning and delighted enjoyment. A gnome might tutor several generations of a single human family over the course of his or her long life.",
                  "Curious and impulsive, gnomes might take up adventuring as a way to see the world or for the love of exploring. As lovers of gems and other fine items, some gnomes take to adventuring as a quick, if dangerous, path to wealth. It's rare for a gnome to be hostile or malicious unless he or she has suffered a grievous injury. Gnomes know that most species don't share their sense of humor, but they enjoy anyone's company just as they enjoy everything else they set out to do.",
                  "Gnomes love names, and most have half a dozen or so. A gnome's mother, father, clan elder, aunts, and uncles each give the gnome a name, and various nicknames from just about everyone else might or might not stick over time. Gnome names are typically variants on the names of ancestors or distant relatives, though some are purely new inventions.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Gnome in Teothe",
                level: 2,
                text: [
                  "They mate with their species, and usually believe in Wugw, Gaayjx, Megm, Veri, Uke and Lcaoc depending on their personality and society.",
                  "Gnomes of Underdark excel at concealing themselves and their crafts, sometimes completely obstructing the passages to their settlements. They are perfect users of illusion magic, or Faerzress.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
