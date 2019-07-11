import Vue from 'vue'
import moment from 'moment'

Vue.filter('format-date', function (value) {
  if (!value) return ''
    return moment(value).format("YYYY/MM/DD(ddd)");
})