import React, { useState } from 'react';
import data from '../Data';
import Project from '../components/Project';
import Layout from '../components/layout'

const Portfolio = () => {

  const [projectItems, setProjectItems] = useState(data.filter((item) => item.category === 'Web'));

  const filterItems = (category) => {
    const newItems = data.filter((item) => item.category === category);
    setProjectItems(newItems);
  };

  return (
    <>
      <Layout>
        <section id="portfolio__section" class="portafolio">
          <h2 className="subtitle">Portafolio</h2>
          <div className="menu">
            <button className="filter-btn" type="button" onClick={() => filterItems('Web')}>Web</button>
            <button className="filter-btn" type="button" onClick={() => filterItems('Movil')}>Móvil</button>
          </div>
          <Project projects={projectItems} />
        </section>
      </Layout>
    </>
  )
}

export default Portfolio;