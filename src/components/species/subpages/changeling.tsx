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
export default function ChangelingContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Species,Changeling"} />
      <Card bordered={false} className="w-full">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className="pr-4">
            <Image
              src={"/Species/changeling.png"}
              alt={"A humanoid missing well defined facial features."}
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
                title: "The Changeling - Hidden Folk",
                text: [
                  "Wherever humans live, changelings reside also; the question is whether their presence is known. Changelings are a humanoid species of shapechangers who conceal their true identities behind false faces. Their gifts of mimicry allow them to appear as members of any humanoid culture, playing the part of a dwarf one day and a dragonborn the next. Although changelings can adopt any guise, most rely on a few established personas, each with a developed history and a network of friends and acquaintances. A changeling can shift its face and form with a thought as a form of artistic and emotional expression.",
                  "The first changelings in the multiverse appeared in the Feywild, and the wondrous, mutable essence of that plane lingers in changelings today—even in those changelings who have never set foot in the fey realm. Each changeling decides how to use their shape-shifting ability, channeling either the peril or the joy of the Feywild. Sometimes they adopt new forms for the sake of mischief or malice, and other times they don a new identity to right wrongs or delight the downtrodden.",
                  "Changelings are born to one of three paths. A few are raised in stable communities where changelings are true to their nature and deal openly with the people around them. Some are orphans, raised by other species, who find their way in the world without ever knowing another like themselves. Others are part of nomadic changeling clans spread across the nations, families who keep their true nature hidden from the single-skins. Some clans maintain safe havens in major cities and communities, but most prefer to wander the unpredictable path of the god known as the Traveler.",
                  "With ever-changing appearances, changelings reside in many societies undetected. Each changeling can supernaturally adopt any face they like. For some changelings, a new face is only a disguise. For other changelings, a new face may reveal an aspect of their soul. In their true form, changelings are pale, with colorless eyes and silver-white hair. It is rare to see a changeling in that form, for a typical changeling changes their shape the way others might change clothes. A casual shape—one created on the spur of the moment, with no depth or history—is called a mask. A mask can be used to express a mood or to serve a specific purpose and then might never be used again. However, many changelings develop identities that have more depth. They build an identity over time, crafting a persona with a history and beliefs. This focused identity helps a changeling pinpoint a particular skill or emotion. A changeling adventurer might have personas for many situations, including negotiation, investigation, and combat.",
                  "Personas can be shared by multiple changelings; there might be three healers in a community, but whoever is on duty will adopt the persona of Tek, the kindly old medic. Personas can even be passed down through a family, allowing a younger changeling to take advantage of contacts established by the persona's previous users.",
                  "A changeling might use a different name for each mask and persona and adopt new names as easily as they change faces. The true name of a changeling tends to be simple and monosyllabic; however, there are often accents to a changeling's name that are expressed through shapeshifting, something single-skins will likely miss. So, two changelings might have the name Jin, but one is Jin-with-vivid-blue-eyes and one is Jin-with-golden-nails.",
                  "Changelings have a fluid relationship with gender, seeing it as one characteristic to change among many.",
                  "Changeling Names Include: Red, Aunn, Bin, Cas, Dox, Fie, Hars, Jin, Lam, Mas, Nix, Ot, Paik, Ruz, Sim, Toox, Vil, Yug",
                  "Msabvu, the former Changeling do not have clarity on where it comes from. It is known that they were children protected by the Traveller. Traveller's Cloak, a gift that caused Msabvu to be shunned and feared, but never destroyed. Therefore it is fair to assume that the Msabvu were once human that have lost their faces.",
                  "Over time, Msabvu's lineage got intertwined with the doppelgangers and future Msabvu became a distant descendant of doppelgangers, sharing their shapeshifting qualities. They now walk with multiple faces that they can control the expression with, building on what the Traveller first enabled them.",
                  "Over time, they have found their home in within the feywild, transforming into the Changeling.",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Changeling History",
                level: 2,
                text: [
                  "The first changelings in the multiverse appeared in the Feywild, and the wondrous, mutable essence of that plane lingers in changelings today—even in those changelings who have never set foot in the fey realm. Each changeling decides how to use their shape-shifting ability, channeling either the peril or the joy of the Feywild. Sometimes they adopt new forms for the sake of mischief or malice, and other times they don a new identity to right wrongs or delight the downtrodden.",
                  "Changelings are born to one of three paths. A few are raised in stable communities where changelings are true to their nature and deal openly with the people around them. Some are orphans, raised by other species, who find their way in the world without ever knowing another like themselves. Others are part of nomadic changeling clans spread across the nations, families who keep their true nature hidden from the single-skins. Some clans maintain safe havens in major cities and communities, but most prefer to wander the unpredictable path of the god known as the Traveler.",
                  ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Changeling Society and Personas",
                level: 2,
                text: [
                  "With ever-changing appearances, changelings reside in many societies undetected. Each changeling can supernaturally adopt any face they like. For some changelings, a new face is only a disguise. For other changelings, a new face may reveal an aspect of their soul. In their true form, changelings are pale, with colorless eyes and silver-white hair. It is rare to see a changeling in that form, for a typical changeling changes their shape the way others might change clothes. A casual shape—one created on the spur of the moment, with no depth or history—is called a mask. A mask can be used to express a mood or to serve a specific purpose and then might never be used again. However, many changelings develop identities that have more depth. They build an identity over time, crafting a persona with a history and beliefs. This focused identity helps a changeling pinpoint a particular skill or emotion. A changeling adventurer might have personas for many situations, including negotiation, investigation, and combat.",
                  "Personas can be shared by multiple changelings; there might be three healers in a community, but whoever is on duty will adopt the persona of Tek, the kindly old medic. Personas can even be passed down through a family, allowing a younger changeling to take advantage of contacts established by the persona's previous users.",
                  "A changeling might use a different name for each mask and persona and adopt new names as easily as they change faces. The true name of a changeling tends to be simple and monosyllabic; however, there are often accents to a changeling's name that are expressed through shapeshifting, something single-skins will likely miss. So, two changelings might have the name Jin, but one is Jin-with-vivid-blue-eyes and one is Jin-with-golden-nails.",
                  "Changelings have a fluid relationship with gender, seeing it as one characteristic to change among many.",
                  "Changeling Names Include: Red, Aunn, Bin, Cas, Dox, Fie, Hars, Jin, Lam, Mas, Nix, Ot, Paik, Ruz, Sim, Toox, Vil, Yug",
                ],
              }}
            />
            <SimpleContent
              contentProps={{
                title: "Changeling in Teothe",
                level: 2,
                text: [
                  "Msabvu, the former Changeling do not have clarity on where it comes from. It is known that they were children protected by the Traveller. Traveller's Cloak, a gift that caused Msabvu to be shunned and feared, but never destroyed. Therefore it is fair to assume that the Msabvu were once human that have lost their faces.",
                  "Over time, Msabvu's lineage got intertwined with the doppelgangers and future Msabvu became a distant descendant of doppelgangers, sharing their shapeshifting qualities. They now walk with multiple faces that they can control the expression with, building on what the Traveller first enabled them.",
                  "Over time, they have found their home in within the feywild, transforming into the Changeling.",
                ],
              }}
            />
          </Col>
        </Row>
      </Card>
    </section>
  );
}
