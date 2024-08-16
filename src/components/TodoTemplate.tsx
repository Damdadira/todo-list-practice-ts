import { TodoTemplateBlock } from './styles.css';

type CompProps = {
  children: React.ReactNode
};

export default function TodoTemplate({ children }: CompProps) { 
  return <div className={TodoTemplateBlock}>{children}</div>;
}