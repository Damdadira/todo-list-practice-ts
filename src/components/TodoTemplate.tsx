import React from 'react';
import { TodoTemplateBlock } from './styles.css';

type CompProps = {
  children: string;
};

export default function TodoTemplate({ children }: CompProps) { 
  console.log(children);
  return <div className={TodoTemplateBlock}>{children}</div>;
}