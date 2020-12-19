import React from 'react';
import TwoColumn from '../../components/TwoColumn/TwoColumn';

import PoetryArea from './PoetryArea';
import { POETRY_LINKS, POEMS } from './constants';
import './poetry.css';

export const PoetryPage = ({ match: { params: { id } }}) => {
  const poem = id && POEMS[id];

  const poems = [{ text: 'Poems', url: '/fire', color: 'white' }, ...POETRY_LINKS];

  return (
    <section style={{whiteSpace: 'pre-wrap', textAlign: 'center'}} className="page">
      <TwoColumn links={poems.map((link, index) => {
        return {
          text: link.text,
          url: `/fire/${link.id}`,
          color: `var(--blue-${Math.round(index * 50 / POETRY_LINKS.length / 5) * 5})`,
        };
      })}>
        {poem ? <div className="poetry-area">{poem}</div>
          : <PoetryArea />}

      </TwoColumn>
    </section>
  );
};

export default PoetryPage;
