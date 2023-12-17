import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.gladkov-kursovaya.caption'),
          title: i18n.t('forms.application.sitemap.gladkov-kursovaya.title'),
          children: [{
            link: 'i-i-s-gladkov-kursovaya-склады-l',
            caption: i18n.t('forms.application.sitemap.gladkov-kursovaya.i-i-s-gladkov-kursovaya-склады-l.caption'),
            title: i18n.t('forms.application.sitemap.gladkov-kursovaya.i-i-s-gladkov-kursovaya-склады-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-gladkov-kursovaya-оборудование-l',
            caption: i18n.t('forms.application.sitemap.gladkov-kursovaya.i-i-s-gladkov-kursovaya-оборудование-l.caption'),
            title: i18n.t('forms.application.sitemap.gladkov-kursovaya.i-i-s-gladkov-kursovaya-оборудование-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-gladkov-kursovaya-чертежи-l',
            caption: i18n.t('forms.application.sitemap.gladkov-kursovaya.i-i-s-gladkov-kursovaya-чертежи-l.caption'),
            title: i18n.t('forms.application.sitemap.gladkov-kursovaya.i-i-s-gladkov-kursovaya-чертежи-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-gladkov-kursovaya-клиенты-l',
            caption: i18n.t('forms.application.sitemap.gladkov-kursovaya.i-i-s-gladkov-kursovaya-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.gladkov-kursovaya.i-i-s-gladkov-kursovaya-клиенты-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-gladkov-kursovaya-материалы-l',
            caption: i18n.t('forms.application.sitemap.gladkov-kursovaya.i-i-s-gladkov-kursovaya-материалы-l.caption'),
            title: i18n.t('forms.application.sitemap.gladkov-kursovaya.i-i-s-gladkov-kursovaya-материалы-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-gladkov-kursovaya-тех-карты-l',
            caption: i18n.t('forms.application.sitemap.gladkov-kursovaya.i-i-s-gladkov-kursovaya-тех-карты-l.caption'),
            title: i18n.t('forms.application.sitemap.gladkov-kursovaya.i-i-s-gladkov-kursovaya-тех-карты-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-gladkov-kursovaya-заявки-l',
            caption: i18n.t('forms.application.sitemap.gladkov-kursovaya.i-i-s-gladkov-kursovaya-заявки-l.caption'),
            title: i18n.t('forms.application.sitemap.gladkov-kursovaya.i-i-s-gladkov-kursovaya-заявки-l.title'),
            icon: 'chart line',
            children: null
          }]
        }
      ]
    };
  }),
})