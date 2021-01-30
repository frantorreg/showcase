import CookieNotice from 'components/CookieNotice/CookieNotice';
import Main from 'components/Main/Main';
import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {withTranslation} from 'react-i18next';
import {Route, Switch, withRouter} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';
import 'moment/locale/ca';
import './App.scss';

class App extends Component {

  componentDidMount() {
    const {i18n} = this.props;

    const setLanguage = (locale) => {
      document.documentElement.setAttribute('lang', locale);
      moment.locale(locale);
      this.setState({locale})
    }

    setLanguage(i18n.language);
    i18n.on('languageChanged', setLanguage);
  }

  render() {
    const {t, i18n, location} = this.props;

    return (
      <>
        <Helmet>
          <title>{t('app:name')}</title>
          <meta name="description" content={t('app:description')}/>
          {
            i18n.options.safeWhitelist.map(language =>
              <link key={language} rel="alternate" hrefLang={language} href={`${location.pathname}?hl=${language}`}/>
            )
          }
        </Helmet>
        <Switch>
          <Route path='/' component={Main}/>
        </Switch>
        <CookieNotice/>
      </>
    );
  }

}

export default withTranslation()(withRouter(App));
