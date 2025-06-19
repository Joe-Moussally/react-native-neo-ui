import Heading from "@theme/Heading";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Beautiful Design",
    Svg: require("@site/static/img/neo/neo-logo-blue-gradient.svg").default,
    description: (
      <>
        Neo UI provides beautifully designed React Native components with modern
        aesthetics and smooth animations out of the box.
      </>
    ),
  },
  {
    title: "Accessible by Default",
    Svg: require("@site/static/img/neo/neo-logo-blue.svg").default,
    description: (
      <>
        Built with accessibility in mind, Neo UI components ensure your app
        works for everyone with proper screen reader support and keyboard
        navigation.
      </>
    ),
  },
  {
    title: "Powered by React Native",
    Svg: require("@site/static/img/neo/neo-logo-black.svg").default,
    description: (
      <>
        Leverage the power of React Native with our cross-platform components
        that work seamlessly on both iOS and Android.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
