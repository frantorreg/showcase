import React, {Component} from 'react';
import {Translation, withTranslation} from 'react-i18next';
import { ReactComponent as CecotecLogo } from 'images/organizations/cecotec.svg';
import { ReactComponent as DideLogo } from 'images/organizations/dide.svg';
import { ReactComponent as AvptpLogo } from 'images/organizations/avptp.svg';
import { ReactComponent as HabtiumLogo } from 'images/organizations/habtium.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import moment from 'moment';
import './Main.scss';

class Main extends Component {

  render() {
    return (
      <Translation ns="main">
        {
          t =>
          <div className='main'>
            <section className='cover'>
              <div>
                <img
                  className='avatar'
                  src='https://secure.gravatar.com/avatar/5338dcd43ada152f033b638ceaada0af.jpg?d=retro&amp;s=400'
                />
                <h1>
                  {t('introduction.title')}
                </h1>
                <p className='professional'>
                  <span dangerouslySetInnerHTML={{__html: t('introduction.subtitle')}}/>
                </p>
                <p className='description'>
                  <span dangerouslySetInnerHTML={{__html: t('introduction.description')}}/>
                </p>
              </div>
            </section>
            <div className='contact'>
              <div className='wrap'>
                <div className='title'>
                  {t('contact.findMe')}
                </div>
                <div>
                  <a href='mailto:contacte@frantorregrosa.me'>contacto@frantorregrosa.me</a>
                </div>
                <div className='print-visible'>
                  <a target='_blank' href='https://frantorregrosa.me'>frantorregrosa.me</a>
                </div>
                <div className='web-visible'>
                  <a target='_blank' href='https://github.com/frantorreg'>
                    <FontAwesomeIcon icon={faGithub}/> GitHub
                  </a>
                </div>
                <div className='web-visible'>
                  <a target='_blank' href='https://t.me/frantr'>
                    <FontAwesomeIcon icon={faTelegramPlane}/> Telegram
                  </a>
                </div>
              </div>
            </div>
            <section className='skills'>
              <h2>{t('skills.title')}</h2>
              <div className='categories'>
                <div className='category'>
                  <div className='title'>
                    <span dangerouslySetInnerHTML={{__html: t('skills.frontEnd')}}/>
                  </div>
                  <div className='skill'>
                    <span>
                      HTML 5
                    </span>
                    <div className='knowledge'>
                      <div className='bar high'/>
                    </div>
                  </div>
                  <div className='skill'>
                    <span>
                      {t('skills.css')}
                    </span>
                    <div className='knowledge'>
                      <div className='bar high'/>
                    </div>
                  </div>
                  <div className='skill'>
                    <span>
                      JavaScript (ES6)
                    </span>
                    <div className='knowledge'>
                      <div className='bar high'/>
                    </div>
                  </div>
                  <div className='skill'>
                    <span>
                      React
                    </span>
                    <div className='knowledge'>
                      <div className='bar mid-high'/>
                    </div>
                  </div>
                  <div className='skill'>
                    <span>
                      Webpack
                    </span>
                    <div className='knowledge'>
                      <div className='bar mid'/>
                    </div>
                  </div>
                  <div className='skill'>
                    <span>
                      Progresive Web App
                    </span>
                    <div className='knowledge'>
                      <div className='bar mid'/>
                    </div>
                  </div>
                </div>
                <div className='category'>
                  <div className='title'>
                    <span dangerouslySetInnerHTML={{__html: t('skills.backEnd')}}/>
                  </div>
                  <div className='skill'>
                    <span>
                      Ruby
                    </span>
                    <div className='knowledge'>
                      <div className='bar mid-high'/>
                    </div>
                  </div>
                  <div className='skill'>
                    <span>
                      Rails
                    </span>
                    <div className='knowledge'>
                      <div className='bar high'/>
                    </div>
                  </div>
                  <div className='skill'>
                    <span>
                      NodeJS
                    </span>
                    <div className='knowledge'>
                      <div className='bar mid'/>
                    </div>
                  </div>
                  <div className='skill'>
                    <span>
                      MongoDB
                    </span>
                    <div className='knowledge'>
                      <div className='bar high'/>
                    </div>
                  </div>
                  <div className='skill'>
                    <span>
                      SQL
                    </span>
                    <div className='knowledge'>
                      <div className='bar high'/>
                    </div>
                  </div>
                  <div className='skill'>
                    <span>
                      Go
                    </span>
                    <div className='knowledge'>
                      <div className='bar low'/>
                    </div>
                  </div>
                </div>
                <div className='category'>
                  <div className='title'>
                    <span dangerouslySetInnerHTML={{__html: t('skills.devOps')}}/>
                  </div>
                  <div className='skill'>
                    <span>
                      Git
                    </span>
                    <div className='knowledge'>
                      <div className='bar high'/>
                    </div>
                  </div>
                  <div className='skill'>
                    <span>
                      Docker
                    </span>
                    <div className='knowledge'>
                      <div className='bar mid'/>
                    </div>
                  </div>
                  <div className='skill'>
                    <span>
                      Kubernetes
                    </span>
                    <div className='knowledge'>
                      <div className='bar low'/>
                    </div>
                  </div>
                  <div className='skill'>
                    <span>
                      GNU/Linux
                    </span>
                    <div className='knowledge'>
                      <div className='bar mid-high'/>
                    </div>
                  </div>
                </div>
                <div className='category'>
                  <div className='title'>{t('skills.other')}</div>
                  <div className='skill'>{t('skills.responsive')}</div>
                  <div className='skill'>{t('skills.componentsArchitecture')}</div>
                  <div className='skill'>{t('skills.security')}</div>
                  <div className='skill'>{t('skills.apiArchitectures')}</div>
                  <div className='skill'>{t('skills.regex')}</div>
                </div>
              </div>
            </section>
            <section className='experience'>
              <h2>{t('positions.experience')}</h2>
              <div className='cecotec'>
                <div className='logo'>
                  <CecotecLogo/>
                </div>
                <div>
                  <a className='name' target='_blank' href='https://cecotec.com'>Cecotec</a>
                  {
                    (() => {
                      const startDate = moment({ y: 2021, M: 2, d: 22 });
                      const endDate = moment();
                      return (
                        <div className='period'>
                          {startDate.format('MMMM YYYY')} — {t('positions.present')}
                          <span className='duration'>
                            {moment.duration(endDate.diff(startDate)).humanize()}
                          </span>
                        </div>
                      );
                    })()
                  }
                  <div className='description'>
                    <span dangerouslySetInnerHTML={{__html: t('positions.frontEnd')}}/>
                  </div>
                </div>
              </div>
              <div className='dide'>
                <div className='logo'>
                  <DideLogo/>
                </div>
                <div>
                  <a className='name' target='_blank' href='https://dide.app'>Dide</a>
                  {
                    (() => {
                      const startDate = moment({ y: 2017, M: 5, d: 1 });
                      const endDate = moment({ y: 2021, M: 2, d: 21 });
                      return (
                        <div className='period'>
                          {startDate.format('MMMM YYYY')} — {endDate.format('MMMM YYYY')}
                          <span className='duration'>
                            {moment.duration(endDate.diff(startDate)).humanize()}
                          </span>
                        </div>
                      );
                    })()
                  }
                  <div className='description'>
                    <span dangerouslySetInnerHTML={{__html: t('positions.fullStack')}}/>
                  </div>
                </div>
              </div>
            </section>
            <section className='projects'>
              <h2>{t('positions.projects')}</h2>
              <div className='avptp'>
                <div className='logo'>
                  <AvptpLogo/>
                </div>
                <div>
                  <a className='name' target='_blank' href='https://avptp.org'>Associació Valenciana pel Transport Públic</a>
                  {
                    (() => {
                      const startDate = moment({ y: 2018, M: 3, d: 1 });
                      const endDate = moment();
                      return (
                        <div className='period'>
                          {startDate.format('MMMM YYYY')} — {t('positions.present')}
                          <span className='duration'>
                            {moment.duration(endDate.diff(startDate)).humanize()}
                          </span>
                        </div>
                      );
                    })()
                  }
                  <div className='description'>
                    {t('positions.secretaryAndCoFounder')} · {t('positions.contentCreator')} · <span dangerouslySetInnerHTML={{__html: t('positions.frontEnd')}}/>
                  </div>
                </div>
              </div>
              <div className='habtium'>
                <div className='logo'>
                  <HabtiumLogo/>
                </div>
                <div>
                  <a className='name' target='_blank' href='https://habtium.es'>Habtium</a>
                  {
                    (() => {
                      const startDate = moment({ y: 2013, M: 9, d: 1 });
                      const endDate = moment({ y: 2016, M: 5, d: 1 });
                      return (
                        <div className='period'>
                          {startDate.format('MMMM YYYY')} — {endDate.format('MMMM YYYY')}
                          <span className='duration'>
                            {moment.duration(endDate.diff(startDate)).humanize()}
                          </span>
                        </div>
                      );
                    })()
                  }
                  <div className='description'>
                    <span dangerouslySetInnerHTML={{__html: t('positions.fullStack')}}/>
                  </div>
                </div>
              </div>
            </section>
            <section className='languages'>
              <h2>{t('languages.title')}</h2>
              <div>
                <div>
                  <strong className='name'>{t('languages.spanish')}</strong>
                  <div className='period'>{t('languages.nativeLevel')}</div>
                </div>
                <div>
                  <strong className='name'>{t('languages.valencian')}</strong>
                  <div className='period'>{t('languages.nativeLevel')} · {t('languages.B2Certificate')}</div>
                </div>
                <div>
                  <strong className='name'>{t('languages.english')}</strong>
                  <div className='period'>{t('languages.intermediateLevel')}</div>
                </div>
              </div>
            </section>
          </div>
        }
      </Translation>
    );
  }

}

export default withTranslation()(Main);
