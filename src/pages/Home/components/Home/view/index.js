import React from "react";
import DocumentTitle from "react-document-title";

import { withStyles } from "@material-ui/core/styles";

import Accessibility from "../../../images/accessibility.jpg";
import styles from "./styles";

const Home = ({ classes, isEnableDeafMode }) => {
  return (
    <DocumentTitle title="Accessibility">
      <main className={classes.container}>
        <div className={classes.imageContainer}>
          <img
            className={classes.logo}
            src={Accessibility}
            alt="Accessibility logo"
          />
        </div>
        <h1 className={classes.title}>Accessibility</h1>
        <p>
          The International Symbol of Access (ISA), also known as the
          (International) Wheelchair Symbol, consists of a blue square overlaid
          in white with a stylized image of a person in a wheelchair. It is
          maintained as an international standard, ISO 7001 image of the
          International Commission on Technology and Accessibility (ICTA), a
          committee of Rehabilitation International (RI).[1]
        </p>
        <div className={classes.video}>
          <div className={classes.videoContainer} aria-hidden="true">
            {isEnableDeafMode ? (
              <iframe
                title="Video about fighters"
                className={classes}
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ANKWlGYygRk"
                frameborder="0"
                allowfullscreen
              />
            ) : (
              <iframe
                title="Video about accessibility in Japan"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/u9gz_YDy2Sk"
                frameborder="0"
                allowfullscreen
              />
            )}
          </div>
        </div>
        <p>
          The ISA was designed by Danish design student Susanne Koefoed in 1968.
          It was first sketched at a radical design conference mounted by the
          Scandinavian Students Organization (SDO).[2] The group organized a
          summer study session at Stockholm’s art and design college, Konstfack,
          alternating time between workshop sessions and larger lectures. In
          these lectures, the tone was set by the American designer and educator
          Victor Papanek. In the writings that he formulated during this period,
          too, he imagined persons who were disabled –both physically challenged
          and mentally—as figures in need of renewed attention.[3] Although
          there is no evidence that Papanek met Koefoed, his influence pervaded
          the seminar where the original ISA was drafted. Charged with creating
          a sign-symbol to mark barrier-free accommodations, Koefoed presented
          an early version of the symbol at the July 1968 exhibition held at the
          SDO seminar’s end. Koefoed’s symbol depicts an empty wheelchair. This
          icon was widely promoted around Sweden the following year
        </p>
        <p>
          Karl Montan, director of Sweden’s new Handicapped Institute, also
          promoted Koefoed’s design to Rehabilitation International. Head of
          RI’s International Commission of Technology and Accessibility (ICTA),
          Montan was asked by RI to form a special committee that would find and
          deliver a symbol to the group’s 1969 convention in Dublin.[5] Montan’s
          group was asked to choose from six symbols. When Koefoed’s symbol was
          presented, several members complained that it was too austere and
          illegible. As Montan noted: "a slight inconvenience with the symbol is
          the equally thick lines, which may give an impression of a monogram of
          letters. With a 'head' on the symbol this inconvenience would
          disappear."[6] Taking the original copy of the design, Montan would
          add a circle to the top of the seat to give the impression of a seated
          figure.
        </p>
      </main>
    </DocumentTitle>
  );
};

Home.propTypes = {};

export default withStyles(styles)(Home);
