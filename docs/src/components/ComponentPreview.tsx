import CodeBlock from "@theme/CodeBlock";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import styles from "./ComponentPreview.module.css";

interface ComponentPreviewProps {
  title: string;
  description?: string;
  code: string;
  screenshot?: string;
  screenshotAlt?: string;
  usage?: string;
  imports?: string;
}

export default function ComponentPreview({
  title,
  description,
  code,
  screenshot,
  screenshotAlt,
  usage,
  imports = "import { " + title + ' } from "@joe111/neo-ui";',
}: ComponentPreviewProps) {
  return (
    <div className={styles.preview}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>

      <Tabs
        defaultValue="preview"
        values={[
          { label: "Preview", value: "preview" },
          { label: "Code", value: "code" },
          { label: "Usage", value: "usage" },
        ]}
      >
        <TabItem value="preview">
          <div className={styles.previewContainer}>
            {screenshot ? (
              <img
                src={screenshot}
                alt={screenshotAlt || `${title} component preview`}
                className={styles.screenshot}
              />
            ) : (
              <div className={styles.placeholder}>
                <p>📱 Component Preview</p>
                <small>Screenshot will be added here</small>
              </div>
            )}
          </div>
        </TabItem>

        <TabItem value="code">
          <CodeBlock language="typescript" title="Import">
            {imports}
          </CodeBlock>
          <CodeBlock language="typescript" title="Implementation">
            {code}
          </CodeBlock>
        </TabItem>

        <TabItem value="usage">
          <CodeBlock language="typescript" title="Basic Usage">
            {usage || code}
          </CodeBlock>
        </TabItem>
      </Tabs>
    </div>
  );
}
