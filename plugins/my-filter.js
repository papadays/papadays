import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/ja'

moment.locale('ja');

Vue.filter('format-date', function (value) {
  if (!value) return ''
    return moment(value).format("YYYY/MM/DD(ddd)");
});

Vue.filter('calc-days', function (value) {
  if (!value) return ''
    return moment(value).fromNow();
});

Vue.filter('remove-html', function (value) {
  const div = document.createElement('div');
  div.innerHTML = value;
  return div.textContent || div.innerText || "";
});
