import { TodoTemplateBlock } from './styles.css';

type CompProps = {
  children: React.ReactNode;
};

export default function TodoTemplate({ children }: CompProps) { 
  console.log(children);
  return <div className={TodoTemplateBlock}>{children}</div>;
}