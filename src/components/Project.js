import React from 'react';

const Project = ({ projects }) => {
  return (
    <>

      {
        projects.map((project) => {
          const { id, title, descriptions, url, images } = project;
          return (
            <div key={id} className="portafolio__item">
              <div className="container">
                <div className="portafolio__item__text">
                  <div className="portafolio__item__text__titulo">
                    <h1>{title}</h1>
                    {
                      descriptions.map((desc) => {
                        return <p className="portafolio__item__text--formato">{desc}</p>
                      })
                    }
                    <br />
                    <a href={url} target="blank">Ver Pagina Web</a>
                  </div>
                </div>
              </div>

              {
                images.map((i) => {
                  return (
                    <div className="portafolio__item__proyecto">
                      <img className="image" key={i} src={i} title="" alt="" />
                    </div>
                  )
                })
              }

            </div>
          )
        })
      }

    </>
  );
};

export default Project;
