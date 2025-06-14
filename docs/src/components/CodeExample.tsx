import CodeBlock from "@theme/CodeBlock";
import styles from "./CodeExample.module.css";

interface CodeExampleProps {
  title?: string;
  code: string;
  language?: string;
  description?: string;
  showCopy?: boolean;
}

export default function CodeExample({
  title,
  code,
  language = "typescript",
  description,
  showCopy = true,
}: CodeExampleProps) {
  return (
    <div className={styles.codeExample}>
      {title && <h4 className={styles.title}>{title}</h4>}
      {description && <p className={styles.description}>{description}</p>}
      <CodeBlock language={language} showLineNumbers>
        {code}
      </CodeBlock>
    </div>
  );
}
