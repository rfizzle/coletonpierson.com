import { Prism } from "@mantine/prism";
import { MantineProvider } from "@mantine/core";
import { Language } from "prism-react-renderer";

export interface Props {
  children: string;
  className?: string;
  colorScheme?: 'dark' | 'light';
  language: Language;
}

const Code = ({children, className, colorScheme, language}: Props) => {
  return (
    <>
      <div className={className}>
        <MantineProvider withNormalizeCSS>
          <Prism colorScheme={colorScheme} language={language} noCopy={true}>{children}</Prism>
        </MantineProvider>
      </div>
    </>
  )
}

export default Code
