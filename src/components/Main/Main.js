// vendor
import React from 'react';
import {Translation, withTranslation} from 'react-i18next';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// images
import { ReactComponent as AvptpLogo } from 'images/organizations/avptp.svg';
import { ReactComponent as BrutalLogo } from 'images/organizations/brutal.svg';
import { ReactComponent as CecotecLogo } from 'images/organizations/cecotec.svg';
import { ReactComponent as DideLogo } from 'images/organizations/dide.svg';
import { ReactComponent as HabtiumLogo } from 'images/organizations/habtium.svg';
import { ReactComponent as OpenbankLogo } from 'images/organizations/openbank.svg';
import {faGithub, faTelegramPlane} from "@fortawesome/free-brands-svg-icons";

// styles
import './Main.scss';

// components
import Episode from "components/Episode/Episode";
import Skill from "components/Skill/Skill";

function Main() {

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
                <Skill level='high' name='HTML 5'/>
                <Skill level='high' name={t('skills.css')}/>
                <Skill level='high' name='JavaScript (ES6)'/>
                <Skill level='high' name='React'/>
                <Skill level='mid' name='Redux'/>
                <Skill level='mid' name='Relay'/>
                <Skill level='mid' name='Webpack'/>
                <Skill level='mid' name='Progresive Web App'/>
              </div>
              <div className='category'>
                <div className='title'>
                  <span dangerouslySetInnerHTML={{__html: t('skills.backEnd')}}/>
                </div>
                <Skill level='mid-high' name='Ruby'/>
                <Skill level='high' name='Rails'/>
                <Skill level='mid' name='NodeJS'/>
                <Skill level='high' name='MongoDB'/>
                <Skill level='high' name='SQL'/>
                <Skill level='low' name='Go'/>
              </div>
              <div className='category'>
                <div className='title'>
                  <span dangerouslySetInnerHTML={{__html: t('skills.devOps')}}/>
                </div>
                <Skill level='high' name='Git'/>
                <Skill level='mid' name='Docker'/>
                <Skill level='low' name='Kubernetes'/>
                <Skill level='mid-high' name='GNU/Linux'/>
              </div>
              <div className='category'>
                <div className='title'>{t('skills.other')}</div>
                <Skill name={t('skills.responsive')}/>
                <Skill name={t('skills.componentsArchitecture')}/>
                <Skill name={t('skills.security')}/>
                <Skill name={t('skills.apiArchitectures')}/>
                <Skill name={t('skills.websocketAndSSE')}/>
                <Skill name={t('skills.regex')}/>
              </div>
            </div>
          </section>
          <section className='experience'>
            <h2>{t('positions.experience')}</h2>
            <Episode
              title='Openbank'
              logo={<OpenbankLogo/>}
              url='https://www.openbank.es/'
              position={t("positions.frontEnd")}
              startDate={{ y: 2021, M: 11, d: 10 }}
              stack={['react', 'redux', 'microfrontends']}
            />
            <Episode
              title='Cecotec'
              logo={<CecotecLogo/>}
              url='https://www.storececotec.com/'
              position={t("positions.frontEnd")}
              startDate={{ y: 2021, M: 2, d: 22 }}
              endDate={{ y: 2021, M: 11, d: 9 }}
              achievements={t("achievements.cecotec")}
              stack={['react', 'microfrontends', 'kubernetes', 'aws']}
            />
            <Episode
              title='Dide'
              logo={<DideLogo/>}
              url='https://dide.app'
              position={t("positions.fullStack")}
              startDate={{ y: 2017, M: 5, d: 1 }}
              endDate={{ y: 2021, M: 2, d: 21 }}
              achievements={t("achievements.dide")}
              stack={['react', 'ruby on rails', 'mongodb', 'kubernetes', 'azure']}
            />
          </section>
          <section className='projects'>
            <h2>{t('positions.projects')}</h2>
            <Episode
              title='Brutal'
              logo={<BrutalLogo/>}
              url='https://brutal.systems/'
              position={t('positions.frontEnd')}
              startDate={{ y: 2022, M: 3, d: 1 }}
              endDate={null}
              achievements={t("achievements.brutal")}
              stack={['react', 'scss']}
            />
            <Episode
              title='Página web personal'
              logo={
                <img
                  style={{borderRadius: '100%'}}
                  src='https://secure.gravatar.com/avatar/5338dcd43ada152f033b638ceaada0af.jpg?d=retro&amp;s=400'
                />
              }
              url='https://frantorregrosa.me'
              contributionsUrl='https://github.com/frantorreg/showcase/commits?author=frantorreg'
              position={t('positions.frontEnd')}
              startDate={{ y: 2021, M: 0, d: 1 }}
              endDate={null}
              achievements={t('achievements.personalWeb')}
              stack={['react', 'styled components']}
            />
            <Episode
              title='Associació Valenciana pel Transport Públic'
              logo={<AvptpLogo/>}
              url='https://avptp.org'
              contributionsUrl='https://github.com/avptp/face/commits?author=frantorreg'
              position={`${t('positions.secretaryAndCoFounder')} · ${t('positions.contentCreator')} · ${t('positions.frontEnd')}`}
              startDate={{ y: 2018, M: 3, d: 1 }}
              stack={['react', 'nextjs', 'scss']}
            />
            <Episode
              title='Habtium'
              logo={<HabtiumLogo/>}
              url='https://habtium.es'
              position={t("positions.fullStack")}
              startDate={{ y: 2013, M: 9, d: 1 }}
              endDate={{ y: 2016, M: 5, d: 1 }}
              stack={['jquery', 'php', 'mariadb']}
            />
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

export default withTranslation()(Main);
