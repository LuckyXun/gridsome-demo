/*
 * @Author: XunL
 * @Date: 2021-07-26 23:29:44
 * @LastEditTime: 2021-07-27 02:38:31
 * @Description: file content
 */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.mixin(
    {
      data(){
        return {
          GRIDSOME_API_URL:process.env.GRIDSOME_API_URL
        }
      }
    }
  )
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
