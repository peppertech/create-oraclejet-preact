import preactLogo from "../../assets/preact.svg";
import jetLogo from "../../assets/jetLogo.svg";
import "./style.css";

const About = () => {
  return (
    <div class="about">
      <div class="oj-flex-item oj-flex oj-flex-direction-row">
      <a href="https://preactjs.com" class="oj-flex-item">
        <img src={preactLogo} alt="Preact Logo" height="160" width="160" />
      </a>
      <a href="https://oracle.com/jet" class="oj-flex-item">
        <img src={jetLogo} alt="Oracle JET Logo" height="160" width="160" />
      </a>
      </div>
      <div class="oj-flex-item">
      <h1>
        Get Started Building with Preact and the Oracle JavaScript Extension
        Toolkit (JET)
      </h1>
      </div>
      <div class="about oj-flex-item">
      <section>
        <Resource
          title="Learn Oracle JET"
          description="Learn more about Oracle JavaScript Extension Toolkit(JET) and the oraclejet-preact offering"
          link="https://jet.oraclecorp.com/storybook/?path=/story/overview--page"
        />
        <Resource
          title="Learn Preact"
          description="If you're new to Preact, try the interactive tutorial to learn important concepts"
          link="https://preactjs.com/tutorial/"
        />
      </section>
      </div>
    </div>
  );
};

interface ResourceProps {
  title: string;
  description: string;
  link: string;
}

const Resource = (props: ResourceProps) => {
  return (
    <a href={props.link} class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
};

export default About;
